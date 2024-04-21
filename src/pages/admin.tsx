import Layout from "@/components/Layout";
import { Container, Typography, Button, TextField } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Admin = ({ accessToken }: { accessToken: string }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [IGToken, setIGToken] = useState<string | null>(null);

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  useEffect(() => {
    // If the user is not authenticated, redirect to the login page
    if (!session || !session.user) {
      router.push("/login");
    }
  }, [session, router]);

  const getIGLongLivedToken = async () => {
    try {
      const response = await fetch(
        `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setIGToken(data.access_token);
        // Handle success response here
      } else {
        console.error("Failed to call Instagram API");
        // Handle error response here
      }
    } catch (error) {
      console.error("Error calling Instagram API:", error);
    }
  };

  // If session data is not available
  if (!session) {
    return null;
  }

  return (
    <Layout title="Sung-Yan(David) Hsieh">
      <Container
        sx={{
          mt: "6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">
          Welcome, {session.user?.name || "Guest"}
        </Typography>
        {/* Admin content */}
        {/* Button to call API */}
        <Button
          variant="contained"
          color="primary"
          onClick={getIGLongLivedToken}
          sx={{ margin: "1.5rem" }}
        >
          Get IG token
        </Button>
        {/* Display IG token */}
        {IGToken && (
          <textarea
            value={IGToken}
            readOnly
            style={{ width: "100%", margin: "1.5rem", padding: "1rem" }}
          />
        )}
        {/* Logout button */}
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Layout>
  );
};

export default Admin;

export const getStaticProps = async () => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  return {
    props: {
      accessToken,
    },
  };
};
