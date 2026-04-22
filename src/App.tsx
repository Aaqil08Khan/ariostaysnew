import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Villas from "./pages/Villas";
import VillaDetail from "./pages/VillaDetail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/villas" element={<Villas />} />
      <Route path="/villas/:slug" element={<VillaDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policies" element={<Policies />} />
    </Routes>
  );
}