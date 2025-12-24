import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TrendsCarousel from '@/components/home/TrendsCarousel';
import ExpansionMap from '@/components/home/ExpansionMap';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <TrendsCarousel />
      <ExpansionMap />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
