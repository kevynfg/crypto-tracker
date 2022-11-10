import { Currency } from "@/@types/Currency";
import { TrendingCoins } from "@/utils/api-urls";
import { makeQueryClient } from "@/utils/generic-query";
import { NextApiRequest, NextApiResponse } from "next";
import defaultCurrencies from '../../../currencies.json';

const QueryClient = makeQueryClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const currencies = await
    QueryClient(
      "trendingCurrencies",
      () => fetch(TrendingCoins("BRL")!).then((res) => res.json()) as Promise<Currency[]>
    )
 
  const formattedCurrencies = [] as Currency[]
  for (let currency of currencies) {
      if (currency) {
          formattedCurrencies.push({
              id: currency.id,
              name: currency.name,
              current_price: currency.current_price,
              market_cap: currency.market_cap,
              market_cap_rank: currency.market_cap_rank,
              price_change_percentage_24h: currency.price_change_percentage_24h,
              total_volume: currency.total_volume
          })
      }
  }
  return res.status(200).json(formattedCurrencies);
}
