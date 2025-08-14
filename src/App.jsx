import { ReactLenis } from 'lenis/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ReactLenis
        root
        duration={5}                   // scroll animation duration
        easing={(t) => t * (2 - t)}   // easing function
        smooth={true}                 // enable smooth scrolling
        smoothTouch={false}           // smooth touch scroll off (try true if you want)
        direction="vertical"
        gestureOrientation="vertical"
        infinite={false}
      >
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-black">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
