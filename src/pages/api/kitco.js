import axios from "axios";
import { JSDOM } from "jsdom";

export default async function handler(req, res) {
  try {
    const url = "https://www.kitco.com";
    const response = await axios.get(url);
    console.log(response, "response");
    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    // Scrape Gold price
    const goldPrice = document.querySelector("#sp-bid").textContent.trim();

    // Scrape Silver price (example)
    const silverPrice = document.querySelector("#ag-bid").textContent.trim();

    res.status(200).json({ gold: goldPrice, silver: silverPrice });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch prices" });
  }
}
