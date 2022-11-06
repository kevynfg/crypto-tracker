import { Currency, GetCurrencies } from "@/hooks/DefaultCurrency";

export default async function Home() {
  const currencies = await GetCurrencies();

  return (
      <>
      {currencies && currencies.length > 0 ? (
        <ul className="flex flex-col">
          {
            currencies.map((currency: Currency) => (
              <li key={currency.id}>
                {currency.name || "Moeda sem registro"}
              </li>
            ))
          }
        </ul>
       ) : null }
      </>
  )
}
