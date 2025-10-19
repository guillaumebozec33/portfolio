import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Guillaume BOZEC - Développeur Full Stack",
  description: "Développeur passionné par le web, mobile et data. Étudiant à Epitech spécialisé en React Native, Next.js, Python et IA.",
  keywords: "développeur, full stack, react native, next.js, python, data, IA, epitech, bordeaux",
  authors: [{ name: "Guillaume BOZEC" }],
  openGraph: {
    title: "Guillaume BOZEC - Développeur Full Stack",
    description: "Portfolio de Guillaume BOZEC, développeur full stack spécialisé en technologies modernes",
    url: "https://guillaume-bozec.dev",
    siteName: "Guillaume BOZEC Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillaume BOZEC - Développeur Full Stack",
    description: "Portfolio de Guillaume BOZEC, développeur full stack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.svg?v=1" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg?v=1" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=1" />
      </head>
      <body className="bg-background text-text antialiased overflow-x-hidden">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#00ff88" />
        {children}
      </body>
    </html>
  );
}
