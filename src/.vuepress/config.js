const { description } = require('../../package')

module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Mushroom Card RPG',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '蘑菇牌RPG',
      description: description
    }
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    locales: {
      '/': {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        sidebarDepth: 0,
        nav: [
          {
            text: 'Document',
            link: '/guide/',
          },
          {
            text: 'Steam',
            link: 'https://store.steampowered.com/app/1433520/RPG/'
          }
        ],
        sidebar: 'auto'
      },
      '/zh/': {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        sidebarDepth: 0,
        nav: [
          {
            text: '文档',
            link: '/zh/guide/',
          },
          {
            text: 'Steam',
            link: 'https://store.steampowered.com/app/1433520/RPG/'
          }
        ],
        sidebar: 'auto'
      },
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
