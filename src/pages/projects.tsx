import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { projects } from "projects/projects";
import ProjectCard from "@/components/ProjectCard";
import Carousel from "@/components/Carousel";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Sung-Yan Hsieh's projects" />
        <meta name="og:title" content="Projects" />
        <link rel="icon" href="/internet.png" />
      </Head>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          my: 4,
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
            Projects
          </Typography>
        </Box>
        <Box height={"2rem"} sx={{ my: 2 }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
            A list of projects I've worked on.
          </Typography>
        </Box>
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            skills={project.skills}
            githubUrl={project.githubUrl}
            url={project.url}
            description={project.description}
            imagePaths={project.imagePaths}
          />
        ))}
        {/* <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <Carousel
              imagePaths={[
                "/images/projectImg/bearmaps1.jpeg",
                "/images/projectImg/bearmaps2.jpeg",
              ]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */}
      </Container>
    </>
  );
}
