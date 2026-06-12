import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Levante Tours — Gibraltar Tours, Transfers & Experiences",
  description:
    "Pre-booked tours, experiences and transfers in Gibraltar. Expanding to Spain and Morocco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fffefa]">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
