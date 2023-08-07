import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components"; // Add this import statement
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const AppContainer = styled.div`
  font-family: Calibri, "Trebuchet MS", Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #717171;
  background-color: #f5f5f5;
`;

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" component={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
