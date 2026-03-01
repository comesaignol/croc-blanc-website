import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cabinet Dentaire Le Croc Blanc | Soins dentaires modernes",
  description:
    "Cabinet dentaire Le Croc Blanc — Des soins d'excellence dans un environnement chaleureux et moderne. Implantologie, orthodontie, esthétique dentaire.",
  keywords: "dentiste, cabinet dentaire, implants, orthodontie, blanchiment, chirurgie buccale",
  openGraph: {
    title: "Cabinet Dentaire Le Croc Blanc",
    description: "Des soins d'excellence dans un environnement chaleureux et moderne.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
