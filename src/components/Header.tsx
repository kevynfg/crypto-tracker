import { ReactNode } from "react"

interface HeaderProps {
    children: ReactNode
}

export default function Header() {
    return (
        <>
        <header className="bg-red-600">
            <nav>
                Logo
            </nav>
        </header>
       </>
    )
}