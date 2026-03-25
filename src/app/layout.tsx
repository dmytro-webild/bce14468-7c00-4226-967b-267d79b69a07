import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Art Scene Contracting | Luxurious Gypsum & Interior Finishing',
  description: 'Art Scene Contracting specializes in high-quality gypsum works and exquisite interior finishing for residential and commercial projects. Experience professionalism and unmatched craftsmanship.',
  openGraph: {
    "title": "Art Scene Contracting | Luxurious Gypsum & Interior Finishing",
    "description": "Art Scene Contracting specializes in high-quality gypsum works and exquisite interior finishing for residential and commercial projects. Experience professionalism and unmatched craftsmanship.",
    "url": "https://artscenecontracting.com",
    "siteName": "Art Scene Contracting",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/part-interior-kitchen-black-modern-minimalism_169016-20012.jpg",
        "alt": "Luxurious living room with intricate gypsum ceiling"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Art Scene Contracting | Luxurious Gypsum & Interior Finishing",
    "description": "Art Scene Contracting specializes in high-quality gypsum works and exquisite interior finishing for residential and commercial projects. Experience professionalism and unmatched craftsmanship.",
    "images": [
      "http://img.b2bpic.net/free-photo/part-interior-kitchen-black-modern-minimalism_169016-20012.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
