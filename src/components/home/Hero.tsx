import { Link } from 'react-router-dom';
import { ArrowRight, Play, Leaf, Building2, Cpu, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-wayanad.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen max-h-[900px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury eco-villa nestled in Wayanad's lush tea plantations at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-gold/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-20 w-32 h-32 rounded-full bg-ocean/20 blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-5 animate-fade-up">
            <Leaf className="w-4 h-4 text-gold" />
            <span className="text-sm text-primary-foreground/90">LEED Certified Green Developer</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-5 animate-fade-up delay-100">
            Building Tomorrow's{' '}
            <span className="text-gold">Green Havens</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed animate-fade-up delay-200">
            Discover luxury living that harmonizes with nature. From the misty hills of Wayanad to 
            the vibrant cities of India and beyond, we create sustainable communities for the modern world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/projects">
                Explore Projects <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Play className="w-5 h-5 group-hover:text-gold transition-colors" />
              Watch VR Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-400">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '2000+', label: 'Happy Families' },
              { value: '40%', label: 'Energy Savings' },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <div className="hidden lg:block absolute bottom-28 left-1/2 -translate-x-1/2 z-10 animate-pulse-slow">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
          </div>
        </div>
      </div>

      {/* Trend Icons - Bottom Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { icon: Cpu, label: 'Innovation', desc: 'AI & Modular Design' },
              { icon: Leaf, label: 'Green Building', desc: 'LEED Certified' },
              { icon: Building2, label: 'Townships', desc: 'Integrated Living' },
              { icon: Smartphone, label: 'Smart Tech', desc: 'VR Tours & Apps' },
            ].map((item, index) => (
              <Link 
                key={index}
                to="/innovation"
                className="flex items-center gap-4 py-5 px-4 md:px-6 hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="hidden sm:block">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
