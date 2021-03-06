/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [

];

const baseUrl = '/devops-tutorial/';
const repoUrl = 'https://github.com/romach/devops-tutorial/';
const chatUrl = 'https://gitter.im/devops-tutorial-chat/community';

const siteConfig = {
  title: 'DevOps tutorial', // Title for your website.
  tagline: 'Useful tutorials for DevOps engineers',
  //url: 'https://your-docusaurus-test-site.com', // Your website URL
  //baseUrl: '/', // Base URL for your project */
  url: 'https://romach.github.io', // Your website URL
  baseUrl, // Base URL for your project */
  chatUrl, // Chat url */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'devops-tutorial',
  organizationName: 'romach',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'index', label: 'Tutorial'},
    {blog: true, label: 'Blog'},
    {href: chatUrl, label: 'Chat' },
    {href: repoUrl, label: 'GitHub' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/gear.svg',
  footerIcon: 'img/gear.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Roman Cherepanov`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'darcula',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    `${baseUrl}js/code-block-buttons.js`,
  ],
  stylesheets: [],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/favicon.png',
  twitterImage: 'img/favicon.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: repoUrl,

  gaTrackingId: 'UA-133351340-1',

  gaGtag: true,

  scrollToTop: true,

  docsSideNavCollapsible: true,

  editUrl: `${repoUrl}edit/master/docs/`,

  markdownPlugins: [
    (md) => {
      require('remarkable-plantuml')(md, {base_path: './static'});
    }
  ]
};

module.exports = siteConfig;
