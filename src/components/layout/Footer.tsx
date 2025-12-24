import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Successfully Subscribed!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Expansion Plans', path: '/expansion' },
    { name: 'Careers', path: '/contact#careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const projectLinks = [
    { name: 'Wayanad Properties', path: '/projects?location=wayanad' },
    { name: 'Bangalore Projects', path: '/projects?location=bangalore' },
    { name: 'Kochi Developments', path: '/projects?location=kochi' },
    { name: 'Middle East Ventures', path: '/projects?location=middleeast' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-forest text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Stay Updated with GreenVista
              </h3>
              <p className="text-primary-foreground/70">
                Subscribe to receive updates on new projects, sustainability initiatives, and exclusive offers.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-5 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold w-full sm:w-72"
              />
              <Button variant="hero" size="lg" type="submit">
                Subscribe <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-foreground">G</span>
              </div>
              <div>
                <span className="text-xl font-serif font-bold block">GreenVista</span>
                <span className="text-xs tracking-widest uppercase text-primary-foreground/60">Developers</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Building tomorrow's green havens. We create sustainable, innovative living spaces that harmonize with nature while embracing cutting-edge technology.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Projects</h4>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-primary-foreground/60">Certifications</h4>
              <div className="flex gap-4">
                <div className="px-3 py-2 rounded bg-primary-foreground/10 text-xs font-medium">
                  LEED Certified
                </div>
                <div className="px-3 py-2 rounded bg-primary-foreground/10 text-xs font-medium">
                  IGBC Member
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>Green Vista Tower, Sultan Bathery Road, Wayanad, Kerala 673592</span>
                </a>
              </li>
              <li>
                <a href="tel:+914936123456" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>+91 4936 123 456</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@greenvistadevelopers.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>info@greenvistadevelopers.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} GreenVista Developers. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
