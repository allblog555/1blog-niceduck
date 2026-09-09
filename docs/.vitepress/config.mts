import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "好鸭官网 - 2026出海报错排查与高速量子专线接入中心",
  description: "好鸭 (NiceDuck) 官方网站。专注 2026 ChatGPT/Claude 1020 风控报错排查、Clash Verge/小火箭故障修复、原生双 ISP 纯净 IEPL 量子专线测速与避坑指南。",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'canonical', href: 'https://niceduck.cyou' }],
    ['meta', { name: 'keywords', content: '好鸭官网, NiceDuck, niceduck.cyou, 量子专线, ChatGPT 1020, Claude 地区限制, Clash Verge, 原生双ISP, 机场推荐, 跑路黑名单' }],
    ['meta', { name: 'author', content: '好鸭 NiceDuck 技术团队' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '好鸭官网 NiceDuck' }],
    ['meta', { property: 'og:title', content: '好鸭官网 - 2026出海报错排查与高速量子专线接入中心' }],
    ['meta', { property: 'og:description', content: '量子连网 · QUANTUM LINK · ALWAYS AHEAD. 稳定、快速、易用的全球网络加速与 AI 风控排障服务。' }],
    ['meta', { property: 'og:url', content: 'https://niceduck.cyou' }]
  ],
  themeConfig: {
    siteTitle: '好鸭官网 · NiceDuck',
    nav: [
      { text: '首页', link: '/' },
      { text: '🤖 AI报错排查', link: '/ai-errors/chatgpt-access-denied' },
      { text: '🛠️ 客户端故障', link: '/client-troubleshoot/clash-verge-proxy-off' },
      { text: '🎬 流媒体解锁', link: '/streaming-unlock/' },
      { text: '🚀 专线测速与套餐', link: '/pricing-reviews/' },
      { text: '⚠️ 跑路预警黑榜', link: '/warning/' },
      { text: '🙋‍♂️ 关于好鸭', link: '/about/' }
    ],
    sidebar: {
      '/ai-errors/': [
        {
          text: '🤖 AI & 大模型报错解决方案',
          items: [
            { text: 'ChatGPT 1020 Access Denied 终极修复', link: '/ai-errors/chatgpt-access-denied' }
          ]
        }
      ],
      '/client-troubleshoot/': [
        {
          text: '🛠️ 客户端与系统网络故障',
          items: [
            { text: 'Clash Verge 系统代理自动关闭排查', link: '/client-troubleshoot/clash-verge-proxy-off' }
          ]
        }
      ],
      '/streaming-unlock/': [
        {
          text: '🎬 流媒体与外贸出海解锁',
          items: [
            { text: 'Netflix / Disney+ 原生双 ISP 解锁指南', link: '/streaming-unlock/' }
          ]
        }
      ],
      '/pricing-reviews/': [
        {
          text: '🚀 专线测速与套餐选型',
          items: [
            { text: '好鸭量子专线测速报告与套餐说明', link: '/pricing-reviews/' }
          ]
        }
      ],
      '/warning/': [
        {
          text: '⚠️ 跑路机场黑名单预警',
          items: [
            { text: '2026 避坑指南与垃圾机场曝光', link: '/warning/' }
          ]
        }
      ],
      '/about/': [
        {
          text: '🙋‍♂️ 关于好鸭 NiceDuck',
          items: [
            { text: '好鸭品牌介绍与技术承诺', link: '/about/' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: '量子连网 · QUANTUM LINK · ALWAYS AHEAD | 官方域名 niceduck.cyou',
      copyright: 'Copyright © 2026 好鸭官网 NiceDuck. All Rights Reserved.'
    }
  }
})
