import { Container, Box, Typography, Link } from "@mui/material";
import Head from "next/head";
import { getSortedPostsData } from "../../lib/posts";
import Date from "@/components/Date";
import Navbar from "@/components/Navbar";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function PostsPage({ allPostsData }: any) {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Sung-Yan Hsieh's blog" />
        <meta name="og:title" content="Posts" />
        <link rel="icon" href="/internet.png" />
      </Head>
      <Navbar />
      <Container
        sx={{
          my: 4,
        }}
      >
        <Box sx={{ my: 2 }}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{ fontSize: { xs: "2rem", md: "3rem" }, textAlign: "center" }}
          >
            Blog Posts
          </Typography>
        </Box>
        {allPostsData.map(({ id, date, title }: any) => (
          <Box key={id}>
            <Link href={`/posts/${id}`} color="inherit">
              <Box sx={{ my: 2 }}>
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
                >
                  {title}
                </Typography>
              </Box>
            </Link>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
            >
              <Date dateString={date} />
            </Typography>
          </Box>
        ))}
      </Container>
    </>
  );
}
