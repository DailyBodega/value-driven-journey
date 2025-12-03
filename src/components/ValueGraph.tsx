import { useEffect, useState, useRef } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const productivityData = [
  { month: "Jan", before: 72, after: 72 },
  { month: "Feb", before: 71, after: 76 },
  { month: "Mar", before: 73, after: 81 },
  { month: "Apr", before: 70, after: 84 },
  { month: "May", before: 72, after: 88 },
  { month: "Jun", before: 71, after: 91 },
  { month: "Jul", before: 74, after: 93 },
  { month: "Aug", before: 72, after: 95 },
];

const satisfactionData = [
  { category: "Work-Life Balance", score: 87 },
  { category: "Feeling Valued", score: 94 },
  { category: "Break Quality", score: 91 },
  { category: "Overall Morale", score: 89 },
  { category: "Team Bonding", score: 85 },
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
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground">See the Transformation</h2>
          <p className="text-lg text-muted-foreground">Real data from real organizations.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Productivity Index</h3>
            <p className="text-muted-foreground text-sm mb-6">Average team productivity over time</p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={productivityData}>
                  <defs>
                    <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis domain={[60, 100]} stroke="#9ca3af" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                  <Line type="monotone" dataKey="before" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Before" />
                  <Area type="monotone" dataKey="after" stroke="#22c55e" strokeWidth={3} fill="url(#colorAfter)" name="After NourishPoint" dot={{ fill: "#22c55e", r: 4 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Employee Satisfaction</h3>
            <p className="text-muted-foreground text-sm mb-6">Survey results from partners</p>
            <div className="space-y-5">
              {satisfactionData.map((item, index) => (
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
              <p className="font-display text-4xl font-bold">89%</p>
              <p className="text-sm text-white/80">Average satisfaction increase</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { value: "$2.3M", label: "Saved in turnover costs", sub: "per 1,000 employees annually" },
            { value: "18 min", label: "More break room time", sub: "connecting with colleagues" },
            { value: "67%", label: "Less afternoon slumps", sub: "with healthy options" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 font-semibold text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueGraph;
