import React, { useState, useEffect } from 'react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { auth } from '@/integrations/firebase/config';
import { Loader2, Phone, Mail, User } from 'lucide-react';
import type { ConfirmationResult } from 'firebase/auth';

// Common country codes list (sorted alphabetically, India first for default)
const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+212', country: 'Morocco', flag: '🇲🇦' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+233', country: 'Ghana', flag: '🇬🇭' },
  { code: '+256', country: 'Uganda', flag: '🇺🇬' },
  { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
  { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
  { code: '+260', country: 'Zambia', flag: '🇿🇲' },
  { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' },
  { code: '+264', country: 'Namibia', flag: '🇳🇦' },
  { code: '+267', country: 'Botswana', flag: '🇧🇼' },
  { code: '+268', country: 'Eswatini', flag: '🇸🇿' },
  { code: '+269', country: 'Comoros', flag: '🇰🇲' },
  { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
  { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
  { code: '+960', country: 'Maldives', flag: '🇲🇻' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+972', country: 'Israel', flag: '🇮🇱' },
].sort((a, b) => {
  // Keep India first, then sort others alphabetically
  if (a.code === '+91') return -1;
  if (b.code === '+91') return 1;
  return a.country.localeCompare(b.country);
});

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess?: () => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ open, onOpenChange, onAuthSuccess }) => {
  const [authMethod, setAuthMethod] = useState<'select' | 'google' | 'phone' | 'profile' | 'code'>('select');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Default to India
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Profile fields for new users
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default to India
  });

  const { signInWithGoogle, signInWithPhone, verifyPhoneCode, linkPhoneNumber, linkPhoneVerification, updateUserProfile, user } = useAuth();
  
  // Update profile data when user changes
  React.useEffect(() => {
    if (user && authMethod === 'profile') {
      setProfileData(prev => ({
        fullName: user.displayName || prev.fullName,
        email: user.email || prev.email,
        phone: user.phoneNumber || prev.phone,
        countryCode: prev.countryCode || '+91',
      }));
    }
  }, [user, authMethod]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      // Check user state after a brief delay to allow state update
      setTimeout(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          // Check if profile needs completion
          const needsProfile = !currentUser.displayName || !currentUser.phoneNumber;
          if (needsProfile) {
            setProfileData({
              fullName: currentUser.displayName || '',
              email: currentUser.email || '',
              phone: currentUser.phoneNumber || '',
              countryCode: '+91',
            });
            setAuthMethod('profile');
          } else {
            onAuthSuccess?.();
            onOpenChange(false);
          }
        }
      }, 300);
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendCode = async () => {
    if (!phoneNumber.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      // Format phone number with country code
      const formattedPhone = phoneNumber.startsWith('+') 
        ? phoneNumber 
        : `${countryCode}${phoneNumber.replace(/\D/g, '')}`;
      
      // Check if user is already signed in (for linking)
      if (user) {
        const result = await linkPhoneNumber(formattedPhone);
        setConfirmationResult(result);
      } else {
        const result = await signInWithPhone(formattedPhone);
        setConfirmationResult(result);
      }
      setProfileData(prev => ({ ...prev, phone: phoneNumber, countryCode }));
      setAuthMethod('code');
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
      // Check if we're linking or signing in
      if (user) {
        await linkPhoneVerification(confirmationResult, verificationCode);
        // After linking, check if profile needs completion
        setTimeout(() => {
          const currentUser = auth.currentUser;
          if (currentUser && !currentUser.displayName) {
            setProfileData(prev => ({
              ...prev,
              phone: currentUser.phoneNumber || prev.phone,
              countryCode: prev.countryCode || '+91',
            }));
            setAuthMethod('profile');
          } else {
            onAuthSuccess?.();
            onOpenChange(false);
          }
        }, 300);
      } else {
        await verifyPhoneCode(confirmationResult, verificationCode);
        // After phone sign-in, check if profile needs completion
        setTimeout(() => {
          const currentUser = auth.currentUser;
          if (currentUser && !currentUser.displayName) {
            setProfileData(prev => ({
              ...prev,
              phone: currentUser.phoneNumber || prev.phone,
              countryCode: prev.countryCode || '+91',
            }));
            setAuthMethod('profile');
          } else {
            onAuthSuccess?.();
            onOpenChange(false);
          }
        }, 300);
      }
    } catch (error) {
      console.error('Error verifying code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileSubmit = async () => {
    if (!profileData.fullName.trim()) {
      return;
    }

    // Phone is mandatory - must be verified
    if (!user?.phoneNumber && !profileData.phone.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      // Update user profile in Firebase
      await updateUserProfile({
        displayName: profileData.fullName,
        email: profileData.email || undefined,
      });
      
      onAuthSuccess?.();
      onOpenChange(false);
      // Reset form
      setProfileData({ fullName: '', email: '', phone: '', countryCode: '+91' });
      setAuthMethod('select');
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form when closing
    setTimeout(() => {
      setPhoneNumber('');
      setCountryCode('+91');
      setVerificationCode('');
      setConfirmationResult(null);
      setAuthMethod('select');
      setProfileData({ fullName: '', email: '', phone: '', countryCode: '+91' });
    }, 200);
  };

  return (
    <>
      <div id="recaptcha-container"></div>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {authMethod === 'select' && 'Sign in to continue'}
              {authMethod === 'code' && 'Verify Phone Number'}
              {authMethod === 'profile' && 'Complete Your Profile'}
            </DialogTitle>
            <DialogDescription>
              {authMethod === 'select' && 'Choose your preferred sign-in method'}
              {authMethod === 'code' && 'Enter the verification code sent to your phone'}
              {authMethod === 'profile' && 'Please provide your details to continue'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {authMethod === 'select' && (
              <>
                <Button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full"
                  variant="outline"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  )}
                  Continue with Google
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone-main">Phone Number *</Label>
                  <div className="flex gap-2">
                    <Select value={countryCode} onValueChange={setCountryCode} disabled={isLoading}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue>
                          <span className="flex items-center gap-1">
                            <span>{countryCodes.find(c => c.code === countryCode)?.flag}</span>
                            <span>{countryCode}</span>
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {countryCodes.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            <span className="flex items-center gap-2">
                              <span>{country.flag}</span>
                              <span className="font-medium">{country.code}</span>
                              <span className="text-muted-foreground text-xs">{country.country}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone-main"
                        type="tel"
                        placeholder="9876543210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        disabled={isLoading}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleSendCode}
                    disabled={isLoading || !phoneNumber.trim()}
                    className="w-full"
                  >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Verification Code
                  </Button>
                </div>
              </>
            )}


            {authMethod === 'code' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="code">Verification Code *</Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="123456"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                    disabled={isLoading}
                    maxLength={6}
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the 6-digit code sent to {phoneNumber}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setAuthMethod('select');
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

            {authMethod === 'profile' && (
              <>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={profileData.fullName}
                        onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                        disabled={isLoading}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email {user?.email ? '(Optional)' : '(Optional)'}</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={profileData.email}
                        onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                        disabled={isLoading || !!user?.email}
                        className="pl-9"
                      />
                    </div>
                    {user?.email && (
                      <p className="text-xs text-muted-foreground">
                        Current: {user.email}
                      </p>
                    )}
                  </div>

                  {!user?.phoneNumber && (
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="flex gap-2">
                        <Select 
                          value={profileData.countryCode} 
                          onValueChange={(value) => setProfileData(prev => ({ ...prev, countryCode: value }))} 
                          disabled={isLoading}
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue>
                              <span className="flex items-center gap-1">
                                <span>{countryCodes.find(c => c.code === profileData.countryCode)?.flag}</span>
                                <span>{profileData.countryCode}</span>
                              </span>
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {countryCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span className="font-medium">{country.code}</span>
                                  <span className="text-muted-foreground text-xs">{country.country}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <div className="relative flex-1">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="9876543210"
                            value={profileData.phone}
                            onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '') }))}
                            disabled={isLoading}
                            className="pl-9"
                          />
                        </div>
                      </div>
                      {user && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={async () => {
                            if (!profileData.phone.trim()) return;
                            setIsLoading(true);
                            try {
                              // Format phone with country code
                              const formattedPhone = profileData.phone.startsWith('+')
                                ? profileData.phone
                                : `${profileData.countryCode}${profileData.phone.replace(/\D/g, '')}`;
                              const result = await linkPhoneNumber(formattedPhone);
                              setConfirmationResult(result);
                              setAuthMethod('code');
                            } catch (error) {
                              console.error('Error linking phone:', error);
                            } finally {
                              setIsLoading(false);
                            }
                          }}
                          disabled={isLoading || !profileData.phone.trim()}
                          className="w-full"
                        >
                          Verify Phone Number
                        </Button>
                      )}
                    </div>
                  )}
                  
                  {user?.phoneNumber && (
                    <div className="space-y-2">
                      <Label>Phone Number</Label>
                      <p className="text-sm text-muted-foreground">
                        Verified: {user.phoneNumber}
                      </p>
                    </div>
                  )}
                </div>
                
                <Button
                  onClick={handleProfileSubmit}
                  disabled={isLoading || !profileData.fullName.trim() || (!user?.phoneNumber && !profileData.phone.trim())}
                  className="w-full"
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Complete Profile
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

