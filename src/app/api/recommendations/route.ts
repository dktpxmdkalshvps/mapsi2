import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { style, gender, fitType, personalColor } = body;

    // ========================================================
    // Option 1: Call external crawler backend
    // Set CRAWLER_API_URL in Vercel environment variables
    // to point to your Python crawler server (e.g. Railway/Render)
    // ========================================================
    const crawlerUrl = process.env.CRAWLER_API_URL;

    if (crawlerUrl) {
      const response = await fetch(`${crawlerUrl}/recommend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ style, gender, fitType, personalColor }),
        signal: AbortSignal.timeout(15000), // 15s timeout
      });

      if (response.ok) {
        const data = await response.json();
        return NextResponse.json({ products: data.products ?? {} });
      }
    }

    // ========================================================
    // Option 2: Return empty (frontend shows "서버 연결 필요" state)
    // ========================================================
    return NextResponse.json({ products: {} });
  } catch {
    return NextResponse.json({ products: {} });
  }
}
