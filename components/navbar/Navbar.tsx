import Link from "next/link";

export default function Navbar() {
    return(
        <div className="container">
            <div className="logo">
                <Link href="/" className="text-4xl font-400-bold">THE ROSE BOX</Link>
            </div>
        </div>
    )
}