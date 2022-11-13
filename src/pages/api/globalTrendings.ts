import { IGlobalTrendingCurrencies } from "@/@types/GlobalTrendingCurrencies";
import { GlobalTrendings } from "@/utils/api-urls";
import { makeQueryClient } from "@/utils/generic-query";
import { NextApiRequest, NextApiResponse } from "next";
import globalTrending from '../../../globalTrending.json';

const QueryClient = makeQueryClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<IGlobalTrendingCurrencies>) {
  const currencies = await
    QueryClient(
      "globalTrendings",
      () => fetch(GlobalTrendings()!).then((res) => res.json()) as Promise<IGlobalTrendingCurrencies>
    )
 
//   const formattedCurrencies = [] as Currency[]
//   for (let currency of currencies) {
//       if (currency) {
//           formattedCurrencies.push({
//               id: currency.id,
//               name: currency.name,
//               current_price: currency.current_price,
//               market_cap: currency.market_cap,
//               market_cap_rank: currency.market_cap_rank,
//               price_change_percentage_24h: currency.price_change_percentage_24h,
//               total_volume: currency.total_volume
//           })
//       }
//   }
  return res.status(200).json(currencies);
}
