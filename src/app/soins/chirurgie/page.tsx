import type { Metadata } from "next";
import { CheckCircle2, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chirurgie Buccale | Cabinet Dentaire Le Croc Blanc",
  description: "Extractions, dents de sagesse, greffes osseuses et gingivales — chirurgie buccale réalisée en toute sécurité au cabinet.",
};

const actes = [
  {
    title: "Extractions dentaires",
    description: "Extraction simple ou complexe (dent incluse, dent de sagesse), réalisée sous anesthésie locale. Protocole de suivi post-opératoire systématique.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  },
  {
    title: "Greffe osseuse",
    description: "Régénération osseuse guidée (ROG) pour reconstruire le volume osseux avant la pose d'un implant. Utilisation de substituts osseux biocompatibles.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80",
  },
  {
    title: "Sinus-lift",
    description: "Comblement sinusien interne ou externe pour augmenter la hauteur osseuse au niveau du sinus maxillaire, indispensable pour certains implants postérieurs.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=600&q=80",
  },
  {
    title: "Freinectomie",
    description: "Section du frein labial ou lingual trop court ou mal inséré, gênant l'élocution, la déglutition ou provoquant un diastème inter-incisif.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
  },
  {
    title: "Chirurgie parodontale",
    description: "Lambeau d'assainissement, régénération tissulaire guidée (RTG) ou greffe de conjonctif pour traiter les poches parodontales profondes et couvrir les récessions.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
  },
  {
    title: "Apicectomie & biopsie",
    description: "Résection de l'apex radiculaire en cas de kyste ou d'échec de dévitalisation. Prélèvement biopsique pour analyse anatomopathologique si nécessaire.",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&q=80",
  },
];

export default function ChirurgiePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/soins" className="hover:text-gold transition-colors">Soins</Link>
            <span>/</span>
            <span className="text-white/70">Chirurgie buccale</span>
          </div>
          <p className="section-label">Chirurgie & Implantologie</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">Chirurgie buccale</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Interventions chirurgicales de précision dans un bloc opératoire équipé. Protocoles
            anti-douleur avancés pour un confort maximal.
          </p>
        </div>
      </div>

      <div className="container-site">
        {/* Sécurité */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Shield, title: "Anesthésie adaptée", desc: "Anesthésie locale, locorégionale ou sédation consciente selon l'acte et votre anxiété." },
            { icon: CheckCircle2, title: "Bloc opératoire certifié", desc: "Matériel stérile à usage unique, protocoles d'asepsie stricts, monitoring continu." },
            { icon: CheckCircle2, title: "Suivi post-opératoire", desc: "Compte-rendu écrit, ordonnances préparées, joignabilité 24h après l'intervention." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-ivory p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-navy/10 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-1">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actes */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="section-label">Nos interventions</p>
            <h2 className="section-title gold-line-center">Actes de chirurgie buccale</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actes.map((acte) => (
              <div key={acte.title} className="group bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${acte.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="p-6 border-l-2 border-transparent group-hover:border-gold transition-colors">
                  <h3 className="font-serif text-navy text-lg mb-2">{acte.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{acte.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Avant/après opération */}
        <div className="bg-ivory p-10 mb-24">
          <div className="text-center mb-10">
            <p className="section-label">Conseils pratiques</p>
            <h2 className="font-serif text-3xl text-navy gold-line-center">Avant et après votre intervention</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-gold text-white text-xs flex items-center justify-center font-bold">J</span>
                Avant l&apos;intervention
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Repas léger 2h avant (sauf anesthésie générale)",
                  "Prendre son traitement habituel sauf anticoagulants (à discuter)",
                  "Se brosser les dents le matin",
                  "Prévoir un accompagnateur si sédation",
                  "Signaler tout antécédent médical récent",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-navy text-white text-xs flex items-center justify-center font-bold">J+</span>
                Après l&apos;intervention
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  "Mordre sur la compresse 30 min après la pose",
                  "Alimentation froide et molle les 24 premières heures",
                  "Éviter le tabac, l'alcool et les efforts physiques 48h",
                  "Ne pas rincer la bouche les 12 premières heures",
                  "Prendre les antalgiques avant que l'anesthésie ne se dissipe",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2 size={14} className="text-navy shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-navy text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-2">Une question sur votre intervention ?</h3>
            <p className="text-white/60">Consultation pré-opératoire gratuite avec votre chirurgien.</p>
          </div>
          <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0">Prendre rendez-vous</a>
        </div>
      </div>
    </div>
  );
}
