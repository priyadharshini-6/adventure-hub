import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Camera,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Check,
  X,
  Upload,
  Image,
  Clock,
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-mountain.jpg";
import kayaking from "@/assets/kayaking.jpg";
import rockClimbing from "@/assets/rock-climbing.jpg";
import campingNight from "@/assets/camping-night.jpg";
import hikingGroup from "@/assets/hiking-group.jpg";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("events");

  const upcomingEvents = [
    {
      id: 1,
      title: "Summit Trail Expedition",
      date: "Jan 25, 2026",
      time: "6:00 AM",
      location: "Rocky Mountain Park",
      image: heroImage,
      status: "confirmed",
      difficulty: "Moderate",
    },
    {
      id: 2,
      title: "Sunrise Kayaking",
      date: "Jan 28, 2026",
      time: "5:30 AM",
      location: "Crystal Lake",
      image: kayaking,
      status: "pending",
      difficulty: "Easy",
    },
    {
      id: 3,
      title: "Rock Climbing Workshop",
      date: "Feb 5, 2026",
      time: "9:00 AM",
      location: "Boulder Canyon",
      image: rockClimbing,
      status: "available",
      difficulty: "Advanced",
    },
    {
      id: 4,
      title: "Night Sky Camping",
      date: "Feb 10, 2026",
      time: "4:00 PM",
      location: "Starlight Valley",
      image: campingNight,
      status: "available",
      difficulty: "Beginner",
    },
  ];

  const tripDetails = [
    {
      id: 1,
      title: "Summit Trail Expedition",
      date: "Jan 25, 2026",
      meetingPoint: "Trailhead Parking Lot A",
      leader: "Sarah Johnson",
      checklist: ["Hiking boots", "Water (2L)", "Snacks", "Rain jacket", "First aid kit"],
      notes: "Expect early morning cold. Trail has some steep sections. Lunch break at summit.",
    },
  ];

  const photos = [
    { id: 1, src: heroImage, event: "Mountain Trek", date: "Dec 15, 2025" },
    { id: 2, src: kayaking, event: "Lake Adventure", date: "Dec 10, 2025" },
    { id: 3, src: campingNight, event: "Stargazing Camp", date: "Dec 5, 2025" },
    { id: 4, src: rockClimbing, event: "Climbing Day", date: "Nov 28, 2025" },
    { id: 5, src: hikingGroup, event: "Forest Hike", date: "Nov 20, 2025" },
    { id: 6, src: heroImage, event: "Sunset Peak", date: "Nov 15, 2025" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-success text-success-foreground">Confirmed</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      default:
        return <Badge variant="outline" className="border-primary text-primary">Available</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                <Mountain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground hidden sm:block">
                Adventure Club
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5 text-muted-foreground" />
              </Button>
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <LogOut className="w-5 h-5 text-muted-foreground" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground">
            You have 2 upcoming adventures this month.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Calendar, label: "Events Joined", value: "24", color: "primary" },
            { icon: MapPin, label: "Trails Explored", value: "18", color: "secondary" },
            { icon: Camera, label: "Photos Shared", value: "156", color: "accent" },
            { icon: Users, label: "Friends Made", value: "42", color: "success" },
          ].map((stat) => (
            <div key={stat.label} className="card-adventure p-5">
              <div className={`w-10 h-10 rounded-xl bg-${stat.color}/10 flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}`} />
              </div>
              <div className="font-heading text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-muted p-1 rounded-xl">
            <TabsTrigger
              value="events"
              className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-primary font-semibold"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Events
            </TabsTrigger>
            <TabsTrigger
              value="trips"
              className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-primary font-semibold"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Trip Details
            </TabsTrigger>
            <TabsTrigger
              value="photos"
              className="rounded-lg data-[state=active]:bg-card data-[state=active]:text-primary font-semibold"
            >
              <Camera className="w-4 h-4 mr-2" />
              Photos
            </TabsTrigger>
          </TabsList>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Upcoming Events
              </h2>
              <Link to="/events">
                <Button variant="outline" size="sm" className="border-primary text-primary">
                  Browse All Events
                </Button>
              </Link>
            </div>
            <div className="grid gap-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="card-adventure flex flex-col sm:flex-row gap-4 p-4"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full sm:w-32 h-32 sm:h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {event.title}
                      </h3>
                      {getStatusBadge(event.status)}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {event.status === "available" && (
                        <Button size="sm" className="btn-adventure">
                          <Check className="w-4 h-4 mr-1" /> RSVP
                        </Button>
                      )}
                      {event.status === "pending" && (
                        <>
                          <Button size="sm" className="btn-adventure">
                            <Check className="w-4 h-4 mr-1" /> Confirm
                          </Button>
                          <Button size="sm" variant="outline" className="border-destructive text-destructive">
                            <X className="w-4 h-4 mr-1" /> Cancel
                          </Button>
                        </>
                      )}
                      {event.status === "confirmed" && (
                        <Button size="sm" variant="outline" className="border-primary text-primary">
                          View Details <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Trip Details Tab */}
          <TabsContent value="trips" className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Your Confirmed Trips
            </h2>
            {tripDetails.map((trip) => (
              <div key={trip.id} className="card-adventure p-6 space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {trip.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {trip.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {trip.meetingPoint}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> Led by {trip.leader}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">
                      Packing Checklist
                    </h4>
                    <ul className="space-y-2">
                      {trip.checklist.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded border border-border flex items-center justify-center">
                            <Check className="w-3 h-3 text-success" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">
                      Trip Notes
                    </h4>
                    <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                      {trip.notes}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex flex-wrap gap-3">
                  <Button className="btn-adventure">
                    <MapPin className="w-4 h-4 mr-2" /> Get Directions
                  </Button>
                  <Button variant="outline" className="border-primary text-primary">
                    Contact Trip Leader
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Adventure Gallery
              </h2>
              <Button className="btn-adventure">
                <Upload className="w-4 h-4 mr-2" /> Upload Photos
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={photo.event}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">
                        {photo.event}
                      </p>
                      <p className="text-primary-foreground/70 text-xs">
                        {photo.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
