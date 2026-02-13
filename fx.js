import axios from "axios";

export async function convertToGEL(usd) {
  const res = await axios.get(process.env.FX_API);
  const rate = res.data.rates.GEL;
  return (usd * rate).toFixed(2);
}
