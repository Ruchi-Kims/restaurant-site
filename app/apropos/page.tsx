"use client";
export default function Apropos() {
  return (
    <div
      className="relative text-white min-h-screen"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto py-20 px-8">

        {/* Titre */}
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Notre Histoire
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-16">
          À Propos
        </h1>

        {/* Histoire */}
        <div className="p-10 mb-12 rounded-xl" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
          <h2 className="text-yellow-500 uppercase tracking-widest text-xs mb-6">
            ✦ Notre Histoire
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Fondé en 2014 au cœur de Paris, Chez Claude est né d'une passion
            pour les saveurs du monde. Notre chef fondateur, après avoir voyagé
            dans plus de 30 pays, a voulu réunir le meilleur de chaque cuisine
            dans un seul endroit raffiné.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Aujourd'hui, notre restaurant est devenu une référence gastronomique
            parisienne, alliant authenticité et modernité dans chaque assiette.
          </p>
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 text-center rounded-xl" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
            <p className="text-5xl font-serif font-bold text-yellow-500 mb-2">10</p>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Ans d'expérience</p>
          </div>
          <div className="p-8 text-center rounded-xl" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
            <p className="text-5xl font-serif font-bold text-yellow-500 mb-2">30+</p>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Pays représentés</p>
          </div>
          <div className="p-8 text-center rounded-xl" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
            <p className="text-5xl font-serif font-bold text-yellow-500 mb-2">5★</p>
            <p className="text-gray-400 uppercase tracking-widest text-xs">Note moyenne</p>
          </div>
        </div>

        {/* Équipe */}
        <div className="p-10 rounded-xl" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
          <h2 className="text-yellow-500 uppercase tracking-widest text-xs mb-8">
            ✦ Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Claude Martin */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                  alt="Claude Martin"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold mb-1">Claude Martin</h3>
              <p className="text-yellow-500 uppercase tracking-widest text-xs mb-3">
                Chef Fondateur
              </p>
              <p className="text-gray-400 text-sm">
                30 ans d'expérience, formé dans les plus grandes maisons du monde
              </p>
            </div>

            {/* Sophie Dubois */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                  alt="Sophie Dubois"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold mb-1">Sophie Dubois</h3>
              <p className="text-yellow-500 uppercase tracking-widest text-xs mb-3">
                Chef Pâtissière
              </p>
              <p className="text-gray-400 text-sm">
                Spécialiste des desserts fusion, primée au concours de Paris 2022
              </p>
            </div>

            {/* Karim Benali */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=200&q=80"
                  alt="Karim Benali"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold mb-1">Karim Benali</h3>
              <p className="text-yellow-500 uppercase tracking-widest text-xs mb-3">
                Chef Cuisine du Monde
              </p>
              <p className="text-gray-400 text-sm">
                Expert en cuisines asiatique, africaine et latino-américaine
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}