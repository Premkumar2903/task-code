
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}  Password: ${pass}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 , margin: 3}}
    >
      <Typography variant="h6">Login</Typography>

      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        fullWidth
      />

      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
}