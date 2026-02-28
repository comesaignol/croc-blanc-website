import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Cabinet Dentaire Le Croc Blanc",
  description: "Politique de confidentialité et gestion des données personnelles du cabinet dentaire Le Croc Blanc.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="bg-navy py-16 mb-12">
        <div className="container-site">
          <h1 className="font-serif text-4xl text-white">Politique de confidentialité</h1>
          <p className="text-white/50 mt-2 text-sm">Dernière mise à jour : Février 2025 — Conforme RGPD</p>
        </div>
      </div>
      <div className="container-site max-w-3xl">
        <div className="flex flex-col gap-8">
          {[
            {
              title: "1. Responsable du traitement",
              content: `Cabinet Dentaire Le Croc Blanc
Adresse : XX Rue [À compléter], XX000 [Ville]
Email : contact@lecrocblanc.fr
Téléphone : 04 XX XX XX XX`,
            },
            {
              title: "2. Données collectées",
              content: `Nous collectons les données suivantes :
— Via le formulaire de contact : nom, prénom, email, téléphone, motif, message
— Via la navigation : cookies analytiques (avec consentement), données de navigation anonymisées
— Via Doctolib (prise de RDV) : données gérées directement par Doctolib selon sa propre politique`,
            },
            {
              title: "3. Finalités des traitements",
              content: `— Répondre à vos demandes de contact et de rendez-vous (base légale : exécution du contrat)
— Gestion du dossier médical (base légale : obligation légale — art. L. 1111-7 CSP)
— Amélioration du site web (base légale : intérêt légitime, avec consentement pour les cookies)`,
            },
            {
              title: "4. Durée de conservation",
              content: `— Données de contact : 3 ans à compter du dernier contact
— Dossier médical : 20 ans minimum (obligation légale)
— Données de navigation : 13 mois maximum`,
            },
            {
              title: "5. Partage des données",
              content: `Vos données ne sont jamais vendues. Elles peuvent être partagées avec :
— Doctolib (gestion des rendez-vous)
— Notre logiciel de gestion de cabinet (hébergement HDS certifié)
— Notre prestataire d'hébergement (Vercel Inc.) pour les données du site

Aucun transfert hors Union Européenne sans garanties appropriées.`,
            },
            {
              title: "6. Vos droits",
              content: `Conformément au RGPD, vous disposez des droits suivants :
— Droit d'accès à vos données
— Droit de rectification
— Droit à l'effacement (sauf obligations légales)
— Droit à la limitation du traitement
— Droit à la portabilité
— Droit d'opposition

Pour exercer ces droits : contact@lecrocblanc.fr ou par courrier à l'adresse du cabinet.
Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).`,
            },
            {
              title: "7. Cookies",
              content: `Ce site utilise des cookies :
— Cookies essentiels : nécessaires au fonctionnement (pas de consentement requis)
— Cookies analytiques : mesure d'audience anonymisée (Google Analytics) — soumis à consentement

Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau de consentement.`,
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
