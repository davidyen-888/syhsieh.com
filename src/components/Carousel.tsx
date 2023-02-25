import { Box, Button, Card, CardMedia, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === lastIndex ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [lastIndex]);

  return (
    <Box sx={{ position: "relative" }}>
      <Card sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia component="img" image={imagePaths[activeIndex]} />
        {/* only show icon if imagePaths has more than 1 image */}
        {imagePaths.length > 1 && (
          <>
            <IconButton
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
            </IconButton>
            <IconButton
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
            </IconButton>
          </>
        )}
      </Card>
    </Box>
  );
}
