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
    const { order_id } = JSON.parse(event.body);

    if (!order_id) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Order ID is required' }),
      };
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

    // Cashfree API endpoint
    const apiUrl = environment === 'production' 
      ? `https://api.cashfree.com/pg/orders/${order_id}`
      : `https://sandbox.cashfree.com/pg/orders/${order_id}`;

    // Make request to Cashfree
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': clientId,
        'x-client-secret': clientSecret,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: data.message || 'Failed to verify payment' }),
      };
    }

    // Derive a more robust payment status based on Cashfree response
    // See Cashfree docs: order_status can be CREATED, ACTIVE, PAID, EXPIRED, CANCELLED
    let paymentStatus = 'PENDING';
    if (data.order_status === 'PAID') paymentStatus = 'SUCCESS';
    if (data.order_status === 'CANCELLED' || data.order_status === 'EXPIRED') paymentStatus = 'FAILED';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        order_id: data.order_id,
        order_status: data.order_status,
        order_amount: data.order_amount,
        payment_status: paymentStatus,
        customer_details: data.customer_details,
      }),
    };
  } catch (error) {
    console.error('Error verifying payment:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};