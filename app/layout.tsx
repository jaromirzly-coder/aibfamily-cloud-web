import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aibfamily.cloud"),
  title: {
    default: "AIBfamily — Safe AI for Kids Ages 4–15 | Parental Control AI",
    template: "%s | AIBfamily",
  },
  description:
    "AIBlab (SAY TO PAY s.r.o., Czech Republic, EU) builds AIBEVA — an intelligent being for Windows — on AIB.core, runs the AIBSN registry of AI identities and AIBguardian for AI safety; AIBgin and AIBfamily are in development.",
  keywords: [
    "safe AI for kids", "parental control AI", "child-safe chatbot",
    "AI monitoring for parents", "kids AI app",
    "parent dashboard AI", "COPPA AI for families",
    "UK Children Code AI", "child online safety AI", "AIBfamily",
    "safe internet for children", "AI homework helper safe",
    "children AI protection", "family AI subscription",
  ],
  authors: [{ name: "AIBfamily", url: "https://aibfamily.cloud" }],
  creator: "AIBlab — SAY TO PAY s.r.o.",
  alternates: { canonical: "https://aibfamily.cloud" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "AIBfamily — Safe AI for Kids Ages 4–15",
    description:
      "AIBfamily — family mode: parents see what they need, children keep privacy appropriate to their age. Being built on AIB.core.",
    url: "https://aibfamily.cloud",
    siteName: "AIBfamily",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://aibfamily.cloud/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIBfamily parent dashboard — 5-layer AIBguard protection for children ages 4-15, parental control AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBfamily — Safe AI for Kids Ages 4–15",
    description: "AIBlab (SAY TO PAY s.r.o., Czech Republic, EU) builds AIBEVA — an intelligent being for Windows — on AIB.core, runs the AIBSN registry of AI identities and AIBguardian for AI safety; AIBgin and AIBfamily are in development.",
    images: ["https://aibfamily.cloud/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const GA_ID = "G-LP9LSDLSHN";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aibfamily.cloud/#organization",
      name: "AIBfamily",
      url: "https://aibfamily.cloud",
      logo: "https://aibfamily.cloud/logo.svg",
      description: "AIBfamily — family mode: parents see what they need, children keep privacy appropriate to their age. Being built on AIB.core.",
      parentOrganization: {
        "@type": "Organization",
        name: "SAY TO PAY s.r.o.",
        description: "AIBlab (SAY TO PAY s.r.o., Czech Republic, EU) builds AIBEVA — an intelligent being for Windows — on AIB.core, runs the AIBSN registry of AI identities and AIBguardian for AI safety; AIBgin and AIBfamily are in development.",
        url: "https://aiblab.info",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://aibfamily.cloud/#software",
      name: "AIBfamily",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://aibfamily.cloud",
      description:
        "AIBfamily — family mode: parents see what they need, children keep privacy appropriate to their age. Being built on AIB.core.",
      audience: {
        "@type": "PeopleAudience",
        suggestedMinAge: 4,
        suggestedMaxAge: 15,
      },
    },
  ],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does my child need to create an account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your child never registers, never enters an email, and never creates a password. They access AIBfamily through a QR code you print and place at home. That's it."
      }
    },
    {
      "@type": "Question",
      "name": "What ages is AIBfamily suitable for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AIBfamily is designed for children aged 4–15. Each child profile has age-appropriate guardrails — what's suitable for a 14-year-old is very different from what's suitable for a 5-year-old."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when the AI detects a crisis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Where configured, the system also initiates contact with crisis helpline 116 111 (EU) · 988 Lifeline (US)."
      }
    },
    {
      "@type": "Question",
      "name": "Where is my family's data stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All data will be stored exclusively in EU data centres. It will be encrypted per-family with AES-256 and never transferred outside the EU. We do not sell or share your data."
      }
    },
    {
      "@type": "Question",
      "name": "How is AIBfamily different from just using ChatGPT or Gemini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial AI tools have no child-specific safety layers, no parent visibility, no crisis detection, and no compliance with EU AI Act requirements. AIBfamily is purpose-built for child safety — every component exists to protect your child, not just to answer questions."
      }
    }
  ]
};

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
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
