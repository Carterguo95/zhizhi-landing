import { NextResponse } from 'next/server';

export async function GET() {
    const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>知之 ZHIZHI | 内测动态与产品更新</title>
    <link>https://zhizhi.one</link>
    <description>了解知之的产品进展、内测邀请和最新动态。</description>
    <language>zh-cn</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://zhizhi.one/feed.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>知之内测申请开放</title>
      <link>https://zhizhi.one/#waitlist</link>
      <description>知之开始接受内测申请。留下常用邮箱，轮到你时会收到邮件通知。</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>https://zhizhi.one/#waitlist</guid>
    </item>
    
    <item>
      <title>知之会怎样帮助你做判断？</title>
      <link>https://zhizhi.one/#faq</link>
      <description>知之结合个人命盘、当下时间和过去的记录，帮你找到最近值得留意的问题。它不会替你做决定，也不会保证某件事一定发生。</description>
      <pubDate>${new Date(Date.now() - 86400000).toUTCString()}</pubDate>
      <guid>https://zhizhi.one/#faq-local-first</guid>
    </item>
  </channel>
</rss>`;

    return new NextResponse(rssContent, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
