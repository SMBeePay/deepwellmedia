import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const editorial = Newsreader({ subsets: ["latin"], variable: "--font-editorial" });

export const metadata: Metadata = {
  metadataBase: new URL("https://deepwellmedia.com"),
  title: { default: "Deepwell Media | Turn Expertise Into Influence", template: "%s | Deepwell Media" },
  description: "Deepwell builds and operates B2B media programs around your company’s experts, turning strategic conversations into original media, relationships and influence.",
  openGraph: { title: "Deepwell Media", description: "Turn expertise into influence.", url: "https://deepwellmedia.com", siteName: "Deepwell Media", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${editorial.variable}`}>{children}</body></html>;
}
