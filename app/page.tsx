import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Works from "./components/Works";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import WhyWebsite from "./components/WhyWebsite";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Works />
      <Features />
      <Pricing />
      <WhyWebsite />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
