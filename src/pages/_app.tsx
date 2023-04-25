import type { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import "prismjs/themes/prism-tomorrow.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
