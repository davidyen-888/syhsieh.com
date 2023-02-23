import {
  Box,
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import TypeWriter from "@/components/TypeWriter";
import Copyright from "@/components/Copyright";

export default function Home() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
            sx={{ fontSize: isSmallerScreen ? "2rem" : "3rem" }}
          >
            Hi, I'm Sung-Yan Hsieh
          </Typography>
        </Box>
        <Box height={"2rem"} sx={{ my: 2 }}>
          <Typography sx={{ fontSize: isSmallerScreen ? "1.7rem" : "2rem" }}>
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
            my: isSmallerScreen ? 4 : 0,
            textAlign: isSmallerScreen ? "center" : "left",
            width: isSmallerScreen ? "100%" : "auto",
          }}
        >
          <Typography
            variant="subtitle1"
            color={"text.secondary"}
            sx={{ my: 2 }}
          >
            I'm a MS CS new grad at{" "}
            <Link
              href="https://ucsd.edu/"
              target="_blank"
              sx={{ mx: 1 }}
              rel="noreferrer"
            >
              UC San Diego
            </Link>
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
            <b>UI/UX Design</b> and <b>Data Visualization</b>.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4,
          }}
        >
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
