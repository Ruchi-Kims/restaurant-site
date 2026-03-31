"use client";
import { useState } from "react";

const categories = ["Tout", "Nos Espaces","Ambiance", "Événements"];

const sections: Record<string, { src: string; alt: string; titre: string; description: string; details: string[] }[]> = {
  "Nos Espaces": [
    {
      src: "/contactbg.webp",
      alt: "Restaurant & Lounge Bar",
      titre: "Restaurant & Lounge Bar",
      description:
        "Un espace élégant et chaleureux où gastronomie raffinée et ambiance lounge se rencontrent. Que ce soit pour un déjeuner d'affaires ou une soirée entre amis, notre salle vous accueille dans un cadre cosy et apaisant, au cœur de Brazzaville.",
      details: ["Capacité : 60 couverts", "Cuisine cosmopolite", "Ouvert 7j/7"],
    },
    {
      src: "/assiette2.webp",
      alt: "Pâtisserie & Boulangerie",
      titre: "Pâtisserie & Boulangerie",
      description:
        "Dès l'aube, laissez-vous séduire par l'odeur des croissants chauds et de nos viennoiseries maison. Notre espace pâtisserie est une invitation à la gourmandise : gâteaux de fête, douceurs chocolatées et créations sucrées pour tous vos moments spéciaux.",
      details: ["Croissants & viennoiseries", "Gâteaux sur commande", "Ouvert dès 7h"],
    },
  ],
  "Ambiance": [
    {
      src: "/ambiance2.webp",
      alt: "Salle principale",
      titre: "Une Atmosphère Unique",
      description:
        "Dès que vous franchissez notre porte, vous êtes accueillis par une atmosphère chaleureuse et raffinée. Notre décoration soignée, l'éclairage tamisé et la musique d'ambiance créent une expérience sensorielle complète, idéale pour chaque moment de la journée.",
      details: ["Décoration soignée", "Éclairage tamisé", "Musique d'ambiance"],
    },
    {
      src: "ambiance1.webp",
      alt: "Bar et lounge",
      titre: "Le Lounge Bar",
      description:
        "Notre lounge bar est l'endroit idéal pour se retrouver autour d'un cocktail ou d'un verre de vin. Dans un cadre intime et élégant, nos barmen vous proposent une sélection de boissons soigneusement choisies pour sublimer votre soirée à Brazzaville.",
      details: ["Cocktails maison", "Sélection de vins", "Ambiance feutrée"],
    },
  ],
  "Événements": [
    {
      src: "/buffet.webp",
      alt: "Buffets du vendredi et samedi",
      titre: "Buffets & Soirées à Thème",
      description:
        "Chaque vendredi et samedi soir, L'Assiette se transforme en scène gastronomique avec ses buffets à volonté. Des soirées thématiques — Saint-Valentin, Journée des droits de la femme, fêtes nationales — ponctuent notre calendrier pour des moments inoubliables.",
      details: ["Buffet à volonté vendredi & samedi", "Soirées thématiques", "Animations en live"],
    },
    {
      src: "/events3.webp",
      alt: "Événements privés",
      titre: "Événements Privés & Séminaires",
      description:
        "L'Assiette met son cadre élégant à votre disposition pour vos événements privés : anniversaires, mariages, séminaires d'entreprise ou célébrations familiales. Notre équipe vous accompagne dans l'organisation pour faire de chaque événement un moment d'exception.",
      details: ["Privatisation possible", "Menu personnalisé", "Équipe dédiée"],
    },
  ],
};

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categoriesToShow =
    activeCategory === "Tout"
      ? ["Nos Espaces", "Ambiance", "Événements"]
      : [activeCategory];

  return (
    <div
      className="relative text-white min-h-screen py-20 px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Titre */}
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Notre Univers
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-16 text-cyan-500">
          Galerie
        </h1>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 uppercase tracking-[0.25em] text-xs border transition-all duration-300 rounded-full ${
                activeCategory === cat
                  ? "border-cyan-500 bg-cyan-500 text-black"
                  : "border-gray-600 text-gray-400 hover:border-cyan-500 hover:text-cyan-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Sections ── */}
        <div className="space-y-24">
          {categoriesToShow.map((cat) => (
            <div key={cat}>

              {/* Séparateur de section (uniquement en mode "Tout") */}
              {activeCategory === "Tout" && (
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-cyan-600/30" />
                  <p className="text-cyan-500 uppercase tracking-[0.35em] text-xs">{cat}</p>
                  <div className="h-px flex-1 bg-cyan-600/30" />
                </div>
              )}

              {/* Cartes showcase */}
              <div className="space-y-6">
                {sections[cat].map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} border border-yellow-600/20 overflow-hidden`}
                  >
                    {/* Image */}
                    <div
                      className="md:w-3/5 h-72 md:h-96 relative group cursor-pointer overflow-hidden"
                      onClick={() => setSelectedImage(item.src)}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      </div>
                    </div>

                    {/* Description */}
                    <div className="md:w-2/5 bg-black/60 p-10 flex flex-col justify-center">
                      <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs mb-3">
                        {cat}
                      </p>
                      <h2 className="text-2xl font-serif font-bold text-white mb-5">
                        {item.titre}
                      </h2>
                      <div className="w-8 h-px bg-yellow-600 mb-5" />
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.details.map((d, j) => (
                          <li key={j} className="flex items-center gap-3 text-gray-300 text-xs uppercase tracking-widest">
                            <span className="text-yellow-500">✦</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-8 text-white text-3xl font-light hover:text-yellow-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Image agrandie"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}