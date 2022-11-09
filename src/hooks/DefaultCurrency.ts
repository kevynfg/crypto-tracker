"use client";
import { use } from "react";
import { TrendingCoins } from "@/utils/api-urls";

export interface Currency {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

export const GetCurrencies = async () => {
  const currencies = use(fetch(TrendingCoins("BRL")).then((res) => res.json()));
  const formattedCurrencies = [] as Currency[];
  for (let currency of currencies) {
    if (currency) {
      formattedCurrencies.push({
        id: currency.id,
        name: currency.name,
        current_price: currency.current_price,
        market_cap: currency.market_cap,
        price_change_percentage_24h: currency.price_change_percentage_24h,
        total_volume: currency.total_volume,
      });
    }
  }
  return formattedCurrencies;
};
