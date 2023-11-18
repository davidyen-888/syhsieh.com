import { Link, Typography } from "@mui/material";

const markdownComponents = {
  p: ({ children }: { children: React.ReactNode }) => (
    <Typography variant="body1" paragraph sx={{ lineHeight: "2rem" }}>
      {children}
    </Typography>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <Typography variant="h4" paragraph sx={{ margin: "1.5rem 0" }}>
      {children}
    </Typography>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <Typography variant="h5" paragraph sx={{ margin: "1.5rem 0" }}>
      {children}
    </Typography>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <Typography variant="h6" paragraph sx={{ margin: "1.5rem 0" }}>
      {children}
    </Typography>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <Typography component="ul" sx={{ marginLeft: "2rem", lineHeight: "2rem" }}>
      {children}
    </Typography>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <Typography component="ol" sx={{ marginLeft: "2rem", lineHeight: "2rem" }}>
      {children}
    </Typography>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <Typography component="li" sx={{ margin: "0.5rem 0", lineHeight: "2rem" }}>
      {children}
    </Typography>
  ),
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <Link
      href={href}
      target="blank"
      style={{
        color: "#21a1ee",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      {children}
    </Link>
  ),
  img: ({ src, alt }: any) => (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        margin: "1.5rem 0",
      }}
    />
  ),
  pre: ({ children }: { children: any }) => (
    <Typography component="pre" sx={{ fontSize: "1rem" }}>
      {children}
    </Typography>
  ),
};

export default markdownComponents;
