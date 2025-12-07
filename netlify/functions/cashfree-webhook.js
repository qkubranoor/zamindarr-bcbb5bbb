const crypto = require('crypto');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, x-webhook-signature',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const clientId = process.env.CASHFREE_CLIENT_ID;
    const clientSecret = process.env.CASHFREE_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      console.error('Cashfree credentials not configured');
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Cashfree credentials not configured' }) };
    }

    const signature = event.headers['x-webhook-signature'] || event.headers['X-Webhook-Signature'];
    const payloadString = event.body || '{}';
    
    // Verify webhook signature using the original string before parsing
    if (signature) {
      const expectedSignature = crypto
        .createHmac('sha256', clientSecret)
        .update(payloadString)
        .digest('hex');
      
      if (signature !== expectedSignature) {
        console.error('Invalid webhook signature');
        return { statusCode: 401, headers, body: JSON.stringify({ error: 'Invalid signature' }) };
      }
    }

    // Parse the payload after signature verification
    const data = JSON.parse(payloadString);
    const eventType = data.type || data.event;
    const orderData = data.data?.order || data.order || {};

    console.log('Cashfree webhook received', {
      eventType,
      orderId: orderData.order_id,
      orderStatus: orderData.order_status,
      paymentStatus: orderData.payment_status,
    });

    // Handle different webhook event types
    if (eventType === 'PAYMENT_SUCCESS' || orderData.order_status === 'PAID') {
      // Payment successful - implement your fulfillment logic here
      // e.g., update database, send confirmation email, etc.
      console.log('Payment successful for order:', orderData.order_id);
    } else if (eventType === 'PAYMENT_FAILED' || orderData.order_status === 'FAILED') {
      // Payment failed
      console.log('Payment failed for order:', orderData.order_id);
    } else if (eventType === 'PAYMENT_USER_DROPPED') {
      // User dropped payment
      console.log('Payment dropped by user for order:', orderData.order_id);
    }

    // Always return 200 to acknowledge receipt
    return { statusCode: 200, headers, body: JSON.stringify({ received: true, orderId: orderData.order_id }) };
  } catch (error) {
    console.error('Error in Cashfree webhook:', error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error' }) };
  }
};

