'use client';

import Home from '@/app/components/sections/Home';
import About from '@/app/components/sections/About';
import Contact from '@/app/components/sections/Contact';
import Footer from '@/app/components/Footer';
import TrustedBy from './components/sections/TrustedBy';
import Services from './components/sections/Services';
import FAQ from './components/sections/FAQ';

export default function Page() {
  return (
    <>
      <Home />
      <Services />
      <About />
      <TrustedBy />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}