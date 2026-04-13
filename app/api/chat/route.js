export async function POST(req) {
  try {
    const { message } = await req.json();

    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: message,
      }),
    });

    const data = await res.json();

    return Response.json({
      reply: data.output?.[0]?.content?.[0]?.text || "❌ ماكاين جواب",
    });

  } catch (error) {
    return Response.json({
      reply: "❌ وقع مشكل",
    });
  }
}