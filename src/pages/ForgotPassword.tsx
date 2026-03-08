import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setSent(true);
      toast.success("Password reset email sent!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>Enter your email to receive a reset link</CardDescription>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="text-center space-y-4">
              <p className="text-3xl">📧</p>
              <p className="text-sm text-muted-foreground">Check your email for a password reset link.</p>
              <Link to="/auth" className="text-primary hover:underline text-sm">Back to sign in</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
              <Link to="/auth" className="text-xs text-primary hover:underline block text-center">Back to sign in</Link>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
