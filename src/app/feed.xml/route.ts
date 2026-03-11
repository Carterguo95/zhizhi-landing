import { NextResponse } from 'next/server';

export async function GET() {
    const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ZHIZHI | 官方内测动态与产品更新</title>
    <link>https://zhizhi.one</link>
    <description>关注 ZHIZHI 最新动向。东方哲学体系与本地数据安全架构结合的高端应用。</description>
    <language>zh-cn</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://zhizhi.one/feed.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>ZHIZHI 核心内测申请正式开启</title>
      <link>https://zhizhi.one/#waitlist</link>
      <description>我们正式面向具备系统思维且关注个人数据主权的高阶体验者，开放首批核心内测席位的申请通道。由于本地安全沙盒算力有限，邀请将分批次发放。</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>https://zhizhi.one/#waitlist</guid>
    </item>
    
    <item>
      <title>为什么我们坚持 Local-First 本地优先架构？</title>
      <link>https://zhizhi.one/#faq</link>
      <description>你的生辰八字和推演过程是极其核心的隐私数据。ZHIZHI 采用全本地推演引擎，杜绝云端留存，打造绝对安全的灵魂资料库。</description>
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
