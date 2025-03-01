import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

/* TODO: change to read configuration from environment */
const blogEnabled = false;

const moreColumn = {
  title: "More",
  items: [
    {
      label: "GitHub",
      href: "https://github.com/BenjaminTietz",
    },
    {
      label: "Portfolio",
      href: "https://benjamin-tietz.com/",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/benjamin-tietz/",
    },
  ],
};
if (blogEnabled) {
  moreColumn.items.push({
    label: "Blog",
    href: "/blog",
  });
}

const config: Config = {
  title: "DSO Live Demo Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://BenjaminTietz.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/DevSecOps-Blog/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BenjaminTietz", // Usually your GitHub org/user name.
  projectName: "DevSecOps-Blog", // Usually your repo name.

  deploymentBranch: "main",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/BenjaminTietz/DevSecOps-Blog",
        },
        blog: blogEnabled
          ? {
              showReadingTime: true,
              feedOptions: {
                type: ["rss", "atom"],
                xslt: true,
              },
              // Please change this to your repo.
              // Remove this to remove the "edit this page" links.
              editUrl: "https://github.com/BenjaminTietz/DevSecOps-Blog",
              // Useful options to enforce blogging best practices
              onInlineTags: "warn",
              onInlineAuthors: "warn",
              onUntruncatedBlogPosts: "warn",
            }
          : false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "DevSecOps Docs & Blog",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/BenjaminTietz/DevSecOps-Blog",
          label: "Github",
          position: "right",
        },
        {
          href: "https://benjamin-tietz.com/",
          label: "Portfolio",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/guides/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        moreColumn,
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //     blogEnabled && {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "hcl"],
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "This will error",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
