import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a2332]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Contact />
    </div>
  );
}
