import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Playwright Course"
      description="Beginner to Advanced Playwright Automation Testing"
    >
      <main style={pageStyle}>
        {/* Hero Section */}
        <section style={heroStyle}>
          <div style={pillStyle}>
            Beginner Friendly • Hands-on Practice • Real World Examples
          </div>

          <h1 style={titleStyle}>
            Learn Playwright from Beginner to Advanced
          </h1>

          <p style={subtitleStyle}>
            Build modern end-to-end automation tests with Playwright using JavaScript.
            Learn locators, assertions, Page Object Model, API testing, debugging,
            reporting, and CI/CD with real examples.
          </p>

          <div style={buttonRowStyle}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start the Course
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/module-1-introduction">
              View Modules
            </Link>
          </div>
        </section>

        {/* Feature Cards */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Why This Course?</h2>
          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3>Hands-on Practice</h3>
              <p>
                Learn by doing. Every module includes real code examples and tests you can run locally.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Real World Examples</h3>
              <p>
                Use practice sites, APIs, and practical workflows that match real automation projects.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Page Object Model</h3>
              <p>
                Build maintainable test frameworks using professional automation architecture.
              </p>
            </div>

            <div style={cardStyle}>
              <h3>Debugging & Reports</h3>
              <p>
                Use traces, screenshots, videos, and HTML reports to debug failures fast.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Hands-on Practice</h2>
          <div style={practiceGridStyle}>
            <div style={practiceCardStyle}>
              <h3>UI Automation Practice</h3>
              <p>
                Write tests for login forms, search pages, buttons, dropdowns, and validations.
              </p>
            </div>

            <div style={practiceCardStyle}>
              <h3>API Testing Practice</h3>
              <p>
                Create GET, POST, PUT, and DELETE requests using Playwright’s built-in API client.
              </p>
            </div>

            <div style={practiceCardStyle}>
              <h3>Debugging Practice</h3>
              <p>
                Learn how to fix locator issues, timeouts, flaky tests, and build failures.
              </p>
            </div>
          </div>
        </section>

        {/* Real World Examples Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Real World Examples</h2>
          <div style={practiceGridStyle}>
            <div style={practiceCardStyle}>
              <h3>Login Flow Testing</h3>
              <p>
                Simulate a real user logging in, validating success messages, and handling failures.
              </p>
            </div>

            <div style={practiceCardStyle}>
              <h3>E-commerce Scenarios</h3>
              <p>
                Test add-to-cart, checkout, product search, and order confirmation flows.
              </p>
            </div>

            <div style={practiceCardStyle}>
              <h3>CI/CD Integration</h3>
              <p>
                Run your Playwright tests automatically in GitHub Actions and inspect results.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const pageStyle = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '3rem 1.5rem 4rem',
};

const heroStyle = {
  textAlign: 'center',
  padding: '2rem 0 3rem',
};

const pillStyle = {
  display: 'inline-block',
  padding: '0.4rem 1rem',
  borderRadius: '999px',
  background: '#e8f5e9',
  color: '#2e8555',
  fontWeight: 700,
  marginBottom: '1.5rem',
};

const titleStyle = {
  fontSize: '3rem',
  marginBottom: '1rem',
};

const subtitleStyle = {
  fontSize: '1.15rem',
  lineHeight: 1.7,
  maxWidth: '780px',
  margin: '0 auto 2rem',
  color: '#4f566b',
};

const buttonRowStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
};

const sectionStyle = {
  marginTop: '3.5rem',
};

const sectionTitleStyle = {
  fontSize: '2rem',
  marginBottom: '1.25rem',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1rem',
};

const practiceGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem',
};

const cardStyle = {
  padding: '1.25rem',
  border: '1px solid #e7eaf3',
  borderRadius: '16px',
  background: '#fff',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
};

const practiceCardStyle = {
  ...cardStyle,
  minHeight: '170px',
};