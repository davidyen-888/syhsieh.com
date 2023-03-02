import { Box, Container, Typography } from "@mui/material";
import TypeWriter from "@/components/TypeWriter";
import ThemeBox from "@/components/ThemeBox";

export default function Home() {
  return (
    <ThemeBox>
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
            <p>
              Welcome to my personal website! I'm excited to share with you my
              journey, my thoughts, and my creations. Stay awhile and get to
              know me a little better.
            </p>
            <br />
            <p>
              What interests me the most is <b>Web Development</b>,{" "}
              <b>UI/UX Design</b> and <b>Computer Security</b>.
            </p>
          </Typography>
        </Box>
      </Container>
    </ThemeBox>
  );
}
