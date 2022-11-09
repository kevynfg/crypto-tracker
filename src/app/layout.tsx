import Header from "@/components/Header/Header";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
