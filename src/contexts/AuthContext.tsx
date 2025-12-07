import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithPhoneNumber,
  ConfirmationResult,
  RecaptchaVerifier,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  linkWithCredential,
  PhoneAuthProvider,
  updateProfile,
  updateEmail,
} from 'firebase/auth';
import { auth } from '@/integrations/firebase/config';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithPhone: (phoneNumber: string) => Promise<ConfirmationResult>;
  verifyPhoneCode: (confirmationResult: ConfirmationResult, code: string) => Promise<void>;
  linkPhoneNumber: (phoneNumber: string) => Promise<ConfirmationResult>;
  linkPhoneVerification: (confirmationResult: ConfirmationResult, code: string) => Promise<void>;
  updateUserProfile: (data: { displayName?: string; email?: string }) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      await signInWithPopup(auth, provider);
      toast({
        title: 'Success',
        description: 'Signed in with Google successfully.',
      });
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      toast({
        title: 'Sign-in Failed',
        description: error.message || 'Failed to sign in with Google.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const signInWithPhone = async (phoneNumber: string): Promise<ConfirmationResult> => {
    try {
      // Initialize reCAPTCHA verifier if not already done
      let verifier = recaptchaVerifier;
      if (!verifier && typeof window !== 'undefined') {
        // Check if container exists, if not create it
        let container = document.getElementById('recaptcha-container');
        if (!container) {
          container = document.createElement('div');
          container.id = 'recaptcha-container';
          container.style.display = 'none';
          document.body.appendChild(container);
        }

        verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          size: 'invisible',
          callback: () => {
            // reCAPTCHA solved
          },
          'expired-callback': () => {
            toast({
              title: 'reCAPTCHA Expired',
              description: 'Please try again.',
              variant: 'destructive',
            });
          },
        });
        setRecaptchaVerifier(verifier);
      }

      if (!verifier) {
        throw new Error('reCAPTCHA not initialized');
      }

      // Phone number should already include country code from UI
      // Just ensure it starts with +
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber.replace(/^\+?/, '')}`;
      
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, verifier);
      toast({
        title: 'Verification Code Sent',
        description: 'Please check your phone for the verification code.',
      });
      return confirmationResult;
    } catch (error: any) {
      console.error('Phone sign-in error:', error);
      toast({
        title: 'Sign-in Failed',
        description: error.message || 'Failed to send verification code.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const verifyPhoneCode = async (confirmationResult: ConfirmationResult, code: string) => {
    try {
      await confirmationResult.confirm(code);
      toast({
        title: 'Success',
        description: 'Phone number verified successfully.',
      });
    } catch (error: any) {
      console.error('Code verification error:', error);
      toast({
        title: 'Verification Failed',
        description: error.message || 'Invalid verification code.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const linkPhoneNumber = async (phoneNumber: string): Promise<ConfirmationResult> => {
    if (!user) {
      throw new Error('User must be authenticated to link phone number');
    }

    try {
      // Create a new verifier for linking (don't reuse the sign-in verifier)
      let verifier: RecaptchaVerifier;
      if (typeof window !== 'undefined') {
        let container = document.getElementById('recaptcha-container-link');
        if (!container) {
          container = document.createElement('div');
          container.id = 'recaptcha-container-link';
          container.style.display = 'none';
          document.body.appendChild(container);
        }

        // Clear any existing verifier in this container
        if (container.innerHTML) {
          container.innerHTML = '';
        }

        verifier = new RecaptchaVerifier(auth, 'recaptcha-container-link', {
          size: 'invisible',
          callback: () => {},
          'expired-callback': () => {
            toast({
              title: 'reCAPTCHA Expired',
              description: 'Please try again.',
              variant: 'destructive',
            });
          },
        });
      } else {
        throw new Error('Window not available');
      }

      // Phone number should already include country code from UI
      // Just ensure it starts with +
      const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber.replace(/^\+?/, '')}`;
      
      // For linking, we need to use signInWithPhoneNumber to get the verification ID
      // but we'll link the credential instead of signing in
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, verifier);
      
      toast({
        title: 'Verification Code Sent',
        description: 'Please check your phone for the verification code.',
      });
      return confirmationResult;
    } catch (error: any) {
      console.error('Link phone error:', error);
      toast({
        title: 'Failed',
        description: error.message || 'Failed to send verification code.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const linkPhoneVerification = async (confirmationResult: ConfirmationResult, code: string) => {
    if (!user) {
      throw new Error('User must be authenticated');
    }

    try {
      // Extract verification ID from confirmation result
      // ConfirmationResult has a verificationId property (may not be in TypeScript types)
      // Access it via type assertion since it exists at runtime
      let verificationId = (confirmationResult as any).verificationId;
      
      // If verificationId is not directly accessible, try alternative access patterns
      if (!verificationId) {
        verificationId = (confirmationResult as any)._verificationId;
      }
      
      if (!verificationId) {
        throw new Error('Verification ID not found in confirmation result. Please try sending the code again.');
      }
      
      // Create credential from verification code
      const credential = PhoneAuthProvider.credential(verificationId, code);
      // Link the phone credential to the current user
      await linkWithCredential(user, credential);
      
      toast({
        title: 'Success',
        description: 'Phone number linked successfully.',
      });
    } catch (error: any) {
      // If linking fails, it might be because the phone is already linked to another account
      // or the verification ID extraction failed
      console.error('Link verification error:', error);
      
      // Check if error is about credential already in use
      if (error.code === 'auth/credential-already-in-use' || 
          error.code === 'auth/phone-number-already-exists' ||
          error.message?.includes('already-in-use') ||
          error.message?.includes('already exists')) {
        toast({
          title: 'Phone Already Linked',
          description: 'This phone number is already associated with another account.',
          variant: 'destructive',
        });
      } else if (error.code === 'auth/invalid-verification-code' || 
                 error.code === 'auth/code-expired') {
        toast({
          title: 'Verification Failed',
          description: 'Invalid or expired verification code. Please try again.',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Verification Failed',
          description: error.message || 'Failed to link phone number. Please try again.',
          variant: 'destructive',
        });
      }
      throw error;
    }
  };

  const updateUserProfile = async (data: { displayName?: string; email?: string }) => {
    if (!user) {
      throw new Error('User must be authenticated');
    }

    try {
      const updates: any = {};
      if (data.displayName) {
        await updateProfile(user, { displayName: data.displayName });
      }
      if (data.email && data.email !== user.email) {
        await updateEmail(user, data.email);
      }
      toast({
        title: 'Success',
        description: 'Profile updated successfully.',
      });
    } catch (error: any) {
      console.error('Profile update error:', error);
      toast({
        title: 'Update Failed',
        description: error.message || 'Failed to update profile.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      toast({
        title: 'Signed Out',
        description: 'You have been signed out successfully.',
      });
    } catch (error: any) {
      console.error('Sign-out error:', error);
      toast({
        title: 'Sign-out Failed',
        description: error.message || 'Failed to sign out.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle,
    signInWithPhone,
    verifyPhoneCode,
    linkPhoneNumber,
    linkPhoneVerification,
    updateUserProfile,
    signOut,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

