import { IGlobalTrendingCurrencies } from "@/@types/GlobalTrendingCurrencies";
import { formatter } from "@/utils/currency-formatter";
import { useMemo } from "react";

interface GlobalTrendingCurrenciesProps {
  currencies: IGlobalTrendingCurrencies;
}

export default function GlobalTrendingCurrencies(props: GlobalTrendingCurrenciesProps) {
  console.log("data", props.currencies);

  function sumTotalMarketCap(volumes: { [key: string]: number }): number {
    return Object.keys(volumes).reduce((acc, next) => acc + volumes[next], 0);
  }

  const getTotalMarketCap = useMemo(() => {
    return sumTotalMarketCap(props.currencies.data.total_market_cap);
  }, [props.currencies.data.total_market_cap]);

  const getTotalVolume = useMemo(() => {
    return sumTotalMarketCap(props.currencies.data.total_volume);
  }, [props.currencies.data.total_volume]);

  function formatMarketCapPercentageTopTwoCurrencies(currencies: { [key: string]: number }): string {
    return Object.keys(currencies)
      .map((marketPercentage, index) => {
        if (index >= 2) return;
        return `${marketPercentage.toUpperCase()} ${currencies[marketPercentage].toFixed(2)}%`;
      })
      .join(" ")
      .replace(",", "");
  }

  return (
    <>
      {props.currencies.data ? (
        <section className="h-16 flex justify-center items-center flex-1 text-black bg-gray-700 leading-relaxed text-xs">
          <div className="flex flex-row text-white">
            <div className="mr-3">
              Moedas: <span className="text-cyberpunk-cyber100">{props.currencies.data.active_cryptocurrencies}</span>
            </div>
            <div className="mr-3">
              Câmbios: <span className="text-cyberpunk-cyber100">{props.currencies.data.markets}</span>
            </div>
            <div className="mr-3">
              Capitalização de mercado: <span className="text-cyberpunk-cyber100">{formatter.format(getTotalMarketCap)}</span>
            </div>
            <div className="mr-3">
              Volume 24h: <span className="text-cyberpunk-cyber100">{formatter.format(getTotalVolume)}</span>
            </div>
            <div className="mr-3">
              Domínio:
              <span className="text-cyberpunk-cyber100 ml-1">
                {formatMarketCapPercentageTopTwoCurrencies(props.currencies.data.market_cap_percentage)}
              </span>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
