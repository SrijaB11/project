// import { Card, CardContent, Typography } from "@mui/material";

// const ProjectCard = ({ project }) => (
//   <Card sx={{ mb: 2 }}>
//     <CardContent>
//       <Typography variant="h6">{project.title}</Typography>
//       <Typography>{project.description}</Typography>
//       <Typography color="text.secondary">{project.technologies}</Typography>
//     </CardContent>
//   </Card>
// );

// export default ProjectCard;
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   TextField,
//   Stack,
// } from "@mui/material";
// import { useState } from "react";
// import {
//   setProjectPriority,
//   deleteProjectByAdmin,
// } from "../services/adminService";

// const ProjectCard = ({ project }) => {
//   const [priority, setPriorityValue] = useState(project.priority || "");

//   const handlePriority = async () => {
//     await setProjectPriority(project._id, priority);
//     alert("Priority Updated");
//   };

//   const handleDelete = async () => {
//     await deleteProjectByAdmin(project._id);
//     alert("Project Deleted");
//     window.location.reload();
//   };

//   return (
//     <Card sx={{ mb: 2 }}>
//       <CardContent>
//         <Typography variant="h6">{project.title}</Typography>
//         <Typography>{project.description}</Typography>
//         <Typography>Tech: {project.technologies}</Typography>
//         <Typography>Priority: {project.priority || "Not Set"}</Typography>

//         <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
//           <TextField
//             size="small"
//             label="Set Priority"
//             value={priority}
//             onChange={(e) => setPriorityValue(e.target.value)}
//           />
//           <Button variant="contained" onClick={handlePriority}>
//             Update
//           </Button>

//           <Button color="error" variant="outlined" onClick={handleDelete}>
//             Delete
//           </Button>
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectCard;
// import {
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
//   Button,
//   Chip,
//   Box,
// } from "@mui/material";

// const ProjectCard = ({ project }) => {
//   return (
//     <Card
//       sx={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         transition: "0.3s",
//         "&:hover": {
//           transform: "translateY(-5px)",
//           boxShadow: 6,
//         },
//       }}
//     >
//       <CardContent sx={{ flexGrow: 1 }}>
//         {/* Project Title */}
//         <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
//           {project.title}
//         </Typography>

//         {/* Description */}
//         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//           {project.description}
//         </Typography>

//         {/* Technology */}
//         {project.technology && (
//           <Box sx={{ mb: 1 }}>
//             <Chip label={project.technology} size="small" color="primary" />
//           </Box>
//         )}

//         {/* Priority */}
//         {project.priority >= 8 && (
//           <Chip label="⭐ Featured" size="small" color="secondary" />
//         )}
//       </CardContent>

//       <CardActions>
//         {project.githubLink && (
//           <Button size="small" href={project.githubLink} target="_blank">
//             GitHub
//           </Button>
//         )}

//         {project.liveLink && (
//           <Button size="small" href={project.liveLink} target="_blank">
//             Live Demo
//           </Button>
//         )}
//       </CardActions>
//     </Card>
//   );
// };

// export default ProjectCard;
import {
  Card,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  Stack,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import {
  setProjectPriority,
  deleteProjectByAdmin,
} from "../services/adminService";

const ProjectCard = ({ project, refreshProjects }) => {
  const [priority, setPriority] = useState(project.priority || 1);

  const handlePriority = async () => {
    try {
      await setProjectPriority(project._id, priority);
      alert("Priority Updated");
      refreshProjects(); // 🔥 re-fetch projects
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProjectByAdmin(project._id);
      alert("Project Deleted");
      refreshProjects(); // 🔥 no reload
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{project.title}</Typography>
        <Typography>{project.description}</Typography>
        <Typography>Tech: {project.technologies}</Typography>
        <Typography sx={{ mb: 2 }}>
          Priority: {project.priority || "Not Set"}
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Priority</InputLabel>
            <Select
              value={priority}
              label="Priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <MenuItem value={1}>1 - Low</MenuItem>
              <MenuItem value={5}>5 - Medium</MenuItem>
              <MenuItem value={10}>10 - High</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" onClick={handlePriority}>
            Update
          </Button>

          <Button color="error" variant="outlined" onClick={handleDelete}>
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
