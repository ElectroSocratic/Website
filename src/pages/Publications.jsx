import React from 'react';
import publicationsData from '../content/publications.json';
import Card from '../components/Card';

export default function PublicationsPage(){
  const items = publicationsData || [];

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="section-title">Publications</h1>
        <a href="#/" className="button">← Home</a>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {items.map((p,i) => (
          <Card key={i} href={p.link || '#'} className="publication-card" style={{ marginBottom: '0.5rem' }}>
            <strong>{p.title}</strong>
          </Card>
        ))}
      </div>
    </div>
  );
}
