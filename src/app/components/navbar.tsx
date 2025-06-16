"use client";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 gap-4 sm:gap-0">
      {/* Logo + Titre */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="w-12 h-12 sm:w-16 sm:h-16"
        />
        <h2 className="font-bold text-xl sm:text-2xl text-orange-400">
          CSTips
        </h2>
      </div>

      {/* Navigation */}
      <nav className="bg-white rounded-full px-4 sm:px-6 py-2 flex flex-wrap justify-center gap-3 sm:gap-x-4 border border-gray-200 shadow-sm w-full sm:w-auto">
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

      {/* Espace vide sur desktop, inutile sur mobile */}
      <div className="hidden sm:block w-16 h-16" />
    </div>
  );
}

export default Navbar;
