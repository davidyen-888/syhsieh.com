import { Container, Box, Typography } from "@mui/material";
import ThemeBox from "@/components/ThemeBox";
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import NotionService from "@/lib/notionService";
import { BlogPost } from "@/types/schema";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";

export default function PostsPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sortOrder, setSortOrder] = useState("desc");

  posts.sort((a: BlogPost, b: BlogPost) => {
    if (sortOrder === "desc") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  return (
    <ThemeBox title="Blog Posts">
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
            Blog Posts
          </Typography>
        </Box>
        <Box height={"2rem"} sx={{ my: 2, textAlign: "center" }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
            A list of blog posts I've written.
          </Typography>
        </Box>
        {/* Filter by date */}
        <form>
          <div style={{ margin: "16px 0" }}>
            <select
              id="sort-order"
              value={sortOrder}
              style={{ padding: "8px", fontSize: "1rem" }}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">
                <Typography>Newest first</Typography>
              </option>
              <option value="asc">
                <Typography>Oldest first</Typography>
              </option>
            </select>
          </div>
        </form>
        <Box sx={{ my: 2 }}>
          {posts.map((post: BlogPost) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </Box>
      </Container>
    </ThemeBox>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const notionService = new NotionService();
  const posts = await notionService.getAllBlogPosts();

  return {
    props: {
      posts,
    },
  };
};
