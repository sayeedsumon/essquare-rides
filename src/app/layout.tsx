import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Essquare Rides — Drive Black Cars in Los Angeles",
  description:
    "Drive premium black cars on Uber Black in Los Angeles with $1 per eligible mile, vehicle insurance covered, and 24/7 driver support.",
  openGraph: {
    title: "Essquare Rides — Drive Black Cars in Los Angeles",
    description:
      "Black car access, $1 per eligible mile, vehicle insurance covered, and 24/7 support.",
    type: "website",
    url: "https://www.essquarerides.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
