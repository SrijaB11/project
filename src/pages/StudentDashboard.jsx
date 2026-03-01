import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyProjects, deleteProject } from "../services/projectService";
import StudentSidebar from "../components/StudentSidebar";
//import { Box, Container } from "@mui/material";
//import AdminSidebar from "../components/AdminSidebar";
const StudentDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const res = await getMyProjects();
      setProjects(res.data);
    } catch (err) {
      setError("Failed to load projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      fetchProjects();
    } catch (err) {
      setError("Delete failed");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <StudentSidebar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Box display="flex" justifyContent="space-between" mb={4}>
              <Typography variant="h5" fontWeight="bold">
                My Projects
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigate("/add-project")}
              >
                Add Project
              </Button>
            </Box>

            {error && <Alert severity="error">{error}</Alert>}

            {projects.length === 0 ? (
              <Typography>No projects added yet.</Typography>
            ) : (
              <Grid container spacing={3}>
                {projects.map((project) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project._id}>
                    <Card
                      sx={{
                        transition: "0.3s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: 6,
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold">
                          {project.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ mt: 1 }}
                          color="text.secondary"
                        >
                          {project.description}
                        </Typography>

                        <Box sx={{ mt: 2 }}>
                          <Typography
                            component="a"
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            sx={{ display: "block" }}
                          >
                            GitHub Link
                          </Typography>

                          <Typography
                            component="a"
                            href={project.deploymentLink}
                            target="_blank"
                            rel="noreferrer"
                            sx={{ display: "block" }}
                          >
                            Deployment Link
                          </Typography>
                        </Box>
                      </CardContent>

                      <CardActions>
                        <Button
                          size="small"
                          onClick={() =>
                            navigate(`/edit-project/${project._id}`)
                          }
                        >
                          Edit
                        </Button>

                        <Button
                          size="small"
                          color="error"
                          onClick={() => handleDelete(project._id)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default StudentDashboard;
