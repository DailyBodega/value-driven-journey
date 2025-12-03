import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import dailyBodegaLogo from "@/assets/daily-bodega-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <section id="contact" className="border-b border-white/10">
        <div className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
              Ready to Start?
            </span>
            <h2 className="mb-6 font-display text-4xl font-bold">
              Let's Take Care of Your People
            </h2>
            <p className="mb-8 text-lg text-white/70">
              No pressure, no hard sell. Just a conversation about what your team needs.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="xl" className="group">
                Schedule Free Consultation
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-foreground">
                <Mail className="mr-2 h-5 w-5" />
                hello@nourishpoint.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={dailyBodegaLogo} alt="Daily Bodega" className="h-12" />
            <p className="mt-4 max-w-md text-white/70">
              We believe that when you invest in your people's wellbeing, everything else falls into place.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" />(555) 123-4567</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" />hello@nourishpoint.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />Nationwide service</div>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#impact" className="hover:text-white">Our Impact</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#testimonials" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Daily Bodega. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
