import { useState } from 'react';
import Navbar from './components/ui/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import Loader from './components/ui/Loader';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <CustomCursor />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>

          <footer className="footer">
            <div className="container">
              <p>
                © 2026 <span>Soheib</span>. Construit avec ❤️ et React + Three.js
              </p>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
