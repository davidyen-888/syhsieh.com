import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Link,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Head from "next/head";
import { getAllPostsData } from "../../lib/posts";
import Date from "@/components/Date";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <FormControl sx={{ my: 2 }}>
          <InputLabel id="sort-order-label">Sort by date:</InputLabel>
          <Select
            labelId="sort-order-label"
            id="sort-order"
            value={sortOrder}
            label="Sort by date"
            onChange={(e: any) => setSortOrder(e.target.value as SortOption)}
          >
            <MenuItem value="desc">Newest first</MenuItem>
            <MenuItem value="asc">Oldest first</MenuItem>
          </Select>
        </FormControl>
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
      <Footer />
    </>
  );
}
