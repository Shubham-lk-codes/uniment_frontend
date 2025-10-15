import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        {/* Navigation Bar */}
        <nav className="flex justify-center gap-8 p-6 bg-gray-900 shadow-lg">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About Us</Link>
          <Link to="/testimonials" className="hover:text-blue-400 transition">Testimonials</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          <Link to="/blog" className="hover:text-blue-400 transition">Blog</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
