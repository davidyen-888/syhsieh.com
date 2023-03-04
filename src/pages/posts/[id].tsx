import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "@/components/Date";
import { Box, Container, Link, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import ThemeBox from "@/components/ThemeBox";

interface PostProps {
  postData: {
    title: string;
    date: string;
    markdown: string;
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: PostProps) {
  // console.log(postData);

  return (
    <ThemeBox title={postData.title}>
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
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            {postData.title}
          </Typography>
        </Box>

        <Typography
          variant="subtitle2"
          sx={{
            fontSize: { xs: "0.8rem", md: "1rem" },
            color: "grey.700",
            mb: 2,
          }}
        >
          <Date dateString={postData.date} />
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <p
                  {...props}
                  style={{ margin: "1.5rem 0", lineHeight: "2rem" }}
                />
              ),
              h1: ({ node, ...props }) => (
                <h1 {...props} style={{ margin: "1.5rem 0" }} />
              ),
              h2: ({ node, ...props }) => (
                <h2 {...props} style={{ margin: "1.5rem 0" }} />
              ),
              h3: ({ node, ...props }) => (
                <h3 {...props} style={{ margin: "1.5rem 0" }} />
              ),
              h4: ({ node, ...props }) => (
                <h4 {...props} style={{ margin: "1.5rem 0" }} />
              ),
              h5: ({ node, ...props }) => (
                <h5 {...props} style={{ margin: "1.5rem 0" }} />
              ),
              h6: ({ node, ...props }) => (
                <h6 {...props} style={{ margin: "1.5rem 0" }} />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  {...props}
                  style={{ marginLeft: "2rem", lineHeight: "2rem" }}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  {...props}
                  style={{ marginLeft: "2rem", lineHeight: "2rem" }}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  {...props}
                  style={{ marginLeft: "2rem", lineHeight: "2rem" }}
                />
              ),
            }}
          >
            {postData.markdown}
          </ReactMarkdown>
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            <Link href="/posts" underline="hover">
              ← Back to blog
            </Link>
          </Typography>
        </Box>
      </Container>
    </ThemeBox>
  );
}
