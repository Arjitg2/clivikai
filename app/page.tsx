import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Works from "./components/Works";
import Process from "./components/Process";
import Features from "./components/Features";
import WhyWebsite from "./components/WhyWebsite";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <WhyWebsite />
      <Process />
      <Works />
      <Testimonials />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
