import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Caveat } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amit Kashyap — AI & Machine Learning Engineer",
  description:
    "AI and Machine Learning Engineer building production-ready AI systems with expertise in computer vision, NLP, generative AI, RAG pipelines, and scalable ML architectures.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "RAG",
    "LLM",
    "Computer Vision",
    "NLP",
    "Portfolio",
  ],
  authors: [{ name: "Amit Kashyap" }],
  openGraph: {
    title: "Amit Kashyap — AI & Machine Learning Engineer",
    description:
      "Building production-ready AI systems using machine learning, generative AI, and scalable architectures.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kashyap — AI & Machine Learning Engineer",
    description:
      "Building production-ready AI systems using machine learning, generative AI, and scalable architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
