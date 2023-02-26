import { Box, Container, Link, Typography } from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import TypeWriter from "@/components/TypeWriter";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sung-Yan Hsieh</title>
        <meta name="description" content="Sung-Yan Hsieh's personal website" />
        <meta name="og:title" content="Sung-Yan Hsieh" />
        <link rel="icon" href="/internet.png" />
      </Head>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          my: "6rem",
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
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
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
            my: { xs: 2, md: 4 },
            textAlign: { xs: "center", md: "left" },
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="subtitle1"
            color={"text.secondary"}
            sx={{ my: 2 }}
          >
            I'm a MS CS new grad at{" "}
            <Link href="https://ucsd.edu/" target="_blank" rel="noreferrer">
              UC San Diego
            </Link>{" "}
            focusing on the field of Human-Computer Interaction.
          </Typography>
          <Typography
            variant="subtitle1"
            color={"text.secondary"}
            sx={{ my: 2 }}
          >
            I am always open to new ideas, looking for new challenges and enjoys
            solving them.
          </Typography>
          <Typography
            variant="subtitle1"
            color={"text.secondary"}
            sx={{ my: 2 }}
          >
            What interests me the most is <b>Web Development</b>,{" "}
            <b>UI/UX Design</b> and <b>Computer Security</b>.
          </Typography>
        </Box>
      </Container>
      <Copyright />
    </>
  );
}
