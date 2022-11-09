export interface Currency {
    id: string;
    name: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number,
    total_volume: number;
    price_change_percentage_24h: number;
}