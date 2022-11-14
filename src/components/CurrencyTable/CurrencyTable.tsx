import { Currency } from "@/@types/Currency";
import { formatter } from "@/utils/currency-formatter";
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
  const defaultTableHeadClass = "w-60 text-left";
  const tableHeadsWithClass = ["#", "Name", "Current Price", "Market Cap.", "Volume", "24h"];
  return (
    <div className="flex justify-center">
      <table className="bg-slate-300 text-black ring-offset-4 rounded-lg">
        <thead>
          <tr className="bg-slate-200">
            {tableHeadsWithClass.map((heads, index) => {
              const lastClass = tableHeadsWithClass.length;
              const firstTableHead = 1;
              const lessTableHeadWidth = index + 1 === firstTableHead ? "w-20 text-left  pl-7" : defaultTableHeadClass;
              const alignCenterLastRow = index + 1 === Number(lastClass) ? "text-center" : null;

              return (
                <th className={`${lessTableHeadWidth} ${alignCenterLastRow}`} key={heads}>
                  {heads}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedCurrencies && sortedCurrencies.length > 0
            ? sortedCurrencies.map((currency, index) => {
                const tableRowBackgroundColor = index % 2 === 1 ? "bg-slate-200" : null;
                return (
                  <tr className={`${tableRowBackgroundColor} leading-relaxed text-base hover:bg-cyberpunk-cyber400 group`} key={currency.id}>
                    <td className="pl-7">{currency.market_cap_rank}</td>
                    <td className="font-semibold group-hover:text-white">{currency.name}</td>
                    <td className="group-hover:text-white">{formatter.format(currency.current_price)}</td>
                    <td className="group-hover:text-white">{formatter.format(currency.market_cap)}</td>
                    <td className="group-hover:text-white">{formatter.format(currency.total_volume)}</td>
                    <td>
                      <div className="flex items-center justify-center gap-2">
                        {checkCurrencyPositiveNegativeValue(currency.price_change_percentage_24h)}
                        <span
                          className={`leading-9 ${
                            currency.price_change_percentage_24h > 0 ? "text-green-500 group-hover:text-green-200" : "text-red-600 group-hover:text-red-300"
                          }`}
                        >
                          {Number(currency.price_change_percentage_24h).toFixed(2)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
