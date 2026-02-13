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

    const product = rawProducts.find(p => p.name === analysis[i].name);
    const gel = await convertToGEL(product.price_usd);

    message += `
${i+1}. ${analysis[i].name}
🔥 Score: ${analysis[i].score}/10
💵 USD: $${product.price_usd}
🇬🇪 GEL: ${gel}₾
🔗 Link: ${product.link}

🧠 Why: ${analysis[i].reason}

`;
  }

  await sendToTelegram(message);
}

// Schedule daily run
cron.schedule("0 5 * * *", async () => {
  await runViralHunter();
});

// Run immediately for GitHub manual trigger
runViralHunter();
