import treasury from '../../../publictreasury.json';
import { GlobalTreasury } from "@/@types/GlobalTreasuryCompanies";

interface PublicTreasuryCompaniesProps {
    trendings: GlobalTreasury
}

export default function PublicTreasuryCompanies({trendings}: PublicTreasuryCompaniesProps) {
    console.log('trendings =>', trendings);
    return (
        <article className="h-16 flex justify-center items-center flex-1 text-black">
            <div className="flex flex-row">
                <div className="mr-3">Moeda: Bitcoin</div>
                <div className="mr-3">Domínio: BTC {(Number(trendings.market_cap_dominance) * 100)}%</div>
                <div className="mr-3">3</div>
            </div>
       </article>
    )
}