import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  Typography,
} from "@mui/material";
import Carousel from "./Carousel";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  title: string;
  skills: string[];
  githubUrl?: string;
  url: string;
  description: string[];
  imagePaths: string[];
}

export default function ProjectCard(props: Props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: "50rem",
          margin: "1rem",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              {props.title}
            </Typography>
            <Box>
              {props.githubUrl && (
                <Link href={props.githubUrl} color="inherit">
                  <BsGithub
                    style={{
                      width: "1.6rem",
                      height: "1.6rem",
                      marginRight: "1rem",
                    }}
                  />
                </Link>
              )}
              <Link href={props.url} color="inherit">
                <FaExternalLinkAlt
                  style={{
                    width: "1.6rem",
                    height: "1.6rem",
                  }}
                />
              </Link>
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
              color="text.secondary"
              fontSize={{ xs: "0.8rem", md: "1rem" }}
              fontWeight={"bold"}
            >
              Skills:
              {props.skills.map((skill) => (
                <span
                  style={{
                    fontWeight: "normal",
                    padding: "0 0.3rem 0 0.3rem",
                  }}
                >
                  {skill}
                </span>
              ))}
            </Typography>
          </Container>
          <Container sx={{ my: "1rem" }}>
            <Carousel imagePaths={props.imagePaths} />
            <Typography
              variant="body1"
              color={"text.secondary"}
              sx={{
                fontSize: { xs: "0.8rem", md: "1rem" },
                mt: "1rem",
                lineHeight: "2rem",
              }}
            >
              {props.description.map((bulletPoint) => (
                <li
                  style={{
                    color: "css:var(--text-secondary)",
                  }}
                >
                  {bulletPoint}
                </li>
              ))}
            </Typography>
          </Container>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
}
