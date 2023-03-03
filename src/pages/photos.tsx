import { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ThemeBox from "@/components/ThemeBox";
import PhotoCard from "@/components/PhotoCard";
import useSwr from "swr";
import { useInView } from "react-intersection-observer";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Photos(props: any) {
  const [photos, setPhotos] = useState<any[]>([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data, error } = useSwr(
    nextUrl ||
      `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${props.accessToken}`,
    fetcher
  );

  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (data) {
      // checking photo.id to prevent duplicates
      const newPhotos = data.data.filter(
        (photo: any) => !photos.some((p) => p.id === photo.id)
      );
      setPhotos((photos) => [...photos, ...newPhotos]);
      setNextUrl(data.paging.next);
      setLoading(false);
    }
  }, [data]);

  const loadMore = () => {
    if (!loading && nextUrl) {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  if (error) return <div>failed to load</div>;

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
        <div ref={ref} />
      </Container>
    </ThemeBox>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
    },
  };
};
