import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bingodeeltd.com'),
  title: {
    default: "Bingodee Co. Ltd. - Engineering Excellence Across Ghana",
    template: "%s | Bingodee Co. Ltd.",
  },
  description: "Bingodee Co. Ltd. delivers top-tier engineering services, industrial materials, fabrication, and heavy equipment across Ghana.",
  keywords: ["Engineering Ghana", "Industrial Materials", "Fabrication Services", "Heavy Equipment Ghana", "Bingodee", "Obuasi Engineering"],
  openGraph: {
    title: "Bingodee Co. Ltd. - Engineering Excellence Across Ghana",
    description: "Bingodee Co. Ltd. delivers top-tier engineering services, industrial materials, fabrication, and heavy equipment across Ghana.",
    url: 'https://bingodeeltd.com',
    siteName: 'Bingodee Co. Ltd.',
    locale: 'en_GH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bingodee Co. Ltd.",
    description: "Delivering Engineering Excellence Across Ghana!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased bg-white text-slate-800 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-[60px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
