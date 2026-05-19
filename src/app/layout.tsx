import type { Metadata } from "next";
import { Roboto_Condensed, Space_Grotesk } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TokWealth — Coming Soon",
  description:
    "Invest in tokenized real-world assets. Fractional ownership of premium real estate, commodities, and financial instruments.",
  openGraph: {
    title: "TokWealth — Coming Soon",
    description:
      "Fractional investments in tokenized real-world assets.",
    type: "website",
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
      className={`${roboto.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0B0F] text-[#F0EDE6]">
        {children}
      </body>
    </html>
  );
}
