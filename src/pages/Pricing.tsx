import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Pricing = () => {
  const plans = [
    {
      name: "Explorer",
      price: "$15",
      period: "/month",
      description: "Perfect for casual adventurers",
      features: [
        "Access to 2 events per month",
        "Online community access",
        "Event notifications",
        "Basic gear discounts (10%)",
        "Photo gallery access",
      ],
      notIncluded: [
        "Equipment rental",
        "Priority event registration",
        "Expert workshops",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Adventurer",
      price: "$35",
      period: "/month",
      description: "Most popular choice for active members",
      features: [
        "Unlimited event access",
        "Priority event registration",
        "Equipment rental included",
        "Premium gear discounts (25%)",
        "Monthly workshops",
        "Private community channels",
        "Trip photos & videos",
      ],
      notIncluded: [
        "Personal coaching",
      ],
      popular: true,
      cta: "Join Now",
    },
    {
      name: "Elite",
      price: "$75",
      period: "/month",
      description: "For serious outdoor enthusiasts",
      features: [
        "Everything in Adventurer",
        "Personal adventure coaching",
        "Custom trip planning",
        "VIP event access",
        "Gear locker storage",
        "Exclusive expeditions",
        "First access to new routes",
        "Annual gear allowance ($200)",
      ],
      notIncluded: [],
      popular: false,
      cta: "Go Elite",
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes! You can upgrade or downgrade your membership at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a commitment period?",
      answer: "No long-term commitment required. All memberships are month-to-month and you can cancel anytime.",
    },
    {
      question: "Do you offer family or group discounts?",
      answer: "Yes! Families get 20% off for additional members. Groups of 5+ can contact us for custom pricing.",
    },
    {
      question: "What's included in equipment rental?",
      answer: "Adventurer and Elite members can borrow hiking gear, camping equipment, kayaks, and climbing gear at no extra cost.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Membership Plans
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Join The Adventure
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your adventure style. All memberships include
            access to our amazing community and exclusive member benefits.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative card-adventure p-8 flex flex-col animate-slide-up ${
                  plan.popular ? "border-2 border-primary ring-4 ring-primary/10" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 hero-gradient text-primary-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" /> Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-heading text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-50">
                      <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-center">—</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/register">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "btn-adventure"
                        : "btn-outline-adventure"
                    }`}
                    size="lg"
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-adventure p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Our team is happy to help you find the perfect membership.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
