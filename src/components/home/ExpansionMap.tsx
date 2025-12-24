import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    id: 'wayanad',
    name: 'Wayanad',
    country: 'India',
    status: 'Headquarters',
    projects: 12,
    description: 'Our roots in Kerala\'s pristine hills',
    position: { top: '45%', left: '58%' },
    isHQ: true,
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    country: 'India',
    status: 'Active Development',
    projects: 3,
    description: 'Tech hub expansion with North Bangalore focus',
    position: { top: '52%', left: '56%' },
  },
  {
    id: 'mysore',
    name: 'Mysore',
    country: 'India',
    status: 'Coming Soon',
    projects: 2,
    description: 'Heritage city developments',
    position: { top: '55%', left: '54%' },
  },
  {
    id: 'kochi',
    name: 'Kochi',
    country: 'India',
    status: 'Active Development',
    projects: 2,
    description: 'Coastal premium residences',
    position: { top: '58%', left: '55%' },
  },
  {
    id: 'calicut',
    name: 'Calicut',
    country: 'India',
    status: 'Planning Phase',
    projects: 1,
    description: 'North Kerala expansion',
    position: { top: '50%', left: '54%' },
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    status: 'Partnership',
    projects: 0,
    description: 'Middle East venture partnerships',
    position: { top: '42%', left: '45%' },
  },
  {
    id: 'abudhabi',
    name: 'Abu Dhabi',
    country: 'UAE',
    status: 'Exploring',
    projects: 0,
    description: 'Strategic market entry',
    position: { top: '44%', left: '44%' },
  },
];

const ExpansionMap = () => {
  return (
    <section className="py-24 bg-forest text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
            Growing Footprint
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Expanding Horizons
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            From our roots in Wayanad to emerging markets across India and the Middle East, 
            we're bringing sustainable luxury living to new horizons.
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className="relative mb-16">
          {/* Map Container */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] bg-forest-dark rounded-2xl overflow-hidden">
            {/* Simple Map Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {/* Lines from Wayanad to other locations */}
              <line x1="58%" y1="45%" x2="56%" y2="52%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
              <line x1="58%" y1="45%" x2="54%" y2="55%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
              <line x1="58%" y1="45%" x2="55%" y2="58%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
              <line x1="58%" y1="45%" x2="54%" y2="50%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
              <line x1="58%" y1="45%" x2="45%" y2="42%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
              <line x1="58%" y1="45%" x2="44%" y2="44%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
            </svg>

            {/* Location Markers */}
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute group cursor-pointer"
                style={{ top: location.position.top, left: location.position.left, zIndex: 10 }}
              >
                {/* Marker */}
                <div className={`relative ${location.isHQ ? 'animate-pulse-slow' : ''}`}>
                  <div className={`w-4 h-4 rounded-full ${
                    location.isHQ 
                      ? 'bg-gold' 
                      : location.status === 'Active Development'
                        ? 'bg-ocean'
                        : 'bg-primary-foreground/50'
                  } shadow-lg`}>
                    {location.isHQ && (
                      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-card text-foreground rounded-xl shadow-lg p-4 min-w-[200px] text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-bold">{location.name}</span>
                        <span className="text-xs text-muted-foreground">{location.country}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{location.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          location.status === 'Headquarters' 
                            ? 'bg-gold/20 text-gold-dark'
                            : location.status === 'Active Development'
                              ? 'bg-ocean/20 text-ocean'
                              : 'bg-muted text-muted-foreground'
                        }`}>
                          {location.status}
                        </span>
                        {location.projects > 0 && (
                          <span className="text-xs text-muted-foreground">{location.projects} projects</span>
                        )}
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-card" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                location.isHQ 
                  ? 'bg-gold/20 border-gold' 
                  : 'bg-primary-foreground/5 border-primary-foreground/10 hover:border-gold/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className={`w-4 h-4 ${location.isHQ ? 'text-gold' : 'text-primary-foreground/60'}`} />
                <span className="font-semibold text-sm">{location.name}</span>
              </div>
              <span className={`text-xs ${
                location.status === 'Headquarters' 
                  ? 'text-gold'
                  : location.status === 'Active Development'
                    ? 'text-ocean-light'
                    : 'text-primary-foreground/50'
              }`}>
                {location.status}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <Link to="/expansion">
              View Expansion Roadmap <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpansionMap;
