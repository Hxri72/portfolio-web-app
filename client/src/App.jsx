import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  // navbar and footer both need the profile (resume link, social links)
  const { data: profile } = useFetch("/profile");

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar profile={profile} />
      <main id="main" className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer profile={profile} />
    </>
  );
}

export default App;
