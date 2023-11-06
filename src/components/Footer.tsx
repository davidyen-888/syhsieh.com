import React from "react";
import useSWR from "swr";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { Box, Container, Divider } from "@mui/material";
import IconLink from "./IconLink";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const VisitorCount = () => {
  const { data: count } = useSWR("./api/count", fetcher, {
    onErrorRetry: (error) => {
      // Never retry on 404.
      if (error.status === 404) return;
    },
  });
  const { data: count2 } = useSWR("../api/count", fetcher);

  const visitorCount = count?.Count || count2?.Count || null;

  return (
    <span>
      {visitorCount !== null ? (
        <>
          You are the<strong> {visitorCount}</strong>th visitor since
          03/01/2023!
        </>
      ) : (
        <>Loading...</>
      )}
    </span>
  );
};

const FooterWithVisitorCount = () => {
  return (
    <Container sx={{ mt: "2rem", mb: "1.5rem" }}>
      <hr
        style={{
          margin: "auto",
          width: "60%",
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
        <br />
        <VisitorCount />
      </Typography>
    </Container>
  );
};

export default FooterWithVisitorCount;
