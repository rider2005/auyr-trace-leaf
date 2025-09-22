import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Blocks, Hash, Clock, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlockchainExplorer = () => {
  const navigate = useNavigate();

  const blocks = [
    {
      id: "0x4a7f",
      height: 1245,
      hash: "0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
      prevHash: "0x9876543210fedcba0987654321fedcba0987654321fedcba0987654321fedcba",
      timestamp: "2024-01-20 14:30:22",
      transactions: 3,
      validator: "System Node",
      details: "Ashwagandha batch CB001 collected from Kerala Farm #12"
    },
    {
      id: "0x4a80",
      height: 1246,
      hash: "0xb2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567a",
      prevHash: "0xa1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456",
      timestamp: "2024-01-20 16:45:11",
      transactions: 2,
      validator: "Ayur Pharma Ltd",
      details: "Batch CB001 verified - Quality Grade A certified"
    },
    {
      id: "0x4a81",
      height: 1247,
      hash: "0xc3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2",
      prevHash: "0xb2c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567a",
      timestamp: "2024-01-21 09:15:33",
      transactions: 4,
      validator: "System Node",
      details: "Product lot PL001 created from verified batch CB001"
    },
    {
      id: "0x4a82",
      height: 1248,
      hash: "0xd4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2c3",
      prevHash: "0xc3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2",
      timestamp: "2024-01-21 11:22:55",
      transactions: 1,
      validator: "QR Generator",
      details: "QR code generated for Ashwagandha Capsules PL001"
    },
    {
      id: "0x4a83",
      height: 1249,
      hash: "0xe5f6789012345678901234567890abcdef1234567890abcdef1234567ab2c3d4",
      prevHash: "0xd4e5f6789012345678901234567890abcdef1234567890abcdef1234567ab2c3",
      timestamp: "2024-01-21 13:47:18",
      transactions: 2,
      validator: "Regulatory Node",
      details: "Compliance verification completed for PL001"
    },
    {
      id: "0x4a84",
      height: 1250,
      hash: "0xf6789012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5",
      prevHash: "0xe5f6789012345678901234567890abcdef1234567890abcdef1234567ab2c3d4",
      timestamp: "2024-01-21 15:12:09",
      transactions: 1,
      validator: "Distribution Hub",
      details: "Product shipped to retail partner - Tracking initiated"
    },
    {
      id: "0x4a85",
      height: 1251,
      hash: "0x789012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5f6",
      prevHash: "0xf6789012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5",
      timestamp: "2024-01-22 10:33:47",
      transactions: 3,
      validator: "System Node",
      details: "New Turmeric batch CB002 collected from Tamil Nadu Estate"
    },
    {
      id: "0x4a86",
      height: 1252,
      hash: "0x89012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5f67",
      prevHash: "0x789012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5f6",
      timestamp: "2024-01-22 14:58:21",
      transactions: 2,
      validator: "Quality Lab",
      details: "Turmeric batch CB002 quality testing in progress"
    },
    {
      id: "0x4a87",
      height: 1253,
      hash: "0x9012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5f678",
      prevHash: "0x89012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5f67",
      timestamp: "2024-01-22 17:24:13",
      transactions: 1,
      validator: "Consumer App",
      details: "QR code scanned by consumer - Traceability data accessed"
    },
    {
      id: "0x4a88",
      height: 1254,
      hash: "0xa012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5f6789",
      prevHash: "0x9012345678901234567890abcdef1234567890abcdef1234567ab2c3d4e5f678",
      timestamp: "2024-01-23 08:15:56",
      transactions: 4,
      validator: "System Node",
      details: "Daily blockchain maintenance and validation completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <header className="border-b bg-card/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-cyber rounded-full flex items-center justify-center">
              <Blocks className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Blockchain Explorer</h1>
              <p className="text-sm text-muted-foreground">Botanical Traceability Network</p>
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
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Live Blockchain Network</h2>
          <p className="text-muted-foreground">
            Real-time view of botanical traceability transactions on the distributed ledger
          </p>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{blocks.length}</div>
              <div className="text-sm text-muted-foreground">Total Blocks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyber-primary">
                {blocks.reduce((sum, block) => sum + block.transactions, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">Live</div>
              <div className="text-sm text-muted-foreground">Network Status</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {blocks.map((block, index) => (
            <div key={block.id} className="relative">
              {index < blocks.length - 1 && (
                <div className="absolute left-6 top-20 w-1 h-16 bg-gradient-cyber opacity-50 rounded-full"></div>
              )}
              <Card className="blockchain-glow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-cyber rounded-full flex items-center justify-center flex-shrink-0 status-pulse">
                      <span className="text-white text-xs font-mono font-bold">
                        #{block.height}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">Block {block.id}</h3>
                          <p className="text-sm text-muted-foreground">{block.details}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {block.transactions} TXs
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {block.validator}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Hash className="w-3 h-3" />
                            <span className="font-medium">Hash</span>
                          </div>
                          <div className="font-mono text-xs bg-muted/30 p-2 rounded break-all">
                            {block.hash.substring(0, 32)}...
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <ArrowLeft className="w-3 h-3" />
                            <span className="font-medium">Previous Hash</span>
                          </div>
                          <div className="font-mono text-xs bg-muted/30 p-2 rounded break-all">
                            {block.prevHash.substring(0, 32)}...
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span className="font-medium">Timestamp</span>
                          </div>
                          <div className="text-xs bg-muted/30 p-2 rounded">
                            {block.timestamp}
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

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Blockchain explorer showing the latest {blocks.length} blocks from the Botanical Traceability Network
          </p>
        </div>
      </main>
    </div>
  );
};

export default BlockchainExplorer;