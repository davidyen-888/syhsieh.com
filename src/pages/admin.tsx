import Layout from "@/components/Layout";
import { Container, Typography, Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Admin = () => {
  const { data: session } = useSession();
  const router = useRouter();

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
        <Typography variant="h3" gutterBottom>
          Welcome, {session.user?.name || "Guest"}
        </Typography>
        {/* Admin content */}

        {/* Logout button */}
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Layout>
  );
};

export default Admin;
