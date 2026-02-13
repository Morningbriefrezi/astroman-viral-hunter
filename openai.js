import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeViral(products) {

  const prompt = `
You are a viral product scout.

Return ONLY valid JSON.
Do NOT include markdown.
Do NOT include backticks.
Do NOT explain anything.

Format exactly like this:

[
  {
    "name": "Product Name",
    "score": 1,
    "reason": "Short explanation",
    "telegram_text": "Short Telegram-ready message"
  }
]

Products:
${JSON.stringify(products)}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You output strict JSON only." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7
  });

  let content = response.choices[0].message.content;

  // Remove markdown formatting if GPT adds it
  content = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(content);
  } catch (error) {
    console.error("OpenAI returned invalid JSON:");
    console.error(content);
    throw error;
  }
}
