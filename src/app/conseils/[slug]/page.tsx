import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

const articles: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  sections: { heading: string; content: string }[];
  relatedSlugs: string[];
}> = {
  "implants-dentaires-guide-complet": {
    title: "Implants dentaires : tout ce qu'il faut savoir avant de se lancer",
    category: "Implantologie",
    date: "12 Février 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=1200&q=80",
    intro: "L'implant dentaire est aujourd'hui la solution de référence pour remplacer une dent manquante. Pourtant, de nombreuses questions persistent : est-ce douloureux ? Combien ça coûte ? Est-ce remboursé ? On fait le point.",
    sections: [
      {
        heading: "Qu'est-ce qu'un implant dentaire ?",
        content: "Un implant dentaire est une vis en titane biocompatible insérée dans l'os de la mâchoire, qui remplace la racine d'une dent absente. Après cicatrisation (ostéo-intégration), une couronne prothétique sur mesure est fixée dessus. Le résultat est esthétique, fonctionnel et indiscernable d'une vraie dent.\n\nContrairement au bridge — qui nécessite de limer les dents voisines — l'implant est totalement autonome. Il préserve les dents adjacentes et stimule l'os maxillaire pour éviter sa résorption.",
      },
      {
        heading: "La pose est-elle douloureuse ?",
        content: "L'intervention se déroule sous anesthésie locale. Vous ne ressentez aucune douleur pendant la pose. Des suites légères (gonflement, sensibilité, léger saignement) peuvent survenir dans les 2 à 3 jours suivants, mais elles sont gérées efficacement par un traitement antalgique simple.\n\nLa majorité des patients sont surpris de la facilité des suites opératoires. Beaucoup reprennent une activité normale le lendemain.",
      },
      {
        heading: "Combien de temps dure le traitement complet ?",
        content: "Le protocole standard comprend 4 étapes :\n\n1. Consultation et bilan 3D (cone beam) — 1 séance\n2. Pose de l'implant — 30 à 60 min sous anesthésie locale\n3. Ostéo-intégration — 2 à 6 mois selon la qualité osseuse\n4. Pose de la couronne définitive — 1 séance\n\nDes protocoles en charge immédiate existent (implant + couronne provisoire le jour même), indiqués dans des situations spécifiques.",
      },
      {
        heading: "Quel coût et quel remboursement ?",
        content: "Le prix d'un implant varie selon la complexité : de 1 200 € à 2 500 € par implant tout compris (chirurgie + prothèse). Depuis novembre 2023, la Sécurité Sociale rembourse certains implants sous conditions (codes LPP spécifiques).\n\nVotre mutuelle peut couvrir une part significative du reste à charge. Nous établissons systématiquement un devis détaillé lors de la consultation, avec le plan de prise en charge estimé.",
      },
      {
        heading: "Qui peut bénéficier d'un implant ?",
        content: "La grande majorité des adultes avec un os suffisant peut bénéficier d'un implant. Pour les cas où l'os est insuffisant (résorption post-extraction), des greffes osseuses préalables permettent de recréer le volume nécessaire.\n\nCertaines contre-indications relatives existent : diabète non contrôlé, tabagisme important, traitement par bisphosphonates. Votre praticien évalue systématiquement votre dossier médical complet.",
      },
    ],
    relatedSlugs: ["blanchiment-dentaire-mythes-realites", "maladies-gencives-prevention"],
  },
  "blanchiment-dentaire-mythes-realites": {
    title: "Blanchiment dentaire : mythes et réalités en 2025",
    category: "Esthétique",
    date: "5 Janvier 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=1200&q=80",
    intro: "Strips, kits LED, charbon actif, blanchiment professionnel — les options sont nombreuses et les promesses parfois exagérées. On distingue le vrai du faux pour que vous fassiez le bon choix.",
    sections: [
      {
        heading: "Comment fonctionne le blanchiment dentaire ?",
        content: "Le blanchiment dentaire repose sur l'action d'agents oxydants — principalement le peroxyde d'hydrogène ou le peroxyde de carbamide — qui pénètrent l'émail et oxydent les molécules chromogènes responsables des colorations.\n\nSeules les dents naturelles (et non les prothèses, couronnes, composites) répondent au blanchiment. C'est pourquoi une évaluation préalable est indispensable.",
      },
      {
        heading: "Le blanchiment en cabinet vs. les kits maison",
        content: "Le blanchiment professionnel en cabinet utilise des concentrations de peroxyde plus élevées (25-40% H₂O₂), activées par une lampe LED ou laser. Résultat : 6 à 8 teintes plus clair en 1 à 2 séances d'une heure.\n\nLes gouttières sur mesure remises par le dentiste (contenant 10-16% de peroxyde de carbamide) sont utilisées à domicile pendant 10 à 14 nuits. Efficacité équivalente au cabinet sur la durée.\n\nLes kits vendus en pharmacie contiennent des concentrations limitées par réglementation européenne (max 0,1% H₂O₂). Résultats minimes, voire nuls.",
      },
      {
        heading: "Le charbon actif : dangereux ?",
        content: "Le charbon actif est abrasif. Son usage régulier érode l'émail, exposant la dentine (naturellement jaune) et rendant les dents plus sensibles et... plus jaunes à long terme. Il n'a aucun effet blanchissant prouvé scientifiquement.\n\nÀ éviter absolument.",
      },
      {
        heading: "Le blanchiment abîme-t-il les dents ?",
        content: "Un blanchiment professionnel réalisé sur des dents saines, par un praticien qualifié, n'abîme pas l'émail. Des sensibilités transitoires (24-48h) sont normales. Elles disparaissent spontanément.\n\nEn revanche, blanchir des dents avec des caries non traitées, des gencives inflammées ou des défauts d'émail peut être problématique. D'où l'importance d'un bilan préalable.",
      },
      {
        heading: "Combien de temps dure l'effet ?",
        content: "Le résultat se maintient 2 à 5 ans avec une bonne hygiène et en limitant thé, café, vin rouge et tabac. Un entretien annuel (mini-blanchiment) permet de conserver le résultat.",
      },
    ],
    relatedSlugs: ["facettes-dentaires-tout-savoir", "maladies-gencives-prevention"],
  },
  "maladies-gencives-prevention": {
    title: "Maladies des gencives : comment les prévenir et les traiter",
    category: "Prévention",
    date: "18 Décembre 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1200&q=80",
    intro: "La parodontite touche 50% des adultes de plus de 30 ans et représente la première cause de perte dentaire chez l'adulte. Pourtant, elle est largement évitable. On fait le point sur les signes d'alerte et les traitements disponibles.",
    sections: [
      {
        heading: "Gingivite vs. parodontite : quelle différence ?",
        content: "La gingivite est une inflammation superficielle des gencives, réversible avec un bon détartrage et une hygiène rigoureuse. Elle se manifeste par des gencives rouges, gonflées et saignant au brossage.\n\nNon traitée, la gingivite évolue en parodontite : l'inflammation atteint le ligament parodontal et l'os alvéolaire. Des poches parodontales se forment, les dents se déchaussent progressivement. La parodontite est chronique et irréversible — mais stabilisable.",
      },
      {
        heading: "Quels sont les signes d'alerte ?",
        content: "- Saignements lors du brossage ou spontanés\n- Gencives rouges, gonflées ou qui se rétractent\n- Halitose persistante malgré une bonne hygiène\n- Sensibilités dentaires au chaud/froid\n- Dents qui bougent légèrement\n- Espaces qui apparaissent entre les dents\n\nSi vous présentez l'un de ces signes, consultez sans tarder. Plus le traitement est précoce, meilleur est le pronostic.",
      },
      {
        heading: "Quels sont les facteurs de risque ?",
        content: "Tabac : multiplie par 5 le risque de parodontite sévère et diminue l'efficacité des traitements. Diabète : lien bidirectionnel prouvé entre diabète mal contrôlé et parodontite. Génétique : certaines formes agressives sont familiales. Stress chronique : affaiblit le système immunitaire. Médicaments : certains antihypertenseurs et immunosuppresseurs favorisent l'hypertrophie gingivale.",
      },
      {
        heading: "Quels traitements existent ?",
        content: "Le traitement parodontal initial repose sur le détartrage-surfaçage radiculaire (DSR) : élimination du tartre sous-gingival par ultrasons et curettes sous anesthésie locale. C'est le traitement de référence.\n\nPour les formes sévères, une chirurgie parodontale (lambeau d'assainissement, régénération tissulaire guidée) peut être nécessaire pour atteindre les poches profondes. Des antibiotiques locaux ou systémiques complètent parfois le traitement.",
      },
      {
        heading: "Comment prévenir les maladies parodontales ?",
        content: "La prévention passe par : un brossage efficace 2×/jour (technique de Bass avec brosse souple), un nettoyage interdentaire quotidien (fil ou brossettes), des visites de contrôle biannuelles avec détartrage professionnel, et l'arrêt du tabac.\n\nLes patients traités pour parodontite doivent bénéficier d'une maintenance parodontale tous les 3 à 4 mois à vie.",
      },
    ],
    relatedSlugs: ["implants-dentaires-guide-complet", "urgence-dentaire-que-faire"],
  },
  "aligneurs-vs-bagues": {
    title: "Aligneurs transparents vs bagues orthodontiques : comment choisir ?",
    category: "Orthodontie",
    date: "10 Novembre 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
    intro: "Invisalign, braces céramiques ou métalliques — chaque solution a ses avantages. Voici un comparatif complet et objectif pour vous aider à prendre la meilleure décision avec votre orthodontiste.",
    sections: [
      {
        heading: "Les aligneurs transparents",
        content: "Les aligneurs (Invisalign, Spark, OrthoSnap...) sont des gouttières thermoformées remplacées toutes les 1 à 2 semaines. Quasi-invisibles, ils sont amovibles pour manger et se brosser les dents.\n\nAvantages : esthétique, confort (pas d'irritation), hygiène facile, moins de RDV de contrôle, visualisation du résultat final avant le début.\n\nInconvénients : discipline requise (22h/jour de port), moins efficaces sur les cas très complexes, prix plus élevé que les bagues conventionnelles.",
      },
      {
        heading: "Les bagues métalliques",
        content: "Solution la plus éprouvée et la plus efficace pour les malocclusions complexes. Les bagues modernes sont plus petites et confortables qu'auparavant.\n\nAvantages : traitement de tous les cas, pas de compliance requise (fixe), résultat prédictible, coût moins élevé.\n\nInconvénients : visibilité, irritations muqueuses lors de l'adaptation, hygiène plus exigeante.",
      },
      {
        heading: "Les bagues céramiques",
        content: "Bagues de couleur naturelle (blanc ou ivoire) qui se fondent dans la teinte dentaire. Aussi efficaces que les bagues métalliques.\n\nAvantages : bien plus discrètes que les bagues métal, aussi efficaces.\n\nInconvénients : légèrement plus fragiles, peuvent se colorer avec le café/thé/vin, prix intermédiaire.",
      },
      {
        heading: "Comment choisir ?",
        content: "Le choix dépend de 3 facteurs : la complexité de votre malocclusion (décidé par votre praticien), votre mode de vie (discipline, contexte professionnel), et votre budget.\n\nPour une correction mineure à modérée chez un adulte motivé : les aligneurs sont souvent le meilleur choix. Pour un cas complexe, une correction importante ou un adolescent : les bagues restent souvent incontournables.",
      },
    ],
    relatedSlugs: ["blanchiment-dentaire-mythes-realites", "facettes-dentaires-tout-savoir"],
  },
  "urgence-dentaire-que-faire": {
    title: "Urgence dentaire : que faire en attendant le cabinet ?",
    category: "Prévention",
    date: "28 Octobre 2024",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80",
    intro: "Dent cassée, abcès, douleur intense — les urgences dentaires surviennent souvent au mauvais moment. Voici les bons réflexes à adopter immédiatement, avant de joindre votre cabinet.",
    sections: [
      {
        heading: "Douleur dentaire intense",
        content: "Prenez un antalgique (ibuprofène 400mg si pas de contre-indication, ou paracétamol) et appelez votre cabinet dès l'ouverture. Ne posez pas d'aspirine directement sur la gencive — cela brûle les tissus.\n\nUne douleur pulsatile, aggravée par la chaleur, est souvent signe d'un abcès — consultation urgente sous 24h.",
      },
      {
        heading: "Dent cassée",
        content: "Conservez le fragment dans du lait ou du sérum physiologique (jamais dans l'eau). Evitez de manger du côté blessé. Consultez dans les 24-48h — une remise en place ou reconstitution immédiate est parfois possible.",
      },
      {
        heading: "Dent expulsée (avulsion)",
        content: "C'est la vraie urgence dentaire. Chaque minute compte.\n\n1. Ramassez la dent par la couronne, jamais par la racine\n2. Rincez brièvement à l'eau froide si souillée\n3. Replacez-la immédiatement dans son alvéole si possible, ou conservez-la dans du lait\n4. Appelez votre cabinet IMMÉDIATEMENT ou rendez-vous aux urgences\n\nUne dent reimplantée dans les 30 minutes a 90% de chances de se conserver.",
      },
      {
        heading: "Abcès dentaire",
        content: "Gonflement de la joue, fièvre, goût purulent en bouche — l'abcès est une infection qui peut se propager. Ne percez jamais un abcès vous-même.\n\nConsultez en urgence. Un traitement antibiotique sera prescrit en complément du traitement dentaire causal.",
      },
      {
        heading: "Notre numéro d'urgence",
        content: "Le cabinet Le Croc Blanc réserve des créneaux d'urgence chaque jour ouvré. Appelez le 04 XX XX XX XX dès l'ouverture. En dehors des heures d'ouverture, le centre 15 peut orienter vers un dentiste de garde.",
      },
    ],
    relatedSlugs: ["maladies-gencives-prevention", "implants-dentaires-guide-complet"],
  },
  "facettes-dentaires-tout-savoir": {
    title: "Facettes dentaires : pour qui, pour quoi, combien ?",
    category: "Esthétique",
    date: "15 Septembre 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
    intro: "Les facettes dentaires transforment durablement les sourires imparfaits. Mais pour qui sont-elles vraiment indiquées ? Quelle différence entre céramique et composite ? On répond à toutes vos questions.",
    sections: [
      {
        heading: "Qu'est-ce qu'une facette dentaire ?",
        content: "Une facette est une fine coque (0,3 à 0,7 mm) en céramique ou en composite qui recouvre la face vestibulaire (visible) de la dent. Elle modifie la forme, la couleur et la surface sans toucher à la structure profonde de la dent.\n\nC'est l'une des solutions les plus esthétiques de la dentisterie moderne, pour un résultat naturel et lumineux.",
      },
      {
        heading: "Facette en céramique vs composite",
        content: "La facette en céramique (e.max, Empress) est fabriquée en laboratoire sur empreinte numérique. Elle dure 15 à 20 ans, ne se colore pas, et reproduit parfaitement l'aspect translucide de l'émail. Elle nécessite un meulage minimal de la dent (0,3-0,5 mm).\n\nLa facette en composite est modelée directement en bouche en une séance. Moins chère, mais moins durable (5-8 ans) et plus sujette aux colorations. Idéale pour les corrections mineures ou comme test esthétique.",
      },
      {
        heading: "Pour qui sont indiquées les facettes ?",
        content: "Les facettes sont indiquées pour : corriger des dents dyschromiques (tachées, fluorosées), modifier la forme de dents trop courtes ou coniques, fermer un diastème, corriger de légères malpositions sans orthodontie, et réhabiliter un sourire usé.\n\nElles ne conviennent pas aux malocclusions importantes, aux dents très abîmées (couronne préférable) ou aux patients bruxeurs non appareillés.",
      },
      {
        heading: "Quel prix pour des facettes ?",
        content: "Facettes en céramique : 800 à 1 500 € par dent selon la complexité et la localisation. Facettes en composite : 200 à 500 € par dent.\n\nUn traitement complet du sourire (8 à 10 facettes) représente un investissement de 6 000 à 15 000 €. Non remboursé par la Sécurité Sociale ; partiellement par certaines mutuelles.",
      },
      {
        heading: "Le processus en 3 étapes",
        content: "1. Consultation esthétique + smile design numérique : analyse du visage, simulation du résultat, validation.\n2. Préparation minimale des dents + prise d'empreinte numérique + pose des provisoires.\n3. Essayage et collage des facettes définitives.\n\nRésultat visible immédiatement. La gestion de la douleur est minimale : la préparation est peu invasive.",
      },
    ],
    relatedSlugs: ["blanchiment-dentaire-mythes-realites", "aligneurs-vs-bagues"],
  },
};

