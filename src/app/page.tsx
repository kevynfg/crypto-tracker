"use client";
import { use } from "react";
import CurrencyTable from "@/components/CurrencyTable/CurrencyTable";
import { makeQueryClient } from "@/utils/generic-query";
import { Currency } from "@/@types/Currency";
import { trendingCurrencies } from "@/utils/api-urls";
import PublicTreasuryCompanies from "@/components/PublicTreasuryCompanies/PublicTreasuryCompanies";

const QueryClient = makeQueryClient();

export default function Home() {
  const currencies = use(
    QueryClient(
      "trendingCurrencies",
      () => fetch(trendingCurrencies()!).then((res) => res.json()) as Promise<Currency[]>
    )
  );
  console.log(currencies);
  return (
    <main>
      <PublicTreasuryCompanies />
      <CurrencyTable currencies={currencies} />
    </main>
  );
}
