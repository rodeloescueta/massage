// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Pricing from "./components/Pricing";
import Service from "./components/Services";
// import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />

      <Service />
      <Pricing />
      {/* <Projects /> */}
      <Testimonials />
      {/* <Hireme /> */}
      <Contact />
      <footer className="p-3 text-center">
        <p>massageremedialcarellc © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
