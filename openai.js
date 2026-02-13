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

Return
