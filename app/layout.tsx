import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { NavigationMotion } from "@/components/navigation-motion";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://parthsahni.design";
const description =
  "Parth Sahni is a UI/UX designer and creative developer studying Computer Science & Design at Dayananda Sagar College of Engineering, Bangalore.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Parth Sahni | UI/UX Designer + Creative Developer",
    template: "%s | Parth Sahni",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Parth Sahni | UI/UX Designer + Creative Developer",
    description,
    url: siteUrl,
    siteName: "Parth Sahni",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Sahni | UI/UX Designer + Creative Developer",
    description,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#efece6",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables reveal styles only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="frame" id="top">
          <SiteHeader />
          <main id="main" className="frame-main">
            {children}
          </main>
          <SiteFooter />
        </div>
        <RevealObserver />
        <NavigationMotion />
      </body>
    </html>
  );
}
