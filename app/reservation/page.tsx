"use client";
import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    date: "",
    heure: "",
    personnes: "2",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.nom.trim()) newErrors.nom = "Le nom est obligatoire";
    if (!form.telephone.trim()) newErrors.telephone = "Le téléphone est obligatoire";
    if (!form.date) newErrors.date = "La date est obligatoire";
    if (!form.heure) newErrors.heure = "L'heure est obligatoire";
    return newErrors;
  };

  // ── Envoi par Email (Resend) ──────────────────────────────────────────────
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  // ── Envoi par WhatsApp ────────────────────────────────────────────────────
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const phone = "+242069032222"; // ← numéro WhatsApp du restaurant

    const messageWA =
      `Bonjour Chez L'Assiette ! ✦\n` +
      `Je souhaite réserver une table :\n` +
      `- Nom : ${form.nom}\n` +
      `- Téléphone : ${form.telephone}\n` +
      `- Date : ${form.date}\n` +
      `- Heure : ${form.heure}\n` +
      `- Personnes : ${form.personnes}\n` +
      (form.message ? `- Note : ${form.message}` : "");

    const encodedMessage = encodeURIComponent(messageWA);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div
      className="relative text-white min-h-screen py-20 px-8"
      style={{
        backgroundImage:
          "url('/reserve.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Réservez votre table
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-16 text-cyan-500">
          Réservation
        </h1>
        <p className="text-gray-400 text-base md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">Prenez votre reservation pour venir deguster votre Assiette</p>

        <div className="border border-yellow-600 p-10 space-y-6">

          {/* Nom */}
          <div>
            <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
              Nom & Prénom <span className="text-red-400">*</span>
            </label>
            <input
              name="nom"
              onChange={handleChange}
              value={form.nom}
              type="text"
              placeholder="Jean Dupont"
              className={`w-full bg-transparent border text-white px-4 py-3 text-sm focus:outline-none transition ${
                errors.nom
                  ? "border-red-500"
                  : "border-gray-700 focus:border-yellow-500"
              }`}
            />
            {errors.nom && (
              <p className="text-red-400 text-xs mt-1">⚠️ {errors.nom}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
              Email <span className="text-gray-500 normal-case tracking-normal">(pour la confirmation)</span>
            </label>
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              type="email"
              placeholder="jean@exemple.com"
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
              Téléphone <span className="text-red-400">*</span>
            </label>
            <input
              name="telephone"
              onChange={handleChange}
              value={form.telephone}
              type="tel"
              placeholder="+212 6 12 34 56 78"
              className={`w-full bg-transparent border text-white px-4 py-3 text-sm focus:outline-none transition ${
                errors.telephone
                  ? "border-red-500"
                  : "border-gray-700 focus:border-yellow-500"
              }`}
            />
            {errors.telephone && (
              <p className="text-red-400 text-xs mt-1">⚠️ {errors.telephone}</p>
            )}
          </div>

          {/* Date & Heure */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
                Date <span className="text-red-400">*</span>
              </label>
              <input
                name="date"
                onChange={handleChange}
                value={form.date}
                type="date"
                className={`w-full bg-transparent border text-white px-4 py-3 text-sm focus:outline-none transition ${
                  errors.date
                    ? "border-red-500"
                    : "border-gray-700 focus:border-yellow-500"
                }`}
              />
              {errors.date && (
                <p className="text-red-400 text-xs mt-1">⚠️ {errors.date}</p>
              )}
            </div>
            <div>
              <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
                Heure <span className="text-red-400">*</span>
              </label>
              <input
                name="heure"
                onChange={handleChange}
                value={form.heure}
                type="time"
                className={`w-full bg-transparent border text-white px-4 py-3 text-sm focus:outline-none transition ${
                  errors.heure
                    ? "border-red-500"
                    : "border-gray-700 focus:border-yellow-500"
                }`}
              />
              {errors.heure && (
                <p className="text-red-400 text-xs mt-1">⚠️ {errors.heure}</p>
              )}
            </div>
          </div>

          {/* Nombre de personnes */}
          <div>
            <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
              Nombre de personnes
            </label>
            <select
              name="personnes"
              onChange={handleChange}
              value={form.personnes}
              className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} personne{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-yellow-500 uppercase tracking-widest text-xs block mb-2">
              Message / Demande spéciale
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              rows={4}
              placeholder="Allergie, anniversaire, demande particulière..."
              className="w-full bg-transparent border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition resize-none"
            />
          </div>

          {/* Note champs obligatoires */}
          <p className="text-gray-500 text-xs">
            <span className="text-red-400">*</span> Champs obligatoires
          </p>

          {/* ── Séparateur ──────────────────────────────────────────── */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-500 text-xs uppercase tracking-widest">
              Choisissez votre moyen
            </span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* ── Boutons côte à côte ──────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Bouton Email */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full border-2 border-yellow-500 text-yellow-500 py-4 uppercase tracking-widest text-sm rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {status === "loading" ? "Envoi..." : "Par Email"}
            </button>

            {/* Bouton WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="w-full border-2 border-green-500 text-green-400 py-4 uppercase tracking-widest text-sm rounded-full hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              {/* Icône WhatsApp SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.874L0 24l6.326-1.52A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.727.896.944-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              Par WhatsApp
            </button>

          </div>

          {/* Messages de statut (email uniquement) */}
          {status === "success" && (
            <p className="text-green-400 text-center text-sm tracking-widest uppercase">
              ✅ Réservation envoyée par email !
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center text-sm tracking-widest uppercase">
              ❌ Une erreur est survenue, réessayez.
            </p>
          )}

        </div>
      </div>
    </div>
  );
}