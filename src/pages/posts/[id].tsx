import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "@/components/Date";
import { Box, Container, Link, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

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
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content="Sung-Yan Hsieh's blog" />
        <meta name="og:title" content={postData.title} />
        <link rel="icon" href="/internet.png" />
      </Head>
      <Container
        sx={{
          my: 4,
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
              // add space between paragraphs
              p: ({ node, ...props }) => (
                <p {...props} style={{ margin: "1.5rem 0" }} />
              ),
              // add tab on ul
              ul: ({ node, ...props }) => (
                <ul {...props} style={{ marginLeft: "2rem" }} />
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
    </>
  );
}
