"use client";
import { use } from "react";
import CurrencyTable from "@/components/CurrencyTable/CurrencyTable";
import { makeQueryClient } from "@/utils/generic-query";
import { Currency } from "@/@types/Currency";
import { trendingCurrencies, globalTreasury } from "@/utils/api-urls";
import { IGlobalTrendingCurrencies } from "@/@types/GlobalTrendingCurrencies";
import GlobalTrendingCurrencies from "@/components/GlobalTrendingCurrencies/GlobalTrendingCurrencies";

const QueryClient = makeQueryClient();

export default function Home() {
  const currencies = use(
    QueryClient(
      "trendingCurrencies",
      () => fetch(trendingCurrencies()!).then((res) => res.json()) as Promise<Currency[]>
    )
  );

  const globalTrendings = use(
    QueryClient(
      "globalTrendings",
      () => fetch(globalTreasury()!).then((res) => res.json()) as Promise<IGlobalTrendingCurrencies>
    )
  );

  console.log("currencies", currencies);
  console.log("treasury", globalTrendings);
  return (
    <>
      <head>
        <title>Crypto Tracker</title>
      </head>
      <main>
        <div className="w-full h-screen max-w-[1100px] m-auto">
          <div className="flex flex-col justify-center items-center my-4">
            <h1 className="text-2xl">Keep track of currencies live</h1>
            <h4>Top Coins by Market Cap</h4>
          </div>
          <div className="rounded-lg">
            <GlobalTrendingCurrencies currencies={globalTrendings} />
            <CurrencyTable currencies={currencies} />
          </div>
        </div>
      </main>
    </>
  );
}
