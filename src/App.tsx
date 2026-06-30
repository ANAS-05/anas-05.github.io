import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-[1160px] bg-white pb-4 font-sans text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
