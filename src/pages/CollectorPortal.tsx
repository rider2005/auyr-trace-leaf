import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Upload, Database, MapPin, Calendar, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const CollectorPortal = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [batches, setBatches] = useState([
    { id: "CB001", herb: "Ashwagandha", quantity: "50 kg", location: "Kerala Farm #12", date: "2024-01-15", status: "Verified" },
    { id: "CB002", herb: "Turmeric", quantity: "75 kg", location: "Tamil Nadu Estate", date: "2024-01-14", status: "Processing" },
    { id: "CB003", herb: "Tulsi", quantity: "25 kg", location: "Organic Valley Farm", date: "2024-01-13", status: "Submitted" },
  ]);

  const [newBatch, setNewBatch] = useState({
    herb: "",
    quantity: "",
    location: "",
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmitBatch = () => {
    if (!newBatch.herb || !newBatch.quantity || !newBatch.location) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    const batchId = `CB${String(batches.length + 4).padStart(3, '0')}`;
    const batch = {
      id: batchId,
      herb: newBatch.herb,
      quantity: newBatch.quantity,
      location: newBatch.location,
      date: newBatch.date,
      status: "Submitted"
    };

    setBatches([...batches, batch]);
    setNewBatch({ herb: "", quantity: "", location: "", date: new Date().toISOString().split('T')[0] });
    
    toast({
      title: "Batch Uploaded Successfully",
      description: `Batch ${batchId} has been submitted to blockchain`,
    });

    // Simulate status updates
    setTimeout(() => {
      setBatches(prev => prev.map(b => b.id === batchId ? { ...b, status: "Processing" } : b));
    }, 3000);
    
    setTimeout(() => {
      setBatches(prev => prev.map(b => b.id === batchId ? { ...b, status: "Verified" } : b));
    }, 6000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted": return "bg-warning text-warning-foreground";
      case "Processing": return "bg-cyber-primary text-white status-pulse";
      case "Verified": return "bg-success text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10">
      <header className="border-b bg-card/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-herbal rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Collector Portal</h1>
              <p className="text-sm text-muted-foreground">Harvest Management System</p>
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
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload" className="flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Upload Batch</span>
            </TabsTrigger>
            <TabsTrigger value="batches" className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span>My Batches</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card className="herbal-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5" />
                  <span>Submit New Harvest Batch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="herb">Herb Name</Label>
                    <Input
                      id="herb"
                      placeholder="e.g., Ashwagandha"
                      value={newBatch.herb}
                      onChange={(e) => setNewBatch({ ...newBatch, herb: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      placeholder="e.g., 50 kg"
                      value={newBatch.quantity}
                      onChange={(e) => setNewBatch({ ...newBatch, quantity: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Collection Location</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="location"
                        placeholder="Farm/Estate location"
                        value={newBatch.location}
                        onChange={(e) => setNewBatch({ ...newBatch, location: e.target.value })}
                        className="flex-1"
                      />
                      <Button variant="outline" size="icon">
                        <MapPin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Collection Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newBatch.date}
                      onChange={(e) => setNewBatch({ ...newBatch, date: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>GPS Location will be automatically recorded</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Lat: 9.9312° N, Long: 76.2673° E (Sample coordinates)
                  </div>
                </div>

                <Button onClick={handleSubmitBatch} className="w-full">
                  Submit to Blockchain
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="batches">
            <Card className="herbal-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="w-5 h-5" />
                  <span>My Harvest Batches</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Batch ID</TableHead>
                      <TableHead>Herb</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {batches.map((batch) => (
                      <TableRow key={batch.id}>
                        <TableCell className="font-mono font-medium">{batch.id}</TableCell>
                        <TableCell>{batch.herb}</TableCell>
                        <TableCell>{batch.quantity}</TableCell>
                        <TableCell>{batch.location}</TableCell>
                        <TableCell>{batch.date}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(batch.status)}>
                            {batch.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CollectorPortal;