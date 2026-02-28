import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Implantologie Dentaire | Cabinet Dentaire Le Croc Blanc",
  description: "Solutions d'implantologie dentaire modernes pour remplacer vos dents manquantes durablement. Bilan 3D, pose sous anesthésie locale, résultat naturel.",
};

const faq = [
  {
    q: "L'implant dentaire est-il douloureux ?",
    a: "La pose d'implant se réalise sous anesthésie locale. Vous ne ressentez aucune douleur pendant l'intervention. Des suites légères (gonflement, sensibilité) sont possibles 2 à 3 jours après, gérées par un traitement antalgique.",
  },
  {
    q: "Combien de temps dure un implant ?",
    a: "Un implant bien posé et correctement entretenu dure toute la vie. La couronne prothétique sur l'implant a une durée de vie de 15 à 20 ans. Un suivi annuel est indispensable.",
  },
  {
    q: "Quel est le remboursement par la Sécurité Sociale ?",
    a: "Depuis 2023, la Sécurité Sociale rembourse certains implants (selon indication médicale). Votre complémentaire santé peut couvrir une part importante du reste à charge. Nous établissons un devis détaillé lors de la consultation.",
  },
  {
    q: "Puis-je avoir un implant si j'ai peu d'os ?",
    a: "Oui, dans la majorité des cas. Des techniques de greffe osseuse (comblement sinusien, régénération osseuse guidée) permettent de recréer un volume osseux suffisant avant ou pendant la pose de l'implant.",
  },
  {
    q: "Combien de temps entre l'extraction et l'implant ?",
    a: "L'implant peut être posé immédiatement après extraction dans certains cas, ou après 3 à 6 mois de cicatrisation. Votre praticien détermine le protocole le plus adapté à votre situation.",
  },
];

const steps = [
  { num: "01", title: "Consultation & bilan 3D", desc: "Examen clinique, radiographie cone beam, évaluation osseuse et discussion du plan de traitement." },
  { num: "02", title: "Pose de l'implant", desc: "Intervention sous anesthésie locale. L'implant en titane est inséré dans l'os. Durée : 30 à 60 min." },
  { num: "03", title: "Ostéo-intégration", desc: "Phase de cicatrisation de 2 à 6 mois pendant laquelle l'implant fusionne avec l'os." },
  { num: "04", title: "Pose de la couronne", desc: "Empreinte numérique, fabrication de la prothèse sur mesure et pose définitive." },
];

export default function ImplantologiePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/soins" className="hover:text-gold transition-colors">Soins</Link>
            <span>/</span>
            <span className="text-white/70">Implantologie</span>
          </div>
          <p className="section-label">Chirurgie & Implantologie</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">
            Implants dentaires
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            La solution permanente pour remplacer une ou plusieurs dents manquantes.
            Un résultat naturel, fonctionnel et durable.
          </p>
        </div>
      </div>

      <div className="container-site">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="section-label">Qu&apos;est-ce que l&apos;implantologie ?</p>
            <h2 className="section-title gold-line mb-6">
              Une racine artificielle<br />en titane biocompatible
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              L&apos;implant dentaire est une vis en titane qui se substitue à la racine d&apos;une dent
              absente. Après ostéo-intégration — la fusion de l&apos;implant avec l&apos;os —
              une couronne prothétique sur mesure est fixée dessus, reconstituant une dent
              naturelle dans son apparence et sa fonction.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Contrairement au bridge, l&apos;implant préserve les dents adjacentes et stimule
              l&apos;os pour éviter sa résorption. C&apos;est la solution la plus proche d&apos;une
              vraie dent.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Résultat esthétique naturel",
                "Mastication identique à une dent saine",
                "Préservation des dents voisines",
                "Stimulation osseuse",
                "Durée de vie : toute la vie",
                "Hygiène simplifiée",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=800&q=80')" }}
          />
        </div>

        {/* Étapes */}
        <div className="bg-ivory p-10 mb-24">
          <div className="text-center mb-12">
            <p className="section-label">Protocole</p>
            <h2 className="section-title gold-line-center">Les étapes de votre traitement</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white p-6 border-b-2 border-gold">
                <p className="font-serif text-3xl text-gold/40 font-semibold mb-3">{step.num}</p>
                <h3 className="font-serif text-navy text-base mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Indications */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="section-label">Indications</p>
            <h2 className="font-serif text-3xl text-navy mb-6 gold-line">Pour qui ?</h2>
            <div className="flex flex-col gap-3">
              {[
                "Perte d'une ou plusieurs dents (carie, fracture, maladie parodontale)",
                "Édentement total ou partiel",
                "Remplacement d'une prothèse amovible inconfortable",
                "All-on-4 / All-on-6 pour un arcade complète fixe",
                "Os suffisant ou reconstitué par greffe osseuse",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 bg-ivory">
                  <ArrowRight size={14} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">Contre-indications relatives</p>
            <h2 className="font-serif text-3xl text-navy mb-6 gold-line">À discuter avec votre praticien</h2>
            <div className="flex flex-col gap-3">
              {[
                "Diabète non équilibré",
                "Tabagisme important (risque d'échec augmenté)",
                "Traitement par bisphosphonates",
                "Immunodépression sévère",
                "Croissance osseuse non terminée (avant 18 ans)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 border border-gray-100">
                  <AlertCircle size={14} className="text-muted shrink-0 mt-0.5" />
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title gold-line-center">FAQ Implantologie</h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {faq.map((item) => (
              <div key={item.q} className="border border-gray-100 p-6">
                <h3 className="font-serif text-navy text-base mb-3">{item.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-2">Prêt à retrouver votre sourire ?</h3>
            <p className="text-white/60">Consultez pour un bilan implantaire complet — devis gratuit.</p>
          </div>
          <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0">
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </div>
  );
}
