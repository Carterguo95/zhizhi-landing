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

## Aesthetic Direction

- **Direction:** Time Refraction Archive / 时间折射档案。
- **Decoration level:** 有主次的表达性材质，产品与数据区域保持克制。
- **Mood:** 温和、安静、精确、长期可信。
- **Layout:** 编辑式非对称品牌叙事 + 严格产品网格。
- **Visual signature:** 一条具有方向、冷暖交界、不规则曝光边缘的蓝—粉—米黄时间折射色带。
- **Research references:** Apple Intelligence 的明亮产品舞台、Anthropic 的暖色编辑式权威感、The Pattern 的浅色命盘与产品流程。

## Typography

- **Display / Hero:** Noto Serif SC, 500–600。承载中文核心判断、页面标题与重要引用。
- **Body / UI:** Instrument Sans + PingFang SC fallback, 400–600。承载正文、按钮和产品界面。
- **Data / Status:** IBM Plex Mono, 400–500。只用于真实日期、状态、顺序和档案信息。
- **Loading:** Google Fonts CDN during initial implementation; production may self-host after performance review.
- **Scale:** 12 / 14 / 16 / 18 / 24 / 36 / 52 / 72 / 96px, with fluid `clamp()` for 52px and above.
- **Rule:** 装饰英文、虚假系统日志和无功能编号不进入正式页面。

## Color

- **Approach:** 明亮暖色画布 + 克制光谱焦点。全站约 75% 明亮表面、15% 彩色折射舞台、10% 深色沉浸章节。
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
- **Dark surfaces:** Limited to the system-explanation section and footer. Avoid full-page dark mode as the default brand presentation.

## Spacing

- **Base unit:** 8px.
- **Density:** Spacious for brand narrative, comfortable for product explanation, compact inside realistic product UI.
- **Scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px.

## Layout

- **Grid:** 12 columns desktop, 8 tablet, 4 mobile.
- **Max width:** 1320px.
- **Horizontal gutters:** 24px mobile, 32–48px desktop.
- **Radius hierarchy:** controls 999px, data rows 8px, inner actions 14px, cards 18–22px, feature stages 28–34px.
- **Rule:** Do not use the same large radius on every element. Do not rebuild the homepage as a generic feature-card dashboard.

## Motion

- **Approach:** Intentional, scroll-led continuity. Motion explains focus and passage of time.
- **Hero:** Pointer-responsive refraction band and slow orbital calibration.
- **Sections:** 24–36px vertical reveal, 60–90ms stagger, opacity + transform only.
- **Product journey:** Sticky narrative index with continuous product stages; no decorative autoplay carousel.
- **Duration:** micro 140–180ms, short 220–320ms, medium 400–650ms, ambient 12–80s.
- **Easing:** enter `cubic-bezier(.2,.8,.2,1)`, exit `ease-in`, move `ease-in-out`.
- **Accessibility:** `prefers-reduced-motion` removes continuous rotation, pointer parallax and large scroll displacement.

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

