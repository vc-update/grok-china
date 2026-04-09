import { defineConfig } from 'vitepress'

// IndexNow key（用于主动推送新页面给 Bing/Yandex）
const INDEXNOW_KEY = '994de5aaa8d242a08ce1e8451d6110a5'
const SITE_HOST = 'https://grok-china.com'

export default defineConfig({
  title: 'Grok 中文网',
  description:
    '2026 最新 Grok 中文版导航与国内使用指南，提供 Grok 官网入口、国内使用教程、Grok 对比评测与实战教程。',
  lang: 'zh-CN',
  cleanUrls: true,

  // 先保持严格检查，方便及时发现死链
  // 如果你临时调试想忽略死链，可以改成 true
  ignoreDeadLinks: false,

  sitemap: {
    hostname: 'https://grok-china.com',
    transformItems: (items) => {
      return items.map(item => ({
        ...item,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      }))
    }
  },

  lastUpdated: true,

  head: [
    // 你目前只有 logo.svg，先直接拿它当站点图标
    ['link', { rel: 'icon', href: '/logo.svg' }],

    // Bing Webmaster 验证
    ['meta', { name: 'msvalidate.01', content: '283F4ED132291BB65C882E27214A15B8' }],

    // IndexNow 验证 meta（Bing 也接受 meta 方式验证）
    ['meta', { name: 'indexnow-verification', content: INDEXNOW_KEY }],

    [
      'meta',
      {
        name: 'keywords',
        content:
          'Grok,Grok中文网,Grok中文版,Grok国内使用,Grok官网,Grok中国怎么用,Grok教程,Grok 4.1,Grok 4.2,SnakeGPT,GPTCat'
      }
    ],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'Grok 中文网' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'Grok 中文网' }],
    ['meta', { property: 'og:title', content: 'Grok 中文网｜Grok 国内使用指南与中文版入口' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '提供 Grok 官网入口、国内使用教程、Grok 与 ChatGPT 对比、Grok 实战教程与模型更新信息。'
      }
    ],
    ['meta', { property: 'og:url', content: `${SITE_HOST}/` }],

    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Grok 中文网',
        url: `${SITE_HOST}/`,
        description: 'Grok 中文版导航、国内使用指南与实战教程网站',
        inLanguage: 'zh-CN',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_HOST}/?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      })
    ],

    // BreadcrumbList schema（提升 Bing 搜索结果展示，显示路径面包屑）
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Grok 中文网',
        url: `${SITE_HOST}/`,
        logo: `${SITE_HOST}/logo.svg`,
        sameAs: []
      })
    ],
    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e3f5c9f50c34190ae43b4c3dd61195e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Grok 中文网',

    nav: [
      { text: '首页', link: '/' },
      { text: 'Grok 科普', link: '/intro/' },
      { text: '使用教程', link: '/tutorial/' },
      { text: '模型对比', link: '/compare/' },
      { text: '版本更新', link: '/news/' },
      {
        text: '立即体验（SnakeGPT）',
        link: 'https://snakegpt.vip',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      {
        text: '备用入口（GPTCat）',
        link: 'https://gptcat.cc',
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    ],

    sidebar: {
      '/intro/': [
        {
          text: 'Grok 核心知识',
          items: [
            { text: '导读', link: '/intro/' },
            { text: 'Grok 是什么？', link: '/intro/what-is-grok' },
            { text: 'Grok 官网入口', link: '/intro/grok-official-entry' },
            { text: 'Grok vs ChatGPT', link: '/intro/grok-vs-chatgpt' }
          ]
        }
      ],

      '/tutorial/': [
        {
          text: 'Grok 教程',
          collapsed: false,
          items: [
            { text: 'Grok Aurora AI绘图教程2026：零基础生成高质量图片完整指南', link: '/tutorial/grok-aurora-ai-huitu-shengcheng-tupian-jiaocheng-2026' },
            { text: 'Grok办公实战指南2026：10个职场高效场景实测', link: '/tutorial/grok-bangong-shiyong-zhinan-zhichang-xiaolv-2026' },
            { text: 'Grok API开发教程2026：Python调用Grok 4.2接口完整指南', link: '/tutorial/grok-api-kaifa-jiekou-jiaocheng-python-2026' },
            { text: 'Grok写论文靠谱吗？2026年Grok 4.2学术写作能力实测', link: '/tutorial/grok-xie-lunwen-xueshu-xiezuo-shice-prompt-2026' },
            { text: 'Grok Deep Search vs ChatGPT搜索实测2026：AI搜索谁更强？国内实战对比与使用教程', link: '/tutorial/grok-deep-search-vs-chatgpt-search-shizhan-2026' },
            { text: 'Grok免费版和SuperGrok有什么区别？2026年4月功能对比与国内使用攻略', link: '/tutorial/grok-mianfei-vs-supergrok-gongneng-duibi-2026' },
            { text: 'ChatGPT官网入口与注册教程2026：国内免翻墙访问GPT-5.4完整指南', link: '/tutorial/chatgpt-guanwang-rukou-zhuce-jiaocheng-2026' },
            { text: 'ChatGPT国内使用教程2026：免翻墙访问GPT-5.4的3种方法（4月实测可用）', link: '/tutorial/chatgpt-guonei-shiyong-jiaocheng-2026-april' },
            { text: 'Grok提示词大全2026：40个高效Prompt模板+Grok专属技巧让AI输出翻倍', link: '/tutorial/grok-prompt-guide-40-templates-2026' },
            { text: 'Grok国内能用吗？2026年4月国内使用Grok的3种方法亲测可用', link: '/tutorial/grok-china-access-guide-2026-april' },
            { text: 'Grok是什么？xAI Grok AI完全介绍——功能、特点、使用场景一文讲清', link: '/tutorial/what-is-grok-ai-xai-complete-introduction-2026' },
            { text: 'Grok注册教程2026：X账号注册+Grok开通全流程图文详解（国内可用方案）', link: '/tutorial/grok-register-tutorial-x-account-2026-april' },
            { text: 'Grok中文版2026指南：免费使用Grok 4.2的完整攻略（含Deep Search教程）', link: '/tutorial/grok-chinese-version-free-guide-deep-search-2026' },
            { text: 'Grok官网入口及中文版使用完整指南：2026年国内免翻墙直连Grok 4.2', link: '/tutorial/grok-guanwang-rukou-zhongwen-ban-wanzheng-zhinan-2026' },
            { text: 'Grok 4.2 vs ChatGPT GPT-5.4对比2026：编程/推理/中文/创意四维实测', link: '/tutorial/grok-42-vs-chatgpt-gpt54-comparison-april-2026' },
            { text: 'Grok 4.2全能力实测：编程/深度搜索/多模态，2026年4月国内无障碍使用攻略', link: '/tutorial/grok-4-2-april-2026-full-capability-guide' },
            { text: 'Grok中文版：国内直连使用指南（支持Grok4.2，无需翻墙）', link: '/tutorial/grok-chinese-direct-access-guide' },
            { text: 'Grok 4.20多智能体模式国内实战指南｜四Agent协作实测与使用教程（2026年3月）', link: '/tutorial/grok-4-20-multi-agent-china-guide' },
            { text: 'Grok 官网入口：国内 Grok 4.2 保姆级使用指南（2026 最新）', link: '/tutorial/grok-official-entry-usage-guide-2026' },
            { text: 'Grok 官网入口：国内 Grok 4.2 保姆级使用教程（2026 最新）', link: '/tutorial/grok-official-entry-tutorial-2026' },
            { text: 'Grok注册教程与国内使用攻略：2026年3月实测，5分钟上手Grok 4.2（免翻墙）', link: '/tutorial/grok-register-and-use-guide-2026-march' },
            { text: 'Grok怎么用？2026年国内用户Grok中文版保姆级使用教程（无需翻墙）', link: '/tutorial/grok-domestic-access-complete-guide-2026' },
            { text: 'Grok 中文版官网入口及国内使用完整教程（2026最新）', link: '/tutorial/grok-chinese-version-official-guide-2026' },
            { text: 'Grok 4.2 深度测评与国内注册使用全攻略（2026年3月实测）', link: '/tutorial/grok-4-2-review-and-setup-guide' },
            { text: 'Grok 国内使用详细指南｜无需魔法，镜像直达（2026年3月更新）', link: '/tutorial/grok-mirror-guide-2026-spring' },
            { text: '教程导读', link: '/tutorial/' },
            { text: 'Grok 国内使用指南', link: '/tutorial/grok-use-in-china' },
            { text: 'Grok 注册教程', link: '/tutorial/grok-register' },
            { text: 'Grok Prompt 教程', link: '/tutorial/grok-prompt-guide' },
            { text: 'Grok API 教程', link: '/tutorial/grok-api-guide' },
            { text: 'Deep Search 深度搜索指南', link: '/tutorial/grok-deepsearch' },
            { text: 'Grok 新手入门教程（2026）', link: '/tutorial/grok-beginner-tutorial-2026' },
            { text: 'Grok 4.2 实战场景指南（办公/学习/创作）', link: '/tutorial/grok-use-cases-2026' },
            { text: 'Grok 国内免翻墙使用方法（2026）', link: '/tutorial/grok-free-access-china-2026' },
            { text: 'Grok国内使用详细教程｜无需魔法，镜像直达（2026年3月）', link: '/tutorial/grok-china-tutorial-2026-march' }
          ]
        },
        {
          text: '国内资源共享',
          collapsed: false,
          items: [
            { text: 'AI聚合平台使用指南', link: '/tutorial/ai-platform-guide' },
            { text: 'ChatGPT 中文指南', link: 'https://www.chatgpt-chinese-guide.com/' },
            { text: 'ChatGPT 国内使用站', link: 'https://www.chatgpt-china.chat/' },
            { text: 'Gemini Guides', link: 'https://gemini-guides.com/' }
          ]
        }
      ],

      '/compare/': [
        {
          text: '模型对比',
          items: [
            { text: 'Claude中文版国内使用指南2026：免翻墙体验Claude 4.6全能力完整教程', link: '/compare/claude-zhongwen-ban-guonei-shiyong-zhinan-2026' },
            { text: 'Grok vs ChatGPT vs Claude怎么选？2026年新手AI选择指南（6维度实测对比）', link: '/compare/grok-vs-chatgpt-vs-claude-xinshourumen-xuanze-2026' },
            { text: '2026年AI写代码哪家强？Grok 4.2/GPT-5.4/Claude 4.6编程能力实测排名', link: '/compare/ai-xie-daima-grok-gpt-claude-biancheng-shice-2026' },
            { text: '2026年国内AI工具推荐：Grok/ChatGPT/Gemini/Claude/DeepSeek五大模型怎么选？一文搞定', link: '/compare/guonei-ai-gongju-tuijian-wuda-moxing-zenme-xuan-2026' },
            { text: 'Grok 4.2图片生成实测：Aurora AI绘图vs Midjourney vs DALL·E 3效果对比（2026年4月）', link: '/compare/grok-aurora-vs-midjourney-vs-dalle-huitu-duibi-2026' },
            { text: '2026年AI大模型横评：ChatGPT vs Grok vs Gemini vs Claude vs DeepSeek，哪个最强？', link: '/compare/ai-damoxing-duibi-chatgpt-grok-gemini-2026' },
            { text: 'Gemini中文版国内使用指南2026：免翻墙体验Google Gemini 3.1 Pro完整教程', link: '/compare/gemini-zhongwen-ban-guonei-shiyong-zhinan-2026' },
            { text: 'ChatGPT中文版免费使用指南（2026年4月更新）｜GPT-5.4国内直连方法汇总', link: '/compare/chatgpt-zhongwen-ban-mianfei-shiyong-zhinan-2026' },
            { text: 'ChatGPT 中文版官网入口｜国内免翻墙使用方法与注册教程（2026最新）', link: '/compare/chatgpt-chinese-guide-2026' },
            { text: '对比导读', link: '/compare/' },
            { text: 'Grok vs ChatGPT', link: '/compare/grok-vs-chatgpt-2026' },
            { text: 'Grok vs Gemini', link: '/compare/grok-vs-gemini-2026' },
            { text: 'Grok 3 vs Claude 3.7 深度对比', link: '/compare/grok-vs-claude' },
            { text: 'ChatGPT 中文版国内使用指南', link: '/compare/chatgpt-china' },
            { text: 'Grok 4.2 vs DeepSeek V3 深度横评', link: '/compare/grok-vs-deepseek-2026' }
          ]
        }
      ],

      '/news/': [
        {
          text: '版本更新',
          items: [
            { text: '更新导读', link: '/news/' },
            { text: 'Grok 4.20 四智能体模式深度解析', link: '/news/grok-4-20-agent-mode' },
            { text: 'Grok 模型更新日志', link: '/news/grok-model-updates-2026' },
            { text: 'Grok 4.1 新功能全解析', link: '/news/grok-4-features' }
          ]
        }
      ]
    },

    footer: {
      message: '本站为 Grok 中文教程与导航站，非 xAI 官方网站。',
      copyright: 'Copyright © 2026 Grok-China.com'
    },

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '文章目录'
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '文章导航',
    darkModeSwitchLabel: '深色模式'
  },

  // 为每篇文章自动注入 Article schema（让 Bing 识别发布时间和内容类型）
  transformPageData(pageData) {
    const fm = pageData.frontmatter || {}

    // 只对非首页文章注入 Article schema
    if (pageData.relativePath !== 'index.md') {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageData.title || fm.title || 'Grok 中文网',
        description: fm.description || pageData.description || '',
        datePublished: fm.date
          ? new Date(fm.date).toISOString()
          : new Date('2026-01-01').toISOString(),
        dateModified: fm.lastUpdated
          ? new Date(fm.lastUpdated).toISOString()
          : new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: 'Grok 中文网',
          url: SITE_HOST
        },
        publisher: {
          '@type': 'Organization',
          name: 'Grok 中文网',
          url: SITE_HOST,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_HOST}/logo.svg`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_HOST}/${pageData.relativePath.replace(/\.md$/, '').replace(/\/index$/, '')}`
        },
        inLanguage: 'zh-CN'
      }

      pageData.frontmatter.head = pageData.frontmatter.head || []
      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(articleSchema)
      ])
    }
  }
})