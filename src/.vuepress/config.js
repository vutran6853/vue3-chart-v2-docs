const { description } = require('../../package')
const path = require('path')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'vue3-chart-v2',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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
  // base: 'https://vue3-chart-v2.netlify.app/',
  base: '/',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'vutran6853/vue3-chart-v2-docs',
    editLinks: false,
    // docsDir: 'src',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      // {
      //   text: 'Github',
      //   link: 'https://github.com/vutran6853/vue3-chart-v2-docs'
      // }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'Setup',
            'Creating your first Chart',
            'Examples'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ],
}
