import { motion } from "framer-motion";
import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FloatingNavigation } from "@/components/FloatingNavigation";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ContactSection } from "@/components/sections/ContactSection";

const Portfolio = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <motion.div
        className="min-h-screen bg-background text-foreground relative overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ParticlesBackground />
        <ThemeToggle />
        <FloatingNavigation />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <JourneySection />
          <ContactSection />
        </main>
      </motion.div>
    </ThemeProvider>
  );
};

export default Portfolio;