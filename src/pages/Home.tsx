import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Properties from '../components/Properties';
import About from '../components/About';
import VideoSection from '../components/VideoSection';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Properties />
      <VideoSection />
      <Contact />
    </main>
  );
};

export default Home;
