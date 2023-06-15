import { Container } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function PhotoCard({ imgPath }: { imgPath: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        my: "1rem",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        unoptimized
        src={imgPath}
        width={320}
        height={320}
        style={{
          objectFit: isHovered ? "contain" : "cover",
        }}
        alt="Sung-Yan(David) Hsieh's photo from the photo gallery."
      />
    </Container>
  );
}
