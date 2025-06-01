import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bihar Crafts - Authentic Handmade Products from Bihar",
  description:
    "Discover authentic handmade crafts, art, and traditional products from Bihar. Support local artisans and experience the cultural richness of Bihar.",
  keywords:
    "Bihar crafts, handmade products, traditional art, local artisans, Indian handicrafts",
  authors: [{ name: "Bihar Crafts" }],
  creator: "Bihar Crafts",
  publisher: "Bihar Crafts",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bihar-crafts.com",
    title: "Bihar Crafts - Authentic Handmade Products",
    description: "Discover authentic handmade crafts from Bihar",
    siteName: "Bihar Crafts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bihar Crafts - Authentic Handmade Products",
    description: "Discover authentic handmade crafts from Bihar",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
