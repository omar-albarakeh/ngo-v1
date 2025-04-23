import React, { useEffect, useState } from "react";
import ZakatCalculator from "./ZakatCalculator";

const ZakatCalculatorWrapper = () => {
  const [prices, setPrices] = useState({
    goldPricePerGram: 0,
    silverPricePerGram: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/metal-prices");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setPrices({
          goldPricePerGram: data.goldPricePerGram,
          silverPricePerGram: data.silverPricePerGram,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching metal prices:", error);
      }
    };

    fetchPrices();
  }, []);

  if (loading) {
    return <p>Loading prices...</p>;
  }

  return (
    <ZakatCalculator
      goldPrice={prices.goldPricePerGram}
      silverPrice={prices.silverPricePerGram}
    />
  );
};

export default ZakatCalculatorWrapper;
