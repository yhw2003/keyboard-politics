import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "oxy的小作文",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '小作文s', link: '/docs/欸现代性怎么这么坏' }
    ],

    sidebar: [
      {
        text: '小作文s',
        items: [
          { text: '欸现代性怎么这么坏', link: '/docs/欸现代性怎么这么坏' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yhw2003/' }
    ]
  }
})
