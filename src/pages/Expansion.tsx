import Layout from '@/components/layout/Layout';
import { MapPin, TrendingUp, Building2, Globe, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Expansion = () => {
  const currentMarkets = [
    {
      city: 'Wayanad',
      region: 'Kerala, India',
      status: 'Headquarters',
      projects: 12,
      established: '2009',
      highlights: ['Luxury Villas', 'Eco-Townships', 'Premium Resorts'],
      icon: '🏔️',
      description: 'Our roots in Kerala\'s pristine hills. The birthplace of KCN\'s vision for sustainable luxury living.'
    },
    {
      city: 'Bangalore',
      region: 'Karnataka, India',
      status: 'Active Development',
      projects: 3,
      established: '2024',
      highlights: ['Tech Park Residences', 'Smart Apartments', 'Gated Communities'],
      icon: '🌆',
      description: 'Expanding into India\'s tech capital with sustainable urban developments near major IT hubs.'
    },
    {
      city: 'Kochi',
      region: 'Kerala, India',
      status: 'Active Development',
      projects: 2,
      established: '2024',
      highlights: ['Waterfront Apartments', 'Commercial Spaces', 'Mixed-Use Developments'],
      icon: '🌊',
      description: 'Premium coastal developments combining modern luxury with Kerala\'s rich maritime heritage.'
    },
  ];

  const upcomingMarkets = [
    {
      city: 'Mysore',
      region: 'Karnataka, India',
      status: 'Coming 2026',
      focus: 'Heritage meets modern living',
      icon: '🏛️',
      description: 'Planned developments respecting Mysore\'s rich cultural heritage while introducing green building practices.'
    },
    {
      city: 'Dubai',
      region: 'UAE',
      status: 'Partnership Phase',
      focus: 'Desert sustainable luxury',
      icon: '🏙️',
      description: 'Strategic partnerships for climate-adaptive luxury villas in Dubai\'s premium districts.'
    },
    {
      city: 'Abu Dhabi',
      region: 'UAE',
      status: 'Exploring',
      focus: 'Smart city integration',
      icon: '🌟',
      description: 'Market research for sustainable developments aligned with UAE Vision 2030.'
    },
  ];

  const expansionStats = [
    { value: '7', label: 'Active Markets', icon: MapPin },
    { value: '₹500Cr', label: 'Investment Pipeline', icon: TrendingUp },
    { value: '25+', label: 'Projects by 2027', icon: Building2 },
    { value: '3', label: 'Countries', icon: Globe },
  ];

  const timeline = [
    { year: '2009-2015', milestone: 'Wayanad Establishment', description: 'Founded in Wayanad with focus on sustainable luxury villas' },
    { year: '2016-2020', milestone: 'Kerala Expansion', description: 'Expanded across Kerala with townships and integrated communities' },
    { year: '2021-2023', milestone: 'Tech Integration', description: 'Pioneered smart homes and green certifications' },
    { year: '2024', milestone: 'Pan-India Growth', description: 'Entered Bangalore and Kochi markets with urban projects' },
    { year: '2025-2026', milestone: 'South India Consolidation', description: 'Mysore, Calicut, and more Karnataka cities' },
    { year: '2027+', milestone: 'International Expansion', description: 'Middle East entry with Dubai and Abu Dhabi partnerships' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
              Expansion Strategy
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Growing from Wayanad to{' '}
              <span className="text-primary">the World</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our strategic expansion plan focuses on bringing sustainable luxury living to major 
              urban centers across India and select international markets, while maintaining our 
              commitment to green building and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {expansionStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-gold" />
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Markets */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Current Markets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Established presence with active developments and delivered projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentMarkets.map((market, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="bg-primary/10 p-8 text-center">
                  <div className="text-6xl mb-4">{market.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{market.city}</h3>
                  <p className="text-muted-foreground mb-2">{market.region}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                    {market.status}
                  </span>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{market.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">{market.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-2xl font-bold text-primary">{market.established}</div>
                      <div className="text-xs text-muted-foreground">Since</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {market.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Markets */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Upcoming Markets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic expansion into new territories with sustainable development focus
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingMarkets.map((market, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant text-center"
              >
                <div className="text-6xl mb-4">{market.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{market.city}</h3>
                <p className="text-sm text-muted-foreground mb-3">{market.region}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-foreground mb-6">
                  {market.status}
                </span>
                <p className="text-muted-foreground text-sm mb-4">{market.description}</p>
                <div className="pt-4 border-t border-border">
                  <div className="text-sm font-semibold text-primary">{market.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Growth Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings in Wayanad to a pan-India and international presence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2" />

              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 md:items-center">
                  <div className={`flex items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Year badge */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <Target className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className={`ml-8 md:ml-0 flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="bg-card rounded-xl p-6 shadow-elegant">
                        <div className="text-sm font-semibold text-gold mb-2">{item.year}</div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.milestone}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-gold" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Partner with Us in Our Expansion
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Looking to invest, partner, or bring KCN to your city? 
            Let's discuss opportunities for sustainable development together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/919747770369?text=Hello%20KCN%20Builders%2C%20I'm%20interested%20in%20discussing%20partnership%20opportunities." target="_blank" rel="noopener noreferrer">Get in Touch</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Expansion;
