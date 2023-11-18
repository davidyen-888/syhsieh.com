import Date from "@/components/Date";
import { Box, Container, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
import NotionService from "@/lib/notionService";
import { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import Prism from "../../utils/prism";
import Link from "next/link";
import PostNavLink from "@/components/PostNavLink";
import markdownComponents from "@/components/MarkDownComponents";

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

  // Get the newer and older posts
  const allPosts = await notionService.getAllBlogPosts();
  // Find the index of the current post
  const currentPostIndex = allPosts.findIndex(
    (post: { slug: string }) => post.slug === context.params?.slug
  );
  const newerPost = allPosts[currentPostIndex - 1] || null;
  const olderPost = allPosts[currentPostIndex + 1] || null;

  return {
    props: {
      markdown: postData.markdown,
      post: postData.post,
      newerPost,
      olderPost,
    },
  };
};

export default function Post({
  markdown,
  post,
  newerPost,
  olderPost,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [prismLoaded, setPrismLoaded] = useState(false);

  // Load prism once the component has mounted
  useEffect(() => {
    import("prismjs").then(() => {
      setPrismLoaded(true);
    });
  }, []);

  // Highlight the code blocks once prism has loaded
  useEffect(() => {
    if (prismLoaded) {
      Prism.highlightAll();
    }
  }, [prismLoaded]);

  return (
    <Layout title={post.title}>
      <Container
        maxWidth="md"
        sx={{
          mt: "6rem",
        }}
      >
        <Box my={2}>
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
        <Box my={2}>
          <ReactMarkdown components={markdownComponents} children={markdown} />
        </Box>
        <Grid
          mt={"2rem"}
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          gap={{ xs: 2 }}
        >
          <Box display={"flex"}>
            {newerPost && <PostNavLink post={newerPost} isNewer={true} />}
          </Box>
          <Box display={"flex"}>
            {olderPost && <PostNavLink post={olderPost} isNewer={false} />}
          </Box>
        </Grid>
        <Box my={2}>
          <Typography
            variant="body1"
            marginTop={"2rem"}
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            <Link
              href="/posts"
              style={{
                color: "#21a1ee",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              ← Back to all posts
            </Link>
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
