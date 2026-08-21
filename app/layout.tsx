import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "MyGamingFixLab — Game Fixes, PC Gaming & Server Guides",
    template: "%s | MyGamingFixLab",
  },
  description: siteConfig.description,
  keywords: ["game fixes", "PC gaming", "GTA V fixes", "Rust server", "Roblox Studio", "Steam fixes", "game server guides"],
  icons: {
    icon: [{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }, { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "MyGamingFixLab",
    description: siteConfig.description,
    type: "website",
    siteName: "MyGamingFixLab",
    images: [{ url: "/mygamingfixlab-og.jpg", width: 1200, height: 630, alt: "MyGamingFixLab — Fix Games. Boost Performance. Play Better." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyGamingFixLab",
    description: siteConfig.description,
    images: ["/mygamingfixlab-og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
