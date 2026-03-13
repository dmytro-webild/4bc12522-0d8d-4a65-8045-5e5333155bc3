"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import Link from "next/link";
import { Sparkles, CheckCircle, Zap, Star, Award, Shield, MessageCircle } from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "Accueil", id: "home" },
    { name: "Services", id: "services" },
    { name: "Tarifs", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  const navItemsWithLinks = navItems.map(item => {
    const routeMap: { [key: string]: string } = {
      "home": "/",
      "services": "/services",
      "pricing": "/",
      "contact": "/"
    };
    return {
      ...item,
      href: routeMap[item.id] || "/"
    };
  });

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
            href: "/contact"
          }}
          className="bg-white/80 backdrop-blur-md border border-white/20"
          buttonClassName="bg-[var(--primary-cta)] hover:bg-[var(--primary-cta)]/90 text-white"
          buttonTextClassName="font-medium"
        />
      </div>

      <div id="hero-home" data-section="hero-home">
        <HeroLogoBillboard
          logoText="Mon Web Pyrénées"
          description="Nous créons des sites web professionnels pour les commerces et entreprises des Pyrénées"
          buttons={[
            {
              text: "Demander un devis gratuit",
              href: "/"
            },
            {
              text: "En savoir plus",
              href: "/services"
            }
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "radial-gradient"
          }}
          mediaAnimation="none"
          className="py-24"
          containerClassName="text-center"
          logoClassName="text-5xl font-light text-[var(--foreground)]"
          descriptionClassName="text-lg text-[var(--foreground)]/80 mt-4 max-w-2xl mx-auto"
          buttonContainerClassName="flex gap-4 justify-center mt-8 flex-wrap"
          buttonClassName="px-8 py-3 rounded-full font-medium transition-all"
          buttonTextClassName="text-sm font-semibold"
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <FeatureCardSix
          title="Pourquoi nous choisir ?"
          description="Nous offrons une solution complète et professionnelle pour transformer votre présence en ligne"
          tag="Nos Avantages"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Site livré en 48h",
              description: "Création rapide et efficace de votre site vitrine professionnel",
              imageSrc: "http://img.b2bpic.net/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg",
              imageAlt: "web design process workflow"
            },
            {
              id: 2,
              title: "Hébergement inclus",
              description: "Domaine, hébergement web et certificat SSL inclus dans nos offres",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-employees-working_23-2147577285.jpg",
              imageAlt: "website maintenance support concept"
            },
            {
              id: 3,
              title: "Responsive mobile",
              description: "Votre site s'adapte parfaitement à tous les appareils et écrans",
              imageSrc: "http://img.b2bpic.net/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg",
              imageAlt: "responsive design icon"
            },
            {
              id: 4,
              title: "Support 7j/7",
              description: "Une équipe disponible pour vous aider et vous conseiller",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-employees-working_23-2147577285.jpg",
              imageAlt: "support team icon"
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="services-overview" data-section="services-overview">
        <ProductCardTwo
          title="Nos Services"
          description="Découvrez nos solutions adaptées à vos besoins"
          tag="Services Professionnels"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "service-creation",
              brand: "Création Web",
              name: "Site Vitrine Professionnel",
              price: "À partir de 200€",
              rating: 5,
              reviewCount: "12",
              imageSrc: "http://img.b2bpic.net/free-vector/people-creating-together-new-app-laptop_23-2148683052.jpg",
              imageAlt: "Création de site web"
            },
            {
              id: "service-maintenance",
              brand: "Maintenance",
              name: "Maintenance Mensuelle",
              price: "21€/mois",
              rating: 5,
              reviewCount: "8",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-employees-working_23-2147577285.jpg",
              imageAlt: "Maintenance de site"
            },
            {
              id: "service-support",
              brand: "Support",
              name: "Support Technique 7j/7",
              price: "Inclus",
              rating: 5,
              reviewCount: "15",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-employees-working_23-2147577285.jpg",
              imageAlt: "Support technique"
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="pricing-home" data-section="pricing-home">
        <PricingCardTwo
          title="Tarification Simple et Transparente"
          description="Des formules claires sans frais caché"
          tag="Nos Tarifs"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "plan-creation",
              badge: "Site Vitrine",
              badgeIcon: Award,
              price: "200€",
              subtitle: "Une seule fois",
              buttons: [
                {
                  text: "Demander un devis",
                  href: "/"
                }
              ],
              features: [
                "Site professionnel livré en 48h",
                "Hébergement inclus",
                "Domaine inclus",
                "SSL inclus",
                "Responsive mobile",
                "Support 7j/7"
              ]
            },
            {
              id: "plan-maintenance",
              badge: "Maintenance",
              badgeIcon: Shield,
              price: "21€",
              subtitle: "par mois",
              buttons: [
                {
                  text: "S'abonner",
                  href: "/"
                }
              ],
              features: [
                "Hébergement et domaine",
                "Mises à jour et sauvegardes",
                "Modifications textes et photos",
                "Support 7j/7"
              ]
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="testimonials-home" data-section="testimonials-home">
        <TestimonialCardOne
          title="Ce que nos clients disent"
          description="Découvrez les avis de nos clients satisfaits"
          tag="Témoignages"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          testimonials={[
            {
              id: "testimonial-1",
              name: "Sophie Martin",
              role: "Propriétaire",
              company: "Boutique de Mode",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg",
              imageAlt: "professional business person portrait"
            },
            {
              id: "testimonial-2",
              name: "Marc Dupont",
              role: "Gérant",
              company: "Restaurant Local",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beauty-businesswoman-leaning-against-brick-wall_613910-16182.jpg",
              imageAlt: "successful business woman portrait"
            },
            {
              id: "testimonial-3",
              name: "Isabelle Rousseau",
              role: "Directrice",
              company: "Cabinet de Conseil",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg",
              imageAlt: "business man professional portrait"
            },
            {
              id: "testimonial-4",
              name: "Jean Claude",
              role: "Fondateur",
              company: "Agence Immobilière",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-with-tablet_23-2149927583.jpg",
              imageAlt: "young professional woman portrait"
            },
            {
              id: "testimonial-5",
              name: "Catherine Leclerc",
              role: "Présidente",
              company: "PME Locale",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg",
              imageAlt: "professional business person portrait"
            },
            {
              id: "testimonial-6",
              name: "Thomas Bernard",
              role: "Directeur",
              company: "Entreprise Artisanale",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beauty-businesswoman-leaning-against-brick-wall_613910-16182.jpg",
              imageAlt: "successful business woman portrait"
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="team-home" data-section="team-home">
        <TeamCardSix
          title="Notre Équipe"
          description="Des professionnels passionnés par le web et par votre réussite"
          tag="L'Équipe"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          members={[
            {
              id: "member-1",
              name: "Pierre Martínez",
              role: "Développeur Web",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wearing-glasses_23-2149396227.jpg",
              imageAlt: "web developer professional portrait"
            },
            {
              id: "member-2",
              name: "Lucie Fontaine",
              role: "Designer UX/UI",
              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-girl-black-turtleneck-glasses-lookign-camera-with-annoyed-expression-touching-her-neck_141793-54585.jpg",
              imageAlt: "graphic designer professional portrait"
            },
            {
              id: "member-3",
              name: "Antoine Gaillard",
              role: "Chef de Projet",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-business-man-with-backpack_23-2149915912.jpg",
              imageAlt: "project manager professional portrait"
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          textBoxDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="faq-contact-home" data-section="faq-contact-home">
        <ContactFaq
          ctaTitle="Une question ? Contactez-nous"
          ctaDescription="Réponse garantie sous 24h. Devis gratuit et sans engagement"
          ctaButton={{
            text: "Nous contacter",
            href: "/"
          }}
          ctaIcon={MessageCircle}
          useInvertedBackground={false}
          animationType="slide-up"
          showCard={true}
          faqs={[
            {
              id: "faq-1",
              title: "Combien de temps pour créer mon site ?",
              content: "Nous livrons votre site professionnel en 48 heures. Nos équipes travaillent rapidement sans sacrifier la qualité pour vous mettre en ligne au plus vite."
            },
            {
              id: "faq-2",
              title: "Est-ce que je pourrai modifier mon site seul ?",
              content: "Oui, vous recevrez les identifiants pour accéder à l'administration de votre site. Vous pouvez modifier les textes et les photos vous-même. Notre équipe reste disponible pour vous assister."
            },
            {
              id: "faq-3",
              title: "Mon site sera-t-il visible sur mobile ?",
              content: "Absolument ! Tous nos sites sont 100% responsive. Ils s'adaptent automatiquement à tous les appareils : téléphones, tablettes et ordinateurs."
            },
            {
              id: "faq-4",
              title: "Que comprend la maintenance mensuelle ?",
              content: "La maintenance comprend : l'hébergement et le domaine inclus, les mises à jour et sauvegardes régulières, les modifications de textes et photos, et le support 7j/7."
            },
            {
              id: "faq-5",
              title: "Comment se passe la livraison du site ?",
              content: "Après prise de contact, nous vous envoyons un formulaire pour récupérer vos informations. Nous créons votre site en 48h, puis vous le transmettrons avec tous les identifiants et une formation rapide."
            }
          ]}
          className="py-16"
          containerClassName="max-w-6xl mx-auto px-4"
          ctaTitleClassName="text-3xl font-light text-[var(--foreground)]"
          ctaDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="footer-home" data-section="footer-home">
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