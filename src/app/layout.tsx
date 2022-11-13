import Header from "@/components/Header/Header";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className="bg-gray-900 bg-app bg-no-repeat bg-cover text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
