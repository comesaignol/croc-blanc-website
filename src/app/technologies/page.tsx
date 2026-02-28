import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Technologies & Équipements | Cabinet Dentaire Le Croc Blanc",
  description: "Radiographie 3D CBCT, empreinte numérique, laser dentaire, fauteuils connectés — découvrez les technologies de pointe de notre cabinet.",
};

const technologies = [
  {
    title: "Radiographie 3D — Cone Beam (CBCT)",
    description:
      "Notre scanner 3D permet une visualisation complète des structures dentaires, osseuses et nerveuses. Indispensable pour la planification implantaire et les traitements complexes, il offre une précision millimétrique avec une dose de rayonnement minimale.",
    benefits: ["Diagnostic ultra-précis", "Faible dose de rayons", "Planification implantaire 3D", "Détection précoce des pathologies"],
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
  },
  {
    title: "Scanner intra-oral numérique",
    description:
      "Fini les empreintes en silicone inconfortables. Notre scanner intra-oral capture une empreinte digitale précise en quelques minutes. Les données sont transmises directement au laboratoire pour des prothèses parfaitement ajustées.",
    benefits: ["Confort patient total", "Précision supérieure", "Résultat plus rapide", "Visualisation immédiate"],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
  },
  {
    title: "Laser dentaire Er:YAG",
    description:
      "Le laser dentaire permet des soins moins invasifs, sans douleur et avec une cicatrisation accélérée. Il est utilisé pour le traitement des caries, des gencives, les dévitalisations et la décontamination des poches parodontales.",
    benefits: ["Soins sans douleur", "Cicatrisation rapide", "Précision extrême", "Moins d'anesthésie"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=800&q=80",
  },
  {
    title: "Chirurgie guidée par ordinateur",
    description:
      "La planification chirurgicale sur logiciel 3D permet de préparer chaque implant avant l'intervention. Un guide chirurgical stéréolithographique assure un positionnement précis à 0,1 mm près, pour des résultats prédictibles.",
    benefits: ["Résultat prédictible", "Intervention mini-invasive", "Pose sans lambeau possible", "Sécurité maximale"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <p className="section-label">Innovation</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">
            Nos technologies
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Nous investissons dans les équipements les plus avancés pour vous
            offrir des diagnostics précis, des soins moins invasifs et des
            résultats supérieurs.
          </p>
        </div>
      </div>

      <div className="container-site flex flex-col gap-20">
        {technologies.map((tech, i) => (
          <div
            key={tech.title}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
              <p className="section-label">
                Équipement {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-serif text-3xl text-navy mb-4">{tech.title}</h2>
              <div className="h-0.5 w-10 bg-gold mb-6" />
              <p className="text-muted leading-relaxed mb-8">{tech.description}</p>
              <ul className="grid grid-cols-2 gap-3">
                {tech.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-gold shrink-0" />
                    <span className="text-sm text-navy">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`h-72 lg:h-96 bg-cover bg-center ${i % 2 === 1 ? "lg:col-start-1" : ""}`}
              style={{ backgroundImage: `url('${tech.image}')` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
