import { useEffect, useState, useRef } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const frequencyData = [
  { frequency: "Multiple times/day", percent: 3.8 },
  { frequency: "Daily", percent: 9.4 },
  { frequency: "Multiple times/week", percent: 29.9 },
  { frequency: "Once a week", percent: 25.7 },
  { frequency: "Once a week or more", percent: 68.8 },
];

const expectationsData = [
  { category: "Shoppers Visiting a C-Store", score: 96 },
  { category: "Visit Weekly or More", score: 68 },
  { category: "Prefer Self-Checkout", score: 77 },
  { category: "Want Time-Saving Amenities", score: 88 },
  { category: "Prioritize Smart Tech Over Pools/Gyms", score: 58 },
];

const ValueGraph = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            The Data
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground">See the Convenience Economy</h2>
          <p className="text-lg text-muted-foreground">Real data from real shoppers.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">C-store Frequency Index</h3>
            <p className="text-muted-foreground text-sm mb-6">Visit frequency among U.S. convenience-store shoppers.</p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={frequencyData}>
                  <defs>
                    <linearGradient id="colorPercent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="frequency" stroke="#9ca3af" fontSize={10} angle={-15} textAnchor="end" height={60} />
                  <YAxis stroke="#9ca3af" fontSize={12} tickFormatter={(value) => `${value}%`} label={{ value: '% of Shoppers', angle: -90, position: 'insideLeft', fontSize: 12, fill: '#9ca3af' }} />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }} formatter={(value: number) => [`${value}%`, '% of Shoppers']} />
                  <Area type="monotone" dataKey="percent" stroke="#22c55e" strokeWidth={3} fill="url(#colorPercent)" name="% of Shoppers" dot={{ fill: "#22c55e", r: 4 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Convenience Expectations</h3>
            <p className="text-muted-foreground text-sm mb-6">Survey results from shoppers & residents</p>
            <div className="space-y-5">
              {expectationsData.map((item, index) => (
                <div key={item.category}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{item.category}</span>
                    <span className="text-sm font-bold text-primary">{item.score}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? `${item.score}%` : "0%", transitionDelay: `${index * 150}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-primary rounded-xl p-6 text-center text-white">
              <p className="font-display text-4xl font-bold">&gt;70%</p>
              <p className="text-sm text-white/80">Live by speed and convenience</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <p className="font-display text-3xl font-bold text-primary">$4,000+</p>
            <p className="mt-2 font-semibold text-foreground">Average Cost per Move-Out</p>
            <p className="text-sm text-muted-foreground">per unit in multifamily</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center mb-4 pb-4 border-b border-border">
              <p className="font-display text-3xl font-bold text-primary">68.8%</p>
              <p className="mt-2 font-semibold text-foreground">Visit Convenience Stores Weekly</p>
              <p className="text-sm text-muted-foreground">at least once a week</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">92%</p>
              <p className="mt-2 font-semibold text-foreground">Buy Food & Drinks at C-Stores</p>
              <p className="text-sm text-muted-foreground">not just fuel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueGraph;
