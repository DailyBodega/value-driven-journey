import { Button } from "@/components/ui/button";

const PromoDeals = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Main promo card */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Big promo - left side */}
          <div className="lg:col-span-2 bg-gradient-to-br from-primary via-teal-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="mb-4">
                <span className="inline-block bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              <div className="mb-2">
                <span className="font-display text-6xl md:text-8xl font-black">FREE</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Essentials Package
              </h3>
              <p className="text-white/80 mb-6 max-w-md">
                Give residents access to essentials they rely on, with zero cost!
              </p>
              <Button
                variant="glass"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 font-bold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Claim Offer
              </Button>
            </div>
          </div>

          {/* Product cards - right side */}
          <div className="space-y-6">
            {/* Product card 1 */}
            <div className="bg-secondary rounded-2xl p-6 flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop"
                alt="Drinks and snacks"
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <span className="text-xs font-bold text-accent uppercase">Popular</span>
                <h4 className="font-display font-bold text-lg">Drink & Snack Pack</h4>
                <p className="text-sm text-muted-foreground mb-2">Stock up on classic favorites for free</p>
                <a href="#contact" className="text-primary font-semibold text-sm hover:underline">Schedule Consultation →</a>
              </div>
            </div>

            {/* Product card 2 */}
            <div className="bg-secondary rounded-2xl p-6 flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=150&h=150&fit=crop"
                alt="Hygiene and wellness products"
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <span className="text-xs font-bold text-primary uppercase">Healthy</span>
                <h4 className="font-display font-bold text-lg">Hygiene & Wellness Bundle</h4>
                <p className="text-sm text-muted-foreground mb-2">Instant access to must-haves</p>
                <a href="#contact" className="text-primary font-semibold text-sm hover:underline">Schedule Consultation →</a>
              </div>
            </div>

            {/* Product card 3 */}
            <div className="bg-secondary rounded-2xl p-6 flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&h=150&fit=crop"
                alt="Premium convenience"
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase">New</span>
                <h4 className="font-display font-bold text-lg">Premium Convenience</h4>
                <p className="text-sm text-muted-foreground mb-2">Complete convenience for modern living</p>
                <a href="#contact" className="text-primary font-semibold text-sm hover:underline">Schedule Consultation →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoDeals;
