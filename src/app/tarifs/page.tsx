"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Zap } from "lucide-react";

export default function PricingPage() {
  const navItems = [
    { name: "Accueil", id: "home" },
    { name: "Services", id: "services" },
    { name: "Tarifs", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Contact", href: "/contact" }
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
          brandName="Mon Web Pyrénées"
          navItems={navItems}
          button={{ text: "Devis gratuit", href: "/contact" }}
          className="bg-white/80 backdrop-blur-md border border-white/20"
          buttonClassName="bg-[var(--primary-cta)] hover:bg-[var(--primary-cta)]/90 text-white"
          buttonTextClassName="font-medium"
        />
      </div>

      <div id="pricing-page" data-section="pricing-page" className="py-16">
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
              badgeIcon: undefined,
              price: "200€",
              subtitle: "Une seule fois",
              buttons: [
                {
                  text: "Demander un devis",
                  href: "/contact"
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
              badgeIcon: undefined,
              price: "21€",
              subtitle: "par mois",
              buttons: [
                {
                  text: "S'abonner",
                  href: "/contact"
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
          titleClassName="text-4xl font-light text-[var(--foreground)] mb-4"
          textBoxDescriptionClassName="text-[var(--foreground)]/70 mt-2"
        />
      </div>

      <div id="faq-pricing" data-section="faq-pricing" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-[var(--foreground)] mb-4">Questions Fréquentes</h2>
            <p className="text-[var(--foreground)]/70">Trouvez les réponses à vos questions sur nos tarifs et services</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[var(--foreground)]/10">
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Puis-je payer en plusieurs fois ?</h3>
              <p className="text-[var(--foreground)]/70">Oui, nous proposons des plans de paiement flexibles. Contactez-nous pour discuter des options qui vous conviennent.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[var(--foreground)]/10">
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Que comprend exactement le prix de 200€ ?</h3>
              <p className="text-[var(--foreground)]/70">Le prix inclut la création du site, l'hébergement pour 1 an, le domaine, le certificat SSL, et les 3 premiers mois de support technique gratuit.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[var(--foreground)]/10">
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Y a-t-il des frais cachés ?</h3>
              <p className="text-[var(--foreground)]/70">Non, absolument pas. Nos tarifs sont transparents et incluent tout ce qui est nécessaire pour votre site professionnel.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[var(--foreground)]/10">
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Puis-je passer à une autre formule après ?</h3>
              <p className="text-[var(--foreground)]/70">Bien sûr ! Vous pouvez ajouter des services ou passer à un forfait maintenance à tout moment.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[var(--foreground)]/10">
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Comment commander ?</h3>
              <p className="text-[var(--foreground)]/70">Cliquez sur le bouton "Demander un devis" ci-dessus ou rendez-vous sur notre page de contact. Nous vous répondrons dans les 24 heures.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="cta-pricing" data-section="cta-pricing" className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-[var(--foreground)] mb-4">Prêt à lancer votre site ?</h2>
          <p className="text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">Contactez-nous dès maintenant pour un devis gratuit et sans engagement. Réponse garantie sous 24h.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-[var(--primary-cta)] hover:bg-[var(--primary-cta)]/90 text-white font-medium transition-all"
          >
            Demander un devis
          </Link>
        </div>
      </div>

      <div id="footer" data-section="footer">
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