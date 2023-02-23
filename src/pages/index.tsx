import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import { Box, Container, Link, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Sung-Yan Hsieh</title>
        <meta name="description" content="Sung-Yan Hsieh's personal website" />
        <meta name="og:title" content="Sung-Yan Hsieh" />
        <link rel="icon" href="/internet.png" />
      </Head>
      <Container
        maxWidth="xl"
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Hi! I'm Sung-Yan Hsieh
        </Typography>
        <Container maxWidth="sm" sx={{ my: 4 }}>
          <Typography
            variant="subtitle1"
            color={"text.secondary"}
            sx={{ my: 2 }}
          >
            I'm a MS CS new grad at
            <Link href="https://ucsd.edu/" target="_blank" sx={{ mx: 1 }}>
              UC San Diego
            </Link>
            focusing on the field of Human-Computer Interaction.
          </Typography>
          <Typography
            variant="subtitle1"
            color={"text.secondary"}
            sx={{ my: 2 }}
          >
            {" "}
            I am always open to new ideas, looking for new challenges and enjoys
            solving them.
          </Typography>
          <Typography
            variant="subtitle1"
            color={"text.secondary"}
            sx={{ my: 2 }}
          >
            {" "}
            What interests me the most is <b>Web Development</b>,{" "}
            <b>UI/UX Design</b> and <b>Data Visualization</b>.
          </Typography>
        </Container>
        <Box sx={{ position: "absolute", bottom: 30 }}>
          <Copyright />
        </Box>{" "}
      </Container>
    </>
  );
}
