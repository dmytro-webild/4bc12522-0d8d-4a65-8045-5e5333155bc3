"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { MessageCircle } from "lucide-react";

export default function ContactPage() {
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
          brandName="Mon Web Pyrénées"
          navItems={navItems}
          button={{ text: "Devis gratuit", href: "/contact" }}
          className="bg-white/80 backdrop-blur-md border border-white/20"
          buttonClassName="bg-[var(--primary-cta)] hover:bg-[var(--primary-cta)]/90 text-white"
          buttonTextClassName="font-medium"
        />
      </div>

      <div id="contact-hero" data-section="contact-hero" className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-light text-[var(--foreground)] mb-4">Contactez-nous</h1>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">Nous sommes là pour répondre à toutes vos questions et vous aider à créer le site web parfait pour votre entreprise.</p>
        </div>
      </div>

      <div id="contact-form" data-section="contact-form" className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-[var(--foreground)]/10 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-2 rounded-lg border border-[var(--foreground)]/20 focus:border-[var(--primary-cta)] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-[var(--foreground)]/20 focus:border-[var(--primary-cta)] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  placeholder="Votre entreprise"
                  className="w-full px-4 py-2 rounded-lg border border-[var(--foreground)]/20 focus:border-[var(--primary-cta)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Sujet *
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-[var(--foreground)]/20 focus:border-[var(--primary-cta)] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="creation">Création de site web</option>
                  <option value="maintenance">Maintenance mensuelle</option>
                  <option value="support">Support technique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Message *
                </label>
                <textarea
                  placeholder="Décrivez votre projet..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-[var(--foreground)]/20 focus:border-[var(--primary-cta)] focus:outline-none transition-colors"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-full bg-[var(--primary-cta)] hover:bg-[var(--primary-cta)]/90 text-white font-medium transition-all"
              >
                Envoyer mon message
              </button>

              <p className="text-xs text-[var(--foreground)]/50 text-center">
                Nous répondons à tous les messages dans les 24 heures.
              </p>
            </form>
          </div>
        </div>
      </div>

      <div id="contact-faq" data-section="contact-faq">
        <ContactFaq
          ctaTitle="Une question ? Nous sommes là"
          ctaDescription="Réponse garantie sous 24h. Devis gratuit et sans engagement"
          ctaButton={{
            text: "Revenir au formulaire",
            href: "#contact-form"
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

      <div id="contact-info" data-section="contact-info" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-3 bg-[var(--primary-cta)]/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-[var(--primary-cta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Email</h3>
              <p className="text-[var(--foreground)]/70">contact@monwebpyrenees.fr</p>
            </div>

            <div className="text-center">
              <div className="inline-block p-3 bg-[var(--primary-cta)]/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-[var(--primary-cta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Téléphone</h3>
              <p className="text-[var(--foreground)]/70">Sur demande</p>
            </div>

            <div className="text-center">
              <div className="inline-block p-3 bg-[var(--primary-cta)]/10 rounded-full mb-4">
                <svg className="w-6 h-6 text-[var(--primary-cta)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">Localisation</h3>
              <p className="text-[var(--foreground)]/70">Pyrénées, France</p>
            </div>
          </div>
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