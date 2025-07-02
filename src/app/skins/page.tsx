"use client";

import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";


// Fetch les données 
export default function Fetch() {
  const [allSkins, setAllSkins] = useState([]);  
  const [visibleSkins, setVisibleSkins] = useState([]); // Cache les skins pour l'affichage 
  const [index, setIndex] = useState(30); // Pour afficher 30 et reafficher 30 au scroll
  const [searchTerm, setSearchTerm] = useState(""); // Barre de recherche

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllSkins(data);
        setVisibleSkins(data.slice(0, 30));
      })
      .catch((err) => console.error("Erreur fetch:", err));
  }, []);

  // Filtre direct sans debounce
const filteredSkins = useMemo(() => {
  if (!searchTerm.trim()) return allSkins;

  // Normalisation d'une chaîne : minuscule + retirer caractères spéciaux
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9\s]/gi, "");

  const terms = normalize(searchTerm).split(/\s+/);

  return allSkins.filter((skin) => {
    const normalizedName = normalize(skin.name);
    return terms.every((term) => normalizedName.includes(term));
  });
}, [allSkins, searchTerm]);


  const loadMoreSkins = () => {
    const nextIndex = index + 30;
    setVisibleSkins(filteredSkins.slice(0, nextIndex));
    setIndex(nextIndex);
  };

  useEffect(() => {
    setVisibleSkins(filteredSkins.slice(0, index));
  }, [filteredSkins, index]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        visibleSkins.length < filteredSkins.length
      ) {
        loadMoreSkins();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleSkins, filteredSkins]);

  const categories = [
    "Tous",
    "Gants",
    "AK",
    "Pistolets",
    "Fusils",
    "SMG",
    "Snipers",
  ];

  return (
    <div className="p-5">
      <h1 className="text-white text-2xl font-bold mb-5">Skins CS2</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Recherche un skin..."
        className="mb-6 w-full max-w-md p-2 rounded border border-gray-600 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIndex(30); // Reset pagination à chaque nouvelle recherche
        }}
      />

      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-200"
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {visibleSkins.length === 0 ? (
        <p className="text-white">Chargement des skins...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {visibleSkins.map((skin, index) => (
            <li
              key={index}
              className="relative flex flex-col items-center gap-4 p-4 border border-gray-700 rounded-lg overflow-hidden"
              style={{ borderBottom: `2px solid ${skin.rarity?.color}` }}
            >

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(0deg, ${skin.rarity?.color} 0%, transparent 70%)`,
                  opacity: 0.3,
                  filter: "blur(10px)",
                  zIndex: 0,
                }}
              />
              {skin.image && (
                <Image 
                src={skin.image} 
                alt='Skin' 
                width={200}
                height={200}
                className="object-cover relative z-10" 
                />
              )}
              <div className="relative z-10">
                <strong className="text-white">{skin.name}</strong>
                <p className="text-sm text-green-400 m-0">
                  {skin.price?.steam
                    ? `${skin.price.steam.toFixed(2)} $ (Steam)`
                    : "Prix non dispo"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
