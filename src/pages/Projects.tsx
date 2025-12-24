import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize, ArrowRight, Filter } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const allProjects = [
  { id: 1, name: 'Mist Valley Residences', location: 'Wayanad', type: 'Luxury Villas', image: project1, bedrooms: '3-5', area: '2500-4500', status: 'Ready to Move', price: '₹2.5 Cr onwards' },
  { id: 2, name: 'Green Meadows Township', location: 'Wayanad', type: 'Township', image: project2, bedrooms: '2-4', area: '1200-3000', status: 'Under Construction', price: '₹85 L onwards' },
  { id: 3, name: 'Horizon Hills', location: 'Wayanad', type: 'Premium Villas', image: project3, bedrooms: '4-6', area: '4000-6000', status: 'New Launch', price: '₹4.5 Cr onwards' },
  { id: 4, name: 'Tech Park Residences', location: 'Bangalore', type: 'Apartments', image: project1, bedrooms: '2-3', area: '1100-1800', status: 'Coming Soon', price: '₹1.2 Cr onwards' },
  { id: 5, name: 'Marina Heights', location: 'Kochi', type: 'Luxury Apartments', image: project2, bedrooms: '3-4', area: '1800-2500', status: 'Pre-Launch', price: '₹1.8 Cr onwards' },
  { id: 6, name: 'Desert Oasis', location: 'Dubai', type: 'Premium Villas', image: project3, bedrooms: '4-5', area: '3500-5000', status: 'Pipeline', price: 'AED 5M onwards' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const locations = ['all', 'Wayanad', 'Bangalore', 'Kochi', 'Dubai'];
  
  const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.location === filter);

  return (
    <Layout>
      <section className="pt-32 pb-12 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Exceptional Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">Explore our curated collection of sustainable luxury developments across India and beyond.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {locations.map(loc => (
              <button key={loc} onClick={() => setFilter(loc)} className={`px-5 py-2 rounded-full font-medium transition-all ${filter === loc ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-primary/10'}`}>
                {loc === 'all' ? 'All Locations' : loc}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(project => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <article className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-lg transition-all hover:-translate-y-2 group cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gold text-foreground">{project.status}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4" />{project.location} • {project.type}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Bed className="w-4 h-4" />{project.bedrooms}</span>
                      <span className="flex items-center gap-1"><Maximize className="w-4 h-4" />{project.area} sqft</span>
                    </div>
                    <div className="pt-4 border-t border-border flex justify-between items-center">
                      <span className="font-bold text-foreground">{project.price}</span>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
