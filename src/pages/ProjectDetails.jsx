// import { Card, CardContent, Typography } from "@mui/material";

// const ProjectDetailsCard = ({ project }) => {
//   return (
//     <Card sx={{ mb: 2 }}>
//       <CardContent>
//         <Typography variant="h6">{project.title}</Typography>
//         <Typography>{project.description}</Typography>
//         <Typography>Tech: {project.technologies}</Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectDetailsCard;

// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Stack,
//   Link,
// } from "@mui/material";

// const ProjectDetailsCard = ({ project, onDelete, onPriority }) => {
//   return (
//     <Card sx={{ mb: 2 }}>
//       <CardContent>
//         <Typography variant="h6">{project.name}</Typography>

//         <Typography sx={{ mb: 1 }}>{project.description}</Typography>

//         <Typography variant="body2">
//           <Link href={project.githubLink} target="_blank">
//             GitHub
//           </Link>
//         </Typography>

//         <Typography variant="body2" sx={{ mb: 2 }}>
//           <Link href={project.deploymentLink} target="_blank">
//             Live Demo
//           </Link>
//         </Typography>

//         <Stack direction="row" spacing={2}>
//           <Button
//             variant="contained"
//             color="error"
//             onClick={() => onDelete(project._id)}
//           >
//             Delete
//           </Button>

//           <Button
//             variant="contained"
//             color="warning"
//             onClick={() => onPriority(project._id)}
//           >
//             Move To Top
//           </Button>
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectDetailsCard;
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Link,
} from "@mui/material";

const ProjectDetailsCard = ({ project, onDelete, onPriority }) => {
  return (
    <Card
      sx={{
        width: 320,
        borderRadius: 3,
        boxShadow: 4,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {project.name}
        </Typography>

        <Typography sx={{ mb: 1 }}>{project.description}</Typography>

        <Typography variant="body2">
          <Link href={project.githubLink} target="_blank">
            GitHub
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          <Link href={project.deploymentLink} target="_blank">
            Live Demo
          </Link>
        </Typography>

        {/* 🔥 Buttons show only if admin passes functions */}
        {onDelete && onPriority && (
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="error"
              onClick={() => onDelete(project._id)}
            >
              Delete
            </Button>

            <Button
              variant="contained"
              color="warning"
              onClick={() => onPriority(project._id)}
            >
              Move To Top
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectDetailsCard;
