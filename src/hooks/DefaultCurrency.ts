import { TrendingCoins } from "@/utils/api-urls";

export interface Currency {
  id: string;
  name: string;
}

export const GetCurrencies = async () => {
  const currencies = await (
    await fetch(
      TrendingCoins('BRL')
    )
  ).json();

  return currencies as Currency[];
};
