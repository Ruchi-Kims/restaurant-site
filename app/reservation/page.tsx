"use client";
import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({
    nom: "", telephone: "", date: "", heure: "", personnes: "2", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm text-center mb-4">
          Réservez votre table
        </p>
        <h1 className="text-4xl font-serif font-bold text-center mb-16">
          Réservation
        </h1>

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
                errors.nom ? "border-red-500" : "border-gray-700 focus:border-yellow-500"
              }`}
            />
            {errors.nom && <p className="text-red-400 text-xs mt-1">⚠️ {errors.nom}</p>}
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
              placeholder="+33 6 12 34 56 78"
              className={`w-full bg-transparent border text-white px-4 py-3 text-sm focus:outline-none transition ${
                errors.telephone ? "border-red-500" : "border-gray-700 focus:border-yellow-500"
              }`}
            />
            {errors.telephone && <p className="text-red-400 text-xs mt-1">⚠️ {errors.telephone}</p>}
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
                  errors.date ? "border-red-500" : "border-gray-700 focus:border-yellow-500"
                }`}
              />
              {errors.date && <p className="text-red-400 text-xs mt-1">⚠️ {errors.date}</p>}
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
                  errors.heure ? "border-red-500" : "border-gray-700 focus:border-yellow-500"
                }`}
              />
              {errors.heure && <p className="text-red-400 text-xs mt-1">⚠️ {errors.heure}</p>}
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

          {/* Bouton */}
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="w-full border-2 border-yellow-500 text-yellow-500 py-4 uppercase tracking-widest text-sm rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 disabled:opacity-50"
          >
            {status === "loading" ? "Envoi en cours..." : "Confirmer la Réservation"}
          </button>

          {/* Messages de statut */}
          {status === "success" && (
            <p className="text-green-400 text-center text-sm tracking-widest uppercase">
              ✅ Réservation envoyée avec succès !
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