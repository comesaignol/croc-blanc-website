import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    slug: "implants-dentaires-guide-complet",
    title: "Implants dentaires : tout ce qu'il faut savoir avant de se lancer",
    excerpt:
      "Douleur, durée, coût, résultat — on répond à toutes vos questions sur l'implantologie moderne pour que vous preniez la meilleure décision.",
    category: "Implantologie",
    date: "12 Février 2025",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=600&q=80",
    readTime: "5 min",
  },
  {
    slug: "blanchiment-dentaire-mythes-realites",
    title: "Blanchiment dentaire : mythes et réalités en 2025",
    excerpt:
      "Que valent vraiment les kits maison, les strips et le blanchiment professionnel ? On démystifie les idées reçues avec des réponses scientifiques.",
    category: "Esthétique",
    date: "5 Janvier 2025",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&q=80",
    readTime: "4 min",
  },
  {
    slug: "maladies-gencives-prevention",
    title: "Maladies des gencives : comment les prévenir et les traiter",
    excerpt:
      "La gingivite et la parodontite touchent des millions de Français. Découvrez les signes d'alerte et les traitements actuels.",
    category: "Prévention",
    date: "18 Décembre 2024",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
    readTime: "6 min",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label">Conseils & actualités</p>
            <h2 className="section-title gold-line">
              Le savoir dentaire<br />à votre portée
            </h2>
          </div>
          <Link href="/conseils" className="btn-outline self-start md:self-auto shrink-0">
            Tous les articles
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/conseils/${article.slug}`} className="group bg-white overflow-hidden hover:shadow-xl transition-shadow duration-500">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
                  {article.category}
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-muted text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {article.date}
                  </span>
                  <span>·</span>
                  <span>{article.readTime} de lecture</span>
                </div>
                <h3 className="font-serif text-navy text-lg leading-snug mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-1.5 text-gold text-xs font-medium group-hover:gap-3 transition-all">
                  <span>Lire l&apos;article</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
