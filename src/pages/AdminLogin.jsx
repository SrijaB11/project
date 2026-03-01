import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Card,
  CardContent,
} from "@mui/material";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      return setError("All fields are required");
    }

    try {
      const res = await loginUser(form);

      console.log("LOGIN RESPONSE:", res.data);

      // ✅ Check role directly (NOT res.data.user.role)
      if (res.data.role !== "admin") {
        return setError("Not authorized as admin");
      }

      // ✅ Save token + role
      login(res.data);

      navigate("/admin-dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Admin Login
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Admin Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              margin="normal"
            />

            <Button fullWidth variant="contained" type="submit" sx={{ mt: 3 }}>
              Login as Admin
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminLogin;
