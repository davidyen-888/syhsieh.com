import { Box, Container, Typography } from "@mui/material";
import { projects } from "projects/projects";
import ProjectCard from "@/components/ProjectCard";
import Layout from "@/components/Layout";
import ToolsSection from "@/components/ToolsSection";

export default function Projects() {
  return (
    <Layout title="Projects">
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
        <Box sx={{ my: 2, textAlign: "center" }}>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
            My most used technologies:
          </Typography>
          <ToolsSection />
        </Box>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            skills={project.skills}
            githubUrl={project.githubUrl}
            url={project.url}
            description={project.description}
            imagePaths={project.imagePaths}
          />
        ))}
      </Container>
    </Layout>
  );
}
