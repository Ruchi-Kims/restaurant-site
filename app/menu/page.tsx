"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const plats = [
  {
    categorie: "✦ Entrées",
    items: [
      {
        nom: "Salade César",
        description: "Laitue romaine, parmesan affiné, croûtons dorés, sauce césar maison",
        prix: "8€",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
        tag: "Végétarien",
      },
      {
        nom: "Soupe à l'oignon",
        description: "Oignons caramélisés, bouillon bœuf, gratinée au comté",
        prix: "7€",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
        tag: "Signature",
      },
      {
        nom: "Bruschetta",
        description: "Pain grillé, tomates fraîches, basilic, huile d'olive extra vierge",
        prix: "6€",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80",
        tag: "Végétarien",
      },
      {
        nom: "Tartare de Saumon",
        description: "Saumon frais, avocat, citron vert, coriandre, huile de sésame",
        prix: "12€",
        image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
        tag: "Chef's pick",
      },
    ],
  },
  {
    categorie: "✦ Plats Principaux",
    items: [
      {
        nom: "Entrecôte grillée",
        description: "Entrecôte 300g, sauce au poivre, frites maison, salade verte",
        prix: "24€",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80",
        tag: "Best-seller",
      },
      {
        nom: "Saumon rôti",
        description: "Filet de saumon Label Rouge, légumes de saison, beurre citronné",
        prix: "22€",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
        tag: "Signature",
      },
      {
        nom: "Pasta Carbonara",
        description: "Spaghetti artisanaux, lardons fumés, parmesan 24 mois, œuf fermier",
        prix: "16€",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80",
        tag: "Classique",
      },
      {
        nom: "Poulet Tandoori",
        description: "Poulet mariné aux épices indiennes, riz basmati, raïta menthe",
        prix: "18€",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
        tag: "Chef's pick",
      },
    ],
  },
  {
    categorie: "✦ Desserts",
    items: [
      {
        nom: "Tiramisu",
        description: "Mascarpone crémeux, café espresso, biscuits savoiardi, cacao",
        prix: "7€",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
        tag: "Classique",
      },
      {
        nom: "Crème brûlée",
        description: "Crème onctueuse à la vanille de Madagascar, caramel croustillant",
        prix: "6€",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80",
        tag: "Signature",
      },
      {
        nom: "Fondant au chocolat",
        description: "Chocolat noir Valrhona 70%, cœur coulant, glace vanille maison",
        prix: "8€",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
        tag: "Best-seller",
      },
      {
        nom: "Panna Cotta Fruits Rouges",
        description: "Crème vanillée, coulis de framboises fraîches, menthe poivrée",
        prix: "7€",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
        tag: "Végétarien",
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  "Végétarien": "bg-green-800 text-green-300",
  "Signature": "bg-yellow-900 text-yellow-400",
  "Chef's pick": "bg-purple-900 text-purple-300",
  "Best-seller": "bg-red-900 text-red-300",
  "Classique": "bg-gray-800 text-gray-300",
};

function AnimatedCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="opacity-0 translate-y-12 transition-all duration-700 ease-out">
      {children}
    </div>
  );
}

export default function Menu() {
  return (
    <div
      className="relative text-white min-h-screen py-20 px-8"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Titre */}
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Notre Sélection
        </p>
        <h1 className="text-5xl font-serif font-bold text-center mb-4">
          Le Menu
        </h1>
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-24 bg-yellow-600"></div>
          <span className="text-yellow-500">✦</span>
          <div className="h-px w-24 bg-yellow-600"></div>
        </div>

        {plats.map((categorie) => (
          <div key={categorie.categorie} className="mb-20">

            {/* Titre catégorie */}
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-yellow-600 opacity-30"></div>
              <h2 className="text-yellow-500 uppercase tracking-widest text-base font-semibold">
                {categorie.categorie}
              </h2>
              <div className="h-px flex-1 bg-yellow-600 opacity-30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {categorie.items.map((plat, index) => (
                <AnimatedCard key={plat.nom} delay={index * 100}>
                  <div
                    className="group rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={plat.image}
                        alt={plat.nom}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay gradient sur image */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
                      {/* Tag */}
                      <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-medium ${tagColors[plat.tag]}`}>
                        {plat.tag}
                      </span>
                    </div>

                    {/* Infos */}
                    <div className="p-5">
                      <h3 className="text-white font-serif font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {plat.nom}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-4">
                        {plat.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-500 font-bold text-xl">{plat.prix}</span>
                        <Link href="/reservation" className="text-gray-600 text-xs uppercase tracking-widest group-hover:text-yellow-500 transition-colors duration-300">
                          Réserver →
                        </Link>
                      </div>
                    </div>

                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}