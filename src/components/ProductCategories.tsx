import { useState } from "react";
import { Coffee, Apple, Pill, User, Smartphone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  bgColor: string;
}

const categories: Category[] = [
  { id: "drinks", icon: <Coffee className="h-8 w-8" />, title: "Drinks", tagline: "Stay refreshed", description: "Energy drinks, cold brew, sparkling water, and more.", items: ["Bottled Water", "Energy Drinks", "Cold Brew Coffee", "Protein Shakes", "Sparkling Water", "Premium Teas"], bgColor: "bg-blue-500" },
  { id: "snacks", icon: <Apple className="h-8 w-8" />, title: "Snacks", tagline: "Satisfy cravings", description: "All your favorite treats ready when you need them.", items: ["Premium Chips", "Candy Bars", "Fresh Cookies", "Protein Bars", "Beef Jerky", "Other Sweet & Savory Snacks"], bgColor: "bg-amber-500" },
  { id: "health", icon: <Pill className="h-8 w-8" />, title: "Health Essentials", tagline: "Relief when needed", description: "Quick relief so no one has to leave.", items: ["Pain Relievers", "Allergy Medicine", "Cold Relief", "Digestive Aids", "First Aid", "Immune Support"], bgColor: "bg-red-500" },
  { id: "personal", icon: <User className="h-8 w-8" />, title: "Personal Care", tagline: "Be prepared", description: "Life happens. We've got your back.", items: ["Toothbrush", "Deodorant", "Hand Sanitizer", "Lip Balm", "Hair Ties", "Feminine Products"], bgColor: "bg-pink-500" },
  { id: "tech", icon: <Smartphone className="h-8 w-8" />, title: "Tech & Essentials", tagline: "Stay connected", description: "Keep your team powered up.", items: ["Phone Chargers", "Earbuds", "Batteries", "Screen Cleaners", "USB Cables", "Tissues"], bgColor: "bg-purple-500" },
];

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState("drinks");
  const active = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            What We Provide
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground">
            Everything Your Team Needs
          </h2>
          <p className="text-lg text-muted-foreground">
            From energy to emergencies—we've got it covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                )}
              >
                <div className={cn(
                  "p-3 rounded-lg",
                  activeCategory === category.id ? "bg-white/20" : "bg-white"
                )}>
                  <div className={activeCategory === category.id ? "text-white" : "text-primary"}>
                    {category.icon}
                  </div>
                </div>
                <div>
                  <p className="font-display font-bold">{category.title}</p>
                  <p className={cn("text-sm", activeCategory === category.id ? "text-white/80" : "text-muted-foreground")}>
                    {category.tagline}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className={cn("rounded-3xl p-8 text-white", active.bgColor)}>
              <div className="mb-6">
                <h3 className="font-display text-3xl font-bold mb-2">{active.title}</h3>
                <p className="text-white/90">{active.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {active.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white/20 rounded-lg p-3">
                    <ChevronRight className="h-5 w-5" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="glass"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
