import { LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleLogin = () => {
    // Mock Google login functionality
    // In a real app, this would integrate with Google OAuth
    console.log('Google login clicked');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="relative group">
        <Button
          variant="ghost"
          className="h-10 w-10 rounded-full p-0 bg-gradient-primary text-primary-foreground hover:bg-gradient-primary-glow hover:scale-110 transition-all duration-300 shadow-soft hover:shadow-elegant"
          onClick={handleLogout}
        >
          <User className="w-5 h-5" />
        </Button>
        <div className="absolute right-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-soft whitespace-nowrap">
            Click to logout
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <Button
        onClick={handleGoogleLogin}
        className="bg-card border border-border/40 text-foreground hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary/40 hover:scale-105 hover:shadow-elegant transition-all duration-300 px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 shadow-soft"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
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
        <span className="hidden sm:inline">Sign in</span>
        <LogIn className="w-4 h-4 sm:hidden" />
      </Button>
      <div className="absolute right-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-soft whitespace-nowrap">
          Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default LoginButton;