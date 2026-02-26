import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "PARAGON | Federal Strategies Corporation",
  description: "Trusted federal partner for pharmacy benefit oversight.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
