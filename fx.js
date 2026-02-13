import axios from "axios";

export async function convertToGEL(usd) {
  try {
    const res = await axios.get(
      "https://api.exchangerate.host/latest?base=USD&symbols=GEL"
    );

    if (!res.data || !res.data.rates || !res.data.rates.GEL) {
      console.log("FX API failed, using fallback rate 2.7");
      return (usd * 2.7).toFixed(2);
    }

    const rate = res.data.rates.GEL;
    return (usd * rate).toFixed(2);

  } catch (error) {
    console.log("FX API error, using fallback rate 2.7");
    return (usd * 2.7).toFixed(2);
  }
}
