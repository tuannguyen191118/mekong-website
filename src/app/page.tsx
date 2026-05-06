import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Gallery from "../components/Gallery";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MobileCTA from "../components/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-slate-900 antialiased">
      <Header />

      <Hero />

      <Services />

      <About />

      <Process />

      <Gallery />

      <Partners />

      <Contact />

      <Footer />

      <MobileCTA />
    </main>
  );
}