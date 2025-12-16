import { useState } from "react";
import { Button } from "@/components/ui/button";
import hygieneHeader from "@/assets/hygiene-header.webp";
import snacksHeader from "@/assets/snacks-header.png";
import otcHeader from "@/assets/otc-header.png";
import drinksHeader from "@/assets/drinks.webp";
import techHeader from "@/assets/tech.webp";
import mealsHeader from "@/assets/meals.jpg";
import dailyBodegaLogo from "@/assets/daily-bodega-logo.png";

const productImages = [
  { src: mealsHeader, alt: "Frozen meals - burritos, pasta, rice bowls and more", label: "Meals" },
  { src: snacksHeader, alt: "Snacks and treats - chips, candy, protein bars and more", label: "Snacks" },
  { src: hygieneHeader, alt: "Personal care and hygiene products - shampoo, toothpaste, deodorant", label: "Hygiene" },
  { src: otcHeader, alt: "Wellness products and essentials", label: "Wellness" },
  { src: drinksHeader, alt: "Drinks - water, energy drinks, coffee and beverages", label: "Drinks" },
  { src: techHeader, alt: "Tech accessories - chargers, earbuds, cables and more", label: "Tech" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-[100vh] lg:min-h-[70vh] overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        {/* Wood texture right side */}
        <div className="absolute inset-0 wood-bg" />
        {/* Green diagonal overlay - horizontal on mobile, diagonal on desktop */}
        <div
          className="absolute inset-0 bg-primary lg:hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0% 65%)',
          }}
        />
        <div
          className="absolute inset-0 bg-primary hidden lg:block"
          style={{
            clipPath: 'polygon(0 0, 55% 0, 40% 100%, 0% 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 lg:py-12 min-h-[100vh] lg:min-h-[70vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full">
          {/* Left side - Text content */}
          <div className="text-white max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            {/* Logo/Brand */}
            <div className="mb-4 lg:mb-6 flex justify-center lg:justify-start">
              <img
                src={dailyBodegaLogo}
                alt="Daily Bodega"
                className="h-16 sm:h-20 md:h-24"
              />
            </div>

            {/* Main headline with script font */}
            <h1 className="mb-4 lg:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="font-script">Less Friction,</span>
              <br />
              <span className="font-display">More Satisfaction</span>
            </h1>

            <p className="mb-6 lg:mb-8 text-base sm:text-lg text-white/90">
              The amenity residents feel, every day.
            </p>

            <Button
              variant="glass"
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 rounded-full px-6 sm:px-8 font-bold shadow-lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore
            </Button>
          </div>

          {/* Right side - Product carousel with thumbnails */}
          <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 mt-6 lg:mt-0">
            {/* Main image */}
            <div className="relative w-full flex justify-center items-center min-h-[200px] sm:min-h-[280px] lg:min-h-[350px]">
              <img
                src={productImages[activeIndex].src}
                alt={productImages[activeIndex].alt}
                className="max-w-full h-auto object-contain drop-shadow-2xl transition-opacity duration-300 max-h-[200px] sm:max-h-[280px] lg:max-h-[350px]"
              />
            </div>

            {/* Thumbnail previews */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-6 px-2 max-w-full">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative p-1 rounded-lg transition-all duration-200 flex-shrink-0 ${
                    activeIndex === index
                      ? 'ring-2 ring-white bg-white/20 scale-105'
                      : 'bg-white/10 hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.label}
                    className="w-12 h-9 sm:w-16 sm:h-12 object-contain rounded"
                  />
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-white/80 whitespace-nowrap">
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
