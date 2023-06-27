const markdownComponents = {
  p: ({ children }: { children: React.ReactNode }) => (
    <p style={{ margin: "1.5rem 0", lineHeight: "2rem" }}>{children}</p>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 style={{ margin: "1.5rem 0" }}> {children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 style={{ margin: "1.5rem 0" }}> {children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 style={{ margin: "1.5rem 0" }}> {children}</h3>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul style={{ marginLeft: "2rem", lineHeight: "2rem" }}>{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol style={{ marginLeft: "2rem", lineHeight: "2rem" }}>{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li style={{ margin: "0.5rem 0" }}>{children}</li>
  ),
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a
      href={href}
      target="blank"
      style={{
        color: "#21a1ee",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
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
    <pre
      style={{
        fontSize: "1rem",
      }}
    >
      {children}
    </pre>
  ),
};

export default markdownComponents;
