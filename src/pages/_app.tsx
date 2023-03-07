import type { AppProps } from "next/app";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import "prismjs/themes/prism-tomorrow.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
