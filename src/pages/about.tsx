import { Box, Container, Link, Typography } from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ThemeBox from "@/components/ThemeBox";

export default function About() {
  return (
    <ThemeBox title="About">
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
        <Box>
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
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
          }}
        >
          <Image
            src="/images/profile.jpg"
            width={250}
            height={250}
            alt="Sung-Yan Hsieh's profile picture"
            priority
            sizes="30vw"
            style={{ borderRadius: "20px" }}
          />
          <Box marginX={{ xs: 2, md: 6 }}>
            <Typography variant="subtitle1" sx={{ my: 2 }}>
              I'm a MS CS new grad at{" "}
              <Link href="https://ucsd.edu/" target="_blank" rel="noreferrer">
                UC San Diego
              </Link>{" "}
              focusing on the field of Human-Computer Interaction.
              <br />
              <br />
              I'm intersted in full-stack development and reading web-related
              tech blogs.
              <br />
              <br />
              Besides coding, I enjoy shooting film photos, watching movies,
              listening to music, and riding my bike to explore the city.
            </Typography>
          </Box>
        </Container>
      </Container>
    </ThemeBox>
  );
}
