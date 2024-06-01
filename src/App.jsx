import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";

function App() {
  return (
    <>
    <div className="App w-full h-screen ">
      <Navbar />
      <Hero/>
      <Trusted/>
    </div>
    </>
  );
}

export default App;
