import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import Layout from "@/components/Layout";

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result && result.ok && !result.error) {
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Layout title="Login">
      <Container
        sx={{
          mt: "6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography component="label" htmlFor="username">
            Username
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            name="username"
            autoFocus
          />
          <Typography component="label" htmlFor="username">
            Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          {error && (
            <Typography variant="body2" color="error" align="center">
              {error}
            </Typography>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default LoginPage;
