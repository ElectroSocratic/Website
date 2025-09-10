import React from 'react';
import writingsData from '../content/writing.json';
import Card from '../components/Card';

export default function WritingPage(){
  const writings = writingsData || [];

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="section-title">Writing</h1>
        <a href="#/" className="button">← Home</a>
      </div>

      <div style={{ marginTop: '1rem' }}>
        {writings.map((w, i) => (
          <Card key={i} href={w.link || '#'} className="writing-card" style={{ marginBottom: '0.5rem' }}>
            {w.title || w}
          </Card>
        ))}
      </div>
    </div>
  );
}
