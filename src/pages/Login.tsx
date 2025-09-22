import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Leaf, User, Factory, Shield, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const roles = [
    { id: "collector", name: "Collector/Farmer", icon: Leaf, path: "/collector", color: "bg-gradient-herbal" },
    { id: "manufacturer", name: "Manufacturer", icon: Factory, path: "/manufacturer", color: "bg-gradient-earth" },
    { id: "regulator", name: "Regulator", icon: Shield, path: "/regulator", color: "bg-gradient-sage" },
    { id: "consumer", name: "Consumer", icon: User, path: "/consumer", color: "bg-gradient-cyber" },
  ];

  const handleLogin = () => {
    if (!selectedRole) {
      toast({
        title: "Please select a role",
        description: "Choose your role to continue",
        variant: "destructive",
      });
      return;
    }

    const role = roles.find(r => r.id === selectedRole);
    if (role) {
      toast({
        title: "Login Successful",
        description: `Welcome ${role.name}!`,
      });
      navigate(role.path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg herbal-card">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-herbal rounded-full flex items-center justify-center mb-4">
            <Leaf className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Botanical Traceability</CardTitle>
          <CardDescription>Select your role to access the platform</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedRole === role.id
                    ? "border-primary bg-primary/10 shadow-botanical"
                    : "border-border hover:border-primary/50 hover:bg-secondary/50"
                }`}
              >
                <div className={`w-10 h-10 ${role.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <role.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm font-medium text-center">{role.name}</p>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter any username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter any password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
          </div>

          <Button onClick={handleLogin} className="w-full">
            Login to Platform
          </Button>

          <div className="text-center">
            <Badge variant="secondary" className="text-xs">
              Demo Mode - Any credentials accepted
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;