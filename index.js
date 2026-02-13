import dotenv from "dotenv";
dotenv.config();

import cron from "node-cron";
import { fetchProducts } from "./suppliers.js";
import { analyzeViral } from "./openai.js";
import { convertToGEL } from "./fx.js";
import { sendToTelegram } from "./telegram.js";

async function runViralHunter() {

  const rawProducts = await fetchProducts();
  const analysis = await analyzeViral(rawProducts);

  let message = "🚀 ASTROMAN VIRAL HUNTER REPORT\n\n";

  for (let i = 0; i < analysis.length; i++) {

    const gel = await convertToGEL(rawProducts[i].price_usd);

    message += `
${i+1}. ${analysis[i].name}
Score: ${analysis[i].score}/10
USD: $${rawProducts[i].price_usd}
GEL: ${gel}₾
Why: ${analysis[i].reason}

`;
  }

  await sendToTelegram(message);
}

cron.schedule("0 9 * * *", async () => {
  await runViralHunter();
});

runViralHunter();
