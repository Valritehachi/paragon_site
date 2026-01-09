import "./globals.css";

export const metadata = {
  title: "PARAGON | Federal Strategies Corporation",
  description: "Trusted federal partner for pharmacy benefit oversight.",
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
