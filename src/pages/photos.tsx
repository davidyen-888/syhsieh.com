import { Box, Container, Grid, Link, Typography } from "@mui/material";
import ThemeBox from "@/components/ThemeBox";
import PhotoCard from "@/components/PhotoCard";

type Photo = {
  id: string;
  media_url: string;
};

export default function Photos(props: { photos: Photo[] }) {
  return (
    <ThemeBox title="Photos">
      <Container
        maxWidth="xl"
        sx={{
          mt: "6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Photos
          </Typography>
        </Box>
        <Box height={"2rem"} sx={{ my: 2 }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
            The photo gallery from my{" "}
            <Link
              href="https://instagram.com/solashot.1?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              Instagram
            </Link>
            .
          </Typography>
          {/* Photo Gallery */}
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            {props.photos.map((photo: Photo) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* Image */}
                  <PhotoCard imgPath={photo.media_url} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeBox>
  );
}

export const getServerSideProps = async () => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = 100;
  let photos: Photo[] = [];

  // Fetch the first page of photos
  const firstPageUrl = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${accessToken}&limit=${limit}`;
  const firstPageRes = await fetch(firstPageUrl);
  const firstPageData = await firstPageRes.json();

  // Add the photos to the array
  photos = photos.concat(firstPageData.data);

  // Fetch the rest of the pages
  let nextUrl = firstPageData.paging.next;
  while (nextUrl) {
    const res = await fetch(nextUrl);
    const data = await res.json();
    photos = photos.concat(data.data);
    nextUrl = data.paging.next;
  }

  return {
    props: {
      photos,
    },
  };
};
