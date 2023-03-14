// This page is used to display all posts that have a specific tag

import { BlogPost } from "@/types/schema";
import NotionService from "@/lib/notionService";
import BlogCard from "@/components/BlogCard";
import ThemeBox from "@/components/ThemeBox";
import { Container, Box, Typography, Link, Button } from "@mui/material";

type Props = {
  tag: string;
  posts: BlogPost[];
};

export default function TagPage(props: Props) {
  const { tag, posts } = props;

  return (
    <ThemeBox title="Blog Posts">
      <Container
        maxWidth="md"
        sx={{
          mt: "6rem",
        }}
      >
        {/* The tag name */}
        <Box sx={{ my: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              borderRadius: "0.5rem",
            }}
          >
            {tag}
          </Button>
        </Box>
        <Box sx={{ my: 2 }}>
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
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

export const getServerSideProps = async (context: any) => {
  const { tag } = context.query;
  const notionService = new NotionService();
  const posts = await notionService.getBlogPostsByTag(String(tag));

  return {
    props: {
      tag,
      posts,
    },
  };
};
