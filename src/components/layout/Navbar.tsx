import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Projects', 
    path: '/projects',
    submenu: [
      { name: 'All Projects', path: '/projects' },
      { name: 'Wayanad', path: '/projects?location=wayanad' },
      { name: 'Bangalore', path: '/projects?location=bangalore' },
      { name: 'Middle East', path: '/projects?location=middleeast' },
    ]
  },
  { name: 'Innovation', path: '/innovation' },
  { name: 'Expansion', path: '/expansion' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || !isHomePage
          ? 'bg-card/95 backdrop-blur-md shadow-elegant py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300",
              isScrolled || !isHomePage ? "bg-primary" : "bg-primary-foreground/20 backdrop-blur-sm"
            )}>
              <span className={cn(
                "text-xl font-serif font-bold",
                isScrolled || !isHomePage ? "text-primary-foreground" : "text-primary-foreground"
              )}>G</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg font-serif font-bold leading-tight transition-colors duration-300",
                isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
              )}>
                GreenVista
              </span>
              <span className={cn(
                "text-xs tracking-widest uppercase transition-colors duration-300",
                isScrolled || !isHomePage ? "text-muted-foreground" : "text-primary-foreground/70"
              )}>
                Developers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1",
                    location.pathname === link.path
                      ? isScrolled || !isHomePage
                        ? "text-primary bg-primary/10"
                        : "text-primary-foreground bg-primary-foreground/20"
                      : isScrolled || !isHomePage
                        ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Submenu */}
                {link.submenu && activeSubmenu === link.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[180px]">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant={isScrolled || !isHomePage ? "hero" : "hero-outline"} size="default" asChild>
              <Link to="/contact">Schedule VR Tour</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled || !isHomePage
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-card rounded-xl shadow-lg border border-border p-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact">Schedule VR Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
