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
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-5xl mx-auto py-20 px-8">

        {/* Titre */}
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Notre Histoire
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-4 text-cyan-500">
          À Propos
        </h1>
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-20 bg-cyan-600" />
          <span className="text-cyan-500">✦</span>
          <div className="h-px w-20 bg-cyan-600" />
        </div>

        {/* ── Bloc intro — image + texte côte à côte ── */}
        <div className="flex flex-col md:flex-row border border-yellow-600/20 overflow-hidden mb-8">
          <div className="md:w-1/2 h-72 md:h-auto overflow-hidden">
            <img
              src="/page.webp"
              alt="L'Assiette Restaurant Brazzaville"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="md:w-1/2 bg-black/60 p-10 flex flex-col justify-center">
            <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs mb-3">Qui sommes-nous</p>
            <h2 className="text-2xl font-serif font-bold text-white mb-5">
              Un lieu de vie au cœur de Brazzaville
            </h2>
            <div className="w-8 h-px bg-yellow-600 mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Situé au <span className="text-white">01 Bis Avenue des Aiglons, Rue de l'Amitié</span>, à côté de l'Olympic Palace, 
              L'Assiette est bien plus qu'un restaurant. C'est un établissement multifonctionnel 
              qui combine plusieurs univers pour couvrir chaque moment de votre journée.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dans un cadre <span className="text-white">charmant et apaisant</span> — terrasse verdoyante en extérieur, 
              salle climatisée en intérieur — nous avons créé un écrin cosy pour les épicuriens 
              de la capitale congolaise.
            </p>
          </div>
        </div>

        {/* ── Chiffres clés ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { chiffre: "2023", label: "Année de création" },
            { chiffre: "4+", label: "Services proposés" },
            { chiffre: "7j/7", label: "Ouvert tous les jours" },
            { chiffre: "3400+", label: "Abonnés Instagram" },
          ].map((item, i) => (
            <div key={i} className="border border-yellow-600/20 bg-black/50 p-6 text-center">
              <p className="text-3xl font-serif font-bold text-yellow-500 mb-2">{item.chiffre}</p>
              <p className="text-gray-400 uppercase tracking-widest text-xs">{item.label}</p>
            </div>
          ))}
        </div>

        {/* ── Nos Services — showcase alterné ── */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-yellow-600/30" />
            <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs">Nos Services</p>
            <div className="h-px flex-1 bg-yellow-600/30" />
          </div>

          <div className="space-y-4">

            {/* Restaurant & Lounge Bar */}
            <div className="flex flex-col md:flex-row border border-yellow-600/20 overflow-hidden">
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img
                  src="/restau.webp"
                  alt="Restaurant & Lounge Bar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-3/5 bg-black/60 p-8 flex flex-col justify-center">
                <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs mb-2">Service 01</p>
                <h3 className="text-xl font-serif font-bold text-white mb-3">Restaurant & Lounge Bar 🍷</h3>
                <div className="w-6 h-px bg-yellow-600 mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Une cuisine variée allant de la <span className="text-white">gastronomie raffinée au snacking chic</span> — 
                  tapas gourmandes, hamburgers maison, pizzas et plats aux saveurs d'ici et d'ailleurs. 
                  Notre célèbre <span className="text-white">souris d'agneau</span> est une valeur sûre.
                  Des jeux sont à disposition des enfants.
                </p>
                <p className="text-yellow-500/70 text-xs mt-4 uppercase tracking-widest">Tapas dès 3 500 FCFA · Plats entre 7 000 et 19 000 FCFA</p>
              </div>
            </div>

            {/* Pâtisserie & Boulangerie */}
            <div className="flex flex-col md:flex-row-reverse border border-yellow-600/20 overflow-hidden">
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img
                  src="/pati.webp"
                  alt="Pâtisserie & Boulangerie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-3/5 bg-black/60 p-8 flex flex-col justify-center">
                <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs mb-2">Service 02</p>
                <h3 className="text-xl font-serif font-bold text-white mb-3">Pâtisserie & Boulangerie 🥐</h3>
                <div className="w-6 h-px bg-yellow-600 mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Dès l'aube, laissez-vous séduire par l'odeur de nos <span className="text-white">croissants chauds et viennoiseries maison</span>. 
                  Spécialisés dans les gâteaux de fête et les douceurs chocolatées, 
                  nous créons des pièces sucrées sur commande pour tous vos moments spéciaux.
                </p>
                <p className="text-yellow-500/70 text-xs mt-4 uppercase tracking-widest">Ouvert dès 7h30</p>
              </div>
            </div>

            {/* Glacier */}
            <div className="flex flex-col md:flex-row border border-yellow-600/20 overflow-hidden">
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img
                  src="creme.webp"
                  alt="Glacier"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-3/5 bg-black/60 p-8 flex flex-col justify-center">
                <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs mb-2">Service 03</p>
                <h3 className="text-xl font-serif font-bold text-white mb-3">Glacier 🍧</h3>
                <div className="w-6 h-px bg-yellow-600 mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pour se rafraîchir sous le soleil de Brazzaville, notre glacier propose des 
                  <span className="text-white"> glaces artisanales</span> et des desserts glacés qui raviront petits et grands. 
                  Une parenthèse de fraîcheur et de gourmandise à toute heure.
                </p>
              </div>
            </div>

            {/* Événements & Buffets */}
            <div className="flex flex-col md:flex-row-reverse border border-yellow-600/20 overflow-hidden">
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img
                  src="buffet2.webp"
                  alt="Événements & Buffets"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-3/5 bg-black/60 p-8 flex flex-col justify-center">
                <p className="text-yellow-500 uppercase tracking-[0.35em] text-xs mb-2">Service 04</p>
                <h3 className="text-xl font-serif font-bold text-white mb-3">Événements & Buffets 🎉</h3>
                <div className="w-6 h-px bg-yellow-600 mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Chaque <span className="text-white">vendredi et samedi à partir de 18h00</span>, 
                  profitez d'un buffet à volonté inoubliable. Nous organisons aussi des 
                  <span className="text-white"> buffets thématiques</span> — Saint-Valentin, Journée des droits de la femme — 
                  et des événements privés sur mesure pour vos célébrations.
                </p>
                <p className="text-yellow-500/70 text-xs mt-4 uppercase tracking-widest">Buffet à volonté · Vendredi & Samedi dès 18h</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Citation finale ── */}
        <div className="border border-yellow-600/20 bg-black/50 p-10 text-center">
          <span className="text-yellow-500 text-2xl mb-6 block">✦</span>
          <p className="text-gray-300 text-xl font-serif italic leading-relaxed mb-6 max-w-2xl mx-auto">
            "À L'Assiette, nous ne servons pas que des plats ; nous cultivons l'art 
            de la rencontre et le plaisir du partage, dans un cadre chic qui bat 
            au rythme de Brazza."
          </p>
          <p className="text-yellow-500 uppercase tracking-widest text-xs">
            — L'équipe de L'Assiette, Brazzaville
          </p>

          {/* Horaires */}
          <div className="mt-8 pt-8 border-t border-yellow-600/20 flex flex-col md:flex-row items-center justify-center gap-8 text-xs uppercase tracking-widest text-gray-400">
            <span>🕙 Lun — Dim : 7h30 – 23h30</span>
            <span className="hidden md:block text-yellow-600">✦</span>
            <span>📍 01 Bis Ave des Aiglons, Brazzaville</span>
            <span className="hidden md:block text-yellow-600">✦</span>
            <span>📞 +242 05 514 2222</span>
          </div>
        </div>

      </div>
    </div>
  );
}