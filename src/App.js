import { ThemeProvider } from "styled-components";
import { useState, useEffect, Suspense } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Setup from "./components/Setup.jsx";
import { OrbitControls } from "@react-three/drei";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            {/* <div>
              <Contact />
              <Canvas
                camera={{ position: [0, 50, 90], fov: 50 }}
                style={{ height: "75vh", width: "70%" }}
              >
                <OrbitControls target={[10,10, 10]} />
                <ambientLight intensity={1.5} />
                <directionalLight position={[0, 10, 5]} intensity={2} />
                <Suspense fallback={null}>
                  <Setup />
                </Suspense>
              </Canvas>
            </div> */}

            <div
              style={{ display: "flex", alignItems: "center", height: "100vh" }}
            >
              
              
                <Canvas
                  camera={{ position: [0, 50, 90], fov: 50 }}
                  style={{ height: "75vh", width: "60%" }}
                >
                  <OrbitControls target={[0, 0, 0]} />{" "}
                 
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[0, 10, 5]} intensity={2} />
                  <Suspense fallback={null}>
                    <Setup />
                  </Suspense>
                </Canvas>
             
              <div
                style={{
                  flex: 1,
                  padding: "10px",
                  maxWidth: "1200px",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Contact />
              </div>
            </div>
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
