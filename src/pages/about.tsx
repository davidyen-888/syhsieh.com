import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Sung-Yan Hsieh's about page" />
        <meta name="og:title" content="About" />
        <link rel="icon" href="/internet.png" />
      </Head>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          mt: "6rem",
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
            About
          </Typography>
        </Box>
        <Box height={"2rem"} sx={{ my: 2 }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
            A little bit about me.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
