import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, MapPin, Camera, Mountain, Compass, Tent } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import hikingGroup from "@/assets/hiking-group.jpg";
import kayaking from "@/assets/kayaking.jpg";
import rockClimbing from "@/assets/rock-climbing.jpg";
import campingNight from "@/assets/camping-night.jpg";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Weekly Events",
      description: "Join organized hikes, climbs, and camping trips every week with experienced guides.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded adventurers and make lifelong friends.",
    },
    {
      icon: MapPin,
      title: "Epic Locations",
      description: "Discover hidden trails and breathtaking destinations across the region.",
    },
    {
      icon: Camera,
      title: "Share Memories",
      description: "Capture and share your adventure photos with the club community.",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Summit Trail Expedition",
      date: "Jan 25, 2026",
      location: "Rocky Mountain Park",
      difficulty: "Moderate",
      spots: 8,
      image: heroImage,
    },
    {
      id: 2,
      title: "Sunrise Kayaking",
      date: "Jan 28, 2026",
      location: "Crystal Lake",
      difficulty: "Easy",
      spots: 12,
      image: kayaking,
    },
    {
      id: 3,
      title: "Night Sky Camping",
      date: "Feb 1, 2026",
      location: "Starlight Valley",
      difficulty: "Beginner",
      spots: 20,
      image: campingNight,
    },
  ];

  const activities = [
    { title: "Hiking", image: hikingGroup, count: 48 },
    { title: "Kayaking", image: kayaking, count: 24 },
    { title: "Rock Climbing", image: rockClimbing, count: 16 },
    { title: "Camping", image: campingNight, count: 32 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-semibold mb-6">
              🏔️ Adventure Awaits
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Explore The Wild<br />
              <span className="text-secondary">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Join our community of outdoor enthusiasts. Experience unforgettable adventures,
              forge lasting friendships, and discover the beauty of nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing">
                <Button size="lg" className="w-full sm:w-auto btn-adventure text-lg px-8">
                  Join The Club <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  View Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Why Join Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Your Adventure Starts Here
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-adventure p-6 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl hero-gradient flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                Don't Miss Out
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                Upcoming Adventures
              </h2>
            </div>
            <Link to="/events" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Events <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event, index) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="card-adventure group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                    {event.difficulty}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {event.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-success font-medium">
                      {event.spots} spots left
                    </span>
                    <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
              Our Activities
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-primary-foreground">
                    {activity.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {activity.count} events this year
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${hikingGroup})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready For Your Next Adventure?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join hundreds of adventurers who have already discovered the joy of exploring
              nature with our community. Your journey begins today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8">
                  Become A Member <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "2,500+", label: "Active Members" },
              { icon: Calendar, value: "180+", label: "Events Per Year" },
              { icon: Mountain, value: "50+", label: "Trails Explored" },
              { icon: Compass, value: "12", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
