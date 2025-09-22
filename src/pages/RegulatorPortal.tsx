import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileCheck, GitBranch, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RegulatorPortal = () => {
  const navigate = useNavigate();
  
  const complianceData = [
    { id: "CB001", type: "Herb Batch", item: "Ashwagandha", collector: "Kerala Farm #12", status: "Compliant", score: 95, certifications: ["Organic", "Fair Trade"] },
    { id: "CB002", type: "Herb Batch", item: "Turmeric", collector: "Tamil Nadu Estate", status: "Compliant", score: 88, certifications: ["Organic"] },
    { id: "PL001", type: "Product Lot", item: "Ashwagandha Capsules", manufacturer: "Ayur Pharma Ltd", status: "Compliant", score: 92, certifications: ["GMP", "ISO"] },
    { id: "PL002", type: "Product Lot", item: "Turmeric Powder", manufacturer: "Natural Products Co", status: "Review Required", score: 76, certifications: ["GMP"] },
  ];

  const blockchainAudit = [
    {
      blockId: "0x4a7f",
      hash: "0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
      prevHash: "0x9876543210fedcba0987654321fedcba0987654321fedcba0987654321fedcba",
      timestamp: "2024-01-20 14:30:22",
      action: "Batch Collected",
      details: "Ashwagandha batch CB001 collected from Kerala Farm #12",
      validator: "System"
    },
    {
      blockId: "0x4a80",
      hash: "0xb2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567a",
      prevHash: "0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
      timestamp: "2024-01-20 16:45:11",
      action: "Batch Verified",
      details: "Batch CB001 verified by Ayur Pharma Ltd - Quality: Grade A",
      validator: "Manufacturer"
    },
    {
      blockId: "0x4a81",
      hash: "0xc3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2",
      prevHash: "0xb2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567a",
      timestamp: "2024-01-21 09:15:33",
      action: "Product Lot Created",
      details: "Product lot PL001 created from batch CB001 - Ashwagandha Capsules",
      validator: "Manufacturer"
    },
    {
      blockId: "0x4a82",
      hash: "0xd4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2c3",
      prevHash: "0xc3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2",
      timestamp: "2024-01-21 11:22:55",
      action: "QR Generated",
      details: "QR code generated for product lot PL001 - Ready for distribution",
      validator: "System"
    },
    {
      blockId: "0x4a83",
      hash: "0xe5f6789012345678901234567890abcdef1234567890abcdef1234567ab2c3d4",
      prevHash: "0xd4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2c3",
      timestamp: "2024-01-21 13:47:18",
      action: "Compliance Check",
      details: "Regulatory compliance verified for PL001 - All certifications valid",
      validator: "Regulator"
    }
  ];

  const getComplianceColor = (status: string) => {
    switch (status) {
      case "Compliant": return "bg-success text-white";
      case "Review Required": return "bg-warning text-warning-foreground";
      case "Non-Compliant": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <header className="border-b bg-card/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-sage rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Regulator Portal</h1>
              <p className="text-sm text-muted-foreground">Compliance & Audit System</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="compliance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="compliance" className="flex items-center space-x-2">
              <FileCheck className="w-4 h-4" />
              <span>Compliance Data</span>
            </TabsTrigger>
            <TabsTrigger value="audit" className="flex items-center space-x-2">
              <GitBranch className="w-4 h-4" />
              <span>Audit Trails</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="compliance">
            <Card className="herbal-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileCheck className="w-5 h-5" />
                  <span>Compliance Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead>Entity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Certifications</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {complianceData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-mono font-medium">{item.id}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.item}</TableCell>
                        <TableCell>{item.collector || item.manufacturer}</TableCell>
                        <TableCell>
                          <Badge className={getComplianceColor(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className={`font-semibold ${getScoreColor(item.score)}`}>
                            {item.score}/100
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {item.certifications.map((cert) => (
                              <Badge key={cert} variant="outline" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audit">
            <Card className="herbal-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GitBranch className="w-5 h-5" />
                  <span>Blockchain Audit Trail</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blockchainAudit.map((block, index) => (
                    <div key={block.blockId} className="relative">
                      {index < blockchainAudit.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-cyber opacity-30"></div>
                      )}
                      <Card className="blockchain-glow">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-mono">{block.blockId}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-sm">{block.action}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {block.validator}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">{block.details}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                                <div>
                                  <span className="font-medium">Hash:</span>
                                  <div className="font-mono text-muted-foreground break-all">
                                    {block.hash.substring(0, 20)}...
                                  </div>
                                </div>
                                <div>
                                  <span className="font-medium">Timestamp:</span>
                                  <div className="text-muted-foreground">{block.timestamp}</div>
                                </div>
                                <div className="md:col-span-2">
                                  <span className="font-medium">Previous Hash:</span>
                                  <div className="font-mono text-muted-foreground break-all">
                                    {block.prevHash.substring(0, 20)}...
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default RegulatorPortal;