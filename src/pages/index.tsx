import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Box, Container, Typography } from "@mui/material";
import TypeWriter from "@/components/TypeWriter";
import Layout from "@/components/Layout";
import { useTheme } from "next-themes";
import WavingHand from "@/components/WavingHand";
import NotionService from "@/lib/notionService";
import Link from "next/link";
import { BlogPost } from "@/types/schema";
import Date from "@/components/Date";
import Image from "next/image";

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { theme } = useTheme();

  return (
    <Layout title="Sung-Yan(David) Hsieh">
      <Container
        sx={{
          mt: "6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            fontSize={{ xs: "2rem", md: "3rem" }}
          >
            Hi
            <WavingHand />, I'm Sung-Yan(David) Hsieh
          </Typography>
        </Box>
        <Image
          src="/images/codeTyping.svg"
          width={320}
          height={320}
          alt="Code-typing"
          quality={40}
          priority={true}
        />
        <Box height={"2rem"} my={2}>
          <Typography fontSize={{ xs: "1.2rem", md: "1.5rem" }}>
            <TypeWriter
              sentences={[
                "I solve problems.",
                "I build things.",
                "I bring ideas to life.",
              ]}
            />
          </Typography>
        </Box>
        <Box
          maxWidth="sm"
          my={{ xs: 1, md: 2 }}
          textAlign={{ xs: "center", md: "left" }}
          width={{ xs: "100%", md: "50%" }}
        >
          <Typography
            variant="subtitle1"
            fontSize={{ xs: "1rem", md: "1.2rem" }}
          >
            <p>
              Welcome to my personal website! I'm excited to share with you my
              journey, my thoughts, and my creations. Stay awhile and get to
              know me a little better.
            </p>
            <br />
            <p>
              Feel free to take a look at my blog posts, which mostly revolve
              around web development and software engineering topics.
            </p>
          </Typography>
          {/* Blog previews */}
          <Box maxWidth="md" mt="2rem">
            <Typography
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              fontSize={{ xs: "1.2rem", md: "2.5rem" }}
              mb={"2rem"}
            >
              <Link
                href="/posts"
                style={{
                  textDecoration: "none",
                  color: theme === "light" ? "#000" : "#ccc",
                }}
              >
                Latest Blog Posts
              </Link>
            </Typography>
            {posts.map((post: BlogPost) => (
              <Box key={post.id} mb={"1.2rem"}>
                <Link
                  href={`/posts/${post.slug}`}
                  style={{
                    color: theme === "light" ? "#000" : "#ccc",
                  }}
                >
                  <Typography variant="h6">{post.title}</Typography>
                </Link>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme === "light" ? "#000" : "#ccc",
                  }}
                >
                  <Date dateString={post.date} />
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const notionService = new NotionService();
  const posts = await notionService.getLatestThreeBlogPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60, // 1 minute
  };
};
