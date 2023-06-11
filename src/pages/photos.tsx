import { Box, Container, Grid, Typography } from "@mui/material";
import ThemeBox from "@/components/ThemeBox";
import PhotoCard from "@/components/PhotoCard";
import LRUCache from "lru-cache";

type Photo = {
  id: string;
  media_url: string;
};

const cache = new LRUCache({ max: 100 });

const fetcher = async (url: string) => {
  const cached = cache.get(url);
  if (cached) {
    return Promise.resolve(cached);
  }
  const res = await fetch(url);
  const data = await res.json();
  cache.set(url, data);
  return data;
};

export default function Photos({ photos }: { photos: Photo[] }) {
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
            My photo gallery.
          </Typography>
          {/* Photo Gallery */}
        </Box>
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
            {photos.map((photo: any) => (
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

export const getStaticProps = async () => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  let photos: Photo[] = [];

  let url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${accessToken}&limit=100`;

  while (url) {
    const data = await fetcher(url);
    // checking photo.id to prevent duplicates
    const newPhotos = data.data.filter(
      (photo: Photo) => !photos.some((p) => p.id === photo.id)
    );
    photos = [...photos, ...newPhotos];
    // check if there is a next page
    if (data.paging && data.paging.next) {
      url = data.paging.next;
    } else {
      url = "";
    }
  }

  return {
    props: {
      photos,
    },
  };
};
