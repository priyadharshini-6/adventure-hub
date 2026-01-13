import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  TrendingUp,
  TrendingDown,
  Eye,
  MessageSquare,
  ChevronRight,
  Mountain,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const stats = [
    { 
      label: "Total Members", 
      value: "2,547", 
      change: "+12%", 
      trend: "up",
      icon: Users 
    },
    { 
      label: "Active Events", 
      value: "24", 
      change: "+3", 
      trend: "up",
      icon: Calendar 
    },
    { 
      label: "Blog Posts", 
      value: "156", 
      change: "+8", 
      trend: "up",
      icon: FileText 
    },
    { 
      label: "Messages", 
      value: "42", 
      change: "-5%", 
      trend: "down",
      icon: MessageSquare 
    },
  ];

  const recentMembers = [
    { name: "Alex Thompson", email: "alex@example.com", plan: "Adventurer", date: "Jan 12, 2026" },
    { name: "Sarah Miller", email: "sarah@example.com", plan: "Elite", date: "Jan 11, 2026" },
    { name: "Mike Johnson", email: "mike@example.com", plan: "Explorer", date: "Jan 10, 2026" },
    { name: "Emily Davis", email: "emily@example.com", plan: "Adventurer", date: "Jan 9, 2026" },
  ];

  const recentEvents = [
    { title: "Summit Trail Expedition", date: "Jan 25, 2026", registrations: 12, capacity: 15 },
    { title: "Sunrise Kayaking", date: "Jan 28, 2026", registrations: 18, capacity: 20 },
    { title: "Night Sky Camping", date: "Feb 1, 2026", registrations: 25, capacity: 30 },
  ];

  const messages = [
    { from: "John Doe", subject: "Question about membership", time: "2 hours ago", unread: true },
    { from: "Jane Smith", subject: "Event cancellation request", time: "5 hours ago", unread: true },
    { from: "Bob Wilson", subject: "Equipment rental inquiry", time: "1 day ago", unread: false },
  ];

  const sidebarLinks = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Users, label: "Members", active: false },
    { icon: Calendar, label: "Events", active: false },
    { icon: FileText, label: "Blog Posts", active: false },
    { icon: MessageSquare, label: "Messages", badge: "42", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                <Mountain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-foreground block">
                  Adventure Club
                </span>
                <span className="text-xs text-muted-foreground">Admin Panel</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  link.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
                {link.badge && (
                  <Badge className="ml-auto bg-secondary text-secondary-foreground text-xs">
                    {link.badge}
                  </Badge>
                )}
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                <LogOut className="w-5 h-5 mr-3" /> Exit Admin
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          <div className="flex items-center justify-between px-4 h-16">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </Button>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-9 bg-background"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
              </Button>
              <div className="w-9 h-9 rounded-full bg-muted" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6 space-y-6">
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with your club.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card-adventure p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === "up" ? "text-success" : "text-destructive"
                  }`}>
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Members */}
            <div className="lg:col-span-2 card-adventure">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-heading text-lg font-bold text-foreground">
                  Recent Members
                </h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {recentMembers.map((member) => (
                    <div key={member.email} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted" />
                        <div>
                          <p className="font-medium text-foreground">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {member.plan}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{member.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="card-adventure">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="font-heading text-lg font-bold text-foreground">
                  Messages
                </h2>
                <Badge className="bg-secondary text-secondary-foreground">42</Badge>
              </div>
              <div className="p-5 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${message.unread ? "bg-primary/5" : "bg-muted/50"}`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-medium text-foreground text-sm">{message.from}</p>
                      {message.unread && (
                        <span className="w-2 h-2 bg-secondary rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {message.subject}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Events Table */}
          <div className="card-adventure">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h2 className="font-heading text-lg font-bold text-foreground">
                Upcoming Events
              </h2>
              <Button variant="ghost" size="sm" className="text-primary">
                Manage Events <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                      Event
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                      Date
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                      Registrations
                    </th>
                    <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentEvents.map((event) => (
                    <tr key={event.title} className="border-b border-border last:border-0">
                      <td className="p-4">
                        <p className="font-medium text-foreground">{event.title}</p>
                      </td>
                      <td className="p-4 text-muted-foreground">{event.date}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full max-w-[100px]">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {event.registrations}/{event.capacity}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <Badge className="bg-success/20 text-success border-0">
                          Active
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
