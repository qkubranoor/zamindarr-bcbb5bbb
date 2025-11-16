# Cashfree Payment Integration Setup

This guide explains how to set up Cashfree payments with Netlify hosting.

## Prerequisites

1. Create a Cashfree merchant account at [Cashfree Dashboard](https://merchant.cashfree.com/merchants)
2. Generate API keys (Client ID & Secret Key) from the developer section
3. Whitelist your domain in the Cashfree dashboard

## Environment Variables Setup

### 1. Netlify Environment Variables

Add these environment variables in your Netlify site settings:

```
CASHFREE_CLIENT_ID=your_client_id_here
CASHFREE_CLIENT_SECRET=your_client_secret_here
CASHFREE_ENVIRONMENT=sandbox
```

**For Production:**
- Change `CASHFREE_ENVIRONMENT` to `production`
- Use production API keys

### 2. Access Environment Variables

Go to your Netlify site dashboard:
1. Navigate to Site settings > Environment variables
2. Add the above variables
3. Deploy your site to apply changes

## Files Created

### Backend (Netlify Functions)
- `netlify/functions/create-order.js` - Creates payment orders
- `netlify/functions/verify-payment.js` - Verifies payment status

### Frontend
- `src/hooks/useCashfree.ts` - React hook for Cashfree integration
- `src/components/PaymentButton.tsx` - Reusable payment button component

## Usage Example

```tsx
import { PaymentButton } from '@/components/PaymentButton';

function MyComponent() {
  return (
    <PaymentButton
      amount={1000} // Amount in INR
      customerDetails={{
        customer_name: "John Doe",
        customer_email: "john@example.com",
        customer_phone: "9999999999"
      }}
      serviceName="Document Verification"
      onPaymentSuccess={(data) => {
        console.log('Payment successful:', data);
      }}
      onPaymentError={(error) => {
        console.log('Payment failed:', error);
      }}
    >
      Pay ₹1000
    </PaymentButton>
  );
}
```

## Testing

1. Use sandbox environment for testing
2. Test with Cashfree's test payment methods
3. Verify payments are created and verified correctly

## Going Live

1. Change `CASHFREE_ENVIRONMENT` to `production`
2. Update API keys to production keys
3. Update the mode in `useCashfree` hook to `production`
4. Ensure domain is whitelisted in Cashfree dashboard

## Security Notes

- Never expose API keys in frontend code
- Environment variables are securely stored in Netlify
- All payment processing happens through secure Netlify Functions
- Payment verification is mandatory before service delivery

## Troubleshooting

1. Check Network tab for API errors
2. Verify environment variables are set correctly
3. Ensure domain is whitelisted in Cashfree dashboard
4. Check Netlify function logs for backend errors