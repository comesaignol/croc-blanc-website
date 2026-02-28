import { Heart, Microscope, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Écoute & bienveillance",
    description:
      "Chaque patient est unique. Nous prenons le temps d'échanger, de comprendre vos inquiétudes et d'adapter nos soins à vos besoins.",
  },
  {
    icon: Microscope,
    title: "Excellence technique",
    description:
      "Formations continues, technologies dernière génération, protocoles rigoureux — nous exigeons le meilleur pour votre santé bucco-dentaire.",
  },
  {
    icon: Users,
    title: "Suivi personnalisé",
    description:
      "De la première consultation au suivi à long terme, votre praticien reste votre interlocuteur privilégié tout au long de votre parcours.",
  },
  {
    icon: Sparkles,
    title: "Confort & sérénité",
    description:
      "Un cabinet pensé pour le bien-être : espace d'accueil apaisant, soins sous sédation consciente disponibles, équipe attentionnée.",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container-site">
        <div className="text-center mb-16">
          <p className="section-label">Notre philosophie</p>
          <h2 className="section-title gold-line-center">
            Des soins pensés<br />pour vous
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-8 group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-b-2 border-transparent hover:border-gold"
            >
              <div className="w-12 h-12 bg-navy/10 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <value.icon size={22} className="text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-serif text-lg text-navy mb-3">{value.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
