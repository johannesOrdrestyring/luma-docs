import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Luma',
  description: 'Less admin. More life. AI-powered business helper for tradespeople.',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: 'Luma' }],
    ['meta', { property: 'og:description', content: 'Less admin. More life.' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Luma',

    nav: [
      { text: 'Vision', link: '/vision' },
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Pilot Program', link: '/pilot' },
      { text: 'Open App', link: 'https://app.luma.aceve.cloud' }
    ],

    sidebar: {
      '/changelog/': [
        {
          text: 'Changelog',
          items: [
            { text: 'Overview', link: '/changelog/' },
            { text: 'January 2026', link: '/changelog/2026-01' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'linkedin', link: 'https://linkedin.com/company/aceve' }
    ],

    footer: {
      message: 'Built with ❤️ by Aceve',
      copyright: '© 2026 Aceve AB. All rights reserved.'
    },

    search: {
      provider: 'local'
    }
  }
})
