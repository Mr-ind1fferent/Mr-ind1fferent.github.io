import { defineConfig } from 'vitepress'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const categories = [
  ['guide', '开始与协作'],
  ['research', '研究与文献'],
  ['engineering', '环境与指令'],
  ['experiments', '实验记录'],
  ['resources', '知识索引'],
]

// 新增 Markdown 文件后自动加入侧栏，不需要手动修改导航。
const sidebar = categories.map(([directory, text]) => ({
  text,
  collapsed: false,
  items: readdirSync(`${root}/${directory}`)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const source = readFileSync(`${root}/${directory}/${file}`, 'utf8')
      const title = source.match(/^title:\s*(.+)$/m)?.[1]
        || source.match(/^#\s+(.+)$/m)?.[1]
        || file.replace(/\.md$/, '')
      const order = Number(source.match(/^order:\s*(\d+)$/m)?.[1] || 99)
      return { text: title, link: `/${directory}/${file.replace(/\.md$/, '')}`, order }
    })
    .sort((a, b) => a.order - b.order || a.text.localeCompare(b.text, 'zh-CN'))
    .map(({ order, ...item }) => item),
}))

export default defineConfig({
  lang: 'zh-CN',
  title: '具身手记',
  description: 'Mr-ind1fferent 的具身智能研究笔记、工程指令与实验记录。',
  base: '/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#f8faf8' }],
  ],
  sitemap: { hostname: 'https://mr-ind1fferent.github.io' },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '具身手记',
    nav: [
      { text: '文档', link: '/guide/getting-started', activeMatch: '^/(guide|research|experiments|resources)/' },
      { text: '环境与指令', link: '/engineering/index', activeMatch: '^/engineering/' },
      { text: '参与协作', link: '/guide/collaboration' },
    ],
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/Mr-ind1fferent/Mr-ind1fferent.github.io' }],
    editLink: {
      pattern: 'https://github.com/Mr-ind1fferent/Mr-ind1fferent.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    outline: { label: '本页目录', level: [2, 3] },
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Shanghai' } },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换为浅色',
    darkModeSwitchTitle: '切换为深色',
    sidebarMenuLabel: '文档目录',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
      options: {
        // 同时索引英文术语和中文二元词组，支持中文内容检索。
        miniSearch: {
          options: {
            tokenize(text) {
              const english = text.toLowerCase().match(/[a-z0-9_+-]+/g) || []
              const chinese: string[] = []
              for (const run of text.match(/[\u3400-\u9fff]+/g) || []) {
                chinese.push(...Array.from(run))
                for (let i = 0; i < run.length - 1; i++) chinese.push(run.slice(i, i + 2))
              }
              return [...english, ...chinese]
            },
          },
        },
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                displayDetails: '显示详细内容',
                resetButtonTitle: '清空搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关文档',
                footer: { selectText: '打开', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },
    footer: {
      message: '记录想法，复现过程，分享经验。',
      copyright: '© 2026 Mr-ind1fferent · 具身手记',
    },
  },
})
