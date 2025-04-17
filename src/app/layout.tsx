import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mahesh yadav",
  description: "A personal portfolio website of Mahesh yadav.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen max-w-3xl mx-auto px-4`}
      >
        <Header />
        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
