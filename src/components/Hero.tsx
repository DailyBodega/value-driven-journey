import { useState } from "react";
import { Button } from "@/components/ui/button";
import hygieneHeader from "@/assets/hygiene-header.webp";
import snacksHeader from "@/assets/snacks-header.png";
import otcHeader from "@/assets/otc-header.png";
import dailyBodegaLogo from "@/assets/daily-bodega-logo.png";

const productImages = [
  { src: snacksHeader, alt: "Snacks and treats - chips, candy, protein bars and more", label: "Snacks" },
  { src: hygieneHeader, alt: "Personal care and hygiene products - shampoo, toothpaste, deodorant", label: "Hygiene" },
  { src: otcHeader, alt: "Wellness products and essentials", label: "Wellness" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        {/* Wood texture right side */}
        <div className="absolute inset-0 wood-bg" />
        {/* Green diagonal overlay */}
        <div 
          className="absolute inset-0 bg-primary"
          style={{
            clipPath: 'polygon(0 0, 55% 0, 40% 100%, 0% 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 min-h-[70vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left side - Text content */}
          <div className="text-white max-w-md">
            {/* Logo/Brand */}
            <div className="mb-6">
              <img 
                src={dailyBodegaLogo} 
                alt="Daily Bodega" 
                className="h-20 md:h-24"
              />
            </div>
            
            {/* Main headline with script font */}
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="font-script">Fuel Your Team,</span>
              <br />
              <span className="font-display">Every Day</span>
            </h1>
            
            <p className="mb-8 text-lg text-white/90">
              Premium snacks, drinks, and essentials at your convenience. Because your team deserves the best.
            </p>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="bg-white text-foreground hover:bg-white/90 rounded-full px-8 font-bold shadow-lg"
            >
              Shop Now
            </Button>
          </div>

          {/* Right side - Product carousel with thumbnails */}
          <div className="hidden lg:flex flex-col justify-center items-center gap-6">
            {/* Main image */}
            <div className="relative w-full flex justify-center items-center" style={{ minHeight: '350px' }}>
              <img 
                src={productImages[activeIndex].src}
                alt={productImages[activeIndex].alt}
                className="max-w-full h-auto object-contain drop-shadow-2xl transition-opacity duration-300"
                style={{ maxHeight: '350px' }}
              />
            </div>

            {/* Thumbnail previews */}
            <div className="flex gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative p-1 rounded-lg transition-all duration-200 ${
                    activeIndex === index 
                      ? 'ring-2 ring-white bg-white/20 scale-105' 
                      : 'bg-white/10 hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  <img 
                    src={image.src}
                    alt={image.label}
                    className="w-16 h-12 object-contain rounded"
                  />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/80 whitespace-nowrap">
                    {image.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
