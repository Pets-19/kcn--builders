import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturesStrip from '@/components/home/FeaturesStrip';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TrendsCarousel from '@/components/home/TrendsCarousel';
import Testimonials from '@/components/home/Testimonials';
import MapSection from '@/components/home/MapSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturesStrip />
      <FeaturedProjects />
      <TrendsCarousel />
      <Testimonials />
      <MapSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
