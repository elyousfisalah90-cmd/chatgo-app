let users = {}; // نخزنو عدد الرسائل هنا (مؤقت)

export async function POST(req) {
  try {
    const { message } = await req.json();

    // 🧠 نجيب IP ديال المستخدم
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // إذا ما كاينش → نبداو من 0
    if (!users[ip]) {
      users[ip] = 0;
    }

    // ❌ إلا فات 10 رسائل
    if (users[ip] >= 10) {
      return Response.json({
        reply: "🚫 سالات 10 رسائل المجانية، خاصك تخلص 💰",
      });
    }

    // ➕ نزادو 1
    users[ip]++;

    // 🤖 نطلبو الجواب من OpenAI
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
      reply: data.output_text || "❌ ما كاين جواب",
      remaining: 10 - users[ip], // شحال بقا ليه
    });

  } catch (error) {
    return Response.json({
      reply: "❌ وقع مشكل",
    });
  }
}