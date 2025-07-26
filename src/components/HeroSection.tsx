import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Students studying together" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Gateway to
          <span className="block bg-gradient-accent bg-clip-text text-transparent">Educational Excellence</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Eternal Mindbrains helps students achieve their dreams through expert admission guidance, seamless application
          processing, and comprehensive visa support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-4 hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="#services">Learn More</a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-lg opacity-90">Successful Admissions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">95%</div>
            <div className="text-lg opacity-90">Visa Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">10+</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
