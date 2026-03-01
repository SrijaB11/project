// import { useEffect, useState } from "react";
// import { Container, Typography } from "@mui/material";
// import { getAllProjects } from "../services/projectService";
// import ProjectCard from "../components/ProjectCard";

// const ProjectShowcase = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     const res = await getAllProjects();
//     setProjects(res.data.sort((a, b) => b.priority - a.priority));
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Project Showcase
//       </Typography>

//       {projects.map((project) => (
//         <ProjectCard key={project._id} project={project} />
//       ))}
//     </Container>
//   );
// };
// export default ProjectShowcase;
// import { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   CircularProgress,
//   Box,
// } from "@mui/material";
// import { getAllProjects } from "../services/projectService";
// import ProjectCard from "../components/ProjectCard";

// const ProjectShowcase = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const res = await getAllProjects();
//       const sortedProjects = res.data.sort((a, b) => b.priority - a.priority);
//       setProjects(sortedProjects);
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container sx={{ mt: 6, mb: 6 }}>
//       {/* Page Heading */}
//       <Typography
//         variant="h3"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: "bold" }}
//       >
//         🚀 Student Project Showcase
//       </Typography>

//       <Typography
//         variant="body1"
//         align="center"
//         sx={{ mb: 4, color: "text.secondary" }}
//       >
//         Explore innovative projects built by our talented students.
//       </Typography>

//       {/* Loading */}
//       {loading && (
//         <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//           <CircularProgress />
//         </Box>
//       )}

//       {/* Empty State */}
//       {!loading && projects.length === 0 && (
//         <Typography align="center" sx={{ mt: 4 }}>
//           No projects available yet.
//         </Typography>
//       )}

//       {/* Projects Grid */}
//       <Grid container spacing={3}>
//         {projects.map((project) => (
//           <Grid item xs={12} sm={6} md={4} key={project._id}>
//             <ProjectCard project={project} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default ProjectShowcase;

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getAllProjects } from "../services/projectService";
import ProjectDetailsCard from "./ProjectDetails";

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await getAllProjects();
    setProjects(res.data);
  };

  return (
    <Box sx={{ p: 5 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        🚀 Project Showcase
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {projects.map((project) => (
          <ProjectDetailsCard key={project._id} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectShowcase;
