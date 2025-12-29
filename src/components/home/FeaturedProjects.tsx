import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    name: 'Mist Valley Residences',
    location: 'Meppadi, Wayanad',
    type: 'Luxury Villas',
    image: '/project-images/1.png',
    bedrooms: '3-5',
    bathrooms: '3-4',
    area: '2500-4500 sq.ft',
    status: 'Ready to Move',
    price: '₹2.5 Cr onwards',
    features: ['40% Energy Savings', 'Solar Powered', 'Rainwater Harvesting'],
  },
  {
    id: 2,
    name: 'Green Meadows Township',
    location: 'Kalpetta, Wayanad',
    type: 'Integrated Township',
    image: '/project-images/2.png',
    bedrooms: '2-4',
    bathrooms: '2-3',
    area: '1200-3000 sq.ft',
    status: 'Under Construction',
    price: '₹85 L onwards',
    features: ['Mixed-Use Community', 'Retail & Parks', 'Smart Homes'],
  },
  {
    id: 3,
    name: 'Horizon Hills',
    location: 'Vythiri, Wayanad',
    type: 'Premium Villas',
    image: '/project-images/3.png',
    bedrooms: '4-6',
    bathrooms: '4-5',
    area: '4000-6000 sq.ft',
    status: 'New Launch',
    price: '₹4.5 Cr onwards',
    features: ['Infinity Pools', 'Mountain Views', 'Private Gardens'],
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Exceptional Living Spaces
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Explore our carefully crafted developments that blend luxury with sustainability, 
              creating homes that inspire and nurture.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={project.id}
              to={`/projects/${project.id}`}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <article className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      project.status === 'Ready to Move' 
                        ? 'bg-primary text-primary-foreground' 
                        : project.status === 'New Launch'
                          ? 'bg-gold text-foreground'
                          : 'bg-ocean text-secondary-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button variant="hero" size="default">
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location & Type */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{project.type}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  {/* Specs */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4" />
                      <span>{project.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4" />
                      <span>{project.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize className="w-4 h-4" />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Starting from</span>
                      <div className="text-xl font-bold text-foreground">{project.price}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-muted rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team can help you find the perfect property that matches your lifestyle and investment goals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
