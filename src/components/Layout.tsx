import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const { children } = props;

  return (
    <>
      <Head>
        <title>{props.title || "Sung-Yan(David) Hsieh"} </title>
        <meta
          name="description"
          content={props.title || "Sung-Yan(David) Hsieh's personal website"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:title"
          content={props.title || "Sung-Yan(David) Hsieh"}
        />
        <meta property="og:image" content="/images/profile.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://syhsieh.com" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
