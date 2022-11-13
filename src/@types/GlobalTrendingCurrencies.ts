type MarketCapPercentage = {
    [key: string]: number
}

type TotalVolume = {
    [key: string]: number
}

type TotalMarketCap = {
    [key: string]: number
}

type TrendingCurrencies = {
    market_cap_percentage: MarketCapPercentage;
    market_cap_change_percentage_24h_usd: number;
    updated_at: number;
    total_volume: TotalVolume;
    total_market_cap: TotalMarketCap
    markets: number;
    active_cryptocurrencies: number;
}

export interface IGlobalTrendingCurrencies {
    data: TrendingCurrencies;
}   