import { useState } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Lock, Eye, EyeOff, ArrowLeft, HelpCircle, Settings, Key } from "lucide-react";
import { Link } from "wouter";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAdmin();
  const [, setLocation] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = await login(password);
    
    if (success) {
      setLocation("/admin/dashboard");
    } else {
      setError("Invalid password. Please try again.");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E97451]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </Button>
        </Link>
        
        <Card className="backdrop-blur-xl bg-card/80 border-white/10">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#E97451] to-[#A855F7] flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
            <CardDescription>
              Enter your admin password to access the dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10 h-12 bg-background/50"
                  data-testid="input-admin-password"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-toggle-password"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {error && (
                <p className="text-sm text-red-500 text-center" data-testid="text-login-error">
                  {error}
                </p>
              )}
              
              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold"
                style={{ backgroundColor: '#E97451', borderColor: '#E97451' }}
                disabled={isLoading || !password}
                data-testid="button-admin-login"
              >
                {isLoading ? "Verifying..." : "Access Dashboard"}
              </Button>
            </form>
            
            <div className="flex justify-center mt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <button 
                    type="button"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    data-testid="button-forgot-password"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    Forgot password?
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-xl border-white/10">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Key className="w-5 h-5 text-[#E97451]" />
                      Reset Admin Password
                    </DialogTitle>
                    <DialogDescription>
                      Follow these steps to reset your admin password
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#E97451]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#E97451]">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Open Replit Tools</p>
                        <p className="text-sm text-muted-foreground">
                          Click on the "Tools" tab in the left sidebar of your Replit workspace
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#E97451]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#E97451]">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Go to Secrets</p>
                        <p className="text-sm text-muted-foreground">
                          Find and click on "Secrets" to open the secrets manager
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#E97451]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#E97451]">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Update ADMIN_PASSWORD</p>
                        <p className="text-sm text-muted-foreground">
                          Find the <code className="px-1.5 py-0.5 bg-background rounded text-[#E97451]">ADMIN_PASSWORD</code> secret and update its value to your new password
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#A855F7]/20 flex items-center justify-center flex-shrink-0">
                        <Settings className="w-4 h-4 text-[#A855F7]" />
                      </div>
                      <div>
                        <p className="font-medium">Restart the App</p>
                        <p className="text-sm text-muted-foreground">
                          The app may need to restart for changes to take effect. You can then use your new password to log in.
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-[#E97451]/10 border border-[#E97451]/20 mt-4">
                      <p className="text-sm text-[#E97451]">
                        <strong>Tip:</strong> Only workspace owners and collaborators can access Replit Secrets.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              This is a protected area. Unauthorized access is prohibited.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
