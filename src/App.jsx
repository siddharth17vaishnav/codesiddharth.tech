import Description from "./components/Description";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Expirience";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
        <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
