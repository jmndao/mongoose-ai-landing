import type { Metadata } from "next";
import "./globals.css";
import { Outfit, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "mongoose-ai - AI-Powered MongoDB Plugin | Auto-Summarization & Function Calling",
  description:
    "AI-powered Mongoose plugin for MongoDB with intelligent summarization, semantic search, and universal function calling. Works with OpenAI and Anthropic Claude.",
  keywords: [
    "mongoose",
    "mongodb",
    "ai",
    "artificial intelligence",
    "openai",
    "anthropic",
    "claude",
    "gpt",
    "summarization",
    "semantic search",
    "function calling",
    "javascript",
    "typescript",
    "node.js",
    "automation",
    "document processing",
  ],
  authors: [{ name: "Jonathan Moussa NDAO", url: "https://github.com/jmndao" }],
  creator: "Jonathan Moussa NDAO",
  publisher: "Jonathan Moussa NDAO",
  robots: "index, follow",
  openGraph: {
    title: "mongoose-ai - AI-Powered MongoDB Plugin",
    description:
      "AI-powered Mongoose plugin with intelligent summarization, semantic search, and universal function calling. Built for production with TypeScript support.",
    type: "website",
    url: "https://mongoose-ai.vercel.app",
    siteName: "mongoose-ai",
    images: [
      {
        url: "https://mongoose-ai.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "mongoose-ai - AI-Powered MongoDB Plugin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mongoose-ai - AI-Powered MongoDB Plugin",
    description:
      "Add AI powers to your Mongoose schemas with auto-summarization, semantic search, and intelligent function calling.",
    creator: "@jmndao",
    images: ["https://mongoose-ai.vercel.app/twitter-card.png"],
  },
  alternates: {
    canonical: "https://mongoose-ai.vercel.app",
  },
  other: {
    "application-name": "mongoose-ai",
    "theme-color": "#3b82f6",
    "msapplication-TileColor": "#1e293b",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "mongoose-ai",
              description:
                "AI-powered Mongoose plugin for MongoDB with intelligent summarization, semantic search, and universal function calling",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Node.js",
              programmingLanguage: ["JavaScript", "TypeScript"],
              author: {
                "@type": "Person",
                name: "Jonathan Moussa NDAO",
                url: "https://github.com/jmndao",
              },
              downloadUrl: "https://www.npmjs.com/package/@jmndao/mongoose-ai",
              softwareVersion: "1.3.4",
              datePublished: "2024",
              license: "https://opensource.org/licenses/MIT",
              keywords: [
                "mongoose",
                "mongodb",
                "ai",
                "openai",
                "anthropic",
                "summarization",
                "semantic search",
                "function calling",
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
