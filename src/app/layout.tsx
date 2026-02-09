import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Workspace Nepal - Nest Nepal",
  description: "Google Workspace with special Valentine's offer in Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ne">
      <body>{children}</body>
    </html>
  );
}
