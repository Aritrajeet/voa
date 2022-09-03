import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Youtube from "./Components/Youtube";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Youtube />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
