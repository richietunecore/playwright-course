const fs = require('fs');
const path = require('path');

const files = [
  'intro.md',
  'module-1-introduction.md',
  'module-2-installation.md',
  'module-3-first-test.md',
  'module-4-locators.md',
  'module-5-actions-assertions.md',
  'module-6-page-object-model.md',
  'module-7-api-testing.md',
  'module-8-configuration.md',
  'module-9-reports-debugging.md',
  'module-10-ci-cd.md',
];

const banner = `
<div class="lesson-banner">
  <div class="lesson-badge">Hands-on Practice + Real World Example</div>

  <p>
    This lesson combines clear explanations with practical exercises so you can build real Playwright skills while you learn.
  </p>

  <div class="lesson-grid">
    <div class="lesson-card">
      <strong>Hands-on Practice</strong>
      <span>Write code, run tests, and verify the results locally.</span>
    </div>

    <div class="lesson-card">
      <strong>Real World Example</strong>
      <span>Use patterns and workflows that automation engineers use in production.</span>
    </div>

    <div class="lesson-card">
      <strong>What You’ll Build</strong>
      <span>Clean, maintainable Playwright lessons and real test automation skills.</span>
    </div>
  </div>
</div>
`;

for (const file of files) {
  const filePath = path.join(__dirname, '..', 'docs', file);

  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing file: ${file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('lesson-banner')) {
    console.log(`No banner found in: ${file}`);
    continue;
  }

  content = content.replace(banner, '\n');

  fs.writeFileSync(filePath, content);
  console.log(`Removed banner from: ${file}`);
}