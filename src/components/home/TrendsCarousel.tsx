import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Leaf, Building2, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import innovationImg from '@/assets/innovation.jpg';
import greenBuildingImg from '@/assets/green-building.jpg';

const trends = [
  {
    id: 1,
    icon: Cpu,
    title: 'Innovation & Technology',
    subtitle: 'Building Smarter',
    description: 'We leverage AI-driven design, BIM software, and modular construction techniques to deliver projects faster, with precision and reduced waste.',
    features: ['AI-Optimized Layouts', 'Modular Construction', 'BIM Integration', '3D Visualization'],
    image: innovationImg,
    link: '/innovation#technology',
  },
  {
    id: 2,
    icon: Leaf,
    title: 'Green Building',
    subtitle: 'Sustainable by Design',
    description: 'Every GreenVista project is designed with the planet in mind. From LEED certifications to solar integration and rainwater harvesting, we set the standard for eco-conscious development.',
    features: ['LEED Certified', 'Solar Integration', 'Rainwater Harvesting', 'Zero-Waste Goals'],
    image: greenBuildingImg,
    link: '/innovation#green',
  },
  {
    id: 3,
    icon: Building2,
    title: 'Integrated Townships',
    subtitle: 'Complete Communities',
    description: 'Our townships blend residential, retail, and recreational spaces into walkable, self-sufficient communities that reduce commutes and enhance quality of life.',
    features: ['Mixed-Use Design', 'Walkable Communities', 'Green Spaces', 'Retail Integration'],
    image: innovationImg,
    link: '/innovation#townships',
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Customer-Centric Tech',
    subtitle: 'Your Home, Your Way',
    description: 'Experience your future home before it\'s built with VR tours, customize finishes through our app, and enjoy smart home integration from day one.',
    features: ['360° VR Tours', 'Smart Home Apps', 'AR Previews', 'Personalized Configurators'],
    image: greenBuildingImg,
    link: '/innovation#tech',
  },
];

const TrendsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % trends.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + trends.length) % trends.length);
  };

  const activeTrend = trends[activeIndex];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
            Leading the Industry
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Trends Driving Our Vision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We stay ahead of the curve by embracing innovations that define the future of real estate development.
          </p>
        </div>

        {/* Carousel Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {trends.map((trend, index) => (
            <button
              key={trend.id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-primary text-primary-foreground shadow-forest'
                  : 'bg-card text-foreground hover:bg-primary/10'
              }`}
            >
              <trend.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{trend.title}</span>
            </button>
          ))}
        </div>

        {/* Main Carousel Content */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative animate-fade-in" key={activeTrend.id}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={activeTrend.image} 
                  alt={activeTrend.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Icon */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-gold shadow-gold flex items-center justify-center">
                <activeTrend.icon className="w-10 h-10 text-foreground" />
              </div>
            </div>

            {/* Content Side */}
            <div className="animate-slide-right" key={`content-${activeTrend.id}`}>
              <span className="text-sm font-semibold text-ocean uppercase tracking-widest mb-2 block">
                {activeTrend.subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                {activeTrend.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {activeTrend.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {activeTrend.features.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant="default" size="lg" asChild>
                <Link to={activeTrend.link}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Arrow Navigation */}
          <div className="flex justify-center gap-4 mt-12 lg:mt-0 lg:absolute lg:-bottom-20 lg:left-1/2 lg:-translate-x-1/2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {trends.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-primary' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendsCarousel;
