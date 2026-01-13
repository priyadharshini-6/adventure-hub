import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import kayaking from "@/assets/kayaking.jpg";
import rockClimbing from "@/assets/rock-climbing.jpg";
import campingNight from "@/assets/camping-night.jpg";
import hikingGroup from "@/assets/hiking-group.jpg";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["All", "Hiking", "Camping", "Gear", "Safety", "Stories"];

  const posts = [
    {
      id: 1,
      title: "10 Essential Hiking Tips for Beginners",
      excerpt: "Starting your hiking journey? Here are the most important things every beginner should know before hitting the trails.",
      image: hikingGroup,
      author: "Sarah Johnson",
      date: "Jan 10, 2026",
      category: "Hiking",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Best Camping Spots in the Mountain Region",
      excerpt: "Discover hidden gems and popular destinations for your next overnight adventure under the stars.",
      image: campingNight,
      author: "Mike Chen",
      date: "Jan 8, 2026",
      category: "Camping",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Gear Review: Top Kayaks for 2026",
      excerpt: "We tested the latest kayaks on the market. Here's what you need to know before making your purchase.",
      image: kayaking,
      author: "Emma Williams",
      date: "Jan 5, 2026",
      category: "Gear",
      readTime: "8 min read",
    },
    {
      id: 4,
      title: "Wilderness First Aid: A Complete Guide",
      excerpt: "Essential first aid knowledge every outdoor enthusiast should have before venturing into the wild.",
      image: heroImage,
      author: "David Park",
      date: "Jan 3, 2026",
      category: "Safety",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "My Journey to Summit Peak",
      excerpt: "A personal account of conquering one of the region's most challenging peaks after years of preparation.",
      image: rockClimbing,
      author: "Sarah Johnson",
      date: "Dec 28, 2025",
      category: "Stories",
      readTime: "12 min read",
    },
    {
      id: 6,
      title: "Winter Hiking: Staying Warm and Safe",
      excerpt: "Cold weather shouldn't stop your adventures. Learn how to prepare for winter trail conditions.",
      image: heroImage,
      author: "Mike Chen",
      date: "Dec 25, 2025",
      category: "Hiking",
      readTime: "6 min read",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Adventure Blog
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Stories, Tips & Inspiration
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert advice, gear reviews, and inspiring stories from our community
              of outdoor adventurers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Link
            to={`/blog/${featuredPost.id}`}
            className="block group"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center card-adventure p-6 md:p-0 md:bg-transparent md:shadow-none md:border-0">
              <div className="relative overflow-hidden rounded-xl aspect-video md:aspect-[4/3]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  Featured
                </Badge>
              </div>
              <div className="md:pr-8">
                <Badge variant="outline" className="mb-4 border-primary text-primary">
                  {featuredPost.category}
                </Badge>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {featuredPost.date}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-muted/50 border-y border-border sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={selectedCategory === category.toLowerCase() 
                    ? "hero-gradient text-primary-foreground" 
                    : "border-border hover:border-primary hover:text-primary"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.slice(1).map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="card-adventure group animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 left-4 bg-card/90 text-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Tag className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or category filter.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
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

export default Blog;
