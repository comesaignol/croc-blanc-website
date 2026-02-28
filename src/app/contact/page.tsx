import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Rendez-vous | Cabinet Dentaire Le Croc Blanc",
  description: "Prenez rendez-vous au cabinet dentaire Le Croc Blanc. Horaires, adresse, téléphone et formulaire de contact.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <p className="section-label">Contactez-nous</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">
            Prenons contact
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Notre équipe vous répond dans les 24h. Pour un rendez-vous urgent,
            appelez-nous directement.
          </p>
        </div>
      </div>

      <div className="container-site">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-2">
            {/*
              Ce formulaire est côté client uniquement pour l'instant.
              À connecter à une Server Action ou API Route (/api/contact)
              avec validation serveur + rate limiting avant mise en production.
            */}
            <form className="flex flex-col gap-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="prenom"
                    className="block text-xs font-semibold tracking-widest uppercase text-navy mb-2"
                  >
                    Prénom *
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    maxLength={50}
                    autoComplete="given-name"
                    pattern="[A-Za-zÀ-ÿ\s\-']{1,50}"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-xs font-semibold tracking-widest uppercase text-navy mb-2"
                  >
                    Nom *
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    maxLength={50}
                    autoComplete="family-name"
                    pattern="[A-Za-zÀ-ÿ\s\-']{1,50}"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-widest uppercase text-navy mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={100}
                    autoComplete="email"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    placeholder="votre@email.fr"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-xs font-semibold tracking-widest uppercase text-navy mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    maxLength={20}
                    autoComplete="tel"
                    pattern="[0-9\s\+\-\(\)]{7,20}"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="motif"
                  className="block text-xs font-semibold tracking-widest uppercase text-navy mb-2"
                >
                  Motif du contact
                </label>
                <select
                  id="motif"
                  name="motif"
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold transition-colors bg-white"
                >
                  <option value="">Sélectionnez un motif</option>
                  <option value="premier-rdv">Premier rendez-vous</option>
                  <option value="urgence">Urgence dentaire</option>
                  <option value="devis-implant">Demande de devis (implant)</option>
                  <option value="devis-esthetique">Demande de devis (esthétique)</option>
                  <option value="renseignements">Renseignements généraux</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold tracking-widest uppercase text-navy mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={1000}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Décrivez votre demande... (1000 caractères max)"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  name="rgpd"
                  className="mt-1 accent-gold"
                  required
                />
                <label htmlFor="rgpd" className="text-xs text-muted leading-relaxed">
                  En soumettant ce formulaire, j&apos;accepte que mes données soient traitées
                  dans le cadre de ma demande de contact, conformément à la{" "}
                  <Link href="/politique-confidentialite" className="text-gold underline">
                    politique de confidentialité
                  </Link>.
                </label>
              </div>

              <button
                type="submit"
                className="btn-gold self-start flex items-center gap-2"
              >
                Envoyer le message
                <Send size={15} />
              </button>
            </form>
          </div>

          {/* Sidebar info */}
          <div className="flex flex-col gap-6">
            {/* Quick contact */}
            <div className="bg-navy p-6 text-white">
              <h3 className="font-serif text-xl mb-5">Accès rapide</h3>
              <div className="flex flex-col gap-4">
                <a href="tel:+33400000000" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-gold/20 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide">Téléphone</p>
                    <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                      04 XX XX XX XX
                    </p>
                  </div>
                </a>
                <a href="mailto:contact@lecrocblanc.fr" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-gold/20 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide">Email</p>
                    <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                      contact@lecrocblanc.fr
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-gold/20 flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide">Adresse</p>
                    <p className="text-white text-sm">
                      XX Rue [À compléter]<br />XX000 [Ville]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-ivory p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-gold" />
                <h3 className="font-semibold text-navy text-sm">Horaires d&apos;ouverture</h3>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                {[
                  { day: "Lundi", hours: "8h30 – 19h00" },
                  { day: "Mardi", hours: "8h30 – 19h00" },
                  { day: "Mercredi", hours: "8h30 – 19h00" },
                  { day: "Jeudi", hours: "8h30 – 19h00" },
                  { day: "Vendredi", hours: "8h30 – 18h00" },
                  { day: "Samedi", hours: "9h00 – 13h00" },
                  { day: "Dimanche", hours: "Fermé" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-muted">{day}</span>
                    <span className="text-navy font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctolib CTA */}
            <a
              href="https://www.doctolib.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center justify-center"
            >
              Réserver en ligne sur Doctolib
            </a>
          </div>
        </div>

        {/* Urgences dentaires */}
        <div id="urgences" className="mt-16 bg-navy/5 border border-navy/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-navy text-lg mb-1">Urgence dentaire ?</p>
            <p className="text-muted text-sm">
              Douleurs intenses, dent cassée, abcès — nous réservons des créneaux d&apos;urgence chaque jour.
            </p>
          </div>
          <a href="tel:+33400000000" className="btn-primary shrink-0">
            Appeler maintenant
          </a>
        </div>
      </div>
    </div>
  );
}
