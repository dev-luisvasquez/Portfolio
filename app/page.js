
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import ExperienceClientWrapper from "./components/ExperienceClientWrapper";
import HeroSection from "./components/homepage/hero-section";
import ProjectsClientWrapper from "./components/homepage/ProjectsClientWrapper";
import Skills from "./components/homepage/skills";
import Footer from "./components/footer";

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <ExperienceClientWrapper />
      <Skills />
      <ProjectsClientWrapper /> {/* 👈 Solo este bloque se renderiza en el cliente */}
      <ContactSection />
      <Footer />
    </div>
  )
}
