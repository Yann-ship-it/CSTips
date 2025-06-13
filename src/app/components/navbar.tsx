import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <div className="flex items-center justify-between px-6 py-4">
            {/* Logo à gauche */}
            <div className="w-16 h-16 flex items-center">
                <Image
                    aria-hidden
                    src="/logo.png"
                    alt="Logo"
                    width={64}
                    height={64}
                />
            </div>

            {/* Navigation centrée */}
            <div className="flex-1 flex justify-center">
                <nav className="bg-white rounded-full px-6 py-2 flex gap-x-4 border border-gray-200 shadow-sm">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                        Accueil
                    </Link>
                    <Link
                        href="/maps"
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                        Maps
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                        Contact
                    </Link>
                </nav>
            </div>

            {/* Espace vide à droite pour équilibrer */}
            <div className="w-16 h-16" />
        </div>
    );
}

export default Navbar;
