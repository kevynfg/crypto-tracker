import Link from "next/link"

export default function Header() {
    return (
        <>
        <header className="h-14 flex items-center bg-gray-700">
            <nav>
                <div className="w-48 ml-6">
                    <Link href={`/`}>
                        <span className="text-white font-bold leading-tight">Crypto Tracker</span>
                    </Link>
                </div>
            </nav>
        </header>
       </>
    )
}