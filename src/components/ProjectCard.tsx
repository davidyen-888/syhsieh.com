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
import { BsFillTriangleFill, BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import IconLink from "./IconLink";

interface Props {
  title: string;
  skills: string[];
  githubUrl?: string;
  url?: string;
  description: string[];
  imagePaths: string[];
}

export default function ProjectCard(props: Props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: "60rem",
          margin: "1rem",
          backgroundColor: "#F9F9F9",
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
                  color={"inherit"}
                  text={"Github"}
                />
              )}
              {props.url && (
                <IconLink
                  href={props.url}
                  icon={FaExternalLinkAlt}
                  size={"1.6rem"}
                  color={"inherit"}
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
              color="text.secondary"
              fontSize={{ xs: "0.8rem", md: "1rem" }}
              fontWeight={"bold"}
            >
              Skills:{" "}
              {props.skills.map((skill, index) => (
                <span
                  style={{
                    color: "css:var(--text-secondary)",
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
                    color: "css:var(--text-secondary)",
                    padding: "0",
                  }}
                >
                  <Typography
                    variant="body1"
                    color={"text.secondary"}
                    sx={{
                      fontSize: { xs: "0.8rem", md: "1rem" },
                      lineHeight: "2rem",
                    }}
                  >
                    <BsFillTriangleFill
                      style={{
                        transform: "rotate(90deg)",
                        marginRight: "0.5rem",
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
