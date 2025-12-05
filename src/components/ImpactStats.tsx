import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Clock, Smile, ShoppingCart, Home } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  displayValue: string;
  label: string;
  description: string;
}

const StatCard = ({ icon, displayValue, label, description }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-border ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="mb-2">
        <span className="font-display text-4xl font-bold text-foreground">
          {displayValue}
        </span>
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{label}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const ImpactStats = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, displayValue: "10M+", label: "Daily Users", description: "Americans using self-checkout every day." },
    { icon: <TrendingUp className="h-6 w-6" />, displayValue: "165M", label: "Daily Convenience Visits", description: "U.S. convenience-store visits per day." },
    { icon: <ShoppingCart className="h-6 w-6" />, displayValue: "73%", label: "Prefer Self-Checkout", description: "Most shoppers choose self-checkout and use it every day." },
    { icon: <Clock className="h-6 w-6" />, displayValue: "< 4 Minutes", label: "Typical Errand Time", description: "A convenience shopper is done in under 4 minutes." },
    { icon: <Smile className="h-6 w-6" />, displayValue: "57%", label: "Will Pay More for One-Stop Access", description: "Consumers pay more for quick, one-stop buying." },
    { icon: <Home className="h-6 w-6" />, displayValue: "88%", label: "Residents Want Time-Saving Amenities", description: "Most renters want amenities that save time." },
  ];

  return (
    <section id="impact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Our Impact
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground">
            Convenience Matters
          </h2>
          <p className="text-lg text-muted-foreground">
            Residents already live in a convenience economy. We bring it downstairs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
