<script setup>
import { withBase } from 'vitepress'

const topics = [
  { number: '01', tag: 'RESEARCH', title: '研究与文献', text: '梳理论文、模型与方法，把值得继续追问的问题留下来。', link: '/research/overview', icon: 'M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h5' },
  { number: '02', tag: 'ENGINEERING', title: '环境与指令', text: '记录配置过程与常用指令，让下一次操作和排查更顺手。', link: '/engineering/index', icon: 'M4 5h16v14H4z M8 9l3 3-3 3 M13 15h4' },
  { number: '03', tag: 'EXPERIMENTS', title: '实验记录', text: '保存配置、观察与结果，沿着可追溯的过程推进实验。', link: '/experiments/index', icon: 'M9 3h6 M10 3v7l-6 9h16l-6-9V3 M8 15h8' },
  { number: '04', tag: 'KNOWLEDGE', title: '知识索引', text: '串起关键术语与延伸阅读，建立自己的具身智能知识地图。', link: '/resources/index', icon: 'M12 3v18 M3 12h18 M5 5l14 14 M19 5L5 19 M12 3l2 3 M21 12l-3 2' },
]
const entries = [
  { category: '开始阅读', title: '这份手记如何使用', detail: '写作约定与文档结构', link: '/guide/getting-started' },
  { category: '工程实践', title: '环境与指令', detail: '栏目已就绪，内容待补充', link: '/engineering/index' },
  { category: '共同维护', title: '邀请合作者与编辑文档', detail: '权限、修改与自动发布', link: '/guide/collaboration' },
]
</script>

<template>
  <div class="notebook-home">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <div class="eyebrow"><span class="status-dot"></span> MR-IND1FFERENT / EMBODIED NOTES</div>
        <h1 id="hero-title">让每一次探索，<br>都有迹可循<span class="hero-period">。</span></h1>
        <p class="hero-description">从论文阅读到环境配置，记录具身智能研究中的<br class="desktop-break">思考、指令与实验。把零散的经验，积累成可复用的知识。</p>
        <div class="hero-actions">
          <a class="primary-link" :href="withBase('/guide/getting-started')">开始阅读 <span aria-hidden="true">↗</span></a>
          <a class="secondary-link" href="https://github.com/Mr-ind1fferent/Mr-ind1fferent.github.io" target="_blank" rel="noopener noreferrer">在 GitHub 查看 <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-meta"><span>公开阅读</span><i></i><span>持续记录</span><i></i><span>共同维护</span></div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-heading"><span>PERCEPTION → ACTION</span><span class="art-cross">+</span></div>
        <svg class="robot-diagram" viewBox="0 0 420 330" fill="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity=".12"/></pattern>
          </defs>
          <rect width="420" height="330" fill="url(#dots)"/>
          <ellipse cx="226" cy="276" rx="128" ry="26" stroke="currentColor" stroke-opacity=".12"/>
          <path d="M64 267h298 M88 282h250" stroke="currentColor" stroke-opacity=".22"/>
          <path d="M179 267v-28h69v28 M163 267h101" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
          <path d="M211 235l-41-87" stroke="currentColor" stroke-width="34" stroke-linecap="round"/>
          <path d="M211 235l-41-87" stroke="var(--vp-c-bg)" stroke-width="26" stroke-linecap="round"/>
          <path d="M174 147l101-68" stroke="currentColor" stroke-width="29" stroke-linecap="round"/>
          <path d="M174 147l101-68" stroke="var(--vp-c-bg)" stroke-width="21" stroke-linecap="round"/>
          <circle cx="173" cy="149" r="22" fill="var(--vp-c-bg)" stroke="currentColor" stroke-width="3"/>
          <circle cx="173" cy="149" r="9" fill="var(--vp-c-brand-soft)" stroke="var(--vp-c-brand-1)" stroke-width="2"/>
          <circle cx="211" cy="235" r="15" fill="var(--vp-c-bg)" stroke="currentColor" stroke-width="3"/>
          <circle cx="211" cy="235" r="5" fill="var(--vp-c-brand-1)"/>
          <circle cx="276" cy="79" r="15" fill="var(--vp-c-bg)" stroke="currentColor" stroke-width="3"/>
          <path d="M282 92l24 30-3 25 M268 95l16 34-19 19" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M297 171v31l-27 16-28-16v-31l28-16 27 16Z M242 171l28 16 27-16 M270 187v31" stroke="var(--vp-c-brand-1)" stroke-width="2"/>
          <circle cx="270" cy="184" r="50" stroke="var(--vp-c-brand-1)" stroke-dasharray="4 7" stroke-opacity=".4"/>
          <path d="M86 78h34v24H86z M120 85l15-7v23l-15-7 M98 102v14 M84 117h28" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="M140 91l70 38 M140 95l85 78" stroke="var(--vp-c-brand-1)" stroke-dasharray="3 5" stroke-opacity=".5"/>
          <path d="M66 54v-9h10 M346 236h10v-9" stroke="currentColor" stroke-opacity=".3"/>
          <circle cx="331" cy="52" r="4" fill="var(--vp-c-brand-1)"/>
          <text x="74" y="137" class="diagram-text">OBSERVE</text>
          <text x="321" y="190" class="diagram-text">ACT</text>
        </svg>
        <div class="art-footer"><span>观察 · 理解 · 行动</span><span>FIELD NOTES / 001</span></div>
      </div>
    </section>

    <section class="topics-section" aria-labelledby="topics-title">
      <div class="section-heading"><div><span class="section-label">THE NOTEBOOK</span><h2 id="topics-title">从这里展开</h2></div><p>为研究过程留下一份清晰的索引。</p></div>
      <div class="topics-grid">
        <a v-for="topic in topics" :key="topic.number" class="topic-card" :href="withBase(topic.link)">
          <div class="topic-top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="topic.icon"/></svg><span>{{ topic.number }}</span></div>
          <span class="topic-tag">{{ topic.tag }}</span><h3>{{ topic.title }}</h3><p>{{ topic.text }}</p><span class="topic-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <section class="entries-section" aria-labelledby="entries-title">
      <div class="section-heading"><div><span class="section-label">START SOMEWHERE</span><h2 id="entries-title">先读这几篇</h2></div><a class="all-docs" :href="withBase('/guide/getting-started')">进入文档目录 <span aria-hidden="true">→</span></a></div>
      <a v-for="entry in entries" :key="entry.link" class="entry-row" :href="withBase(entry.link)"><span class="entry-category">{{ entry.category }}</span><h3>{{ entry.title }}</h3><span class="entry-detail">{{ entry.detail }}</span><span class="entry-arrow" aria-hidden="true">↗</span></a>
    </section>

    <section class="collaboration-banner"><div><span class="section-label">BUILD TOGETHER</span><h2>让经验在交流中生长。</h2><p>发现问题、补充笔记，或一起维护这份手记。</p></div><a :href="withBase('/guide/collaboration')">了解如何参与 <span aria-hidden="true">↗</span></a></section>
  </div>
</template>
