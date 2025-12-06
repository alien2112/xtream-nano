import Header from "@/components/Header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Warranty from "@/components/warranty";
import Map from "@/components/map"; // Import the new Map component
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Warranty />
      <Map /> {/* Add the Map component here */}
      <Footer />
    </main>
  );
}
