import clientPromise from "@/app/lib/mongodb";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db("cs2");
  const maps = await db.collection("maps").find().toArray();

  return maps.map((map) => ({
    slug: map.slug,
  }));
}

export default async function MapDetailPage({
  params,
}: {
  params?: { slug?: string };
}) {
  const slug = params?.slug;
  if (!slug) return notFound();

  const client = await clientPromise;
  const db = client.db("cs2");

  const map = await db.collection("maps").findOne({ slug });
  if (!map) return notFound();

  const smokes = await db.collection("smoke").find({ map: slug }).toArray();

  return (
    <div className="p-4 sm:p-6 md:p-8 text-white">
      <div
        className="w-full h-48 sm:h-64 md:h-72 bg-cover bg-center rounded-xl mb-6 md:mb-8 shadow-md"
        style={{ backgroundImage: `url(${map.background})` }}
      ></div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Infos map */}
        <div className="flex flex-col items-start gap-4 lg:max-w-[40%]">
          <Image
            src={map.image}
            alt={map.name}
            width={100}
            height={100}
            className="rounded-md"
          />
          <h1 className="text-3xl sm:text-4xl font-bold">{map.name}</h1>
          <p className="text-sm sm:text-base">{map.detailsTerro}</p>
          <p className="text-sm sm:text-base">{map.detailsCT}</p>
        </div>

        <div className="relative w-full lg:max-w-[55%] aspect-square rounded-xl overflow-visible p-4">
          <Image
            src={map.radar}
            alt={`Minimap de ${map.name}`}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />

          {smokes.map((smoke: any, index: number) => (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${parseFloat(smoke.x)}%`,
                top: `${parseFloat(smoke.Y)}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative overflow-visible">
                <div className={`rounded-full border-2 border-white hover:cursor-pointer peer transition-transform hover:scale-110 relative overflow-hidden ${smoke.type === "spawn" || smoke.type === "site" ? "w-10 h-10" : "w-6 h-6"}`}>
                {!smoke.image && (
                  <div
                  className={`absolute inset-0 ${
                    smoke.type === "smoke" ? "bg-gray-500" : "bg-orange-500"
                  }`}
                />
                )}

                {smoke.image && (
                  <Image src={smoke.image} alt="Utilitaire" fill className="object-cover" />
                )}
              </div>

                {/* Info bulle */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                  flex flex-col items-center 
                  opacity-0 peer-hover:opacity-100 
                  pointer-events-none peer-hover:pointer-events-auto 
                  transition-opacity duration-400 z-20">
                  <div className="bg-neutral-900 text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap relative">
                    <strong>{smoke.name}</strong>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-900 rotate-45 z-[-1]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-base sm:text-lg mt-10 mb-6">
        Bienvenue sur la page de <strong>{map.name}</strong>. Voici les smokes disponibles :
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {smokes.map((smoke: any, index: number) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-xl p-4 shadow-md border border-neutral-700"
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              {smoke.name}
            </h2>
            <p className="text-sm text-gray-300">Type: {smoke.type}</p>
            <p className="text-sm sm:text-base">{smoke.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
