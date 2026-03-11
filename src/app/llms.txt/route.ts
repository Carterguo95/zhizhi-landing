export async function GET() {
    const content = `# ZHIZHI

> ZHIZHI 是一款融合正统东方命理（八字、天干地支）与本地优先（Local-First）安全架构的高端 iOS 应用，为用户构筑绝对私密的 AI 命运推演引擎。

## 核心页面

- [官网主页](https://zhizhi.app): 知之 ZHIZHI 落地页，包含产品介绍、功能展示与核心内测席位申请入口。
- [RSS 更新](https://zhizhi.app/feed.xml): 产品进展与内测动态的 RSS 订阅源。

## 核心特性

- **深度隐私护城河 (Local-First)**：所有排盘数据与推演过程均在本地沙盒完成，杜绝云端泄露。
- **正统东方哲学模型**：基于严谨的天干地支运算规则，构建精确的八字与流年推演基底。
- **大师精调 AI 深层对话**：针对用户的"四柱"进行多维度的 AI 推演与命运陪伴。
- **沉浸式量子罗盘界面**：以物理视觉特效包裹数据，打造极致感官体验。

## 获取核心内测席位

ZHIZHI 目前处于邀请制私密内测阶段，仅面向少数关注个人数据主权的极客及易学高阶体验者开放。
申请入口：[核心内测席位申请](https://zhizhi.app/#waitlist)
`;

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
        },
    });
}
