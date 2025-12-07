exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
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
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Cashfree credentials not configured' }) };
    }

    // Cashfree webhook events include a signature header (x-webhook-signature). In production, verify using secret.
    // For now, log and accept for processing to avoid failures.
    const signature = event.headers['x-webhook-signature'] || event.headers['X-Webhook-Signature'];
    const payload = JSON.parse(event.body || '{}');

    // TODO: Implement HMAC verification if Cashfree provides a webhook secret distinct from client secret.
    // Accept and return 200 to acknowledge receipt.

    console.log('Cashfree webhook received', { signaturePresent: Boolean(signature), event: payload?.type, order_id: payload?.data?.order?.order_id });

    // You can add order fulfillment logic here, e.g., store to DB or trigger emails.

    return { statusCode: 200, headers, body: JSON.stringify({ received: true }) };
  } catch (error) {
    console.error('Error in Cashfree webhook:', error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error' }) };
  }
};

