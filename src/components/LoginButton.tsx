import { LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { AuthDialog } from "./AuthDialog";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const LoginButton = () => {
  const { user, loading, signOut, isAuthenticated } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <Button
        variant="ghost"
        className="h-10 w-10 rounded-full p-0"
        disabled
      >
        <Loader2 className="w-5 h-5 animate-spin" />
      </Button>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="relative group">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-10 w-10 rounded-full p-0 bg-gradient-primary text-primary-foreground hover:bg-gradient-primary-glow hover:scale-110 transition-all duration-300 shadow-soft hover:shadow-elegant"
            >
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="px-2 py-1.5">
              <p className="text-sm font-medium">{user.displayName || 'User'}</p>
              <p className="text-xs text-muted-foreground truncate">
                {user.email || user.phoneNumber}
              </p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogIn className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="absolute right-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-soft whitespace-nowrap">
            {user.displayName || 'User Account'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative group">
        <Button
          onClick={() => setAuthDialogOpen(true)}
          className="bg-card border border-border/40 text-foreground hover:bg-gradient-primary hover:text-primary-foreground hover:border-primary/40 hover:scale-105 hover:shadow-elegant transition-all duration-300 px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 shadow-soft"
        >
          <LogIn className="w-4 h-4" />
          <span className="hidden sm:inline">Sign in</span>
        </Button>
        <div className="absolute right-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-soft whitespace-nowrap">
            Sign in options
          </div>
        </div>
      </div>
      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </>
  );
};

export default LoginButton;