import React from 'react';
import projectsData from '../content/projects.json';
import Grid from '../components/Grid';
import Card from '../components/Card';

export default function ProjectsPage() {
  const projects = projectsData || [];

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="section-title">Projects</h1>
        <a href="#/" className="button">← Home</a>
      </div>

    <Grid className="projects-grid" style={{ marginTop: '1rem' }}>
        {projects.map((p, i) => (
      <Card key={i} href={p.link || '#'}>
            <h2 className="card-title">{p.title}</h2>
            <h5 className="card-desc">{p.summary || p.desc}</h5>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
