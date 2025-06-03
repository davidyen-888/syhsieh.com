import { Container, Box, Typography, Button } from "@mui/material";
import Layout from "@/components/Layout";
import { InferGetStaticPropsType } from "next";
import NotionService from "@/lib/notionService";
import { BlogPost } from "@/types/schema";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";

export default function PostsPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sortOrder, setSortOrder] = useState<string>("desc");
  const [sortCriteria, setSortCriteria] = useState<keyof BlogPost>("date");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [tags, setTags] = useState<{ name: string; count: number }[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const tagMap = new Map();
    posts.forEach((post: BlogPost) => {
      post.tags.forEach((tag) => {
        const tagName = tag.name.toLowerCase();
        if (!tagMap.has(tagName)) {
          tagMap.set(tagName, 1);
        } else {
          tagMap.set(tagName, tagMap.get(tagName) + 1);
        }
      });
    });
    const tagList: { name: string; count: number }[] = [];
    tagMap.forEach((value, key) => {
      tagList.push({ name: key, count: value });
    });
    setTags(tagList);
  }, [posts]);

  const filterPostsWithTags = (tags: string[]) => {
    setSelectedTags(tags);
    const filtered = posts.filter((post: BlogPost) => {
      const tagNames = post.tags.map((tag) => tag.name.toLowerCase());
      return tags.every((tag) => tagNames.includes(tag));
    });
    setFilteredPosts(filtered);
  };

  const filterPosts = (query: string) => {
    const filtered = posts.filter((post: BlogPost) => {
      const title = post.title.toLowerCase();
      const tags = post.tags.map((tag) => tag.name.toLowerCase());
      return (
        title.includes(query.toLowerCase()) ||
        tags.includes(query.toLowerCase())
      );
    });
    setFilteredPosts(filtered);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    filterPosts(e.target.value);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const [criteria, order] = value.split("-");
    setSortCriteria(criteria as keyof BlogPost);
    setSortOrder(order);
  };

  useEffect(() => {
    const sortedPosts = [...filteredPosts].sort((a: BlogPost, b: BlogPost) => {
      const dateA = new Date(a[sortCriteria] as string).getTime();
      const dateB = new Date(b[sortCriteria] as string).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });
    setFilteredPosts(sortedPosts);
  }, [sortOrder, sortCriteria, filteredPosts]);

  return (
    <Layout title="Blog Posts">
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
        {/* Search bar */}
        <Box sx={{ my: 1 }}>
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            style={{
              padding: "8px",
              fontSize: "1rem",
              width: "100%",
              height: "2.5rem",
              border: "1px solid #ccc",
            }}
            onChange={handleSearchChange}
          />
        </Box>
        {/* Tag List */}
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          sx={{ my: 2, justifyContent: "flex-start" }}
        >
          {tags.map((tag) => (
            <Button
              key={tag.name}
              variant={
                selectedTags.includes(tag.name) ? "contained" : "outlined"
              }
              sx={{ margin: "0 8px 8px 0" }}
              onClick={() => {
                if (selectedTags.includes(tag.name)) {
                  filterPostsWithTags(
                    selectedTags.filter((t) => t !== tag.name)
                  );
                } else {
                  filterPostsWithTags([...selectedTags, tag.name]);
                }
              }}
            >
              {tag.name} ({tag.count})
            </Button>
          ))}
        </Box>
        {/* Filter by date */}
        <form>
          <div style={{ margin: "16px 0" }}>
            <select
              id="sort-order"
              value={`${sortCriteria}-${sortOrder}`}
              style={{ padding: "8px", fontSize: "1rem" }}
              onChange={handleSortOrderChange}
            >
              <option value="date-desc">Newest first</option>
              <option value="date-asc">Oldest first</option>
              <option value="lastUpdated-desc">Recently updated</option>
              <option value="lastUpdated-asc">Least recently updated</option>
            </select>
          </div>
        </form>

        <Box sx={{ my: 2 }}>
          {/* Display filtered posts */}
          {filteredPosts.map((post: BlogPost) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </Box>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const notionService = new NotionService();
  const posts = await notionService.getAllBlogPosts();

  return {
    props: {
      posts,
    },
    // Revalidate every hour
    revalidate: 3600,
  };
};
