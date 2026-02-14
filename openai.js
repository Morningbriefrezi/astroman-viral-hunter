import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeViral(products) {

  const prompt = `
You are a viral product scout for TikTok-driven ecommerce.

From this list, choose the TOP 5 products with highest viral potential.

Criteria:
- visually striking
- reaction video potential
- collectible or mystery element
- light, motion, or sound features
- repeat purchase potential

Return ONLY valid JSON.
Do not include markdown.
Format:

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

  let content = response.choices[0].m
