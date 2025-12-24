import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Video, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const ctaOptions = [
    {
      icon: Video,
      title: 'VR Tour',
      description: 'Experience properties virtually',
      action: 'Schedule Now',
      link: '/contact?type=vr-tour',
      primary: true,
    },
    {
      icon: Calendar,
      title: 'Site Visit',
      description: 'Visit our projects in person',
      action: 'Book Visit',
      link: '/contact?type=site-visit',
    },
    {
      icon: FileText,
      title: 'Brochure',
      description: 'Download detailed project info',
      action: 'Download',
      link: '/projects#brochures',
    },
    {
      icon: Phone,
      title: 'Callback',
      description: 'Request a call from our team',
      action: 'Get Called',
      link: '/contact?type=callback',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-card rounded-3xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Main CTA */}
            <div className="p-8 md:p-12 lg:p-16 bg-gradient-forest text-primary-foreground">
              <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
                Ready to Begin?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                Your Dream Home<br />Awaits
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Take the first step towards sustainable luxury living. Our team of experts 
                is ready to guide you through every step of your property journey.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm text-primary-foreground/70">LEED Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm text-primary-foreground/70">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm text-primary-foreground/70">2000+ Happy Families</span>
                </div>
              </div>

              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Journey <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Right Side - Quick Actions */}
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-xl font-serif font-bold text-foreground mb-8">
                Quick Connect Options
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ctaOptions.map((option) => (
                  <Link
                    key={option.title}
                    to={option.link}
                    className={`group p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                      option.primary 
                        ? 'bg-primary/5 border-primary hover:bg-primary hover:text-primary-foreground' 
                        : 'bg-card border-border hover:border-primary hover:shadow-md'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      option.primary 
                        ? 'bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary' 
                        : 'bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                      <option.icon className="w-5 h-5" />
                    </div>
                    <h4 className={`font-semibold mb-1 ${option.primary ? '' : 'text-foreground'} group-hover:text-inherit`}>
                      {option.title}
                    </h4>
                    <p className={`text-sm mb-3 ${option.primary ? 'text-primary/70 group-hover:text-primary-foreground/70' : 'text-muted-foreground group-hover:text-inherit/70'}`}>
                      {option.description}
                    </p>
                    <span className={`text-sm font-medium flex items-center gap-2 ${option.primary ? 'text-primary group-hover:text-primary-foreground' : 'text-primary'}`}>
                      {option.action}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Or call us directly at
                </p>
                <a 
                  href="tel:+914936123456" 
                  className="text-2xl font-serif font-bold text-primary hover:text-forest-light transition-colors"
                >
                  +91 4936 123 456
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
