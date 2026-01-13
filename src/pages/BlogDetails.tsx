import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-mountain.jpg";
import hikingGroup from "@/assets/hiking-group.jpg";

const BlogDetails = () => {
  const { id } = useParams();

  // Mock data
  const post = {
    id: 1,
    title: "10 Essential Hiking Tips for Beginners",
    excerpt: "Starting your hiking journey? Here are the most important things every beginner should know before hitting the trails.",
    image: hikingGroup,
    author: "Sarah Johnson",
    authorRole: "Lead Guide",
    date: "January 10, 2026",
    category: "Hiking",
    readTime: "5 min read",
    content: `
Starting your hiking journey can be both exciting and overwhelming. With so many trails to explore and gear to consider, it's easy to feel lost before you even hit the path. Here are our top 10 tips to help you get started on the right foot.

## 1. Start Small and Build Up

Don't try to tackle a 20-mile trail on your first outing. Begin with shorter, well-marked trails and gradually increase difficulty as you build stamina and confidence. A 2-3 mile hike is perfect for beginners.

## 2. Invest in Good Footwear

Your feet are your most important hiking equipment. Invest in quality hiking boots or trail shoes that provide proper ankle support and grip. Break them in before any long hikes to prevent blisters.

## 3. Check the Weather

Always check the forecast before heading out. Weather in mountainous areas can change rapidly. Be prepared for conditions to shift and know when to turn back if conditions become dangerous.

## 4. Tell Someone Your Plans

Always let someone know where you're going and when you expect to return. This is a crucial safety measure that could save your life in an emergency.

## 5. Pack the 10 Essentials

Every hiker should carry these items:
- Navigation (map and compass)
- Sun protection
- Insulation (extra clothing)
- Illumination (headlamp)
- First-aid supplies
- Fire starting materials
- Repair tools and knife
- Nutrition (extra food)
- Hydration (extra water)
- Emergency shelter

## 6. Stay Hydrated and Fueled

Drink water regularly, even if you don't feel thirsty. Bring snacks high in protein and carbohydrates to maintain energy levels throughout your hike.

## 7. Leave No Trace

Respect nature by following Leave No Trace principles. Pack out all trash, stay on marked trails, and be mindful of wildlife.

## 8. Know Your Limits

There's no shame in turning back. If you're feeling exhausted, the weather turns bad, or conditions seem unsafe, it's always better to try again another day.

## 9. Hike with Others

Especially as a beginner, hiking with experienced friends or joining a hiking club provides safety in numbers and the opportunity to learn from others.

## 10. Enjoy the Journey

Finally, remember that hiking isn't just about reaching the destination. Take time to appreciate the scenery, listen to nature, and enjoy the physical and mental benefits of being outdoors.

## Ready to Start?

Join Adventure Club's beginner-friendly hikes to put these tips into practice with experienced guides by your side. We offer weekly events perfect for those just starting their outdoor journey.
    `,
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Best Camping Spots in the Mountain Region",
      image: heroImage,
      date: "Jan 8, 2026",
    },
    {
      id: 6,
      title: "Winter Hiking: Staying Warm and Safe",
      image: heroImage,
      date: "Dec 25, 2025",
    },
  ];

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-[40vh] min-h-[300px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
              </Button>
            </Link>

            <Badge variant="outline" className="mb-4 border-primary text-primary">
              {post.category}
            </Badge>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </span>
              </div>
            </div>

            {/* Article Body */}
            <article className="prose prose-lg max-w-none text-foreground prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-6">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                } else if (paragraph.trim()) {
                  return <p key={index} className="mb-4">{paragraph}</p>;
                }
                return null;
              })}
            </article>

            {/* Share Section */}
            <div className="flex items-center gap-4 pt-8 mt-8 border-t border-border">
              <span className="font-semibold text-foreground">Share:</span>
              <Button variant="outline" size="icon" className="border-border">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-border">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-border">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="card-adventure group flex gap-4 p-4"
              >
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {relatedPost.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetails;
