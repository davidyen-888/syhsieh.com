import { BlogPost } from "@/types/schema";
import {
  Box,
  Typography,
  Link,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Image from "mui-image";
import { useTheme } from "next-themes";
import Date from "./Date";

export default function BlogCard(post: BlogPost) {
  const { theme } = useTheme();

  return (
    <Box key={post.id} sx={{ my: 2 }}>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
      >
        <Link href={`/posts/${post.slug}`} color="inherit" underline="none">
          {post.title}
        </Link>
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: { xs: "0.8rem", md: "1rem" },
          color: theme === "dark" ? "grey.500" : "grey.800",
          mb: 1,
        }}
      >
        <Date dateString={post.date} />
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: { xs: "0.8rem", md: "1rem" },
          color: theme === "dark" ? "grey.500" : "grey.800",
        }}
      >
        {post.tags.map((tag) => (
          <Button
            key={tag.id}
            variant="outlined"
            size="small"
            sx={{ mr: 1 }}
            href={`/posts/${tag.name}`}
          >
            {tag.name}{" "}
          </Button>
        ))}
      </Typography>
    </Box>
  );
}
