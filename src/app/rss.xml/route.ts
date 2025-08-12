import { NextResponse } from "next/server";

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Kapital.kz - Новости Казахстана</title>
    <link>https://kapital.kz</link>
    <description>Актуальные новости Казахстана</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <language>ru-RU</language>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
