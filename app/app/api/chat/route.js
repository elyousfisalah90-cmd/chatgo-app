export async function POST(req) {
  try {
    const { message } = await req.json();

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: message }
        ],
      }),
    });

    const data = await res.json();

    if (!data.choices) {
      return Response.json({
        reply: "❌ كاين مشكل ف API",
      });
    }

    return Response.json({
      reply: data.choices[0].message.content,
    });

  } catch (error) {
    return Response.json({
      reply: "❌ Error وقع",
    });
  }
}