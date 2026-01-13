import { Link } from "react-router-dom";
import { Mountain, Wrench, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-lg">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="w-24 h-24 rounded-2xl hero-gradient flex items-center justify-center">
            <Mountain className="w-12 h-12 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center animate-pulse">
            <Wrench className="w-5 h-5 text-secondary-foreground" />
          </div>
        </div>
        
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          We'll Be Back Soon!
        </h1>
        
        <p className="text-muted-foreground mb-8 text-lg">
          We're currently performing scheduled maintenance to improve your experience.
          Our trails will be open again shortly.
        </p>
        
        <div className="card-adventure p-6 mb-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <Clock className="w-5 h-5" />
            <span>Expected downtime: ~2 hours</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Get notified when we're back:
          </p>
          
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              className="flex-1"
            />
            <Button className="btn-adventure">
              <Mail className="w-4 h-4 mr-2" /> Notify Me
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Need immediate assistance?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:support@adventureclub.com" className="text-primary hover:underline">
              support@adventureclub.com
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="tel:+1234567890" className="text-primary hover:underline">
              +1 (234) 567-890
            </a>
          </div>
        </div>
        
        <p className="mt-12 text-xs text-muted-foreground">
          © 2026 ASR Adventure Club. Powered by <span className="text-primary font-semibold">ASR</span>
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
