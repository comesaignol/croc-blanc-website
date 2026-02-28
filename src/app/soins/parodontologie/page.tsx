import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parodontologie | Cabinet Dentaire Le Croc Blanc",
  description: "Traitement des maladies des gencives et des tissus de soutien de la dent. Bilan parodontal, détartrage sous-gingival, surfaçage, chirurgie parodontale.",
};

const soins = [
  {
    title: "Bilan parodontal",
    description: "Examen complet des gencives et de l'os alvéolaire : sondage des poches parodontales, radiographies panoramique et rétro-alvéolaires, évaluation de la mobilité dentaire. Premier pas indispensable avant tout traitement.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=600&q=80",
    info: "45 min",
  },
  {
    title: "Détartrage sous-gingival & surfaçage",
    description: "Élimination du tartre et des dépôts bactériens sous le bord gingival par ultrasons et curettes spécifiques. Le surfaçage radiculaire lisse la surface de la racine pour empêcher la réadhésion de la plaque. Réalisé sous anesthésie locale.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    info: "1 à 4 séances",
  },
  {
    title: "Chirurgie parodontale",
    description: "Lambeau d'assainissement pour accéder aux poches profondes inaccessibles en traitement non chirurgical. Régénération osseuse guidée (ROG) avec membranes et greffes pour reconstruire le tissu de soutien perdu.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
    info: "Sous anesthésie locale",
  },
  {
    title: "Maintenance parodontale",
    description: "Suivi régulier tous les 3 à 6 mois après traitement : détartrage professionnel, réévaluation des indices gingivaux, renforcement de l'hygiène bucco-dentaire. La maintenance est la clé pour stabiliser la maladie sur le long terme.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    info: "Tous les 3 – 6 mois",
  },
];

export default function ParodontologiePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/soins" className="hover:text-gold transition-colors">Soins</Link>
            <span>/</span>
            <span className="text-white/70">Parodontologie</span>
          </div>
          <p className="section-label">Soins courants</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">Parodontologie</h1>
          <p className="text-white/60 text-lg max-w-xl">
            Les gencives sont les fondations de votre sourire. Gingivite, parodontite —
            nous diagnostiquons et traitons les maladies parodontales pour protéger
            vos dents sur le long terme.
          </p>
        </div>
      </div>

      <div className="container-site">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="section-label">Pourquoi traiter</p>
            <h2 className="section-title gold-line mb-6">Une maladie silencieuse, un impact durable</h2>
            <p className="text-muted leading-relaxed mb-4">
              La maladie parodontale touche <strong>50 % des adultes de plus de 35 ans</strong> sans qu&apos;ils
              le sachent. Elle détruit progressivement l&apos;os et les tissus qui maintiennent vos dents en
              place. Sans traitement, elle conduit à la mobilité puis à la perte des dents.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Un traitement précoce stoppe l&apos;évolution de la maladie. Grâce à une prise en charge
              complète — du bilan parodontal à la maintenance — nous stabilisons votre situation
              et préservons votre capital dentaire durablement.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Sondage parodontal systématique à chaque bilan",
                "Traitement non chirurgical en première intention",
                "Chirurgie parodontale si nécessaire",
                "Régénération osseuse guidée (ROG)",
                "Protocole de maintenance personnalisé",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-gold shrink-0" />
                  <span className="text-sm text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80')" }}
          />
        </div>

        {/* Signes d'alerte */}
        <div className="bg-navy/5 border border-navy/10 p-10 mb-24">
          <div className="text-center mb-10">
            <p className="section-label">Signes d&apos;alerte</p>
            <h2 className="section-title gold-line-center">Reconnaître la maladie parodontale</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { sign: "Saignement au brossage", detail: "Même sans douleur, des gencives qui saignent signalent une inflammation à traiter." },
              { sign: "Gencives qui reculent", detail: "Le déchaussement expose la racine et peut rendre les dents sensibles aux variations de température." },
              { sign: "Mauvaise haleine persistante", detail: "Les bactéries anaérobies logées dans les poches parodontales produisent des composés sulfurés malodorants." },
              { sign: "Dents qui bougent", detail: "La mobilité dentaire indique une destruction avancée de l'os alvéolaire. Une consultation urgente s'impose." },
            ].map(({ sign, detail }) => (
              <div key={sign} className="bg-white p-6">
                <div className="h-0.5 w-8 bg-gold mb-4" />
                <h3 className="font-serif text-navy text-base mb-2">{sign}</h3>
                <p className="text-muted text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actes */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="section-label">Nos actes</p>
            <h2 className="section-title gold-line-center">Traitements pratiqués au cabinet</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {soins.map((soin) => (
              <div key={soin.title} className="flex gap-5 bg-ivory p-5 hover:bg-white hover:shadow-lg transition-all">
                <div
                  className="w-28 h-28 shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${soin.image}')` }}
                />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-navy text-base">{soin.title}</h3>
                    <span className="bg-gold/10 text-gold text-[10px] font-semibold px-2 py-0.5 tracking-wider shrink-0">{soin.info}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{soin.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-navy text-white p-10 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "50 %", label: "des adultes touchés", sub: "La parodontite est l'une des maladies chroniques les plus répandues au monde" },
              { stat: "95 %", label: "de stabilisation", sub: "Des cas traités sont stabilisés grâce au traitement non chirurgical et à la maintenance" },
              { stat: "3 – 6", label: "mois entre chaque maintenance", sub: "Un suivi régulier est indispensable pour maintenir les résultats dans la durée" },
            ].map(({ stat, label, sub }) => (
              <div key={label}>
                <p className="font-serif text-4xl text-gold font-semibold mb-2">{stat}</p>
                <p className="font-semibold text-white text-sm mb-1">{label}</p>
                <p className="text-white/50 text-xs leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-ivory text-navy p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl mb-2">Vos gencives saignent ou vous semblez déchaussé ?</h3>
            <p className="text-muted">Consultez pour un bilan parodontal complet — diagnostic précis et plan de traitement personnalisé.</p>
          </div>
          <a
            href="https://www.doctolib.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shrink-0"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </div>
  );
}
