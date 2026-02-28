import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soins Conservateurs | Cabinet Dentaire Le Croc Blanc",
  description: "Détartrage, caries, dévitalisations, couronnes et bridges — des soins conservateurs pour préserver votre capital dentaire.",
};

const soins = [
  {
    title: "Traitement des caries",
    description: "Détection précoce par laser ou transillumination, élimination du tissu carié et obturation en composite photopolymérisable. Résultat invisible, biocompatible et durable.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    info: "30 – 60 min",
  },
  {
    title: "Dévitalisation (traitement canalaire)",
    description: "Suppression de la pulpe infectée, mise en forme et obturation des canaux radiculaires au gutta-percha. Réalisé sous digue, loupe ou microscope opératoire pour une précision maximale.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=600&q=80",
    info: "1 à 2 séances",
  },
  {
    title: "Couronnes & onlays",
    description: "Reconstruction des dents très abîmées par couronne céramo-céramique ou onlay pressé. Empreinte numérique, teinte sur mesure, résultat naturel et robuste.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
    info: "2 séances",
  },
  {
    title: "Détartrage & prophylaxie",
    description: "Détartrage supra et sous-gingival par ultrasons, polissage et application de fluor. Prévention des caries et maladies parodontales — recommandé 1 à 2 fois par an.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    info: "45 min",
  },
];

export default function ConservateursPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/soins" className="hover:text-gold transition-colors">Soins</Link>
            <span>/</span>
            <span className="text-white/70">Soins conservateurs</span>
          </div>
          <p className="section-label">Soins courants</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">Soins conservateurs</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Préserver vos dents naturelles le plus longtemps possible — notre priorité absolue.
            Des soins courants réalisés avec rigueur et les meilleurs matériaux.
          </p>
        </div>
      </div>

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="section-label">Notre philosophie</p>
            <h2 className="section-title gold-line mb-6">La dent naturelle, irremplaçable</h2>
            <p className="text-muted leading-relaxed mb-4">
              Quelle que soit la prouesse technologique des prothèses modernes, rien ne remplace
              une vraie dent. Nos praticiens appliquent une dentisterie <strong>mini-invasive</strong> :
              intervenir le plus tôt possible, enlever le moins possible, conserver le maximum.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Détection précoce des caries, matériaux biocompatibles, protocoles de dernière
              génération — nous mettons tout en œuvre pour que vos dents naturelles durent toute
              votre vie.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Composite Classe II invisible sans amalgame",
                "Traitement canalaire sous microscope opératoire",
                "Fluoration et scellement des sillons",
                "Radiographies numériques faible dose",
                "Anesthésie à cartouche réchauffée (moins douloureuse)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-gold shrink-0" />
                  <span className="text-sm text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80')" }} />
        </div>

        {/* Soins */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="section-label">Nos actes</p>
            <h2 className="section-title gold-line-center">Soins pratiqués au cabinet</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {soins.map((soin) => (
              <div key={soin.title} className="flex gap-5 bg-ivory p-5 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-28 h-28 shrink-0 bg-cover bg-center" style={{ backgroundImage: `url('${soin.image}')` }} />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-navy text-base">{soin.title}</h3>
                    <span className="bg-gold/12 text-gold text-[10px] font-semibold px-2 py-0.5 tracking-wider shrink-0">{soin.info}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{soin.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prévention */}
        <div className="bg-navy/5 border border-navy/10 p-10 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "2×/an", label: "Visite de contrôle recommandée", sub: "Pour détecter les caries avant qu'elles progressent" },
              { stat: "2 min", label: "Brossage minimum deux fois par jour", sub: "Matin et soir, brosse souple, technique de Bass" },
              { stat: "1×/j", label: "Nettoyage interdentaire", sub: "Fil dentaire ou brossettes selon vos espaces" },
            ].map(({ stat, label, sub }) => (
              <div key={label}>
                <p className="font-serif text-4xl text-gold font-semibold mb-2">{stat}</p>
                <p className="font-semibold text-navy text-sm mb-1">{label}</p>
                <p className="text-muted text-xs leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-navy text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-2">Vous n&apos;avez pas consulté depuis plus d&apos;un an ?</h3>
            <p className="text-white/60">Prenez rendez-vous pour un bilan complet — mieux vaut prévenir.</p>
          </div>
          <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0">Prendre rendez-vous</a>
        </div>
      </div>
    </div>
  );
}
