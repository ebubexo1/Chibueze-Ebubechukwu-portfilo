import { useEffect } from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import Timeline from '../components/Timeline';
import PageWrapper from '../components/PageWrapper';
import { registerVisit } from '../lib/api';

const Home = () => {
  useEffect(() => {
    registerVisit();
  }, []);

  return (
    <PageWrapper>
      <Hero />
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <TechStack />
        <FeaturedProjects />
        <Timeline />
      </div>
    </PageWrapper>
  );
};

export default Home;
