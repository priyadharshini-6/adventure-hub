import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Mountain, Sun, Moon, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isRTL, setIsRTL] = useState(false);
  const location = useLocation();

  // Initialize theme and RTL state based on document
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setIsRTL(document.documentElement.dir === "rtl");
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleRTL = () => {
    const newRTL = !isRTL;
    setIsRTL(newRTL);
    document.documentElement.dir = newRTL ? "rtl" : "ltr";
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/blog", label: "Blog" },
    { path: "/pricing", label: "Membership" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center transition-transform group-hover:scale-110">
              <Mountain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground hidden sm:block">
              Adventure Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`font-medium gap-1 ${
                    isActive("/") || isActive("/home-2")
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Home <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                <DropdownMenuItem asChild>
                  <Link to="/" className="cursor-pointer">Home Page 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/home-2" className="cursor-pointer">Home Page 2</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:text-primary"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* RTL Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleRTL}
              className="text-foreground hover:text-primary"
              title={isRTL ? "Switch to LTR" : "Switch to RTL"}
            >
              <Languages className="w-5 h-5" />
            </Button>

            <Link to="/dashboard" className="hidden md:block">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Dashboard
              </Button>
            </Link>

            <Link to="/login" className="hidden md:block">
              <Button className="hero-gradient text-primary-foreground hover:opacity-90">
                Sign In
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg font-medium ${
                  isActive("/") ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home Page 1
              </Link>
              <Link
                to="/home-2"
                className={`px-4 py-3 rounded-lg font-medium ${
                  isActive("/home-2") ? "bg-primary/10 text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home Page 2
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-medium ${
                    isActive(link.path) ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-2">
                <Link to="/dashboard" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-primary text-primary">
                    Dashboard
                  </Button>
                </Link>
                <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button className="w-full hero-gradient text-primary-foreground">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;