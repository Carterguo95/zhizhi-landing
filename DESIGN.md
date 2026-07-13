# Design System — 知之 ZHIZHI Website

## Product Context

- **What this is:** 知之官网是 iOS 产品的品牌、产品解释与核心内测转化入口。知之不是开放聊天型命理工具，而是围绕个人命盘、每日时机、主动洞察、追问和历史沉淀组织起来的长期决策辅助产品。
- **Who it is for:** 面对工作、关系、健康与人生阶段变化，希望更理解自己、判断时机并减少明显试错的中文用户。
- **Space:** 东方文化、自我理解、个人决策、主动式 AI。
- **Project type:** Product marketing site + beta waitlist.
- **Primary narrative:** 模糊感受 → 主动发现值得关注的问题 → 结构化解释与追问 → 历史沉淀与持续理解。

## Memorable Thing

**像一台来自东方未来的温柔时间仪器。**

“仪器”代表清晰、可信和时间感。它不代表科幻 HUD、仪表盘堆叠或黑底霓虹。

这台仪器应当贯穿整页：用户向下滚动时，光谱折射、校准轨道、档案编号与显影刻度持续出现。首屏罗盘是核心机械结构，后续章节是同一台仪器展开后的不同工作面。

## Aesthetic Direction

- **Direction:** Soft Optical Chronofuturism / 柔性光学时间未来主义。
- **Decoration level:** 有主次的表达性材质，产品与数据区域保持克制。
- **Mood:** 温和、安静、精确、长期可信。
- **Layout:** 编辑式非对称档案 + 机械校准网格 + 开放式产品舞台。
- **Visual signature:** 一条边缘清晰、带曝光切面和颗粒套色的蓝—粉—米黄时间折射带，从 Hero 贯穿到页脚。
- **Research references:** IBM 的结构网格、PlayStation 的三层表面、Nintendo 2001 的设备外壳逻辑、Mastercard 的暖色轨道构图。只提取方法，不复制品牌资产。
- **Anti-template rule:** 同一种“标题 + 正文 + 圆角卡片”结构最多出现一次；相邻章节必须改变信息承载方式、边缘处理或滚动关系。

## Typography

- **Display / Hero:** Noto Serif SC, 400–500。承载中文核心判断，保持宋体骨架，避免海报式装饰感和过粗字重。
- **Body / UI:** Barlow Condensed + PingFang SC fallback, 400–600。英文与数字偏窄，中文保持清晰克制。
- **Data / Status:** Fragment Mono, 400。只用于真实日期、状态、顺序和档案信息。
- **Loading:** Google Fonts CDN during initial implementation; production may self-host after performance review.
- **Scale:** 12 / 14 / 16 / 18 / 24 / 36 / 52 / 72 / 96px, with fluid `clamp()` for 52px and above.
- **Rule:** 标题通过比例、断行和位置建立识别，不使用花体、描边字或渐变文字。装饰英文、虚假系统日志和无功能编号不进入正式页面。

## Color

- **Approach:** 明亮暖色画布 + 连续光谱结构。全站约 72% 明亮纸面、20% 光谱与氧化金属表面、8% 深色收束章节。
- **Canvas:** `#F1ECE2`
- **Surface:** `#F7F2E8`
- **Ink:** `#202625`
- **Graphite:** `#65645F`
- **Hairline:** `#D2C9BA`
- **Archive Blue:** `#8EA9C4`
- **Archive Blue Deep:** `#4E7096`
- **Soft Rose:** `#DDA9AC`
- **Rosewood:** `#925E61`
- **Seafoam:** `#94B7AE`
- **Butter:** `#E4D4A9`
- **Deep Teal:** `#183B39`, for primary actions and selected states.
- **Semantic:** success `#477A67`, warning `#A87834`, error `#A34F4F`, info `#4E7096`.
- **Oxidized Metal:** `#D8D9D0`, for calibration plates and product hardware frames.
- **Signal Amber:** `#D5A95C`, for active calibration points only.
- **Dark surfaces:** Limited to the footer and small high-contrast plates. Avoid full-page dark sections as the default brand presentation.

## Spacing

- **Base unit:** 8px.
- **Density:** Spacious for brand narrative, comfortable for product explanation, compact inside realistic product UI.
- **Scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px.

## Layout

