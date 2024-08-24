import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col min-h-[100dvh] bg-gradient-to-b from-cyan-400 to-indigo-600  scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
      <Navbar/>
      <main className="flex-1">
        <Hero/>
        <About/>
        <Portfolio/>
        <Services/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
