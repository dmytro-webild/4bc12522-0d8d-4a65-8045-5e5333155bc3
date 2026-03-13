"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import Link from "next/link";
import { Sparkles, MessageCircle } from "lucide-react";

export default function ServicesPage() {
  const navItems = [
    { name: "Accueil", id: "home" },
    { name: "Services", id: "services" },
    { name: "Tarifs", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="mediumLarge"
      background="none"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={navItems}
          brandName="Mon Web Pyrénées"
          button={{
            text: "Devis gratuit",
            href: "/services"
          }}
          className="bg-white/80 backdrop-blur-md border border-white/20"
          buttonClassName="bg-[var(--primary-cta)] hover:bg-[var(--primary-cta)]/90 text-white"
          buttonTextClassName="font-medium"
        />
      </div>

      <div id="services-detailed" data-section="services-detailed">
        <FeatureCardSix
          title="Services Détaillés"
          description="Explorez en profondeur tous nos services web et nos solutions de support professionnel"
          tag="Services Complets"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Création de Site Vitrine",
              description: "Nous créons votre site professionnel en 48h avec design moderne, hébergement inclus et domaine personnalisé. Votre présence en ligne démarre immédiatement.",
              imageSrc: "http://img.b2bpic.net/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg",
              imageAlt: "web design process workflow"
            },
            {
              id: 2,
              title: "Hébergement Web et Domaine",
              description: "Domaine, hébergement sécurisé et certificat SSL automatiquement inclus. Pas de coûts cachés. Infrastructure fiable et performante pour votre site.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-employees-working_23-2147577285.jpg",
              imageAlt: "website maintenance support concept"
            },
            {
              id: 3,
              title: "Design Responsive Mobile-First",
              description: "Tous nos sites s'adaptent parfaitement à tous les appareils. Votre site fonctionnera impeccablement sur téléphones, tablettes et ordinateurs de bureau.",
              imageSrc: "http://img.b2bpic.net/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg",
              imageAlt: "responsive design"
            },
            {
              id: 4,
              title: "Support Client Disponible 7j/7",
              description: "Notre équipe est toujours là pour vous. Questions, modifications, problèmes techniques - nous répondons rapidement et professionnellement tous les jours.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-employees-working_23-2147577285.jpg",
              imageAlt: "support team"
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="maintenance-packages" data-section="maintenance-packages">
        <ProductCardTwo
          title="Packages de Maintenance"
          description="Choisissez le plan de maintenance qui correspond à vos besoins"
          tag="Maintenance Professionnelle"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "maintenance-basic",
              brand: "Basic",
              name: "Maintenance Standard",
              price: "21€/mois",
              rating: 5,
              reviewCount: "28",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-employees-working_23-2147577285.jpg",
              imageAlt: "Basic maintenance package"
            },
            {
              id: "maintenance-plus",
              brand: "Plus",
              name: "Maintenance Avancée",
              price: "49€/mois",
              rating: 5,
              reviewCount: "15",
              imageSrc: "http://img.b2bpic.net/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg",
              imageAlt: "Advanced maintenance package"
            },
            {
              id: "maintenance-premium",
              brand: "Premium",
              name: "Support Prioritaire",
              price: "99€/mois",
              rating: 5,
              reviewCount: "8",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-employees-working_23-2147577285.jpg",
              imageAlt: "Premium support package"
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="faq-services" data-section="faq-services">
        <ContactFaq
          ctaTitle="Vous avez des questions sur nos services ?"
          ctaDescription="Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons transformer votre présence en ligne"
          ctaButton={{
            text: "Consulter un expert",
            href: "/services"
          }}
          ctaIcon={MessageCircle}
          useInvertedBackground={false}
          animationType="slide-up"
          showCard={true}
          faqs={[
            {
              id: "faq-service-1",
              title: "Quels sont les délais de création d'un site ?",
              content: "Notre délai standard de création est de 48 heures pour un site vitrine professionnel. Des délais accélérés peuvent être proposés selon votre urgence. Nous travaillons rapidement sans compromettre la qualité."
            },
            {
              id: "faq-service-2",
              title: "Puis-je modifier mon site après la création ?",
              content: "Oui, vous avez accès complet à votre site. Vous pouvez modifier les textes, ajouter des photos et gérer votre contenu directement. Notre équipe peut aussi effectuer les modifications pour vous."
            },
            {
              id: "faq-service-3",
              title: "Que comprend exactement la maintenance ?",
              content: "La maintenance comprend l'hébergement, le domaine, les certificats SSL, les mises à jour de sécurité, les sauvegardes automatiques et le support technique 7j/7 inclus."
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          ctaTitleClassName="text-3xl font-light text-[var(--foreground)]"
          ctaDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="footer-services" data-section="footer-services">
        <FooterLogoReveal
          logoText="Mon Web Pyrénées"
          leftLink={{
            text: "Mentions Légales",
            href: "#"
          }}
          rightLink={{
            text: "© 2026 Mon Web Pyrénées",
            href: "#"
          }}
          className="py-12 border-t border-[var(--foreground)]/10"
          containerClassName="max-w-6xl mx-auto px-4 flex justify-between items-center"
          logoClassName="text-xl font-light text-[var(--foreground)]"
          linkClassName="text-sm text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors"
        />
      </div>
    </ThemeProvider>
  );
}