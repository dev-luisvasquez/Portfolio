'use client';

import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Footer from "./components/footer";
import 'flowbite';

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <ContactSection />
      <Footer />
    </div> 
  )
};