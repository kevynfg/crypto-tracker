import { Currency } from "@/@types/Currency";
import { CaretUp, CaretDown } from "phosphor-react";

interface CurrencyTableProps {
  currencies: Currency[];
}

export default function CurrencyTable({ currencies }: CurrencyTableProps) {
  function checkCurrencyPositiveNegativeValue(value: number) {
    if (value && value > 0) {
      return <CaretUp color="green" size={12} />;
    }
    return <CaretDown color="red" size={12} />;
  }

  const sortedCurrencies = currencies && currencies.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
  const defaultTableHeadClass = "w-40 text-left";
  const tableHeadsWithClass = ["#", "Name", "Current Price", "Market Cap.", "Volume", "24h"];
  return (
    <div className="flex justify-center">
      <table className="">
        <thead>
          <tr className="border-y-2">
            {tableHeadsWithClass.map((heads, index) => {
              const lastClass = tableHeadsWithClass.length;
              const alignCenterLastRow = index + 1 === Number(lastClass) ? "text-center" : null;
              return (
                <th className={`${defaultTableHeadClass} ${alignCenterLastRow}`} key={heads}>
                  {heads}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedCurrencies && sortedCurrencies.length > 0
            ? sortedCurrencies.map((currency) => (
                <tr className="border-b" key={currency.id}>
                  <td>{currency.market_cap_rank}</td>
                  <td>{currency.name}</td>
                  <td>{currency.current_price}</td>
                  <td>{currency.market_cap}</td>
                  <td>{currency.total_volume}</td>
                  <td>
                    <div className="flex items-center justify-center gap-2">
                      {checkCurrencyPositiveNegativeValue(currency.price_change_percentage_24h)}
                      <span
                        className={`leading-relaxed ${
                          currency.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"
                        }`}
                      >
                        {Number(currency.price_change_percentage_24h).toFixed(2)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
