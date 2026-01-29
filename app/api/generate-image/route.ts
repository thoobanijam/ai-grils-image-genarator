// app/api/generate-image/route.ts
import { NextResponse } from "next/server";

const API_KEY = process.env.AI_GATEWAY_API_KEY; // your Pollinations key
const API_URL = "https://image.pollinations.ai/prompt";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "No prompt provided" }, { status: 400 });
    }

    const encodedPrompt = encodeURIComponent(prompt);

    // Pollinations supports optional headers with API key
    const response = await fetch(`${API_URL}/${encodedPrompt}?width=512&height=512`, {
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    // Pollinations returns the image directly, so we can return its URL
    const imageUrl = response.url;

    return NextResponse.json({ images: [imageUrl] });
  } catch (err: any) {
    console.error("Image generation error:", err);
    return NextResponse.json({ error: err.message || "Something went wrong" }, { status: 500 });
  }
}
