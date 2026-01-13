import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import kayaking from "@/assets/kayaking.jpg";
import rockClimbing from "@/assets/rock-climbing.jpg";
import campingNight from "@/assets/camping-night.jpg";
import hikingGroup from "@/assets/hiking-group.jpg";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [activityFilter, setActivityFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Summit Trail Expedition",
      date: "Jan 25, 2026",
      location: "Rocky Mountain Park",
      difficulty: "Moderate",
      activity: "Hiking",
      spots: 8,
      maxSpots: 15,
      image: heroImage,
      description: "A challenging hike to the summit with breathtaking views.",
    },
    {
      id: 2,
      title: "Sunrise Kayaking",
      date: "Jan 28, 2026",
      location: "Crystal Lake",
      difficulty: "Easy",
      activity: "Kayaking",
      spots: 12,
      maxSpots: 20,
      image: kayaking,
      description: "Peaceful morning paddle with stunning sunrise views.",
    },
    {
      id: 3,
      title: "Night Sky Camping",
      date: "Feb 1, 2026",
      location: "Starlight Valley",
      difficulty: "Beginner",
      activity: "Camping",
      spots: 20,
      maxSpots: 30,
      image: campingNight,
      description: "Overnight camping with stargazing and campfire stories.",
    },
    {
      id: 4,
      title: "Rock Climbing Basics",
      date: "Feb 5, 2026",
      location: "Boulder Canyon",
      difficulty: "Advanced",
      activity: "Climbing",
      spots: 6,
      maxSpots: 10,
      image: rockClimbing,
      description: "Learn essential climbing techniques with expert instructors.",
    },
    {
      id: 5,
      title: "Forest Trail Run",
      date: "Feb 8, 2026",
      location: "Evergreen Forest",
      difficulty: "Moderate",
      activity: "Hiking",
      spots: 15,
      maxSpots: 25,
      image: hikingGroup,
      description: "Trail running through scenic forest paths.",
    },
    {
      id: 6,
      title: "Mountain Photography Walk",
      date: "Feb 12, 2026",
      location: "Alpine Meadows",
      difficulty: "Easy",
      activity: "Hiking",
      spots: 10,
      maxSpots: 12,
      image: heroImage,
      description: "Capture stunning landscapes with photography tips.",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-success text-success-foreground";
      case "easy":
        return "bg-info text-info-foreground";
      case "moderate":
        return "bg-warning text-warning-foreground";
      case "advanced":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === "all" || event.difficulty.toLowerCase() === difficultyFilter;
    const matchesActivity = activityFilter === "all" || event.activity.toLowerCase() === activityFilter;
    return matchesSearch && matchesDifficulty && matchesActivity;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Upcoming Adventures
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Find Your Next Event
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our calendar of outdoor adventures. From beginner-friendly hikes
              to challenging expeditions, there's something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-40 bg-card">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={activityFilter} onValueChange={setActivityFilter}>
                <SelectTrigger className="w-40 bg-card">
                  <SelectValue placeholder="Activity" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="all">All Activities</SelectItem>
                  <SelectItem value="hiking">Hiking</SelectItem>
                  <SelectItem value="kayaking">Kayaking</SelectItem>
                  <SelectItem value="camping">Camping</SelectItem>
                  <SelectItem value="climbing">Climbing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="card-adventure group animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(event.difficulty)}`}>
                      {event.difficulty}
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-card/90 text-foreground text-xs font-semibold rounded-full">
                      {event.activity}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">
                          <span className="text-success font-medium">{event.spots}</span>
                          <span className="text-muted-foreground">/{event.maxSpots} spots</span>
                        </span>
                      </div>
                      <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                No events found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setDifficultyFilter("all");
                  setActivityFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
