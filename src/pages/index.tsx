import { Box, Container, Typography } from "@mui/material";
import TypeWriter from "@/components/TypeWriter";
import ThemeBox from "@/components/ThemeBox";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <ThemeBox title="Sung-Yan(David) Hsieh">
      <Container
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
            Hi👋, I'm Sung-Yan(David) Hsieh
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
              What interests me the most now is <b>Web Development</b> and{" "}
              <b>UI/UX Design</b>.
            </p>
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={{ xs: "1rem", md: "1.2rem" }}
            sx={{ mt: 2 }}
          >
            <GitHubCalendar
              username="davidyen-888"
              colorScheme={theme === "dark" ? "dark" : "light"}
            />
          </Typography>
        </Box>
      </Container>
    </ThemeBox>
  );
}
