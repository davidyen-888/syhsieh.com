import { BlogPost } from "@/types/schema";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

type PostNavLinkProps = {
  post: BlogPost;
  isNewer?: boolean;
};

const PostNavLink = ({ post, isNewer }: PostNavLinkProps) => {
  const MAX_TITLE_LENGTH = 50; // Maximum length of the post title

  let truncatedTitle = post.title;
  if (post.title.length > MAX_TITLE_LENGTH) {
    truncatedTitle = post.title.substring(0, MAX_TITLE_LENGTH) + "...";
  }

  return (
    <Box display="flex" justifyContent={isNewer ? "flex-start" : "flex-end"}>
      <Link
        href={`/posts/${post.slug}`}
        passHref
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={isNewer ? "flex-start" : "flex-end"}
          border="1px solid #eaeaea"
          borderRadius="10px"
          py="0.5rem"
          px="1rem"
          width={{ xs: "200px", sm: "250px", md: "300px", lg: "350px" }}
          height={"100%"}
          sx={{
            ":hover": {
              border: "1px solid #21a1ee",
            },
          }}
        >
          <Typography
            variant="body1"
            color="GrayText"
            fontSize={{ xs: "0.8rem", md: "1rem" }}
          >
            {isNewer ? "Newer Post" : "Older Post"}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            textAlign={isNewer ? "left" : "right"}
            fontSize={{ xs: "1rem", md: "1.2rem" }}
            fontWeight={"bold"}
            pt="0.2rem"
          >
            {truncatedTitle}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default PostNavLink;
