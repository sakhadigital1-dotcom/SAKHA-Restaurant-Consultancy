import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import Stats from "../components/Stats/Stats";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Industries from "../components/Industries/Industries";
import Process from "../components/Process/Process";
import Projects from "../components/Projects/Projects";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Stats />
      <Gallery />
      <About />
      <Services />
      <WhyChoose />
      <Industries />
      <Process />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
