import { useState } from "react";
import { Container, Box, Typography, Link } from "@mui/material";
import { getAllPostsData } from "../../lib/posts";
import Date from "@/components/Date";
import ThemeBox from "@/components/ThemeBox";

interface allPostsData {
  id: string;
  date: string;
  title: string;
}

type SortOption = "asc" | "desc";

export async function getStaticProps() {
  const allPostsData = getAllPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function PostsPage({
  allPostsData,
}: {
  allPostsData: allPostsData[];
}) {
  const [sortOrder, setSortOrder] = useState<SortOption>("desc");

  const sortedPosts = allPostsData.sort((a, b) =>
    sortOrder === "asc"
      ? a.date.localeCompare(b.date)
      : b.date.localeCompare(a.date)
  );

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
            {/* A list of blog posts I've written. */}
            Demo now.(Will integrate with Notion soon)
          </Typography>
        </Box>
        {/* Filter by date */}
        <form>
          <div style={{ margin: "16px 0" }}>
            <select
              id="sort-order"
              value={sortOrder}
              style={{ padding: "8px", fontSize: "1rem" }}
              onChange={(e) => setSortOrder(e.target.value as SortOption)}
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
        {sortedPosts.map(({ id, date, title }: allPostsData) => (
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
    </ThemeBox>
  );
}
