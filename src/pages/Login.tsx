// pages/Login.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement authentication logic
    console.log("Logging in with:", email, password);
    localStorage.setItem("authToken", "dummy-token");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="glass-card p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Budget-Bee
        </h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
        </div>
        <div className="mt-6">
          <Button
            onClick={handleLogin}
            className="w-full"
            disabled={!email || !password}
          >
            Login
          </Button>
        </div>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
