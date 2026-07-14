export async function GET() {
    const content = `# 知之 ZHIZHI

> 知之是一款基于东方命理的人生理解与决策辅助应用。它结合个人命盘、当下时间和过去的记录，主动发现最近值得留意的问题，帮助用户了解自己、看清时机和整理选择。

## 核心页面

- [官网主页](https://zhizhi.one)：了解知之如何工作，并申请内测。
- [RSS 更新](https://zhizhi.one/feed.xml)：订阅产品进展和内测动态。

## 核心特性

- **主动发现**：在用户还没想清楚怎么提问时，先给出最近值得留意的主题。
- **继续追问**：从一条提醒出发，把原因、感受和眼前的选择慢慢问清楚。
- **长期记录**：保存看过、问过和验证过的内容，让下一次理解接得上过去。
- **清楚边界**：知之不会保证某件事一定发生，也不会替用户做决定。

## 申请内测

知之目前分批开放内测。留下常用邮箱，轮到你时会收到邮件通知。
申请入口：[申请知之内测](https://zhizhi.one/#waitlist)
`;

    return new Response(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
        },
    });
}
