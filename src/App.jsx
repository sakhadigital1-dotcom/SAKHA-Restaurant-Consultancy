import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Gallery from "./components/Gallery/Gallery";
import Experience from "./components/Experience/Experience";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Industries from "./components/Industries/Industries";
import Process from "./components/Process/Process";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="site-shell">

      <Navbar />

      <main>

        <Hero />

        <Brands />

        <About />

        <Services />

        <Stats />

        <Gallery />

        <Experience />

        <WhyChoose />

        <Industries />

        <Process />

        <Projects />

        <Testimonials />

        <FAQ />

        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;