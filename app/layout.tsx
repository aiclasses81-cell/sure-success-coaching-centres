import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://suresuccesscoaching.in"),
  title: {
    default: `${siteConfig.name} | Best Coaching in Anisabad, Patna`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Sure Success Coaching",
    "Coaching in Anisabad Patna",
    "Best CBSE Coaching Patna",
    "IIT JEE Coaching Patna",
    "NEET Coaching Patna",
    "Class 9 10 Coaching Anisabad",
    "Foundation Coaching Patna",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://suresuccesscoaching.in",
    title: `${siteConfig.name} | Best Coaching in Anisabad, Patna`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Best Coaching in Anisabad, Patna`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* JSON-LD: LocalBusiness for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: siteConfig.name,
              image: "https://suresuccesscoaching.in/logo.svg",
              logo: "https://suresuccesscoaching.in/logo.svg",
              url: "https://suresuccesscoaching.in",
              telephone: siteConfig.phones,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opp. CISF Building, Hanuman Chowk",
                addressLocality: "Anisabad",
                addressRegion: "Bihar",
                postalCode: "800002",
                addressCountry: "IN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "87",
              },
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
