import { Box, Container, Link, Typography } from "@mui/material";
import Image from "mui-image";
import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout title="About">
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
            src="/images/profile.webp"
            width={320}
            duration={2000}
            alt="Sung-Yan(David) Hsieh's profile picture"
            style={{ borderRadius: "20px" }}
          />
          <Box marginX={{ xs: 2, md: 6 }}>
            <Typography variant="subtitle1" sx={{ my: 2 }}>
              I'm a MS CS new grad at{" "}
              <Link href="https://ucsd.edu/" target="_blank">
                UC San Diego
              </Link>{" "}
              focusing on the field of Human-Computer Interaction.
              <br />
              <br />
              I love creating full-stack projects and reading web-related tech
              blogs.
              <br />
              <br />
              Besides coding, I enjoy shooting film{" "}
              <Link href="https://www.instagram.com/solashot.1/">photos</Link>,
              watching movies, listening to{" "}
              <Link href="https://open.spotify.com/playlist/6PiMsLtlebCIKkRol89WSo?si=a01c111452984684">
                music
              </Link>
              , and riding my bike to explore the city.
            </Typography>
          </Box>
        </Container>
      </Container>
    </Layout>
  );
}
