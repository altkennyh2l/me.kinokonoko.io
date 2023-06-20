import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Navbar />

      <div class="container">
        <Header />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>

      <button onClick={scrollToTop}>Back to top</button>
    </div>
  );
};

export default App;
