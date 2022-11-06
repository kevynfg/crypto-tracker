// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { trpc } from "@/utils/trpc";
import Header from "@/components/Header";

// function App({ Component, pageProps }: AppProps) {
//   return (
//     <Header>
//        <Component {...pageProps} />
//     </Header>
//   )
// }

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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