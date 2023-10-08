import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "@/components/Layout";
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
    <Layout title="Photos">
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
    </Layout>
  );
}

export const getStaticProps = async () => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const photos: Photo[] = [];
  const seenPhotoIds = new Set<string>(); // To prevent duplicates
  let url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${accessToken}&limit=100`;
  let hasMoreData = true;

  while (hasMoreData) {
    const data = await fetcher(url);

    if (!data || !data.data) {
      console.error("Error fetching data from Instagram API:", data);
      break;
    }

    // Filter and add new photos to the list of photos
    const newPhotos = data.data.filter(
      (photo: Photo) => !seenPhotoIds.has(photo.id)
    );
    newPhotos.forEach((photo: Photo) => seenPhotoIds.add(photo.id));
    photos.push(...newPhotos);

    // Check for pagination
    if (data.paging && data.paging.next) {
      url = data.paging.next;
    } else {
      hasMoreData = false;
    }
  }

  return {
    props: {
      photos,
    },
    revalidate: 60, // 1 minute
  };
};
