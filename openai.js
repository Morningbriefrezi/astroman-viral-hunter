import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeViral(products) {

  const prompt = `
You are a viral product scout.

From this list, select the most viral-ready items.
Rate 1-10.
Explain why.
Generate a short Telegram-friendly description.

Return JSON:
[
  { name, score, reason, telegram_text }
]

Products:
${JSON.stringify(products)}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }]
  });

  return JSON.parse(response.choices[0].message.content);
}
