import { MapPin, User, Menu } from "lucide-react";
import { useState } from "react";
import dailyBodegaLogo from "@/assets/daily-bodega-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top accent strip */}
      <div className="h-1 bg-primary" />
      
      {/* Main navigation */}
      <nav className="bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src={dailyBodegaLogo} alt="Daily Bodega" className="h-10" />
            </a>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Food
              </a>
              <a href="#products" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Drinks
              </a>
              <a href="#impact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Rewards
              </a>
              <a href="#contact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Order Now
              </a>
              <a href="#testimonials" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Our Story
              </a>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <MapPin className="h-4 w-4" />
                <span>Find a Store</span>
              </a>
              <button className="p-2 hover:bg-secondary rounded-full transition-colors">
                <User className="h-5 w-5 text-foreground" />
              </button>
              <button 
                className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a href="#products" className="block text-sm font-semibold text-foreground hover:text-primary">Food</a>
              <a href="#products" className="block text-sm font-semibold text-foreground hover:text-primary">Drinks</a>
              <a href="#impact" className="block text-sm font-semibold text-foreground hover:text-primary">Rewards</a>
              <a href="#contact" className="block text-sm font-semibold text-foreground hover:text-primary">Order Now</a>
              <a href="#testimonials" className="block text-sm font-semibold text-foreground hover:text-primary">Our Story</a>
              <a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
                <MapPin className="h-4 w-4" /> Find a Store
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
