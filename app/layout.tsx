import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getContentNote, text } from "./content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(() => {
    const siteMetadata = getContentNote("site/metadata");
    return {
      title: text(siteMetadata, "title"),
      description: text(siteMetadata, "description"),
    };
  })(),
  metadataBase: new URL("https://cellosophy.epistry.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Cellosophy",
    title: (() => text(getContentNote("site/metadata"), "socialTitle"))(),
    description: (() => text(getContentNote("site/metadata"), "socialDescription"))(),
    images: [
      {
        url: "/cellosophy-social-card.png",
        width: 1200,
        height: 630,
        alt: (() => text(getContentNote("site/metadata"), "socialAlt"))(),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: (() => text(getContentNote("site/metadata"), "socialTitle"))(),
    description: (() => text(getContentNote("site/metadata"), "socialDescription"))(),
    images: ["/cellosophy-social-card.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [{ url: "/cellosophy-logo.png", type: "image/png" }],
    shortcut: "/cellosophy-logo.png",
    apple: "/cellosophy-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
