import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  const [orderId, setOrderId] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();
  
  // Get mode from environment or default to sandbox
  const cashfreeMode = (import.meta.env.VITE_CASHFREE_MODE || 'sandbox') as 'sandbox' | 'production';
  const { createOrder, openCheckout, verifyPayment, isLoading, error } = useCashfree({
    mode: cashfreeMode,
  });

  // Handle payment verification after redirect
  // Use a ref to track if verification has been attempted to avoid duplicate calls
  const verificationAttemptedRef = React.useRef<string | null>(null);
  
  const handlePaymentVerification = useCallback(async (orderIdToVerify: string) => {
    try {
      const verification = await verifyPayment(orderIdToVerify);
      
      if (verification.payment_status === 'SUCCESS') {
        toast({
          title: 'Payment Successful',
          description: `Payment of ₹${amount} completed successfully.`,
        });
        onPaymentSuccess?.(verification);
      } else {
        throw new Error('Payment verification failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment verification failed';
      toast({
        title: 'Payment Verification Failed',
        description: errorMessage,
        variant: 'destructive',
      });
      onPaymentError?.(errorMessage);
    }
  }, [verifyPayment, amount, toast, onPaymentSuccess, onPaymentError]);
  
  useEffect(() => {
    const paymentStatus = searchParams.get('payment');
    const orderIdParam = searchParams.get('order_id');
    
    // Verify payment if URL params indicate success and we haven't verified this order yet
    if (paymentStatus === 'success' && orderIdParam && verificationAttemptedRef.current !== orderIdParam) {
      verificationAttemptedRef.current = orderIdParam;
      handlePaymentVerification(orderIdParam);
      // Clean up URL
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams, handlePaymentVerification]);


  const handlePayment = async () => {
    if (isLoading || isProcessing) return;

    setIsProcessing(true);

    try {
      // Create order
      // Build return URL properly handling existing query parameters
      // We'll build the base URL and Cashfree will append the order_id
      const currentUrl = new URL(window.location.href);
      // Clear existing query params and set up for payment return
      currentUrl.search = '';
      currentUrl.searchParams.set('payment', 'success');
      // Cashfree will append &order_id=<order_id> to this URL
      const baseReturnUrl = currentUrl.toString();
      
      const orderData = {
        order_amount: amount,
        customer_details: {
          ...customerDetails,
          order_note: `Payment for ${serviceName}`,
        },
        return_url: baseReturnUrl,
        service_name: serviceName,
      };

      const orderResponse = await createOrder(orderData);
      setOrderId(orderResponse.order_id);

      // Open checkout - use _self for redirect or _modal for popup
      const redirectTarget = import.meta.env.VITE_CASHFREE_REDIRECT_TARGET || '_self';
      
      try {
        const result = await openCheckout(orderResponse.payment_session_id, {
          redirectTarget: redirectTarget as '_self' | '_blank' | '_modal',
        });

        // If using modal, handle the result directly
        if (redirectTarget === '_modal' && result) {
          if (result.error) {
            throw new Error(result.error.message || 'Payment was cancelled or failed');
          }

          // For modal, verify immediately if paymentDetails exist
          if (result.paymentDetails || result.orderId) {
            await handlePaymentVerification(orderResponse.order_id);
          }
        }
        // For _self redirect, verification happens in useEffect after redirect
      } catch (checkoutError: any) {
        // If user cancels, don't show error
        if (checkoutError?.message?.includes('cancelled') || checkoutError?.code === 'USER_CANCELLED') {
          toast({
            title: 'Payment Cancelled',
            description: 'Payment was cancelled by user.',
          });
        } else {
          throw checkoutError;
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
      setOrderId(null);
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