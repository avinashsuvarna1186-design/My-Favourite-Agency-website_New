import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, Link } from "wouter";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  LogOut, 
  Users, 
  Mail, 
  Calendar, 
  DollarSign, 
  Search,
  Eye,
  ArrowLeft,
  Building2,
  Clock,
  MessageSquare,
  RefreshCw
} from "lucide-react";
import type { Lead } from "@shared/schema";

function formatDate(date: Date | string) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function getBudgetColor(budget: string) {
  if (budget.includes("50k") || budget.includes("100k") || budget === "100k+") {
    return "bg-green-500/20 text-green-400 border-green-500/30";
  }
  if (budget.includes("25k") || budget.includes("50k")) {
    return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  }
  return "bg-blue-500/20 text-blue-400 border-blue-500/30";
}

function getTimelineColor(timeline: string) {
  if (timeline.includes("ASAP") || timeline.includes("1")) {
    return "bg-red-500/20 text-red-400 border-red-500/30";
  }
  if (timeline.includes("2") || timeline.includes("3")) {
    return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  }
  return "bg-green-500/20 text-green-400 border-green-500/30";
}

export default function AdminDashboard() {
  const { logout, isAuthenticated } = useAdmin();
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const { data: leads = [], isLoading, refetch } = useQuery<Lead[]>({
    queryKey: ["/api/inquiries"],
  });

  if (!isAuthenticated) {
    setLocation("/admin");
    return null;
  }

  const filteredLeads = leads.filter(lead => {
    const query = searchQuery.toLowerCase();
    return (
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      (lead.company?.toLowerCase().includes(query) || false) ||
      lead.serviceType.toLowerCase().includes(query)
    );
  });

  const stats = {
    totalLeads: leads.length,
    thisWeek: leads.filter(l => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(l.createdAt) > weekAgo;
    }).length,
    avgBudget: leads.length > 0 ? "Varies" : "N/A",
    services: Array.from(new Set(leads.map(l => l.serviceType))).length,
  };

  const handleLogout = () => {
    logout();
    setLocation("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E97451]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-website">
                <ArrowLeft className="w-4 h-4" />
                Website
              </Button>
            </Link>
            <div className="h-6 w-px bg-white/20" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#E97451] to-[#A855F7] bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="gap-2"
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E97451]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#E97451]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Leads</p>
                  <p className="text-2xl font-bold" data-testid="stat-total-leads">{stats.totalLeads}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#A855F7]/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#A855F7]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold" data-testid="stat-this-week">{stats.thisWeek}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Budget Range</p>
                  <p className="text-2xl font-bold" data-testid="stat-budget">{stats.avgBudget}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Types</p>
                  <p className="text-2xl font-bold" data-testid="stat-services">{stats.services}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Lead Inquiries</CardTitle>
                <CardDescription>
                  View and manage all incoming project inquiries
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search leads..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-64 bg-background/50"
                    data-testid="input-search-leads"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => refetch()}
                  data-testid="button-refresh-leads"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <RefreshCw className="w-8 h-8 animate-spin text-muted-foreground" />
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Leads Yet</h3>
                <p className="text-muted-foreground">
                  {searchQuery 
                    ? "No leads match your search criteria" 
                    : "When visitors submit inquiries, they'll appear here"}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Timeline</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => (
                      <TableRow 
                        key={lead.id} 
                        className="border-white/10 hover-elevate cursor-pointer"
                        onClick={() => setSelectedLead(lead)}
                        data-testid={`row-lead-${lead.id}`}
                      >
                        <TableCell className="font-medium">{lead.name}</TableCell>
                        <TableCell className="text-muted-foreground">{lead.email}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {lead.company || "-"}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-[#E97451]/20 text-[#E97451] border-[#E97451]/30">
                            {lead.serviceType}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getBudgetColor(lead.budget)}>
                            {lead.budget}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getTimelineColor(lead.timeline)}>
                            {lead.timeline}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {formatDate(lead.createdAt)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLead(lead);
                            }}
                            data-testid={`button-view-lead-${lead.id}`}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        <DialogContent className="sm:max-w-lg bg-card/95 backdrop-blur-xl border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl">Lead Details</DialogTitle>
            <DialogDescription>
              Full inquiry information from {selectedLead?.name}
            </DialogDescription>
          </DialogHeader>
          
          {selectedLead && (
            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    Name
                  </div>
                  <p className="font-medium">{selectedLead.name}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                  <a 
                    href={`mailto:${selectedLead.email}`}
                    className="font-medium text-[#E97451] hover:underline"
                  >
                    {selectedLead.email}
                  </a>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    Company
                  </div>
                  <p className="font-medium">{selectedLead.company || "Not provided"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Submitted
                  </div>
                  <p className="font-medium">{formatDate(selectedLead.createdAt)}</p>
                </div>
              </div>
              
              <div className="h-px bg-white/10" />
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Service Type</p>
                  <Badge variant="outline" className="bg-[#E97451]/20 text-[#E97451] border-[#E97451]/30">
                    {selectedLead.serviceType}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <Badge variant="outline" className={getBudgetColor(selectedLead.budget)}>
                    {selectedLead.budget}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <Badge variant="outline" className={getTimelineColor(selectedLead.timeline)}>
                    {selectedLead.timeline}
                  </Badge>
                </div>
              </div>
              
              <div className="h-px bg-white/10" />
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4" />
                  Project Details
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-white/10">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {selectedLead.message}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button 
                  className="flex-1 gap-2"
                  style={{ backgroundColor: '#E97451', borderColor: '#E97451' }}
                  onClick={() => window.open(`mailto:${selectedLead.email}?subject=RE: Your inquiry to MFA&body=Hi ${selectedLead.name},%0D%0A%0D%0AThank you for reaching out to My Favourite Agency!%0D%0A%0D%0A`)}
                  data-testid="button-reply-email"
                >
                  <Mail className="w-4 h-4" />
                  Reply via Email
                </Button>
                <Button 
                  variant="outline"
                  className="gap-2"
                  onClick={() => setSelectedLead(null)}
                  data-testid="button-close-modal"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
