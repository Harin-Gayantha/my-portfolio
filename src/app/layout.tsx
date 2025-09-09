import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientThemeProvider from "@/components/ClientThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harin | Portfolio",
  description: "Undergraduate Software Engineer | Passionate about Full-Stack Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-black dark:bg-black dark:text-white`} suppressHydrationWarning>
        <ClientThemeProvider>
          <div className="flex min-h-screen flex-col">
            <div className="sticky top-0 z-40"><Navbar /></div>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
