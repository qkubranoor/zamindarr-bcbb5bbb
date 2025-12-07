import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCashfree } from '@/hooks/useCashfree';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface PaymentButtonProps {
  amount: number;
  customerDetails: {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
  };
  serviceName: string;
  onPaymentSuccess?: (verificationData: any) => void;
  onPaymentError?: (error: string) => void;
  className?: string;
  children?: React.ReactNode;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  amount,
  customerDetails,
  serviceName,
  onPaymentSuccess,
  onPaymentError,
  className,
  children = 'Pay Now',
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  
  // Default to sandbox mode - can be configured via backend environment
  const { createOrder, openCheckout, verifyPayment, isLoading, error } = useCashfree({
    mode: 'sandbox',
  });

  const handlePayment = async () => {
    if (isLoading || isProcessing) return;

    setIsProcessing(true);

    try {
      // Create order
      const orderData = {
        order_amount: amount,
        customer_details: {
          ...customerDetails,
          order_note: `Payment for ${serviceName}`,
        },
        return_url: `${window.location.origin}?payment=success`,
        service_name: serviceName,
      };

      const orderResponse = await createOrder(orderData);

      // Open checkout
      const result = await openCheckout(orderResponse.payment_session_id, {
        redirectTarget: '_modal',
      });

      if (result.error) {
        throw new Error('Payment was cancelled or failed');
      }

      if (result.paymentDetails) {
        // Verify payment status
        const verification = await verifyPayment(orderResponse.order_id);
        
        if (verification.payment_status === 'SUCCESS') {
          toast({
            title: 'Payment Successful',
            description: `Payment of ₹${amount} completed successfully.`,
          });
          onPaymentSuccess?.(verification);
        } else {
          throw new Error('Payment verification failed');
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment failed';
      toast({
        title: 'Payment Failed',
        description: errorMessage,
        variant: 'destructive',
      });
      onPaymentError?.(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  if (error) {
    return (
      <div className="text-red-600 text-sm">
        Failed to initialize payment system. Please try again later.
      </div>
    );
  }

  return (
    <Button
      onClick={handlePayment}
      disabled={isLoading || isProcessing}
      className={className}
    >
      {(isLoading || isProcessing) && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {isProcessing ? 'Processing...' : children}
    </Button>
  );
};