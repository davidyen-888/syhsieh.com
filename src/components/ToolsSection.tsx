import { Box } from "@mui/material";

export default function ToolsSection() {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      gap={"0.5rem"}
      marginTop={"1rem"}
      maxWidth={"md"}
      justifyContent={"center"}
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
      {/* <img
        src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"
        alt="go"
      /> */}
      <img
        src={
          "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
        }
        alt="git"
      />
      <img
        src={
          "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"
        }
        alt="aws"
      />
    </Box>
  );
}
