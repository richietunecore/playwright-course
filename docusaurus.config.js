// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Playwright Mastery',
  tagline: 'Complete Automation Testing Course - Build Reliable E2E Tests with JavaScript',
  favicon: 'img/favicon.ico',

  url: 'https://playwright-course.vercel.app',
  baseUrl: '/',

  organizationName: 'richietunecore',
  projectName: 'playwright-course',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/richietunecore/playwright-course/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  ({
    image: 'img/playwright-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Playwright Mastery',
      logo: {
        alt: 'Playwright Mastery Logo',
        src: 'img/logo.svg',
        width: 40,
        height: 40,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Curriculum',
        },
        {
          type: 'doc',
          docId: 'module-10-ci-cd',
          label: 'Deploy',
          position: 'left',
        },
        {
          href: 'https://github.com/richietunecore/playwright-course',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learning Path',
          items: [
            { label: 'Getting Started', to: '/docs/intro' },
            { label: 'Module 1 - Intro', to: '/docs/module-1-introduction' },
            { label: 'Module 2 - Setup', to: '/docs/module-2-installation' },
            { label: 'Module 3 - First Test', to: '/docs/module-3-first-test' },
            { label: 'Module 4 - Locators', to: '/docs/module-4-locators' },
          ],
        },
        {
          title: 'Advanced Topics',
          items: [
            { label: 'Actions & Assertions', to: '/docs/module-5-actions-assertions' },
            { label: 'Page Object Model', to: '/docs/module-6-page-object-model' },
            { label: 'API Testing', to: '/docs/module-7-api-testing' },
            { label: 'Configuration', to: '/docs/module-8-configuration' },
            { label: 'Debugging', to: '/docs/module-9-reports-debugging' },
            { label: 'CI/CD Integration', to: '/docs/module-10-ci-cd' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Official Docs', href: 'https://playwright.dev/docs/intro' },
            { label: 'Report Issue', href: 'https://github.com/richietunecore/playwright-course/issues' },
            { label: 'Discord Community', href: 'https://discord.gg/Playwright' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'GitHub Repository', href: 'https://github.com/richietunecore/playwright-course' },
            { label: 'Live Course URL', href: 'https://playwright-course.vercel.app' },
          ],
        },
      ],
      
      logo: {
        alt: 'Playwright Mastery',
        src: 'img/logo.svg',
        width: 160,
        height: 51,
      },
      
      copyright: `
        Copyright ${new Date().getFullYear()} Playwright Mastery by Richie Gulati.
        Built with love using Docusaurus & Playwright.
        Made for learners worldwide.
      `,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  }),
};

export default config;
