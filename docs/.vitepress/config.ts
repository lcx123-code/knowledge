import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/knowledge/',
  title: "我的编程知识库",
  description: "每次项目的知识点整理",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "C++", link: "/cpp/" },
      { text: "Python", link: "/python/" },
      { text: "前端", link: "/frontend/" },
      { text: "工具", link: "/tools/" }
    ],
    search: { provider: "local" },
    socialLinks: [
      { icon: "github", link: "https://github.com/lcx123-code/knowledge" }
    ],
    footer: {
      message: "知识就是力量",
      copyright: "MIT License"
    }
  }
})
