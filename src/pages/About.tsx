import { Link } from "react-router-dom";
import { Users, Award, Heart, Target, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import hikingGroup from "@/assets/hiking-group.jpg";
import kayaking from "@/assets/kayaking.jpg";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Guide",
      bio: "15 years of mountaineering experience. Certified wilderness first responder.",
    },
    {
      name: "Mike Chen",
      role: "Kayak & Water Sports",
      bio: "Former Olympic kayaker. Passionate about water safety education.",
    },
    {
      name: "Emma Williams",
      role: "Rock Climbing Instructor",
      bio: "AMGA certified guide. Climbed peaks across 4 continents.",
    },
    {
      name: "David Park",
      role: "Trail Running Coach",
      bio: "Ultra-marathon runner. Completed over 50 trail races.",
    },
  ];

  const milestones = [
    { year: "2014", event: "Adventure Club founded with 12 members" },
    { year: "2016", event: "Reached 500 active members" },
    { year: "2018", event: "Launched equipment rental program" },
    { year: "2020", event: "Virtual community events during pandemic" },
    { year: "2022", event: "Opened second chapter in neighboring state" },
    { year: "2024", event: "Celebrated 10 years with 2,500+ members" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe the best adventures are shared. Our community is built on friendship, support, and shared passion for the outdoors.",
    },
    {
      icon: Target,
      title: "Safety Always",
      description: "Every trip is meticulously planned with safety as the top priority. Our guides are certified and our protocols are industry-leading.",
    },
    {
      icon: Award,
      title: "Excellence in Adventure",
      description: "We curate exceptional experiences that challenge, inspire, and create lasting memories for our members.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <span className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-semibold mb-6">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Connecting People Through Adventure
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Since 2014, we've been bringing outdoor enthusiasts together to explore,
              discover, and create unforgettable memories in nature.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Making The Outdoors Accessible To Everyone
              </h2>
              <p className="text-muted-foreground mb-6">
                Adventure Club was born from a simple idea: everyone deserves the opportunity
                to experience the transformative power of nature. What started as a small
                group of hiking friends has grown into a thriving community of over 2,500
                outdoor enthusiasts.
              </p>
              <p className="text-muted-foreground mb-8">
                We organize weekly events ranging from beginner-friendly nature walks to
                challenging multi-day expeditions. Our certified guides ensure every adventure
                is safe, educational, and above all, fun.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="font-heading text-3xl font-bold text-primary">2,500+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="font-heading text-3xl font-bold text-secondary">180+</div>
                  <div className="text-sm text-muted-foreground">Events Per Year</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={hikingGroup}
                alt="Hiking group"
                className="w-full rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden border-4 border-background shadow-xl hidden md:block">
                <img
                  src={kayaking}
                  alt="Kayaking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 bg-card rounded-2xl border border-border animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl hero-gradient flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Meet Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Expert Guides & Leaders
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="card-adventure p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted" />
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Milestones
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-4 md:gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <div className="font-heading text-xl font-bold text-primary">
                      {milestone.year}
                    </div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                  <div className="absolute left-4 md:relative md:left-auto w-2 h-2 bg-primary rounded-full z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready To Join Our Community?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Become part of a community that values adventure, friendship, and the great outdoors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8">
                Become A Member
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
