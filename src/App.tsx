import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VillaDetail from "./pages/VillaDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import Properties from "./pages/Properties";

import { ScrollToTop } from "./components/site/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/villas/:slug" element={<VillaDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}