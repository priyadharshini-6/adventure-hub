import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Heart, Zap, Mountain, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import hikingGroup from "@/assets/hiking-group.jpg";
import kayaking from "@/assets/kayaking.jpg";

const Home2 = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every adventure is carefully planned with safety as the top priority.",
    },
    {
      icon: Award,
      title: "Expert Guides",
      description: "Certified professionals lead every expedition with expertise and care.",
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Adventures for all skill levels, from beginners to experienced explorers.",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "We practice and promote leave-no-trace principles on every trip.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Alternative Style */}
      <section className="relative min-h-[95vh] flex items-center bg-card overflow-hidden">
        <div className="absolute top-0 end-0 w-1/2 h-full hidden lg:block">
          <img
            src={heroImage}
            alt="Mountain adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent ltr:bg-gradient-to-r rtl:bg-gradient-to-l" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="lg:w-1/2 lg:pe-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-2xl font-bold text-foreground">
                Adventure Club
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your
              <span className="block text-gradient py-2">Wild Side</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Transform weekends into adventures. Join a community that believes
              life is better outside. From sunrise hikes to starlit campfires,
              every moment becomes a story worth telling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto btn-adventure text-lg px-8">
                  Start Your Journey <ArrowRight className="w-5 h-5 rtl-flip ms-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto btn-outline-adventure text-lg px-8"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-card"
                    />
                  ))}
                </div>
                <span>2,500+ members</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Zap key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
                <span className="ms-1">4.9 rating</span>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile image */}
        <div className="absolute bottom-0 left-0 right-0 h-64 lg:hidden">
          <img
            src={heroImage}
            alt="Mountain adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground text-lg">
              We're more than just an outdoor club. We're a community built on shared
              values and a passion for exploration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Image Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Community Of<br />Passionate Explorers
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2014, Adventure Club has grown from a small group of hiking
                enthusiasts to a thriving community of outdoor lovers. We organize weekly
                events, skill-building workshops, and epic multi-day expeditions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Professional guides on every trip",
                  "Equipment rental available for members",
                  "Beginner-friendly activities",
                  "Photography workshops and contests",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-success rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button className="btn-adventure">
                  More About Us <ArrowRight className="w-5 h-5 rtl-flip ms-2" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={hikingGroup}
                  alt="Hiking group"
                  className="w-full rounded-2xl"
                />
                <img
                  src={kayaking}
                  alt="Kayaking"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="pt-8">
                <img
                  src={heroImage}
                  alt="Mountain landscape"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Your Next Adventure Is Waiting
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Don't just dream about adventure – live it. Join our community today and
            start creating memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white text-lg px-8">
                View Membership Plans
              </Button>
            </Link>
            <Link to="/events">
              {/* Added bg-transparent here to fix visibility in light theme */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white/10 text-lg px-8"
              >
                Browse Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home2;