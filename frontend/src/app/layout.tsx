import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";

const everett = localFont({
  src: "../../public/font/TWKEverett-Regular.woff2",
  weight: "400",
  style: "normal",
});


export const metadata: Metadata = {
  title: {
    default: "IntelliFlow AI | Smart Workflow Automation",
    template: "%s | IntelliFlow AI",
  },
  description:
    "IntelliFlow AI helps you automate repetitive tasks, connect applications, and streamline workflows with AI-powered templates and intelligent automation.",
  metadataBase: new URL("https://workflows-flax.vercel.app/"),
  openGraph: {
    title: "IntelliFlow AI | Smart Workflows. Seamless Automation.",
    description:
      "Simplify your work with intelligent workflow automation, customizable triggers, and powerful integrations.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "IntelliFlow AI",
    images: [
      {
        url: `https://storage.googleapis.com/${process.env.NEXT_PUBLIC_BUCKET_NAME}/532c6f10-a642-4828-8f58-39790af43925.png`,
        width: 1200,
        height: 630,
        alt: "IntelliFlow AI - Workflow Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntelliFlow AI | Smart Workflow Automation",
    description:
      "Connect applications, automate repetitive tasks, and manage workflows efficiently with IntelliFlow AI.",
    images: [
      `https://storage.googleapis.com/${process.env.NEXT_PUBLIC_BUCKET_NAME}/532c6f10-a642-4828-8f58-39790af43925.png`,
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: "#FF7801",
          },
        }}
      >
        <body className={everett.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
