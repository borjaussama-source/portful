import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import SkillMatrix from './components/SkillMatrix';
import Footer from './components/Footer';
import Scene from './components/Scene';

function App() {
  return (
    <>
      <Scene />

      <main style={{ position: 'relative', zIndex: 10 }}>
        <header className="container" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--accent-gradient)', display: 'grid', placeItems: 'center', color: 'white', fontSize: '0.8rem' }}>BO</div>
            BORJA<span className="text-gradient">OUSSAMA</span>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#services" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Services</a>
            <a href="#projects" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Portfolio</a>
            <a href="mailto:borja.ussama@gmail.com" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)' }}>Contact</a>
          </nav>
        </header>

        <Hero />
        <Highlights />
        <div id="projects">
          <Experience />
        </div>
        <SkillMatrix />
        <Footer />
      </main>
    </>
  );
}

export default App;
