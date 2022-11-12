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
      <Footer />
    </div>
  );
}

export default App;
