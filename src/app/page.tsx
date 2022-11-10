"use client";
import { use } from "react";
import CurrencyTable from "@/components/CurrencyTable/CurrencyTable";
import { makeQueryClient } from "@/utils/generic-query";
import { Currency } from "@/@types/Currency";
import { TrendingCoins, trendingCurrencies, globalTreasury } from "@/utils/api-urls";
import PublicTreasuryCompanies from "@/components/PublicTreasuryCompanies/PublicTreasuryCompanies";
import Head from "next/head";
import publicTreasury from '../../publictreasury.json';
import { GlobalTreasury } from "@/@types/GlobalTreasuryCompanies";

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
    QueryClient("globalTrendings", () => fetch(globalTreasury()!).then((res) => res.json()) as Promise<GlobalTreasury>)
  )

  console.log('currencies', currencies);
  console.log('treasury', globalTrendings);
  return (
   <>
    <Head>Crypto Tracker</Head>
    <main>
      <PublicTreasuryCompanies trendings={globalTrendings} />
      <CurrencyTable currencies={currencies} />
    </main>
   </>
  );
}
