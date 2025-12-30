import { Leaf, Building2, Award, Shield } from 'lucide-react';

const FeaturesStrip = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable',
      description: '100% Eco-Friendly'
    },
    {
      icon: Building2,
      title: 'Premium Quality',
      description: 'World-Class Construction'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Industry Recognition'
    },
    {
      icon: Shield,
      title: 'Trusted',
      description: '15+ Years Experience'
    }
  ];

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
