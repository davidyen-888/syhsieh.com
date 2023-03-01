import { Box, Container, Typography } from "@mui/material";
import { projects } from "projects/projects";
import ProjectCard from "@/components/ProjectCard";
import ThemeBox from "@/components/ThemeBox";

export default function Projects() {
  return (
    <ThemeBox title="Projects">
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
      </Container>
    </ThemeBox>
  );
}
