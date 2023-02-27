import { Box, Container, Link, Typography } from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import TypeWriter from "@/components/TypeWriter";
import Footer from "@/components/Footer";
import ThemeBox from "@/components/ThemeBox";

export default function Home() {
  return (
    <ThemeBox>
      {/* <Head>
        <title>Sung-Yan Hsieh</title>
        <meta name="description" content="Sung-Yan Hsieh's personal website" />
        <meta name="og:title" content="Sung-Yan Hsieh" />
        <link rel="icon" href="/internet.png" />
      </Head> */}
      {/* <Navbar theme="dark" setTheme={() => {}} /> */}
      <Container
        maxWidth="xl"
        sx={{
          mt: "12rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Hi👋, I'm Sung-Yan Hsieh
          </Typography>
        </Box>
        <Box height={"2rem"} sx={{ my: 2 }}>
          <Typography sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            <TypeWriter
              sentences={[
                "I solve problems.",
                "I build things.",
                "I bring ideas to life.",
              ]}
            />
          </Typography>
        </Box>
        <Box
          maxWidth="sm"
          sx={{
            my: { xs: 1, md: 2 },
            textAlign: { xs: "center", md: "left" },
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="subtitle1"
            fontSize={{ xs: "1rem", md: "1.2rem" }}
          >
            Welcome to my personal website! I'm excited to share with you my
            journey, my thoughts, and my creations. Stay awhile and get to know
            me a little better.
            <br />
            <br />
            What interests me the most is <b>Web Development</b>,{" "}
            <b>UI/UX Design</b> and <b>Computer Security</b>.
          </Typography>
        </Box>
      </Container>
    </ThemeBox>
  );
}
