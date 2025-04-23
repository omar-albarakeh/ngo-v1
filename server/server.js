import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import cron from "node-cron";

const app = express();

// Middleware
app.use(cors());

let goldPricePerGram = null;
let silverPricePerGram = null;

// Function to fetch metal prices
const fetchPrices = async () => {
  const API_URL =
    "https://gold.g.apised.com/v1/latest?metals=XAU,XAG&base_currency=USD&currencies=USD&weight_unit=gram";
  const API_KEY = "sk_9043e49278394b8D5e9dA786CC77d24e2647991DE6C66994";

  try {
    const response = await fetch(API_URL, {
      headers: {
        "x-api-key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(
        `API response error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    const { XAU, XAG } = data?.data?.metal_prices || {};
    if (!XAU?.price || !XAG?.price) {
      throw new Error("Unexpected API structure or missing price data.");
    }

    goldPricePerGram = XAU.price;
    silverPricePerGram = XAG.price;

    console.log("Updated prices:", { goldPricePerGram, silverPricePerGram });
  } catch (err) {
    console.error("Error fetching prices:", err.message);
  }
};

// Fetch prices immediately on start
fetchPrices();

// Schedule updates every 12 hours
cron.schedule("0 */12 * * *", fetchPrices);

// API endpoint
app.get("/api/metal-prices", async (req, res) => {
  if (goldPricePerGram === null || silverPricePerGram === null) {
    await fetchPrices();
  }

  if (goldPricePerGram !== null && silverPricePerGram !== null) {
    res.json({ goldPricePerGram, silverPricePerGram });
  } else {
    res
      .status(503)
      .json({ error: "Prices not available yet. Try again soon." });
  }
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Metal price API running on port ${PORT}`);
});
