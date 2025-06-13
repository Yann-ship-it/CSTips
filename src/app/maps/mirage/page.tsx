"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MirageDetailPage() {
  const [showSmokeB, setShowSmokeB] = useState(false);
  const [showSmokeA, setShowSmokeA] = useState(false);
  const [showSmokeCT, setShowSmokeCT] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <div className="min-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#0b0b0b] text-white">
      <main className="row-start-2 bg-[#111111] flex flex-col gap-10 items-center sm:items-start w-full max-w-3xl rounded-2xl shadow-lg p-10">
        <Link href="/" className="text-blue-500 hover:underline self-start">
          Retour à l'accueil
        </Link>

        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src="/mirage.webp"
            alt="Logo Mirage"
            width={96}
            height={96}
            className="rounded-lg"
          />
          <h1 className="text-3xl font-bold">Mirage</h1>
          <p>
            Bienvenue sur la page de Mirage. Ici, tu peux découvrir les smokes des différents sides.
          </p>
          <Image
            src="/mirageRadar.webp"
            alt="Logo Mirage"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div className="w-full space-y-6">
          {/* Smoke B */}
          <div>
            <button
              className="w-full text-xl text-blue-500 hover:underline text-left"
              onClick={() => setShowSmokeB(!showSmokeB)}
            >
              Smoke B
            </button>
            <AnimatePresence>
              {showSmokeB && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-400 space-y-6"
                >
                  {[1, 2].map((_, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <p>Description détaillée des smokes pour B side...</p>
                      <Image
                        src="/ancient.webp"
                        alt={`Smoke B ${index + 1}`}
                        width={700}
                        height={700}
                        className="rounded-lg cursor-pointer hover:opacity-80 transition"
                        onClick={() => openModal("/ancient.webp")}
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Smoke A */}
          <div>
            <button
              className="w-full text-xl text-blue-500 hover:underline text-left"
              onClick={() => setShowSmokeA(!showSmokeA)}
            >
              Smoke A
            </button>
            <AnimatePresence>
              {showSmokeA && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-400"
                >
                  <p>Description détaillée des smokes pour A side...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Smoke CT */}
          <div>
            <button
              className="w-full text-xl text-blue-500 hover:underline text-left"
              onClick={() => setShowSmokeCT(!showSmokeCT)}
            >
              Smoke CT
            </button>
            <AnimatePresence>
              {showSmokeCT && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-400"
                >
                  <p>Description détaillée des smokes pour CT side...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <footer className="row-start-3 text-sm text-gray-500">
        © 2025 Mirage Smokes
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-8xl w-[90%] max-h-[90%] aspect-video"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={modalImage}
                alt="Agrandissement"
                fill
                className="rounded-xl object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute w-[35px] h-[35px] top-2 right-2 bg-white text-black rounded-full p-1 shadow hover:bg-gray-200"
              >
                ✕
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
