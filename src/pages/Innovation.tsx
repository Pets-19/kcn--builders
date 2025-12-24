import Layout from '@/components/layout/Layout';
import { Cpu, Leaf, Building2, Smartphone, Zap, BrainCircuit } from 'lucide-react';
import innovationImg from '@/assets/innovation.jpg';
import greenBuildingImg from '@/assets/green-building.jpg';

const Innovation = () => {
  const innovations = [
    {
      icon: Cpu,
      title: 'AI-Driven Design',
      description: 'We use artificial intelligence to optimize floor plans, maximize natural light, and enhance energy efficiency. Our AI systems analyze thousands of design parameters to create the perfect home.',
      features: ['Automated Space Optimization', 'Daylight Analysis', 'Energy Modeling', 'Cost Optimization']
    },
    {
      icon: BrainCircuit,
      title: 'BIM Integration',
      description: 'Building Information Modeling allows us to visualize, simulate, and optimize every aspect of construction before breaking ground, reducing waste and ensuring precision.',
      features: ['3D Visualization', 'Clash Detection', 'Construction Simulation', 'Lifecycle Management']
    },
    {
      icon: Building2,
      title: 'Modular Construction',
      description: 'Factory-built modules reduce construction time by 50% while maintaining superior quality control. Our modular approach minimizes site waste and environmental impact.',
      features: ['Faster Delivery', 'Quality Control', 'Reduced Waste', 'Cost Efficiency']
    },
    {
      icon: Smartphone,
      title: 'Smart Home Technology',
      description: 'Every home comes equipped with IoT devices for climate control, security, and energy management. Control your entire home from your smartphone.',
      features: ['Voice Control', 'Energy Monitoring', 'Security Integration', 'Automated Lighting']
    },
    {
      icon: Leaf,
      title: 'Green Building Certifications',
      description: 'All our projects target LEED Gold or Platinum certification, with features like solar panels, rainwater harvesting, and advanced insulation systems.',
      features: ['LEED Certified', 'Solar Integration', 'Water Conservation', 'Sustainable Materials']
    },
    {
      icon: Zap,
      title: 'Energy Storage Systems',
      description: 'Advanced battery systems store solar energy for use during peak hours and power outages, ensuring 24/7 clean energy availability.',
      features: ['Battery Backup', 'Peak Shaving', 'Grid Independence', 'Cost Savings']
    },
  ];

  const vrFeatures = [
    {
      title: '360° Virtual Tours',
      description: 'Experience your future home from anywhere in the world with immersive VR walkthroughs.'
    },
    {
      title: 'AR Property Visualization',
      description: 'Use augmented reality to visualize properties on-site and customize finishes in real-time.'
    },
    {
      title: 'Digital Twin Technology',
      description: 'Every project has a digital twin for monitoring performance and optimizing operations.'
    },
    {
      title: 'Customer Portal',
      description: 'Track construction progress, make payments, and communicate with our team through a unified platform.'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
              Innovation & Technology
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Building the Future with{' '}
              <span className="text-primary">Cutting-Edge Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At GreenVista, we leverage the latest innovations in construction, sustainability, 
              and smart technology to create homes that are smarter, greener, and built for tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative h-[60vh] rounded-2xl overflow-hidden">
            <img 
              src={innovationImg} 
              alt="Innovation in sustainable architecture" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Innovation Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We integrate multiple cutting-edge technologies to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VR & Digital Experience */}
      <section className="py-24 bg-forest text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-gold uppercase tracking-widest mb-4 block">
                Digital Experience
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Experience Before You Buy
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Our advanced VR and AR technologies let you explore and customize your future home 
                before construction even begins. Make informed decisions with confidence.
              </p>
              
              <div className="space-y-6">
                {vrFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src={greenBuildingImg} 
                alt="Virtual reality property tour" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '40%', label: 'Faster Construction', desc: 'with modular tech' },
              { value: '60%', label: 'Energy Savings', desc: 'with smart systems' },
              { value: '80%', label: 'Less Waste', desc: 'through BIM planning' },
              { value: '100%', label: 'Solar Ready', desc: 'all new projects' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Innovation;
