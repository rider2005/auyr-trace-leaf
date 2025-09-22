import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Scan, MapPin, Calendar, Award, Leaf, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ConsumerPortal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [scannedProduct, setScannedProduct] = useState<any>(null);
  const [showScanner, setShowScanner] = useState(false);

  const sampleProduct = {
    id: "PL001",
    name: "Ashwagandha Capsules",
    manufacturer: "Ayur Pharma Ltd",
    sustainabilityScore: 92,
    certifications: ["Organic", "Fair Trade", "GMP", "ISO"],
    journey: [
      {
        stage: "Collection",
        location: "Kerala Farm #12",
        date: "2024-01-15",
        details: "Organic Ashwagandha roots harvested by certified collectors",
        coordinates: "9.9312° N, 76.2673° E",
        batchId: "CB001"
      },
      {
        stage: "Verification",
        location: "Quality Control Lab",
        date: "2024-01-18",
        details: "Batch verified for purity and quality - Grade A certification",
        batchId: "CB001"
      },
      {
        stage: "Processing",
        location: "Ayur Pharma Ltd",
        date: "2024-01-20",
        details: "Traditional processing methods used to create capsules",
        lotId: "PL001"
      },
      {
        stage: "Packaging",
        location: "Distribution Center",
        date: "2024-01-22",
        details: "Final packaging and QR code generation completed",
        lotId: "PL001"
      }
    ]
  };

  const handleScanQR = () => {
    setShowScanner(true);
    
    // Simulate QR scan after 2 seconds
    setTimeout(() => {
      setScannedProduct(sampleProduct);
      setShowScanner(false);
      toast({
        title: "QR Code Scanned Successfully",
        description: "Product traceability information loaded",
      });
    }, 2000);
  };

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case "Collection": return Leaf;
      case "Verification": return Award;
      case "Processing": return QrCode;
      case "Packaging": return QrCode;
      default: return QrCode;
    }
  };

  const getSustainabilityColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <header className="border-b bg-card/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-cyber rounded-full flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Consumer Portal</h1>
              <p className="text-sm text-muted-foreground">Product Traceability & Verification</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!scannedProduct ? (
          <div className="max-w-md mx-auto">
            <Card className="herbal-card text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Scan className="w-6 h-6" />
                  <span>Scan Product QR Code</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {showScanner ? (
                  <div className="qr-scanner bg-black/10 w-64 h-64 mx-auto rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Scan className="w-12 h-12 mx-auto mb-2 text-cyber-glow animate-pulse" />
                      <p className="text-sm text-muted-foreground">Scanning QR Code...</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-64 h-64 mx-auto bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center">
                      <QrCode className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Position QR code within frame</p>
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleScanQR} 
                  disabled={showScanner}
                  className="w-full cyber-button"
                >
                  {showScanner ? "Scanning..." : "Start QR Scan"}
                </Button>
                
                <div className="text-xs text-muted-foreground">
                  Demo Mode: Click "Start QR Scan" to see sample product data
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            <Card className="herbal-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{scannedProduct.name}</CardTitle>
                    <p className="text-muted-foreground">by {scannedProduct.manufacturer}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setScannedProduct(null)}
                    className="flex items-center space-x-2"
                  >
                    <Scan className="w-4 h-4" />
                    <span>Scan Another</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Sustainability Score</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Overall Rating</span>
                        <span className={`font-bold text-lg ${getSustainabilityColor(scannedProduct.sustainabilityScore)}`}>
                          {scannedProduct.sustainabilityScore}/100
                        </span>
                      </div>
                      <Progress value={scannedProduct.sustainabilityScore} className="h-2" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {scannedProduct.certifications.map((cert: string) => (
                        <Badge key={cert} variant="secondary" className="flex items-center space-x-1">
                          <Award className="w-3 h-3" />
                          <span>{cert}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="herbal-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Product Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {scannedProduct.journey.map((step: any, index: number) => {
                    const Icon = getStageIcon(step.stage);
                    return (
                      <div key={index} className="relative">
                        {index < scannedProduct.journey.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-herbal opacity-30"></div>
                        )}
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-herbal rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{step.stage}</h3>
                              <Badge variant="outline" className="text-xs">
                                {step.batchId || step.lotId}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{step.details}</p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{step.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{step.date}</span>
                              </div>
                              {step.coordinates && (
                                <div className="flex items-center space-x-1">
                                  <span>{step.coordinates}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default ConsumerPortal;