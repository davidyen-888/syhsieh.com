import { useEffect, useState, useMemo } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
import NotionService from "@/lib/notionService";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Prism from "../../utils/prism";
import Link from "next/link";
import PostNavLink from "@/components/PostNavLink";
import markdownComponents from "@/components/MarkDownComponents";
import { useTheme } from "next-themes";
import Date from "@/components/Date";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const notionService = new NotionService();

  const [postData, allPosts] = await Promise.all([
    notionService.getSingleBlogPost(context.params?.slug as string),
    notionService.getAllBlogPosts(),
  ]);

  if (!postData) {
    return {
      notFound: true,
    };
  }

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
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { theme } = useTheme();
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

  const markdownContent = useMemo(
    () => <ReactMarkdown components={markdownComponents} children={markdown} />,
    [markdown]
  );

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
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", md: "1rem" },
              textAlign: "start",
            }}
          >
            Created at:{" "}
            <b>
              <Date dateString={post.date} />
            </b>
            <br />
            Last updated at:{" "}
            <b>
              <Date dateString={post.lastUpdated} />
            </b>
          </Typography>
        </Box>

        <Box my={2} sx={{ color: theme === "dark" ? "#d3d3d3" : "#181818" }}>
          {markdownContent}
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
