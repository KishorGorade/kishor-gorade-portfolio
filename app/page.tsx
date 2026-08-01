import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false });
const CommandPalette = dynamic(() => import("@/components/CommandPalette"), { ssr: false });

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <CommandPalette />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Testimonials />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
