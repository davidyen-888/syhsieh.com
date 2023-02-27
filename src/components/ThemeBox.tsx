import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ThemeBox = (props: any) => {
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
        <title>{props.title || "Sung-Yan Hsieh"} </title>
        <meta name="description" content="Sung-Yan Hsieh's personal website" />
        <meta name="og:title" content={props.title || "Sung-Yan Hsieh"} />
        <link rel="icon" href="/internet.png" />
      </Head>
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
    </>
  );
};

export default ThemeBox;
