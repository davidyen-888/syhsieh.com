import Date from "@/components/Date";
import { Box, Container, Link, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import ThemeBox from "@/components/ThemeBox";
import NotionService from "@/lib/notionService";
import { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import Prism from "../../utils/prism";

type NotionContext = {
  params: {
    slug: string;
  };
};

export async function getStaticPaths(): Promise<{
  paths: string[];
  fallback: boolean;
}> {
  const notionService = new NotionService();

  const posts = await notionService.getAllBlogPosts();

  const paths = posts.map((post: { slug: string }) => {
    return `/posts/${post.slug}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context: NotionContext) => {
  const notionService = new NotionService();

  const postData = await notionService.getSingleBlogPost(
    context.params?.slug as string
  );

  if (!postData) {
    throw new Error("Post not found");
  }

  return {
    props: {
      markdown: postData.markdown,
      post: postData.post,
    },
  };
};

export default function Post({
  markdown,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [prismLoaded, setPrismLoaded] = useState(false);

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
          color: "#0070f3",
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

  useEffect(() => {
    import("prismjs").then(() => {
      setPrismLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (prismLoaded) {
      Prism.highlightAll();
    }
  }, [prismLoaded]);

  return (
    <ThemeBox title={post.title}>
      <Container
        maxWidth="md"
        sx={{
          mt: "6rem",
        }}
      >
        <Box sx={{ my: 2 }}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{ fontSize: { xs: "2rem", md: "3rem" }, textAlign: "center" }}
          >
            {post.title}
          </Typography>
        </Box>
        <Box height={"2rem"} sx={{ my: 2, textAlign: "center" }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
            <Date dateString={post.date} />
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            <ReactMarkdown
              components={markdownComponents}
              children={markdown}
            />
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="body1"
            marginTop={"2rem"}
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            <Link href="/posts">← Back to all posts</Link>
          </Typography>
        </Box>
      </Container>
    </ThemeBox>
  );
}
