import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProject } from "../services/projectService";

const AddProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    githubLink: "",
    deploymentLink: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description) {
      setError("Project Name and Description are required");
      return;
    }

    try {
      await addProject(formData);
      navigate("/student-dashboard");
    } catch (err) {
      setError("Failed to add project");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card elevation={5}>
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Add New Project
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Project Name"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              label="Description"
              name="description"
              fullWidth
              margin="normal"
              multiline
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />

            <TextField
              label="GitHub Link"
              name="githubLink"
              fullWidth
              margin="normal"
              value={formData.githubLink}
              onChange={handleChange}
            />

            <TextField
              label="Deployment Link"
              name="deploymentLink"
              fullWidth
              margin="normal"
              value={formData.deploymentLink}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
              Add Project
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddProject;
