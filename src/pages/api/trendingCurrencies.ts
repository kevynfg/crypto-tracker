import { Currency } from "@/@types/Currency";
import { TrendingCoins } from "@/utils/api-urls";
import { NextApiRequest, NextApiResponse } from "next";
import defaultCurrencies from '../../../currencies.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse<typeof defaultCurrencies>) {
//   const currencies = await (await fetch(TrendingCoins("BRL"))).json();
  // console.log('======>', currencies);
  // const formattedCurrencies = [] as Currency[]
  // for (let currency of currencies) {
  //     if (currency) {
  //         formattedCurrencies.push({
  //             id: currency.id,
  //             name: currency.name,
  //             current_price: currency.current_price,
  //             market_cap: currency.market_cap,
  //             price_change_percentage_24h: currency.price_change_percentage_24h,
  //             total_volume: currency.total_volume
  //         })
  //     }
  // }
  return res.status(200).json(defaultCurrencies);
}
