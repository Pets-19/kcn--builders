import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize, ArrowLeft, Calendar, CheckCircle2, Home } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const allProjects = [
  { 
    id: 1, 
    name: 'Mist Valley Residences', 
    location: 'Wayanad', 
    type: 'Luxury Villas', 
    image: project1, 
    bedrooms: '3-5', 
    bathrooms: '3-4',
    area: '2500-4500', 
    status: 'Ready to Move', 
    price: '₹2.5 Cr onwards',
    description: 'Nestled in the misty hills of Wayanad, these luxury villas offer breathtaking views and sustainable living. Each villa is designed with LEED certification standards, featuring solar panels, rainwater harvesting, and smart home integration.',
    features: ['40% Energy Savings', 'Solar Powered', 'Rainwater Harvesting', 'Smart Home System', 'Infinity Pool', 'Private Garden', 'Mountain Views', 'LEED Gold Certified'],
    amenities: ['Clubhouse', 'Swimming Pool', 'Gym', 'Yoga Studio', 'Kids Play Area', 'Organic Farm', 'Walking Trails', '24/7 Security']
  },
  { 
    id: 2, 
    name: 'Green Meadows Township', 
    location: 'Wayanad', 
    type: 'Township', 
    image: project2, 
    bedrooms: '2-4', 
    bathrooms: '2-3',
    area: '1200-3000', 
    status: 'Under Construction', 
    price: '₹85 L onwards',
    description: 'An integrated township offering a complete lifestyle with residential, retail, and recreational spaces. Green Meadows is designed for modern families seeking community living in harmony with nature.',
    features: ['Mixed-Use Community', 'Retail & Parks', 'Smart Homes', 'Walkable Design', 'Green Spaces', 'Community Center', 'Solar Street Lights', 'Waste Management'],
    amenities: ['Shopping Complex', 'Schools', 'Hospital', 'Clubhouse', 'Sports Complex', 'Amphitheater', 'Jogging Track', 'Organic Market']
  },
  { 
    id: 3, 
    name: 'Horizon Hills', 
    location: 'Wayanad', 
    type: 'Premium Villas', 
    image: project3, 
    bedrooms: '4-6', 
    bathrooms: '4-5',
    area: '4000-6000', 
    status: 'New Launch', 
    price: '₹4.5 Cr onwards',
    description: 'Ultra-luxury villas with panoramic mountain views and world-class amenities. Horizon Hills represents the pinnacle of sustainable luxury living with cutting-edge green technology.',
    features: ['Infinity Pools', 'Mountain Views', 'Private Gardens', 'Home Automation', 'Solar + Battery Storage', 'EV Charging', 'Premium Finishes', 'LEED Platinum'],
    amenities: ['Private Clubhouse', 'Spa & Wellness', 'Tennis Courts', 'Helipad', 'Concierge Service', 'Wine Cellar', 'Home Theater', 'Landscaped Gardens']
  },
  { 
    id: 4, 
    name: 'Tech Park Residences', 
    location: 'Bangalore', 
    type: 'Apartments', 
    image: project1, 
    bedrooms: '2-3', 
    bathrooms: '2',
    area: '1100-1800', 
    status: 'Coming Soon', 
    price: '₹1.2 Cr onwards',
    description: 'Modern apartments in North Bangalore near major tech parks. Perfect for professionals seeking sustainable urban living with easy access to workspaces.',
    features: ['Smart Home Ready', 'Solar Panels', 'Rainwater Harvesting', 'EV Charging', 'High-Speed Internet', 'Work-from-Home Spaces', 'Air Purification', 'IGBC Certified'],
    amenities: ['Coworking Space', 'Gym', 'Swimming Pool', 'Rooftop Garden', 'Cafeteria', 'Kids Play Area', 'Visitor Parking', '24/7 Security']
  },
  { 
    id: 5, 
    name: 'Marina Heights', 
    location: 'Kochi', 
    type: 'Luxury Apartments', 
    image: project2, 
    bedrooms: '3-4', 
    bathrooms: '3',
    area: '1800-2500', 
    status: 'Pre-Launch', 
    price: '₹1.8 Cr onwards',
    description: 'Waterfront luxury apartments with stunning backwater views. Marina Heights combines coastal elegance with green building practices for sophisticated urban living.',
    features: ['Waterfront Views', 'Smart Home System', 'Solar Power', 'Double Height Lobby', 'Premium Fixtures', 'Balcony Gardens', 'Flood Protection', 'LEED Silver'],
    amenities: ['Marina Access', 'Clubhouse', 'Infinity Pool', 'Gym & Spa', 'Party Hall', 'BBQ Area', 'Yacht Parking', 'Concierge']
  },
  { 
    id: 6, 
    name: 'Desert Oasis', 
    location: 'Dubai', 
    type: 'Premium Villas', 
    image: project3, 
    bedrooms: '4-5', 
    bathrooms: '4-5',
    area: '3500-5000', 
    status: 'Pipeline', 
    price: 'AED 5M onwards',
    description: 'Sustainable luxury villas in Dubai, designed to thrive in the desert climate with advanced cooling and water conservation technologies.',
    features: ['Climate Adaptive Design', 'Solar Power', 'Water Recycling', 'Smart Climate Control', 'Private Pools', 'Landscaped Gardens', 'Premium Finishes', 'Green Building Certified'],
    amenities: ['Private Beach Access', 'Clubhouse', 'Golf Course', 'Spa', 'Restaurants', 'Retail Area', 'Security', 'Concierge']
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const project = allProjects.find(p => p.id === Number(id));

  const handleInquiry = () => {
    toast({
      title: 'Inquiry Submitted!',
      description: 'Our team will contact you within 24 hours.',
    });
  };

  const handleScheduleVisit = () => {
    toast({
      title: 'Visit Scheduled!',
      description: 'You will receive a confirmation email shortly.',
    });
  };

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-24">
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <Link to="/projects" className="absolute top-8 left-8">
            <Button variant="outline" className="bg-background/80 backdrop-blur">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Button>
          </Link>
          <div className="absolute bottom-8 left-8">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gold text-foreground mb-4 inline-block">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>{project.location} • {project.type}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {project.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-muted rounded-2xl">
                <div className="text-center">
                  <Bed className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{project.bedrooms}</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{project.bathrooms}</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Maximize className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{project.area}</div>
                  <div className="text-sm text-muted-foreground">Sq.Ft</div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Amenities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <div className="bg-card rounded-2xl p-6 shadow-elegant">
                  <div className="text-sm text-muted-foreground mb-2">Starting From</div>
                  <div className="text-3xl font-bold text-foreground mb-6">{project.price}</div>
                  
                  <div className="space-y-3">
                    <Button onClick={handleInquiry} className="w-full" size="lg">
                      Send Inquiry
                    </Button>
                    <Button onClick={handleScheduleVisit} variant="outline" className="w-full" size="lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Visit
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-primary/10 rounded-2xl p-6">
                  <h3 className="font-bold mb-4">Need Help?</h3>
                  <div className="space-y-2 text-sm">
                    <p>📞 +91 97477 70369</p>
                    <p>📧 info@kcnbuilders.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
