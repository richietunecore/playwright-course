// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Playwright Automation Course',
  tagline: 'From Beginner to Advanced — Master End-to-End Testing',
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Playwright Course',
      logo: {
        alt: 'Playwright Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Course Modules',
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
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Module 1 - Intro', to: '/docs/module-1-introduction' },
            { label: 'Module 10 - CI/CD', to: '/docs/module-10-ci-cd' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub Repository', href: 'https://github.com/richietunecore/playwright-course' },
            { label: 'Vercel Deployment', href: 'https://playwright-course.vercel.app' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Playwright Automation Course.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
