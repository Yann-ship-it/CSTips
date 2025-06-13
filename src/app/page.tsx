import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Bienvenue sur <span className="text-blue-500">CS2 Tactiques</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Apprends les meilleures stratégies, découvre les smokes parfaites,
          et deviens un pro sur chaque map de Counter-Strike 2.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/maps"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full font-medium"
          >
            Explorer les maps
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-full font-medium"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
