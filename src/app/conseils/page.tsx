import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Conseils & Actualités Dentaires | Cabinet Dentaire Le Croc Blanc",
  description: "Articles et conseils de nos praticiens sur l'implantologie, l'esthétique dentaire, la prévention bucco-dentaire et l'orthodontie.",
};

const categories = ["Tous", "Implantologie", "Esthétique", "Prévention", "Orthodontie", "Chirurgie"];

const articles = [
  {
    slug: "implants-dentaires-guide-complet",
    title: "Implants dentaires : tout ce qu'il faut savoir avant de se lancer",
    excerpt: "Douleur, durée, coût, résultat — on répond à toutes vos questions sur l'implantologie moderne pour que vous preniez la meilleure décision.",
    category: "Implantologie",
    date: "12 Février 2025",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb6c6aa93?w=600&q=80",
    readTime: "5 min",
  },
  {
    slug: "blanchiment-dentaire-mythes-realites",
    title: "Blanchiment dentaire : mythes et réalités en 2025",
    excerpt: "Que valent vraiment les kits maison, les strips et le blanchiment professionnel ? On démystifie les idées reçues avec des réponses scientifiques.",
    category: "Esthétique",
    date: "5 Janvier 2025",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&q=80",
    readTime: "4 min",
  },
  {
    slug: "maladies-gencives-prevention",
    title: "Maladies des gencives : comment les prévenir et les traiter",
    excerpt: "La gingivite et la parodontite touchent des millions de Français. Découvrez les signes d'alerte et les traitements actuels.",
    category: "Prévention",
    date: "18 Décembre 2024",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80",
    readTime: "6 min",
  },
  {
    slug: "aligneurs-vs-bagues",
    title: "Aligneurs transparents vs bagues orthodontiques : comment choisir ?",
    excerpt: "Invisalign, braces céramiques ou métalliques — chaque solution a ses avantages. Voici un comparatif complet pour vous aider à décider.",
    category: "Orthodontie",
    date: "10 Novembre 2024",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    readTime: "7 min",
  },
  {
    slug: "urgence-dentaire-que-faire",
    title: "Urgence dentaire : que faire en attendant le cabinet ?",
    excerpt: "Dent cassée, abcès, douleur intense — les bons réflexes à adopter immédiatement pour limiter les dommages avant votre rendez-vous.",
    category: "Prévention",
    date: "28 Octobre 2024",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    readTime: "3 min",
  },
  {
    slug: "facettes-dentaires-tout-savoir",
    title: "Facettes dentaires : pour qui, pour quoi, combien ?",
    excerpt: "Les facettes en céramique ou composite transforment les sourires. Découvrez les indications, la pose et les prix pour prendre une décision éclairée.",
    category: "Esthétique",
    date: "15 Septembre 2024",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    readTime: "5 min",
  },
];

export default function ConseilsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="bg-navy py-20 mb-16">
        <div className="container-site">
          <p className="section-label">Blog & ressources</p>
          <h1 className="font-serif text-5xl text-white leading-tight mb-4">
            Conseils & actualités
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Notre équipe partage ses connaissances pour vous aider à prendre
            les meilleures décisions pour votre santé bucco-dentaire.
          </p>
        </div>
      </div>

      <div className="container-site">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                i === 0
                  ? "bg-navy text-white"
                  : "bg-ivory text-navy hover:bg-navy hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/conseils/${article.slug}`} className="group bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-500">
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-muted text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {article.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
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
    </div>
  );
}
