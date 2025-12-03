import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  { id: 1, quote: "We didn't realize how much time our team was losing until we solved it. People used to leave for coffee runs—now everything they need is right there.", author: "Sarah Chen", role: "CEO", company: "TechFlow Solutions", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face", metric: "32%", metricLabel: "Less break time" },
  { id: 2, quote: "Our employees started calling the break room 'the oasis.' 94% said having quality snacks available made them feel more cared for.", author: "Marcus Williams", role: "Founder", company: "Bright Manufacturing", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", metric: "94%", metricLabel: "Feel valued" },
  { id: 3, quote: "We're a 24/7 hospital. Our staff works grueling shifts. Having healthy options available around the clock isn't a perk—it's essential.", author: "Dr. Emily Rodriguez", role: "CMO", company: "Metro Health", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face", metric: "24/7", metricLabel: "Staff support" },
  { id: 4, quote: "When my team started staying later, collaborating more, and using the break room as a gathering space—that told me everything.", author: "James Park", role: "Owner", company: "Park & Associates", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", metric: "47%", metricLabel: "More collaboration" },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => { setIsAutoPlaying(false); setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); };
  const goToNext = () => { setIsAutoPlaying(false); setActiveIndex((prev) => (prev + 1) % testimonials.length); };
  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Success Stories
          </span>
          <h2 className="mb-4 font-display text-4xl font-bold">
            Leaders Who Chose to Care
          </h2>
          <p className="text-lg text-white/80">
            Real stories from real leaders who transformed their workplaces.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-foreground shadow-2xl">
            <Quote className="h-12 w-12 text-primary/20 mb-6" />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
              "{active.quote}"
            </blockquote>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <img src={active.image} alt={active.author} className="h-16 w-16 rounded-full object-cover ring-4 ring-primary/20" />
                <div>
                  <p className="font-display font-bold text-lg">{active.author}</p>
                  <p className="text-muted-foreground">{active.role}, {active.company}</p>
                </div>
              </div>
              <div className="bg-primary rounded-2xl px-6 py-4 text-center text-white">
                <p className="font-display text-3xl font-bold">{active.metric}</p>
                <p className="text-sm text-white/80">{active.metricLabel}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={goToPrev} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setIsAutoPlaying(false); setActiveIndex(index); }}
                  className={cn("h-2 rounded-full transition-all", index === activeIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60")}
                />
              ))}
            </div>
            <button onClick={goToNext} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
