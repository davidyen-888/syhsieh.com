import Date from "@/components/Date";
import { Box, Container, Link, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import ThemeBox from "@/components/ThemeBox";
import NotionService from "@/lib/notionService";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";

export async function getStaticPaths() {
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
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
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            <Link href="/posts">← Back to all posts</Link>
          </Typography>
        </Box>
      </Container>
    </ThemeBox>
  );
}
