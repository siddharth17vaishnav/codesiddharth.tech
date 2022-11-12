import Contact from "./components/Contact";
import Description from "./components/Description";
import Expirence from "./components/Expirence";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Description />
      <Expirence />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
