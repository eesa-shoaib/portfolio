import type { Metadata } from "next";
import { Martian_Mono, Outfit } from "next/font/google";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const martianMono = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eesa Shoaib",
  description:
    "Computer Science student at FAST NUCES with practical experience in Go, Flutter, React, Node.js, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="pokota" data-scroll-behavior="smooth" className={`${martianMono.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
