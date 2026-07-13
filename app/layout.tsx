import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cellosophy.epistry.org"),
  title: "Cellosophy",
  description: "Explore how living cells sense, decide, remember, and act.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Cellosophy",
    title: "Cellosophy — Minds Without Brains",
    description: "Explore how living cells sense, decide, remember, and act.",
    images: [
      {
        url: "/cellosophy-social-card.png",
        width: 1200,
        height: 630,
        alt: "Cellosophy — Do minds really need brains?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cellosophy — Minds Without Brains",
    description: "Explore how living cells sense, decide, remember, and act.",
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
