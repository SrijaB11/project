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
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectById, updateProject } from "../services/projectService";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    githubLink: "",
    deploymentLink: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getProjectById(id);
        setFormData(res.data);
      } catch (err) {
        setError("Failed to load project");
      }
    };

    fetchProject();
  }, [id]);

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
      await updateProject(id, formData);
      navigate("/student-dashboard");
    } catch (err) {
      setError("Update failed");
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
            Edit Project
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
              Update Project
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EditProject;
