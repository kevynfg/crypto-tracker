import { useEffect } from 'react'
import Header from "@/components/Header";
import { Currency, GetCurrencies } from "@/hooks/DefaultCurrency";

export default async function Home() {
  const currencies = await GetCurrencies();
  console.log('currencies', currencies)
  if (!currencies) return <div>Loading...</div>

  return (
      <div>
      {currencies && currencies.length > 0 ? (
        <ul className="flex flex-col">
          {
            currencies.map((currency: Currency) => (
              <li key={currency.exchange_id}>
                {currency.name || "Moeda sem registro"}
              </li>
            ))
          }
        </ul>
       ) : null }
      </div>
  )
}
