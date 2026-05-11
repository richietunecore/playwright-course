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
          label: 'Course',
        },
        {
          to: '/docs/practice',
          label: 'Practice',
          position: 'left',
        },
        {
          to: '/docs/real-projects',
          label: 'Real Projects',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'module-10-ci-cd',
          label: '🚀 Deploy',
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
          title: 'Course',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Module 1',
              to: '/docs/module-1-introduction',
            },
            {
              label: 'Module 10',
              to: '/docs/module-10-ci-cd',
            },
          ],
        },
        {
          title: 'Learn More',
          items: [
            {
              label: 'Practice',
              to: '/docs/practice',
            },
            {
              label: 'Real Projects',
              to: '/docs/real-projects',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Playwright Docs',
              href: 'https://playwright.dev',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/richietunecore/playwright-course',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Playwright Course. Built with Docusaurus.`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  }),
};

export default config;
