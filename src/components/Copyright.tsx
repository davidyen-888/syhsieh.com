import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Container } from "@mui/material";

export default function Copyright() {
  return (
    // footer
    <Container sx={{ position: "absolute", bottom: 10, width: "100%" }}>
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
