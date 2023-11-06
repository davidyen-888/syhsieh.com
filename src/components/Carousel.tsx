import { Box, Card, CardMedia, Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";

interface CarouselProps {
  imagePaths: string[];
}

export default function Carousel({ imagePaths }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = imagePaths.length - 1;

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? lastIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === lastIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Card sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={imagePaths[activeIndex]}
          alt="project image"
          sx={{
            height: { xs: "10rem", md: "30rem" },
            objectFit: { xs: "contain", md: "scale-down" },
          }}
        />
        {/* only show icon if imagePaths has more than 1 image */}
        {imagePaths.length > 1 && (
          <>
            <Button
              sx={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
              }}
              onClick={handlePrev}
            >
              <ChevronLeft
                sx={{
                  width: "3rem",
                  height: "3rem",
                }}
              />
            </Button>
            <Button
              sx={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
              }}
              onClick={handleNext}
            >
              <ChevronRight
                sx={{
                  width: "3rem",
                  height: "3rem",
                }}
              />
            </Button>
          </>
        )}
      </Card>
    </Box>
  );
}
