import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import type { ConfirmationResult } from 'firebase/auth';

interface PhoneAuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PhoneAuthDialog: React.FC<PhoneAuthDialogProps> = ({ open, onOpenChange }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const { signInWithPhone, verifyPhoneCode } = useAuth();

  const handleSendCode = async () => {
    if (!phoneNumber.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      const result = await signInWithPhone(phoneNumber);
      setConfirmationResult(result);
      setStep('code');
    } catch (error) {
      console.error('Error sending code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode.trim() || !confirmationResult) {
      return;
    }

    setIsLoading(true);
    try {
      await verifyPhoneCode(confirmationResult, verificationCode);
      onOpenChange(false);
      // Reset form
      setPhoneNumber('');
      setVerificationCode('');
      setConfirmationResult(null);
      setStep('phone');
    } catch (error) {
      console.error('Error verifying code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form when closing
    setTimeout(() => {
      setPhoneNumber('');
      setVerificationCode('');
      setConfirmationResult(null);
      setStep('phone');
    }, 200);
  };

  return (
    <>
      <div id="recaptcha-container"></div>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign in with Phone</DialogTitle>
            <DialogDescription>
              {step === 'phone'
                ? 'Enter your phone number to receive a verification code'
                : 'Enter the verification code sent to your phone'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {step === 'phone' ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={isLoading}
                  />
                  <p className="text-xs text-muted-foreground">
                    Include country code (e.g., +91 for India)
                  </p>
                </div>
                <Button
                  onClick={handleSendCode}
                  disabled={isLoading || !phoneNumber.trim()}
                  className="w-full"
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Verification Code
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="code">Verification Code</Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="123456"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                    disabled={isLoading}
                    maxLength={6}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setStep('phone');
                      setVerificationCode('');
                    }}
                    disabled={isLoading}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleVerifyCode}
                    disabled={isLoading || !verificationCode.trim()}
                    className="flex-1"
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Verify Code
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

