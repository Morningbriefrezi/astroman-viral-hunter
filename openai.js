const prompt = `
You are a viral product scout for TikTok-driven ecommerce.

From this list, choose the TOP 5 products with highest viral potential.

Criteria:
- visually striking
- reaction video potential
- collectible or mystery element
- light, motion, or sound features
- repeat purchase potential

Return ONLY JSON.
Do not include markdown.
Format:

[
  {
    "name": "...",
    "score": 1-10,
    "reason": "...",
    "telegram_text": "..."
  }
]

Products:
${JSON.stringify(products)}
`;
