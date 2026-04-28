import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsHealthCheck } from "@/components/analytics-health-check";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Display font for headlines — geometric, industrial, techy
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "The Mechanical Vision Corporation",
  description:
    "Advanced vision technology and AI that unlocks the enormous productivity trapped inside America's maintenance and manufacturing workforce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ENBE6GFB86"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ENBE6GFB86');`}
        </Script>
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="1xbHYxWAwZlrdU6bj"
          data-version="062024"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <AnalyticsHealthCheck />
      </body>
    </html>
  );
}
