import { Instagram, Twitter, Facebook, Youtube, MapPin, ArrowRight } from "lucide-react";

const SocialStoreLocator = () => {
  const socials = [
    { icon: <Instagram className="h-8 w-8" />, name: "Instagram", href: "#" },
    { icon: <Twitter className="h-8 w-8" />, name: "Twitter", href: "#" },
    { icon: <Facebook className="h-8 w-8" />, name: "Facebook", href: "#" },
    { icon: <Youtube className="h-8 w-8" />, name: "YouTube", href: "#" },
  ];

  return (
    <>
      {/* Social Icons */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  {social.icon}
                </div>
                <span className="text-sm font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator */}
      <section className="bg-foreground">
        <a
          href="#contact"
          className="container mx-auto px-6 py-5 flex items-center justify-center gap-4 text-white hover:bg-white/5 transition-colors"
        >
          <MapPin className="h-5 w-5" />
          <span className="font-semibold">Find a Service Location</span>
          <ArrowRight className="h-5 w-5" />
        </a>
      </section>
    </>
  );
};

export default SocialStoreLocator;
