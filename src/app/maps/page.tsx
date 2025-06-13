import clientPromise from "@/app/lib/mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function MapsPage() {
  const client = await clientPromise;
  const db = client.db("cs2");
  const maps = await db.collection("maps").find().toArray();

  const formattedMaps = maps.map((map) => ({
    name: map.name,
    slug: map.slug,
    image: map.image,
    background: map.background,
  }));

  return (
    <div className="min-h-screen px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-10 items-start ">
        <div className="w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formattedMaps.map((map) => (
              <Link href={`/maps/${map.slug}`} passHref key={map.slug}>
                <div className="relative w-full h-[200px] cursor-pointer rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${map.background})` }}
                  ></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 gap-4">
                    <Image
                      src={map.image}
                      alt={map.name}
                      width={100}
                      height={100}
                    />
                    <h2 className="text-white text-xl font-semibold group-hover:underline">
                      {map.name}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>


        {/* Texte explicatif */}
        <div className="w-full lg:w-1/3 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Explore toutes les maps de CS2</h2>
          <p className="text-white leading-relaxed">
            Sur cette page, découvre toutes les maps disponibles dans <a href="https://store.steampowered.com/app/730/CounterStrike_2/" target="_blank" className="text-orange-400 underline font-bold">Counter-Strike 2</a>.  
            Clique sur une carte pour accéder à des smokes stratégiques, des flashs efficaces, 
            et des plans pour dominer chaque recoin du terrain.  
            Chaque fiche de map est conçue pour t’aider à progresser et jouer comme un pro.
          </p>
        </div>
      </div>
    </div>
  );
}