const allArticles = Object.entries(articles).map(([slug, data]) => ({ slug, ...data }));

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title} | Cabinet Dentaire Le Croc Blanc`,
    description: article.intro.slice(0, 160),
    openGraph: {
      title: article.title,
      description: article.intro.slice(0, 160),
      images: [{ url: article.image }],
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const related = article.relatedSlugs
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden mb-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${article.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/70 to-navy/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-site pb-10">
            <span className="inline-block bg-gold text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 mb-4">
              {article.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-white max-w-3xl leading-snug">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container-site mt-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article content */}
          <div className="lg:col-span-2">
            {/* Meta */}
            <div className="flex items-center gap-4 text-muted text-sm mb-8 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readTime} de lecture
              </span>
            </div>

            {/* Intro */}
            <p className="text-navy text-lg leading-relaxed font-medium mb-10 pb-10 border-b border-gray-100">
              {article.intro}
            </p>

            {/* Sections */}
            <div className="flex flex-col gap-10">
              {article.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-serif text-2xl text-navy mb-4">{section.heading}</h2>
                  <div className="text-muted leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Back */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <Link href="/conseils" className="flex items-center gap-2 text-muted hover:text-gold transition-colors text-sm">
                <ArrowLeft size={15} />
                Retour aux conseils
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* CTA RDV */}
            <div className="bg-navy text-white p-6">
              <h3 className="font-serif text-xl mb-3">Une question ?</h3>
              <p className="text-white/60 text-sm mb-5">
                Consultez nos praticiens pour un avis personnalisé.
              </p>
              <a
                href="https://www.doctolib.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center text-center block"
              >
                Prendre RDV
              </a>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div>
                <h3 className="font-serif text-navy text-lg mb-4">Articles liés</h3>
                <div className="flex flex-col gap-4">
                  {related.map((rel) => rel && (
                    <Link
                      key={rel.slug}
                      href={`/conseils/${rel.slug}`}
                      className="group flex gap-3 bg-ivory p-3 hover:bg-white hover:shadow-md transition-all"
                    >
                      <div
                        className="w-16 h-16 shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${rel.image}')` }}
                      />
                      <div>
                        <span className="text-[10px] text-gold font-semibold tracking-wider uppercase">{rel.category}</span>
                        <p className="text-sm text-navy leading-snug group-hover:text-gold transition-colors line-clamp-2 mt-0.5">{rel.title}</p>
                        <div className="flex items-center gap-1 text-gold text-xs mt-1">
                          <span>Lire</span><ArrowRight size={10} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
