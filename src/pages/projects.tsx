import { Box, Container, Typography } from "@mui/material";
import { projects } from "projects/projects";
import ProjectCard from "@/components/ProjectCard";
import Layout from "@/components/Layout";

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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginTop: "1rem",
            }}
          >
            <img
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              alt="nextjs"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="react"
            />
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              alt="html5"
            />
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              alt="css3"
            />

            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="javascript"
            />
            <img
              src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              alt="typescript"
            />
            <img
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
              alt="python"
            />
            <img
              src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
              alt="java"
            />
            <img
              src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"
              alt="go"
            />
            <img
              src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
              alt="markdown"
            />
          </Box>
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
