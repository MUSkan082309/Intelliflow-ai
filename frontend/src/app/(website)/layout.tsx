import "../globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const everett = localFont({
  src: "../../../public/font/TWKEverett-Regular.woff2",
  weight: "400",
  style: "normal",
});


export const metadata: Metadata = {
  title: {
    default: "IntelliFlow AI | Smart Workflow Automation",
    template: "%s | IntelliFlow AI",
  },
  description:
    "IntelliFlow AI helps you create, connect, and manage automated workflows with intelligent templates and seamless integrations.",
  metadataBase: new URL("https://workflows-flax.vercel.app/"),
  openGraph: {
    title: "IntelliFlow AI | Smart Workflows. Seamless Automation.",
    description:
      "Connect applications, automate repetitive tasks, and streamline your workflows with IntelliFlow AI.",
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
      "Manage workflows and automate everyday tasks with IntelliFlow AI.",
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
  return <main className={everett.className}>{children}</main>;
}
