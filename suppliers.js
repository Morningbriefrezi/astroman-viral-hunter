import axios from "axios";
import { VIRAL_KEYWORDS } from "./viralKeywords.js";

export async function fetchProducts() {

  // Simulate dynamic viral pool
  const samplePool = [
    {
      name: "Magnetic Transforming Metal Cube",
      price_usd: 8.20,
      link: "https://example.com/magnetic-cube"
    },
    {
      name: "Mini Desktop Claw Machine",
      price_usd: 14.50,
      link: "https://example.com/claw-machine"
    },
    {
      name: "Glow-in-the-Dark Alien Figurine",
      price_usd: 5.80,
      link: "https://example.com/glow-alien"
    },
    {
      name: "RGB Reactive Jelly Lamp",
      price_usd: 12.90,
      link: "https://example.com/rgb-lamp"
    },
    {
      name: "Mystery Blind Box Gothic Doll",
      price_usd: 7.40,
      link: "https://example.com/gothic-doll"
    },
    {
      name: "Mini Working Vending Machine Toy",
      price_usd: 18.30,
      link: "https://example.com/vending"
    },
    {
      name: "Sound Activated LED Mask",
      price_usd: 11.75,
      link: "https://example.com/led-mask"
    },
    {
      name: "Satisfying Metal Flip Chain",
      price_usd: 3.90,
      link: "https://example.com/flip-chain"
    }
  ];

  return samplePool;
}
