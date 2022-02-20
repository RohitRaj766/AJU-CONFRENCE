import "./scss/main.css";
import Body from "./components/Body";
import Committee from "./components/Committee";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import About from "./components/About";
import Scope from "./components/Scope";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import HideShow from "./components/HideShow";
// import ScrollToTopButton from "./components/Scroll";
// import Scroll from "./components/Scroll";


function App() {
  return (
    <div>
      
      {/* <HideShow/> */}
     {/* <Navbar2/> */}

      <Router>
      
      <ScrollToTop />
     
        <Routes>
        
          <Route exact path="/" element={<Body />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/scope" element={<Scope />} />
          <Route exact path="/committee" element={<Committee />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
