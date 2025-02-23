import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SubmitRecipe from "./pages/SubmitRecipe";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";


const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <header className="navbar">
          <span className="logo">FOOD HUT</span>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/submit-recipe">Add Recipe</Link>
            <Link to="/Recipes">Recipes</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit-recipe" element={<SubmitRecipe />} />
          
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;