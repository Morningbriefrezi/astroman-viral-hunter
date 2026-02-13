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
