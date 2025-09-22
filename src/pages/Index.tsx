import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, FileCheck, QrCode, Users, Factory, Search, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import herbsPattern from "@/assets/herbs-pattern.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Authenticity & Provenance",
      description: "Verify the origin and authenticity of every herb through immutable blockchain records",
      gradient: "bg-gradient-herbal"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Track sustainable farming practices and environmental impact across the supply chain",
      gradient: "bg-gradient-sage"
    },
    {
      icon: FileCheck,
      title: "Compliance-ready Audit Trails",
      description: "Complete regulatory compliance with automated audit trails and documentation",
      gradient: "bg-gradient-earth"
    },
    {
      icon: QrCode,
      title: "QR-based Consumer Trust",
      description: "Instant access to product journey and verification through QR code scanning",
      gradient: "bg-gradient-cyber"
    }
  ];

  const portals = [
    {
      id: "collector",
      name: "Collector Portal",
      description: "For farmers and herb collectors",
      icon: Leaf,
      path: "/collector",
      color: "bg-gradient-herbal"
    },
    {
      id: "manufacturer",
      name: "Manufacturer Portal", 
      description: "For processing and production",
      icon: Factory,
      path: "/manufacturer",
      color: "bg-gradient-earth"
    },
    {
      id: "regulator",
      name: "Regulator Portal",
      description: "For compliance and auditing",
      icon: Shield,
      path: "/regulator",
      color: "bg-gradient-sage"
    },
    {
      id: "consumer",
      name: "Consumer Portal",
      description: "For product verification",
      icon: Users,
      path: "/consumer",
      color: "bg-gradient-cyber"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-herbal rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Botanical Traceability</h1>
                <p className="text-xs text-muted-foreground">Blockchain Platform</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#portals" className="text-sm hover:text-primary transition-colors">Portals</a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate("/explorer")}
                className="flex items-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>Explorer</span>
              </Button>
              <Button 
                size="sm"
                onClick={() => navigate("/login")}
                className="flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Button>
            </nav>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1">
            🌿 Powered by Blockchain Technology
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Blockchain-Based<br />
            <span className="bg-gradient-herbal bg-clip-text text-transparent">
              Botanical Traceability
            </span><br />
            for Ayurvedic Herbs
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ensuring Authenticity, Sustainability, and Trust in Ayurveda
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              onClick={() => navigate("/consumer")}
              className="cyber-button text-lg px-8 py-6 h-auto"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Trace Product
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/login")}
              className="text-lg px-8 py-6 h-auto"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Access Platform
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revolutionary blockchain technology meets traditional Ayurveda for complete supply chain transparency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="herbal-card text-center group cursor-pointer"
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section id="portals" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Access Your Portal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different stakeholders, different needs. Choose your role to access tailored functionality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portals.map((portal) => (
              <Card 
                key={portal.id}
                className="herbal-card text-center group cursor-pointer hover:shadow-botanical transition-all duration-300"
                onClick={() => navigate("/login")}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${portal.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                    <portal.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{portal.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{portal.description}</p>
                  <Button variant="outline" className="w-full">
                    Access Portal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1,247</div>
              <div className="text-muted-foreground">Blockchain Blocks</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">156</div>
              <div className="text-muted-foreground">Verified Batches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">89</div>
              <div className="text-muted-foreground">Product Lots</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-primary mb-2">2,341</div>
              <div className="text-muted-foreground">QR Scans</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explorer CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div 
            className="relative rounded-2xl p-12 bg-cover bg-center"
            style={{ backgroundImage: `url(${herbsPattern})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 rounded-2xl"></div>
            <div className="relative z-10 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore the Blockchain
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Dive deep into our blockchain explorer to see real-time transactions, blocks, and the complete audit trail of botanical products
              </p>
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => navigate("/explorer")}
                className="text-lg px-8 py-6 h-auto"
              >
                <Search className="w-5 h-5 mr-2" />
                Open Blockchain Explorer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-herbal rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">Botanical Traceability</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ensuring authenticity and trust in Ayurvedic herbs through blockchain technology
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Botanical Traceability Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;