- **Grid:** 12 columns desktop, 8 tablet, 4 mobile.
- **Max width:** 1320px.
- **Horizontal gutters:** 24px mobile, 32–48px desktop.
- **Radius hierarchy:** mechanical plates 0–4px, data rows 4px, inner product UI 12–18px, phone hardware 42–48px, navigation signal 999px.
- **Edge language:** 1px hairlines, clipped corners, registration marks, open grid lines and occasional circular optical rings. Large rounded rectangles are reserved for real product hardware.
- **Rule:** Do not use the same large radius on every element. Do not rebuild the homepage as a generic feature-card dashboard. Cards exist only where the product itself is card-based.

## Motion

- **Approach:** Intentional, scroll-led continuity. Motion expresses calibration, exposure and the passage of time.
- **Hero:** Restored multi-ring astrolabe with differential rotation, pointer activation and a crisp spectral exposure plane.
- **Global KV:** A page-length refraction spine changes position and scale with scroll; spectral planes keep defined edges instead of large blur filters.
- **Sections:** Content is revealed through scan windows and line calibration, not repeated fade-up presets.
- **Product journey:** Sticky narrative index with alternating open stages; product screens move through controlled depth rather than sitting inside identical rounded cards.
- **Duration:** micro 140–180ms, short 220–320ms, medium 400–650ms, ambient 12–80s.
- **Easing:** enter `cubic-bezier(.2,.8,.2,1)`, exit `ease-in`, move `ease-in-out`.
- **Accessibility:** `prefers-reduced-motion` freezes orbit rotation, removes pointer parallax and resolves scan reveals immediately. Canvas animation pauses when the Hero leaves the viewport or the page is hidden.

## Material Vocabulary

- **Archive paper:** warm canvas with visible but restrained print grain.
- **Spectral exposure:** blue, rose, seafoam and butter planes with crisp polygonal or mask-cut edges; blur is limited to a 4–8px optical bloom.
- **Calibration plate:** pale oxidized-metal field, 1px grid and clipped corners; no glassmorphism.
- **Registration marks:** short rules, crosshairs, serial dates and honest section indices used as wayfinding.
- **Optical rings:** hairline circles, dashed tracks and radial ticks tied to timing or progression.
- **Scan window:** a moving rule or mask reveals content once per viewport entry; never becomes an ornamental looping shimmer.

## Narrative Architecture

1. **Hero:** 提前看见，你此刻真正该问的问题。
2. **Before language:** 重要问题常先以模糊感受出现。
3. **How it works:** 自我模型 × 时机模型 × 意图模型。
4. **Product relationship:** 首页 = 今日行动入口；知之 = 解释与追问入口；历史档案 = 复访与持续记忆入口。
5. **Trust:** 东方文化中的人生理解框架 + 决策辅助工具。不承诺确定预测，不替用户决定。
6. **Waitlist:** 让每一次判断成为更理解自己的开始。

## Content Guardrails

- 不使用“百分百精准预测”“大师精调”“千万命理逻辑”“强化学习反馈”“Scaling Laws”等无法由当前产品事实支持的表达。
- 不把产品描述成开放聊天框或一次性报告工具。
- 不把当前仍依赖 mock 的历史闭环描述为已经完整上线。
- 优先表达主动洞察、时间变化、结构化解释、追问和长期沉淀。

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-07-13 | 官网采用 Time Refraction Archive | 与 iOS 正式 KV 保持一致，替换黑底星空和通用玄学科技感 |
| 2026-07-13 | 官网主叙事改为主动发现 → 解释追问 → 历史沉淀 | 真实产品形态不是聊天框或能力列表 |
| 2026-07-13 | 约 75% 页面使用明亮表面 | 提高信任、可读性与产品展示清晰度 |
| 2026-07-13 | 取消虚构训练数据与技术指标 | 避免无事实支撑的可信度风险 |
| 2026-07-13 | 全局升级为 Soft Optical Chronofuturism | 将 KV 从 Hero 装饰扩展为字体、材料、边缘和运动系统 |
| 2026-07-13 | 恢复旧版多层罗盘机制 | 用户明确认可旧版罗盘的交互与品牌记忆 |
| 2026-07-13 | 减少柔焦并采用清晰曝光切面 | 提高 KV 的打开感、结构感与跨章节一致性 |
