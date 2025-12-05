import { Menu } from "lucide-react";
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
          <div className="flex items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src={dailyBodegaLogo} alt="Daily Bodega" className="h-10" />
            </a>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              <a href="#products" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Selections
              </a>
              <a href="#impact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Insights
              </a>
              <a href="#contact" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#testimonials" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Our Story
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-full transition-colors ml-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a href="#products" className="block text-sm font-semibold text-foreground hover:text-primary">Selections</a>
              <a href="#impact" className="block text-sm font-semibold text-foreground hover:text-primary">Insights</a>
              <a href="#contact" className="block text-sm font-semibold text-foreground hover:text-primary">Contact</a>
              <a href="#testimonials" className="block text-sm font-semibold text-foreground hover:text-primary">Our Story</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
