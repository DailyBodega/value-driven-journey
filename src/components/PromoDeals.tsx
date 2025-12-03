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
                  Limited Time
                </span>
              </div>
              
              <div className="mb-2">
                <span className="font-display text-6xl md:text-8xl font-black">FREE</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                First Month of Service
              </h3>
              <p className="text-white/80 mb-6 max-w-md">
                Sign up now and get your first month completely free. No commitment, just great service for your team.
              </p>
              <Button 
                variant="glass" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 font-bold"
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
                alt="Energy drinks"
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <span className="text-xs font-bold text-accent uppercase">Popular</span>
                <h4 className="font-display font-bold text-lg">Energy Drink Bundle</h4>
                <p className="text-sm text-muted-foreground mb-2">Stock up on team favorites</p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">Shop Now →</a>
              </div>
            </div>

            {/* Product card 2 */}
            <div className="bg-secondary rounded-2xl p-6 flex gap-4 items-center">
              <img 
                src="https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=150&h=150&fit=crop"
                alt="Healthy snacks"
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <span className="text-xs font-bold text-primary uppercase">Healthy</span>
                <h4 className="font-display font-bold text-lg">Wellness Pack</h4>
                <p className="text-sm text-muted-foreground mb-2">Better-for-you options</p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">Shop Now →</a>
              </div>
            </div>

            {/* Product card 3 */}
            <div className="bg-secondary rounded-2xl p-6 flex gap-4 items-center">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&h=150&fit=crop"
                alt="Coffee"
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase">New</span>
                <h4 className="font-display font-bold text-lg">Premium Coffee</h4>
                <p className="text-sm text-muted-foreground mb-2">Fresh cold brew daily</p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">Shop Now →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoDeals;
