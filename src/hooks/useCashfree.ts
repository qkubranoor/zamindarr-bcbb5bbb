import { useCallback, useEffect, useState } from 'react';
import { load } from '@cashfreepayments/cashfree-js';

interface CashfreeConfig {
  mode: 'sandbox' | 'production';
}

interface CreateOrderRequest {
  order_amount: number;
  customer_details: {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    customer_id?: string;
    order_note?: string;
  };
  return_url: string;
}

interface OrderResponse {
  order_id: string;
  payment_session_id: string;
  order_status: string;
}

interface PaymentVerification {
  order_id: string;
  order_status: string;
  order_amount: number;
  payment_status: string;
  customer_details: any;
}

export const useCashfree = (config: CashfreeConfig) => {
  const [cashfree, setCashfree] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeCashfree = async () => {
      try {
        const cf = await load({
          mode: config.mode,
        });
        setCashfree(cf);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to initialize Cashfree SDK');
        setIsLoading(false);
      }
    };

    initializeCashfree();
  }, [config.mode]);

  const createOrder = useCallback(async (orderData: CreateOrderRequest): Promise<OrderResponse> => {
    try {
      const response = await fetch('/.netlify/functions/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create order');
      }

      return await response.json();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to create order');
    }
  }, []);

  const openCheckout = useCallback(async (paymentSessionId: string, options?: {
    redirectTarget?: '_self' | '_blank' | '_modal' | HTMLElement;
    appearance?: {
      width?: string;
      height?: string;
    };
  }) => {
    if (!cashfree) {
      throw new Error('Cashfree SDK not initialized');
    }

    const checkoutOptions = {
      paymentSessionId,
      redirectTarget: options?.redirectTarget || '_self',
      ...(options?.appearance && { appearance: options.appearance }),
    };

    return await cashfree.checkout(checkoutOptions);
  }, [cashfree]);

  const verifyPayment = useCallback(async (orderId: string): Promise<PaymentVerification> => {
    try {
      const response = await fetch('/.netlify/functions/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order_id: orderId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to verify payment');
      }

      return await response.json();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to verify payment');
    }
  }, []);

  return {
    cashfree,
    isLoading,
    error,
    createOrder,
    openCheckout,
    verifyPayment,
  };
};