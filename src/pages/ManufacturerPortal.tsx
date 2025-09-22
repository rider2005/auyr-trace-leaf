import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Factory, Package, QrCode, CheckCircle, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

const ManufacturerPortal = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [incomingBatches, setIncomingBatches] = useState([
    { id: "CB001", herb: "Ashwagandha", quantity: "50 kg", collector: "Kerala Farm #12", date: "2024-01-15", status: "Pending Verification" },
    { id: "CB002", herb: "Turmeric", quantity: "75 kg", collector: "Tamil Nadu Estate", date: "2024-01-14", status: "Pending Verification" },
    { id: "CB005", herb: "Neem", quantity: "40 kg", collector: "Organic Valley", date: "2024-01-16", status: "Pending Verification" },
  ]);

  const [productLots, setProductLots] = useState([
    { id: "PL001", name: "Ashwagandha Capsules", ingredients: "Ashwagandha Root Extract", batchLinked: "CB001", processDate: "2024-01-20", qrGenerated: true },
    { id: "PL002", name: "Turmeric Powder", ingredients: "Organic Turmeric", batchLinked: "CB002", processDate: "2024-01-19", qrGenerated: true },
  ]);

  const [newLot, setNewLot] = useState({
    name: "",
    ingredients: "",
    batchLinked: "",
    processDate: new Date().toISOString().split('T')[0]
  });

  const handleVerifyBatch = (batchId: string) => {
    setIncomingBatches(prev => 
      prev.map(batch => 
        batch.id === batchId 
          ? { ...batch, status: "Verified" }
          : batch
      )
    );
    
    toast({
      title: "Batch Verified",
      description: `Batch ${batchId} has been verified and added to blockchain`,
    });
  };

  const handleCreateLot = () => {
    if (!newLot.name || !newLot.ingredients || !newLot.batchLinked) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    const lotId = `PL${String(productLots.length + 3).padStart(3, '0')}`;
    const lot = {
      id: lotId,
      name: newLot.name,
      ingredients: newLot.ingredients,
      batchLinked: newLot.batchLinked,
      processDate: newLot.processDate,
      qrGenerated: true
    };

    setProductLots([...productLots, lot]);
    setNewLot({ name: "", ingredients: "", batchLinked: "", processDate: new Date().toISOString().split('T')[0] });
    
    toast({
      title: "Product Lot Created",
      description: `Product lot ${lotId} created with QR code`,
    });
  };

  const getStatusColor = (status: string) => {
    return status === "Verified" 
      ? "bg-success text-white" 
      : "bg-warning text-warning-foreground";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <header className="border-b bg-card/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-earth rounded-full flex items-center justify-center">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Manufacturer Portal</h1>
              <p className="text-sm text-muted-foreground">Production Management System</p>
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
        <Tabs defaultValue="batches" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="batches">Incoming Batches</TabsTrigger>
            <TabsTrigger value="create">Create Product Lot</TabsTrigger>
            <TabsTrigger value="qr">QR Generator</TabsTrigger>
          </TabsList>

          <TabsContent value="batches">
            <Card className="herbal-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5" />
                  <span>Incoming Herb Batches</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Batch ID</TableHead>
                      <TableHead>Herb</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Collector</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incomingBatches.map((batch) => (
                      <TableRow key={batch.id}>
                        <TableCell className="font-mono font-medium">{batch.id}</TableCell>
                        <TableCell>{batch.herb}</TableCell>
                        <TableCell>{batch.quantity}</TableCell>
                        <TableCell>{batch.collector}</TableCell>
                        <TableCell>{batch.date}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(batch.status)}>
                            {batch.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {batch.status === "Pending Verification" ? (
                            <Button 
                              size="sm" 
                              onClick={() => handleVerifyBatch(batch.id)}
                              className="flex items-center space-x-1"
                            >
                              <CheckCircle className="w-3 h-3" />
                              <span>Verify</span>
                            </Button>
                          ) : (
                            <span className="text-success font-medium">✓ Verified</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create">
            <Card className="herbal-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5" />
                  <span>Create New Product Lot</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="lotName">Product Name</Label>
                    <Input
                      id="lotName"
                      placeholder="e.g., Ashwagandha Capsules"
                      value={newLot.name}
                      onChange={(e) => setNewLot({ ...newLot, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ingredients">Ingredients</Label>
                    <Input
                      id="ingredients"
                      placeholder="Main ingredients"
                      value={newLot.ingredients}
                      onChange={(e) => setNewLot({ ...newLot, ingredients: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="batchLinked">Linked Herb Batch</Label>
                    <Input
                      id="batchLinked"
                      placeholder="e.g., CB001"
                      value={newLot.batchLinked}
                      onChange={(e) => setNewLot({ ...newLot, batchLinked: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="processDate">Processing Date</Label>
                    <Input
                      id="processDate"
                      type="date"
                      value={newLot.processDate}
                      onChange={(e) => setNewLot({ ...newLot, processDate: e.target.value })}
                    />
                  </div>
                </div>

                <Button onClick={handleCreateLot} className="w-full">
                  Create Product Lot
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qr">
            <Card className="herbal-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <QrCode className="w-5 h-5" />
                  <span>Generated QR Codes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productLots.map((lot) => (
                    <Card key={lot.id} className="p-4 text-center">
                      <div className="bg-white p-4 rounded-lg mb-4 inline-block">
                        <QRCodeSVG
                          value={JSON.stringify({
                            productId: lot.id,
                            name: lot.name,
                            batchLinked: lot.batchLinked,
                            processDate: lot.processDate
                          })}
                          size={128}
                        />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{lot.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">ID: {lot.id}</p>
                      <Badge variant="secondary" className="text-xs">
                        Batch: {lot.batchLinked}
                      </Badge>
                    </Card>
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

export default ManufacturerPortal;