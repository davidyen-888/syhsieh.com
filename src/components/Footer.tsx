import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Box, Container, Divider } from "@mui/material";
import IconLink from "./IconLink";
import { BsEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <Container sx={{ mt: "6rem", mb: "1rem" }}>
      <Divider sx={{ my: 2, width: "50%", mx: "auto" }} />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <IconLink
            href="https://github.com/davidyen-888"
            icon={BsGithub}
            size={"1.6rem"}
            color={"inherit"}
            text={"Github"}
          />
          <IconLink
            href="https://www.linkedin.com/in/david-hsieh-yen/"
            icon={BsLinkedin}
            size={"1.6rem"}
            color={"inherit"}
            text={"LinkedIn"}
          />
          <IconLink
            href="mailto:sydv8850@gmail.com"
            icon={BsEnvelopeFill}
            size={"1.6rem"}
            color={"inherit"}
            text={"Email"}
          />
        </Box>
      </Container>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="/">
          Sung-Yan Hsieh
        </MuiLink>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
