import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroScetion } from "@/components/HeroSection";
import { AboutScetion } from "@/components/AboutScetion";
import { ProjectScetion } from "@/components/ProjectScetion";
import { SkillsSections } from "@/components/SkillsScetions";
import { ContactSection } from "@/components/ContactScetion";
import { Footer } from "@/components/Footer";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />
      {/* Navbar Component */}
      <Navbar />
      {/* Main Content Area */}
      <main>
        <HeroScetion />
        <AboutScetion />
        <SkillsSections />
        <ProjectScetion />
        <ContactSection />
      </main>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};
