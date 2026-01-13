import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ArrowLeft,
  Check,
  Share2,
  Heart,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import kayaking from "@/assets/kayaking.jpg";
import rockClimbing from "@/assets/rock-climbing.jpg";
import campingNight from "@/assets/camping-night.jpg";

const EventDetails = () => {
  const { id } = useParams();

  // Mock data - in real app would fetch based on id
  const events: Record<string, any> = {
    "1": {
      title: "Summit Trail Expedition",
      date: "January 25, 2026",
      time: "6:00 AM - 4:00 PM",
      location: "Rocky Mountain Park",
      meetingPoint: "Trailhead Parking Lot A",
      difficulty: "Moderate",
      spots: 8,
      maxSpots: 15,
      image: heroImage,
      leader: "Sarah Johnson",
      description: `Join us for an unforgettable hiking experience to the summit of Rocky Mountain. This moderate-level hike offers stunning panoramic views, diverse wildlife, and a rewarding sense of accomplishment.

The trail covers 12 miles round trip with an elevation gain of 2,500 feet. We'll take breaks at scenic viewpoints and have lunch at the summit before descending.`,
      whatToBring: [
        "Sturdy hiking boots",
        "Water (at least 2 liters)",
        "Trail snacks and lunch",
        "Rain jacket",
        "Sun protection",
        "First aid kit",
        "Camera",
      ],
      included: [
        "Experienced guide",
        "Trail maps",
        "Emergency equipment",
        "Group photos",
      ],
      requirements: [
        "Good physical fitness",
        "Previous hiking experience recommended",
        "Age 16+",
      ],
    },
    "2": {
      title: "Sunrise Kayaking",
      date: "January 28, 2026",
      time: "5:30 AM - 9:00 AM",
      location: "Crystal Lake",
      meetingPoint: "Lake Marina Dock B",
      difficulty: "Easy",
      spots: 12,
      maxSpots: 20,
      image: kayaking,
      leader: "Mike Chen",
      description: `Experience the magic of Crystal Lake at dawn. Watch the sun rise over the mountains while paddling through calm waters. Perfect for beginners and experienced paddlers alike.

We'll paddle approximately 5 miles exploring hidden coves and wildlife viewing spots. Hot coffee and breakfast provided after the paddle.`,
      whatToBring: [
        "Quick-dry clothing",
        "Water shoes or sandals",
        "Change of clothes",
        "Sunscreen",
        "Water bottle",
      ],
      included: [
        "Kayak and paddle",
        "Life jacket",
        "Waterproof bag",
        "Breakfast",
        "Certified instructor",
      ],
      requirements: [
        "Ability to swim",
        "Age 12+ (under 18 with guardian)",
      ],
    },
  };

  const event = events[id || "1"] || events["1"];

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

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <Link to="/events">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
              </Button>
            </Link>
            <Badge className={`mb-4 ${getDifficultyColor(event.difficulty)}`}>
              {event.difficulty}
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-primary-foreground/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> {event.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" /> {event.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" /> {event.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  About This Event
                </h2>
                <div className="prose prose-lg text-muted-foreground whitespace-pre-line">
                  {event.description}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-adventure p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    What to Bring
                  </h3>
                  <ul className="space-y-2">
                    {event.whatToBring.map((item: string) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-adventure p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {event.included.map((item: string) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-adventure p-6 bg-warning/10 border-warning/30">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-warning" />
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {event.requirements.map((item: string) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card-adventure p-6 sticky top-28 space-y-6">
                <div className="text-center pb-6 border-b border-border">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span className="text-2xl font-bold text-foreground">{event.spots}</span>
                    <span className="text-muted-foreground">/ {event.maxSpots}</span>
                  </div>
                  <p className="text-sm text-success">Spots remaining</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Meeting Point</p>
                    <p className="font-semibold text-foreground">{event.meetingPoint}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Trip Leader</p>
                    <p className="font-semibold text-foreground">{event.leader}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Link to="/register" className="block">
                    <Button className="w-full btn-adventure text-lg py-6">
                      RSVP Now
                    </Button>
                  </Link>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-border">
                      <Heart className="w-4 h-4 mr-2" /> Save
                    </Button>
                    <Button variant="outline" className="flex-1 border-border">
                      <Share2 className="w-4 h-4 mr-2" /> Share
                    </Button>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  Members only. Not a member? <Link to="/pricing" className="text-primary hover:underline">Join now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetails;
