import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/components/Providers";
import QueryProvider from "@/components/chat/QueryProvider";
import Navigation from "@/components/navigation/Navigation";

export const metadata: Metadata = {
  title: "Plant watering app",
  description: "Water your plants on time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className="relative">
        <Providers>
          <Navigation />
          <QueryProvider>
            {children}
            <Footer />
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
