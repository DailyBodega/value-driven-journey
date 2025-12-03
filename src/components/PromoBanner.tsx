import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="bg-primary py-3">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center">
        <span className="font-bold">We're Hiring!</span>
        <span className="text-white/80">Join our team and help fuel workplaces nationwide.</span>
        <Button variant="glass" size="sm" className="bg-white text-primary hover:bg-white/90">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default PromoBanner;
