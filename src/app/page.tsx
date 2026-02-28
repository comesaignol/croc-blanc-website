import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Team from "@/components/Team";
import Journey from "@/components/Journey";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import ContactMap from "@/components/ContactMap";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Services />
      <Technology />
      <Team />
      <Journey />
      <Testimonials />
      <BlogPreview />
      <ContactMap />
    </>
  );
}
