import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechMeUp - Complete Business & Technology Solutions",
  description: "Your one-stop tech partner for web development, IT solutions, CRM automation, digital marketing, and AI-powered business tools. Empowering startups and SMBs to scale.",
  keywords: "web development, IT solutions, CRM automation, digital marketing, AI tools, business technology, startup solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
