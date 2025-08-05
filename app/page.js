import HeroSection from "./components/homepage/hero-section";
/* import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import ContactSection from "./components/homepage/contact"; */

export default async function Home() {

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      {/* <AboutSection />
      <Experience />
      <Skills />
      <Projects /> 
      <ContactSection /> */}
    </div>
  )
}
