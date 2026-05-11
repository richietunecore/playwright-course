import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">Playwright Mastery</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ background: '#fff3cd', color: '#856404', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9em' }}>Beginner Friendly</span>
          <span style={{ background: '#d1ecf1', color: '#0c5460', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9em' }}>Hands-on Practice</span>
          <span style={{ background: '#d4edda', color: '#155724', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9em' }}>Real World Examples</span>
          <span style={{ background: '#f8d7da', color: '#721c24', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9em' }}>Production Ready</span>
        </div>
        
        <div className="buttons" style={{ marginTop: '30px' }}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Start Learning Now
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/module-1-introduction" style={{ marginLeft: '12px' }}>
            View Full Curriculum
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  const stats = [
    { number: '10+', label: 'Modules' },
    { number: '6', label: 'Real Projects' },
    { number: '50+', label: 'Code Examples' },
    { number: 'Free', label: 'Access' }
  ];
  
  return (
    <section style={{ backgroundColor: 'var(--ifm-color-emphasis-100)', padding: '3rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--ifm-color-primary)' }}>{stat.number}</div>
              <div style={{ color: 'var(--ifm-font-color-base)', fontSize: '1rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <StatsSection />
      </main>
    </Layout>
  );
}
