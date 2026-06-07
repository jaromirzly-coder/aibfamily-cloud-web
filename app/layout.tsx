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
    "AIBfamily gives parents full control over their child's AI interactions. 5-layer AIBguard protection, real-time crisis detection, parent dashboard, COPPA compliant. Safe AI for kids ages 4–15.",
  keywords: [
    "safe AI for kids", "parental control AI", "child-safe chatbot",
    "family AI assistant", "AI monitoring for parents", "kids AI app",
    "parent dashboard AI", "COPPA compliant AI for families",
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
        alt: "AIBfamily parent dashboard — 5-layer AIBguard protection for children ages 4-15, parental control AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBfamily — Safe AI for Kids Ages 4–15",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aibfamily.cloud/#organization",
      name: "AIBfamily",
      url: "https://aibfamily.cloud",
      logo: "https://aibfamily.cloud/logo.svg",
      description: "Safe AI for families — 5-layer AIBguard protection for children ages 4–15.",
      parentOrganization: {
        "@type": "Organization",
        name: "SAY TO PAY s.r.o.",
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
      offers: {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "USD",
      },
      description:
        "COPPA compliant, parental-controlled AI chat for children aged 4–15 with real-time crisis detection.",
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
        "text": "When AIBguard issues a CRITICAL verdict — detecting self-harm language, signs of abuse, or extreme distress — the AI's response is blocked and you receive an immediate push notification. Where configured, the system also initiates contact with crisis helpline 116 111 (EU) · 988 Lifeline (US)."
      }
    },
    {
      "@type": "Question",
      "name": "Where is my family's data stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All data is stored exclusively in EU data centres (Frankfurt). It is encrypted per-family with AES-256 and never transferred outside the EU. We do not sell or share your data."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel my subscription at any time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. There are no long-term commitments. You can cancel from your account settings at any time, effective at the end of the current billing period."
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
        <div style={{ background: "#1a1a2e", color: "#fff", textAlign: "center", padding: "12px", fontSize: "14px", fontWeight: "600", position: "sticky", top: "0", zIndex: 9999 }}>
          Full version launching 1 July 2026 — we're preparing something exceptional for you
        </div>
        {children}
      </body>
    </html>
  );
}
