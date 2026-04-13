/** layers.css must load first to establish CSS cascade layer order */
import "./layers.css";
import "./globals.css";

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#111214",
};

export const metadata: Metadata = {
  title: "Atelier Rhizome",
  description:
    "Democratizing AI — open models, interpretability, local models, efficiency optimization. For the common benefit of man and machine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
