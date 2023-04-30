import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Box, Container } from "@mui/material";
import IconLink from "./IconLink";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";
import VisitorCount from "./VisitorCount";

export default function Footer() {
  return (
    <Container sx={{ mt: "6rem", mb: "1.5rem" }}>
      <hr
        style={{
          marginBottom: "2rem",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            my: "1.5rem",
          }}
        >
          <IconLink
            href="https://github.com/davidyen-888"
            icon={BsGithub}
            size={32}
            color={"inherit"}
            text={"Github"}
          />
          <IconLink
            href="https://www.linkedin.com/in/david-hsieh-yen/"
            icon={BsLinkedin}
            size={32}
            color={"inherit"}
            text={"LinkedIn"}
          />
          <IconLink
            href="https://twitter.com/syhsiehdavid"
            icon={BsTwitter}
            size={32}
            color={"inherit"}
            text={"Twitter"}
          />
          <IconLink
            href="mailto:sydv8850@gmail.com"
            icon={BsEnvelopeFill}
            size={32}
            color={"inherit"}
            text={"Email"}
          />
          <IconLink
            href="https://www.overleaf.com/read/spkbyvgfvvyz"
            icon={IoDocumentTextSharp}
            size={32}
            color={"inherit"}
            text={"Resume"}
          />
        </Box>
      </Container>
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="/">
          Sung-Yan(David) Hsieh
        </MuiLink>{" "}
        {new Date().getFullYear()}.
        <VisitorCount />
      </Typography>
    </Container>
  );
}
