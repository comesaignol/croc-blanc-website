import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Cabinet Dentaire Le Croc Blanc",
  description: "Mentions légales du site du cabinet dentaire Le Croc Blanc.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="bg-navy py-16 mb-12">
        <div className="container-site">
          <h1 className="font-serif text-4xl text-white">Mentions légales</h1>
        </div>
      </div>
      <div className="container-site max-w-3xl">
        <div className="prose prose-navy flex flex-col gap-8">
          {[
            {
              title: "1. Éditeur du site",
              content: `Cabinet Dentaire Le Croc Blanc
Forme juridique : Société d'Exercice Libéral [À compléter]
Adresse : XX Rue [À compléter], XX000 [Ville]
Téléphone : 04 XX XX XX XX
Email : contact@lecrocblanc.fr
N° SIRET : [À compléter]
N° RPPS des praticiens : [À compléter]
Ordre des Chirurgiens-Dentistes : [Département À compléter]`,
            },
            {
              title: "2. Directeur de la publication",
              content: "Dr. [Nom du responsable], Chirurgien-Dentiste inscrit au tableau de l'Ordre des Chirurgiens-Dentistes du [département].",
            },
            {
              title: "3. Hébergement",
              content: `Le site est hébergé par :
Vercel Inc.
340 Pine Street, Suite 701
San Francisco, CA 94104, USA
https://vercel.com`,
            },
            {
              title: "4. Propriété intellectuelle",
              content: "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive du Cabinet Dentaire Le Croc Blanc, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.",
            },
            {
              title: "5. Responsabilité",
              content: "Les informations fournies sur ce site ont un caractère général et ne se substituent pas à un avis médical ou dentaire personnalisé. Le cabinet décline toute responsabilité quant à l'usage qui pourrait être fait de ces informations. Consultez un professionnel de santé pour tout problème bucco-dentaire.",
            },
            {
              title: "6. Liens hypertextes",
              content: "Ce site peut contenir des liens vers des sites tiers. Le Cabinet Le Croc Blanc n'est pas responsable du contenu de ces sites externes et ne peut être tenu pour responsable des dommages résultant de leur utilisation.",
            },
            {
              title: "7. Droit applicable",
              content: "Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français sont seuls compétents.",
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="font-serif text-xl text-navy mb-3 pb-2 border-b border-ivory-dark">{title}</h2>
              <p className="text-muted text-sm leading-relaxed whitespace-pre-line">{content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
