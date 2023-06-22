import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Carousel from "./Carousel";
import { BsCircleFill, BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import IconLink from "./IconLink";
import { useTheme } from "next-themes";

interface ProjectProps {
  title: string;
  skills: string[];
  githubUrl?: string;
  url?: string;
  description: string[];
  imagePaths: string[];
}

export default function ProjectCard(props: ProjectProps) {
  const { theme } = useTheme();

  return (
    <>
      <Card
        sx={{
          maxWidth: "60rem",
          margin: "1rem",
          backgroundColor: theme === "dark" ? "#1f1f1f" : "#f9f9f9",
          borderRadius: "1rem",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1rem",
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color={theme === "dark" ? "#f9f9f9" : "#1f1f1f"}
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              {props.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {props.githubUrl && (
                <IconLink
                  href={props.githubUrl}
                  icon={BsGithub}
                  size={"1.6rem"}
                  color={theme === "dark" ? "#f9f9f9" : "#1f1f1f"}
                  text={"Github"}
                />
              )}
              {props.url && (
                <IconLink
                  href={props.url}
                  icon={FaExternalLinkAlt}
                  size={"1.6rem"}
                  color={theme === "dark" ? "#f9f9f9" : "#1f1f1f"}
                  text={"Website"}
                />
              )}
            </Box>
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              color={theme === "dark" ? "#eee" : "#1f1f1f"}
              fontSize={{ xs: "0.8rem", md: "1rem" }}
              fontWeight={"bold"}
            >
              Skills:{" "}
              {props.skills.map((skill, index) => (
                <span
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {index === 0 ? "" : " / "}
                  {skill}
                </span>
              ))}
            </Typography>
          </Container>
          <Container sx={{ my: "1rem" }}>
            <Carousel imagePaths={props.imagePaths} />
            {props.description.map((bulletPoint) => (
              <List key={bulletPoint}>
                <ListItem
                  key={bulletPoint}
                  style={{
                    padding: "0",
                  }}
                >
                  <Typography
                    variant="body1"
                    color={theme === "dark" ? "#eee" : "#1f1f1f"}
                    sx={{
                      fontSize: { xs: "0.8rem", md: "1rem" },
                      lineHeight: "2rem",
                    }}
                  >
                    <BsCircleFill
                      style={{
                        marginRight: "0.5rem",
                        scale: "0.5",
                        transform: "translateY(0.2rem)",
                      }}
                    />
                    {bulletPoint}
                  </Typography>
                </ListItem>
              </List>
            ))}
          </Container>
        </CardContent>
      </Card>
    </>
  );
}
