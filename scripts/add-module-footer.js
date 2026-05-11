const fs = require('fs');
const path = require('path');

const files = [
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

const footer = `

---

## 🚀 Keep Going

Apply what you learned in this module:

- 🧪 **[Practice Exercises](./practice)** — hands-on tasks to build real skills
- 🏗️ **[Real Projects](./real-projects)** — real-world automation examples

`;

for (const file of files) {
  const filePath = path.join(__dirname, '..', 'docs', file);

  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing file: ${file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('## 🚀 Keep Going')) {
    console.log(`Already has footer: ${file}`);
    continue;
  }

  content = content.trimEnd() + '\n' + footer;
  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${file}`);
}