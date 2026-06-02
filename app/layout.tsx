import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aibfamily.cloud"),
  title: {
    default: "AIBfamily — Safe AI for Families & Kids Ages 4–15",
    template: "%s | AIBfamily",
  },
  description:
    "AIBfamily gives parents full visibility and control over their child's AI interactions. 5-layer AIBguard protection, crisis detection, parent dashboard, no child accounts. Safe AI for kids ages 4–15.",
  keywords: [
    "family AI safety", "parental control AI", "safe AI for kids",
    "child AI protection", "AI monitoring parents", "AIBfamily",
    "AIBguard", "kids AI app", "parent dashboard AI", "AI for children",
    "child online safety", "family AI subscription",
  ],
  authors: [{ name: "AIBfamily", url: "https://aibfamily.cloud" }],
  creator: "AIBlab — SAY TO PAY s.r.o.",
  alternates: { canonical: "https://aibfamily.cloud" },
  openGraph: {
    title: "AIBfamily — Safe AI for Families & Kids Ages 4–15",
    description:
      "5 layers of protection. Parent dashboard. Crisis detection. No child accounts. Peace of mind, finally.",
    url: "https://aibfamily.cloud",
    siteName: "AIBfamily",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aibfamily.cloud/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIBfamily — Safe AI for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBfamily — Safe AI for Families & Kids Ages 4–15",
    description: "5 layers of protection. Parent dashboard. Crisis detection. No child accounts.",
    images: ["https://aibfamily.cloud/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const GA_ID = "G-LP9LSDLSHN";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
