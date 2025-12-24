import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedSection } from '@/components/home/FeaturedSection';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
