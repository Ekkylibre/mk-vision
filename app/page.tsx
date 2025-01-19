'use client';

import Home from '@/app/components/sections/Home';
import Portfolio from '@/app/components/sections/Portfolio';
import About from '@/app/components/sections/About';
import Contact from '@/app/components/sections/Contact';
import Footer from '@/app/components/Footer';

export default function Page() {
  return (
    <>
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}