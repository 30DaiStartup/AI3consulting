import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI3 Consulting | AI Solutions for Business Operations | Greenville, SC",
    template: "%s | AI3 Consulting",
  },
  description:
    "AI3 Consulting helps small to medium businesses in Greenville, SC integrate AI into their operations. We build human-in-the-loop systems that reduce tedious tasks and increase productivity.",
  keywords: [
    "AI consulting",
    "business automation",
    "Greenville SC",
    "AI integration",
    "business operations",
    "human-in-the-loop",
    "AI solutions",
    "small business AI",
    "process optimization",
  ],
  authors: [{ name: "AI3 Consulting" }],
  creator: "AI3 Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai3consulting.com",
    siteName: "AI3 Consulting",
    title: "AI3 Consulting | AI Solutions for Business Operations",
    description:
      "We help businesses integrate AI to reduce tedious tasks and increase productivity through human-in-the-loop systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI3 Consulting | AI Solutions for Business Operations",
    description:
      "We help businesses integrate AI to reduce tedious tasks and increase productivity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ai3consulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${sourceSans.variable}`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
