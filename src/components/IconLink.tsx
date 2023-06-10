import { IconType } from "react-icons";
import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  href: string;
  icon: IconType;
  size?: string | number;
  color?: string;
  text?: string;
};

const IconLink = ({ href, icon: Icon, size, color, text }: Props) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  return (
    <Link
      href={href}
      color={color}
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        mx: "0.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      >
        <Icon style={{ width: size, height: size, margin: "0.4rem" }} />
        {text && (
          <Typography
            fontSize={"0.8rem"}
            style={{
              opacity: showText ? 1 : 0,
              transition: "opacity 0.2s ease",
              position: "absolute",
              top: "-1.2rem",
              color: "inherit",
              borderRadius: "0.5rem",
              padding: "0.25rem 0.5rem",
              zIndex: 1,
              textAlign: "center",
            }}
          >
            {text}
          </Typography>
        )}
      </Box>
    </Link>
  );
};

export default IconLink;
