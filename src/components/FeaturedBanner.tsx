import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-teal-600 to-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block bg-white/20 text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              Partner Program
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Fuel Up &<br />Save Big
            </h2>
            <p className="text-white/80 text-lg mb-6 max-w-md">
              Join our rewards program and unlock exclusive discounts, early access to new products, and premium support for your workplace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="glass" size="lg" className="bg-white text-primary hover:bg-white/90 group">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-white/10 rounded-full absolute -top-8 -right-8" />
              <div className="w-64 h-64 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 relative">
                <p className="font-display text-6xl font-bold text-primary mb-2">25%</p>
                <p className="text-center text-muted-foreground font-semibold">Average savings for partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
