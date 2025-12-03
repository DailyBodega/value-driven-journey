import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Clock, Smile, Coffee, Heart } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

const StatCard = ({ icon, value, suffix = "", prefix = "", label, description }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="mb-2">
        <span className="font-display text-4xl font-bold text-foreground">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{label}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const ImpactStats = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: 127500, label: "People Served Daily", description: "Employees who rely on us for daily fuel." },
    { icon: <TrendingUp className="h-6 w-6" />, value: 23, suffix: "%", label: "Productivity Boost", description: "Average increase in workplace productivity." },
    { icon: <Smile className="h-6 w-6" />, value: 94, suffix: "%", label: "Employee Satisfaction", description: "Workers feel more valued with quality options." },
    { icon: <Clock className="h-6 w-6" />, value: 45, label: "Minutes Saved Daily", description: "Time saved per employee on average." },
    { icon: <Coffee className="h-6 w-6" />, value: 89, suffix: "%", label: "Healthy Options Chosen", description: "People choose healthier when available." },
    { icon: <Heart className="h-6 w-6" />, value: 500, suffix: "+", label: "Happy Partners", description: "Organizations trust us with their people." },
  ];

  return (
    <section id="impact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Our Impact
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground">
            Numbers That Matter
          </h2>
          <p className="text-lg text-muted-foreground">
            We measure success in lives improved, not machines placed.
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
