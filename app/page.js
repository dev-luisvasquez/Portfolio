import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import ExperienceClientWrapper from "./components/ExperienceClientWrapper";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import ContactSection from "./components/homepage/contact";

export default async function Home() {

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <ExperienceClientWrapper />
      <Skills />
      <Projects /> 
      <ContactSection />
    </div>
  )
}
