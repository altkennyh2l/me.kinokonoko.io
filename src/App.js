import React, { useState, useEffect, useRef } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  const mybutton = useRef(null); // create a reference to the button

  const checkScrollTop = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.current.style.display = "flex";
    } else {
      mybutton.current.style.display = "none";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div class="card" style={{ padding: "1rem" }}>
          <About />
          <Skills />
          <Works />
          <Contact />
        </div>
      </div>

      <button
        ref={mybutton}
        onClick={scrollToTop}
        style={{
          display: "none", // make sure the button is hidden initially
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%", // to make the button circular
          width: "50px", // equal width and height
          height: "50px", // equal width and height
          alignItems: "center", // center the content vertically
          justifyContent: "center", // center the content horizontally
        }}
        className="btn btn-primary"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default App;
