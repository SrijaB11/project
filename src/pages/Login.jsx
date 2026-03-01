import { useState, useContext } from "react";
import { Container, TextField, Button } from "@mui/material";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   const res = await loginUser(form);
  //   login(res.data);

  //   if (res.data.user.role === "admin") navigate("/admin-dashboard");
  //   else if (!res.data.user.isApproved) alert("Waiting for approval");
  //   else navigate("/student-dashboard");
  // };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      console.log("LOGIN RESPONSE:", res.data);

      const { token, user, role } = res.data;
      login(res.data);

      // Case 1: role inside user object
      const userRole = user?.role || role;

      if (!token || !userRole) {
        alert("Invalid login response");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user || { role: userRole }));

      if (userRole === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/student-dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };
  return (
    <Container sx={{ mt: 5 }}>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
