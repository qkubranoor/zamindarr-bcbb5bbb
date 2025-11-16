exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { order_amount, customer_details, return_url, service_name } = JSON.parse(event.body || '{}');

    // Basic validation
    const amountNum = Number(order_amount);
    if (!Number.isFinite(amountNum) || amountNum <= 0) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid order_amount' }) };
    }
    if (!customer_details || !customer_details.customer_name || !customer_details.customer_email || !customer_details.customer_phone) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing customer_details fields' }) };
    }

    // Validate required environment variables
    const clientId = process.env.CASHFREE_CLIENT_ID;
    const clientSecret = process.env.CASHFREE_CLIENT_SECRET;
    const environment = process.env.CASHFREE_ENVIRONMENT || 'sandbox';

    if (!clientId || !clientSecret) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Cashfree credentials not configured' }),
      };
    }

    // Create order request
    const orderRequest = {
      order_amount: amountNum,
      order_currency: 'INR',
      customer_details: {
        customer_id: customer_details.customer_id || `customer_${Date.now()}`,
        customer_name: customer_details.customer_name,
        customer_email: customer_details.customer_email,
        customer_phone: customer_details.customer_phone,
      },
      order_meta: {
        return_url: return_url,
        notify_url: process.env.CASHFREE_NOTIFY_URL || '',
      },
      order_note: customer_details.order_note || service_name || '',
    };

    // Cashfree API endpoint
    const apiUrl = environment === 'production' 
      ? 'https://api.cashfree.com/pg/orders'
      : 'https://sandbox.cashfree.com/pg/orders';

    // Make request to Cashfree
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': clientId,
        'x-client-secret': clientSecret,
        // Provide an idempotency key to prevent duplicate orders on retries
        'x-idempotency-key': context.awsRequestId || `${Date.now()}_${Math.random().toString(36).slice(2)}`,
      },
      body: JSON.stringify(orderRequest),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: data.message || 'Failed to create order' }),
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        order_id: data.order_id,
        payment_session_id: data.payment_session_id,
        order_status: data.order_status,
      }),
    };
  } catch (error) {
    console.error('Error creating order:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};