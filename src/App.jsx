import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import ProjectsPage from './pages/Projects';
import WritingPage from './pages/Writing';
import PublicationsPage from './pages/Publications';
import projectsData from './content/projects.json';
import recentData from './content/recent.json';
import writingsData from './content/writing.json';
import Grid from './components/Grid';
import Card from './components/Card';

function useHashRoute(){
  const normalize = (hash) => {
    // strip leading '#' and optional '/'
    const h = (hash || window.location.hash || '').replace(/^#\/?/, '');
    return h.split('?')[0]; // ignore query part
  };

  const [route, setRoute] = React.useState(() => normalize(window.location.hash || ''));
  React.useEffect(() => {
    const onHash = () => setRoute(normalize(window.location.hash || ''));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route; // e.g. '', 'projects', 'writing'
}

export default function App(){
  const route = useHashRoute();

  if(route === 'projects'){
    return <ProjectsPage />;
  }
  if(route === 'writing'){
    return <WritingPage />;
  }
  if(route === 'publications'){
    return <PublicationsPage />;
  }

  // default home view
  return (
    <div className="app">
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand"><span className="brand-name">Shaurya Singh</span></div>
          <nav className="nav-links" aria-label="Primary">
            <a href="#/projects" className="cta">Projects</a>
            <a href="#/writing" className="cta">Writing</a>
            <a href="#/publications" className="cta">Publications</a>
            <a href="/Shaurya_Singh_CV.pdf" className="cta" target="_blank" rel="noopener noreferrer">Vitae</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <motion.img
            src="/bruh.jpeg"
            alt="Profile"
            className="profile"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/profile-placeholder.svg'; }}
          />

          <div className="bio">
            <p>
              I am a final year student in mechanical engineering at <a href="https://iitk.ac.in" target="_blank" rel="noopener noreferrer">Indian Institute of Technology Kanpur</a> pursuing a BT-MT dual degree. At present, I am completing the masters part of my program under the guidance of <a href="https://home.iitk.ac.in/~anupams/#/" target="_blank" rel="noopener noreferrer"> Prof. Anupam Saxena</a>.  <br /><br />
            </p>
            <p>
              Previously, I interned at <a href="https://flytbase.com" target="_blank" rel="noopener noreferrer">FlytBase</a> working on UAV 3D path planning. During the bachelors part of my program, I worked under <a href="https://www.iitk.ac.in/smss/" target="_blank" rel="noopener noreferrer">Prof. Bishakh Bhattacharya</a> on passive adaptive control mechanisms and under <a href="https://mrl-iitk.github.io/" target="_blank" rel="noopener noreferrer">Prof. Shakti Singh Gupta</a> where I contributed to the development and manufacturing of a dog-sized quadruped robot. I was also fortunate to lead <a href="https://roboticsclubiitk.github.io/" target="_blank" rel="noopener noreferrer">Robotics Club IIT Kanpur</a>. <br /><br />
            </p>
          </div>
         
        </section>
   <p>
              Broadly, I am interested in working on problems in <strong>robotics</strong>, <strong>control of dynamical systems</strong>, <strong>mechanism design</strong> and <strong>applied mechanics</strong>. I am particularly passionate about realizing the full potential of <strong>legged and aerial robots</strong> in society by lowering the barrier for widespread adoption and innovation in industry.<br /><br />
            </p>

        <section className="section">
          <h2 className="section-title">Recent Work</h2>
      <Grid className="recent-grid">
            {recentData.map((p,i) => (
        <Card key={i} href={p.link || '#/projects'}>
                <h4 className="card-title">{p.title}</h4>
                <h5 className="card-desc">{p.summary || p.desc || ''}</h5>
              </Card>
            ))}
          </Grid>
        </section>

        <section className="section">
          <h2 className="section-title">Recent Writing</h2>
          <div style={{ marginTop: '1rem' }}>
            {writingsData.map((w,i) => (
              <Card key={i} href={w.link || '#/writing'} className="writing-card" style={{ marginBottom: '0.5rem' }}>
                {w.title || w}
              </Card>
            ))}
          </div>
        </section>
        <div className="fill-remaining" />
        <p>
            I also like learning philosophy and history, keeping up with geopolitics and space exploration, and playing <a href="https://online-go.com/user/view/1831257" target="_blank" rel="noopener noreferrer">Go</a>. My bucket list includes trying every adventure sport out there. 
        </p>
      </main>
           
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <p>Let’s connect — shauryas21 at iitk dot ac dot in</p>
          <p className="muted">© {new Date().getFullYear()} Shaurya Singh</p>
        </div>
      </footer>
    </div>
  );
}
