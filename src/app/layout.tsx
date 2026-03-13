import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Mon Web Pyrénées - Site Web Professionnel 48h",
  description: "Créez votre site vitrine professionnel en 48h. Hébergement, domaine et support inclus. Contactez l'agence web des Pyrénées.",
  keywords: "site web professionnel, création site Pyrénées, agence web, site vitrine, hébergement inclus",
  metadataBase: new URL("https://monwebpyrenees.fr"),
  alternates: {
    canonical: "https://monwebpyrenees.fr",
  },
  openGraph: {
    siteName: "Mon Web Pyrénées",
    title: "Mon Web Pyrénées - Votre vitrine sur internet",
    description: "Création de sites web professionnels pour les commerces et entreprises des Pyrénées",
    url: "https://monwebpyrenees.fr",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/beautiful-shot-grassy-field-with-yellow-green-trees-hill-with-mountain-blue-sky_181624-4186.jpg",
        alt: "Mon Web Pyrénées - Site professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mon Web Pyrénées",
    description: "Votre vitrine sur internet",
    images: ["http://img.b2bpic.net/free-photo/beautiful-shot-grassy-field-with-yellow-green-trees-hill-with-mountain-blue-sky_181624-4186.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${roboto.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}