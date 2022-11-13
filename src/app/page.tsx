"use client";
import { use } from "react";
import CurrencyTable from "@/components/CurrencyTable/CurrencyTable";
import { makeQueryClient } from "@/utils/generic-query";
import { Currency } from "@/@types/Currency";
import { trendingCurrencies, globalTreasury } from "@/utils/api-urls";
import Head from "next/head";
import { IGlobalTrendingCurrencies } from "@/@types/GlobalTrendingCurrencies";
import GlobalTrendingCurrencies from "@/components/GlobalTrendingCurrencies/GlobalTrendingCurrencies";

const QueryClient = makeQueryClient();

export default function Home() {
  // const currencies = use(
  //   QueryClient(
  //     "trendingCurrencies",
  //     () => fetch(TrendingCoins("BRL")!).then((res) => res.json()) as Promise<Currency[]>
  //   )
  // );
  const currencies = use(
    QueryClient(
      "trendingCurrencies",
      () => fetch(trendingCurrencies()!).then((res) => res.json()) as Promise<Currency[]>
    )
  );

  const globalTrendings = use(
    QueryClient("globalTrendings", () => fetch(globalTreasury()!).then((res) => res.json()) as Promise<IGlobalTrendingCurrencies>)
  )

  console.log('currencies', currencies);
  console.log('treasury', globalTrendings);
  return (
   <>
    <Head><title>Crypto Tracker</title></Head>
    <main>
      <GlobalTrendingCurrencies currencies={globalTrendings} />
      <CurrencyTable currencies={currencies} />
    </main>
   </>
  );
}
