import { Box, Container, Grid, Typography } from "@mui/material";
import ThemeBox from "@/components/ThemeBox";
import PhotoCard from "@/components/PhotoCard";

interface PhotosData {
  photosData: {
    data: {
      id: string;
      media_type: string;
      media_url: string;
      permalink: string;
      timestamp: string;
    }[];
  };
}

export default function Photos(photosData: PhotosData) {
  const photos = photosData.photosData.data;

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
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;
  const res = await fetch(url);
  const photosData = await res.json();

  return {
    props: {
      photosData,
    },
  };
};
