/** layers.css must load first to establish CSS cascade layer order */
import "./layers.css";
import "./globals.css";

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#111214",
};

export const metadata: Metadata = {
  title: "atelier rhizome",
  description: "democratizing AI for the common benefit of man and machine.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
