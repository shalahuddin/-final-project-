import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar01 from "./components/Navbarcoba";
import FoterHome from "./components/FooterCoba";
import Hero from "./components/Hero";
import About from "./components/About";
import Loker from "./components/Jobscoba";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar01 />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Loker />
              </>
            }
          />
          <Route
            path="/about/:id"
            element={
              <>
                <About />
                <Loker />
              </>
            }
          />
        </Routes>
        <FoterHome />
      </BrowserRouter>
    </>
  );
}

export default App;
