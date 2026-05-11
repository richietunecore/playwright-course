import React from 'react';
import clsx from 'clsx';

const FeatureList = [
  {
    title: '🎯 Start From Zero',
    description: (
      <>
        No prior automation experience needed.
        We begin with fundamentals and build up to advanced concepts step-by-step.
      </>
    ),
  },
  {
    title: '⚡ Real Working Code',
    description: (
      <>
        Every example is battle-tested against real websites.
        No fake demos — you get production-ready patterns you can use at work tomorrow.
      </>
    ),
  },
  {
    title: '🏗️ Professional Patterns',
    description: (
      <>
        Learn Page Object Model, API testing frameworks,
        CI/CD pipelines, and debugging techniques used by top engineering teams worldwide.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {title.split(' ')[0]}
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-color-emphasis-100)' }}>
      <div className="container">
        <h2 className="text--center" style={{ marginBottom: '3rem', color: 'var(--ifm-color-primary-dark)' }}>
          Why This Course?
        </h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
