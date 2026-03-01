// import { useEffect, useState } from "react";
// import { Container, Typography } from "@mui/material";
// import { getStudents, approveStudent } from "../services/adminService";
// import StudentCard from "../components/StudentCard";
// //import AdminSidebar from "../components/AdminNavbar";
// import { Box } from "@mui/material";
// import AdminSidebar from "../components/AdminSidebar";
// const AdminDashboard = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     const res = await getStudents();
//     setStudents(res.data);
//   };

//   // const handleApprove = async (id) => {
//   //   await approveStudent(id);
//   //   fetchStudents();
//   // };
//   const handleApprove = async (id) => {
//     try {
//       await approveStudent(id);

//       // ✅ Update only that student locally
//       setStudents((prev) =>
//         prev.map((student) =>
//           student._id === id ? { ...student, gotPermission: true } : student,
//         ),
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AdminSidebar />
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Container sx={{ mt: 5 }}>
//           <Typography variant="h5">Admin Dashboard</Typography>
//           {students.map((s) => (
//             <StudentCard key={s._id} student={s} onApprove={handleApprove} />
//           ))}
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default AdminDashboard;

// import { useEffect, useState } from "react";
// import { Box, Container, Typography, Divider } from "@mui/material";
// import { getStudents, approveStudent } from "../services/adminService";
// import { getAllProjects } from "../services/projectService";
// import StudentCard from "../components/StudentCard";
// import ProjectCard from "../components/ProjectCard";
// import AdminSidebar from "../components/AdminSidebar";

// const AdminDashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     console.log("AdminDashboard Mounted");
//     fetchStudents();
//     fetchProjects();
//   }, []);

//   // const fetchStudents = async () => {
//   //   const res = await getStudents();
//   //   setStudents(res.data);
//   // };
//   const fetchStudents = async () => {
//     try {
//       const res = await getStudents();
//       console.log("STUDENTS RESPONSE:", res.data);
//       setStudents(res.data);
//     } catch (error) {
//       console.error(
//         "Error fetching students:",
//         error.response?.data || error.message,
//       );
//     }
//   };

//   const fetchProjects = async () => {
//     const res = await getAllProjects();
//     setProjects(res.data);
//   };

//   const handleApprove = async (id) => {
//     await approveStudent(id);
//     setStudents((prev) =>
//       prev.map((s) => (s._id === id ? { ...s, gotPermission: true } : s)),
//     );
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AdminSidebar />
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Container>
//           <Typography variant="h5" gutterBottom>
//             Students
//           </Typography>

//           {students.map((s) => (
//             <StudentCard key={s._id} student={s} onApprove={handleApprove} />
//           ))}

//           <Divider sx={{ my: 4 }} />

//           <Typography variant="h5" gutterBottom>
//             All Projects
//           </Typography>

//           {projects.map((project) => (
//             <ProjectCard key={project._id} project={project} />
//           ))}
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default AdminDashboard;
import { useEffect, useState } from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { getStudents, approveStudent } from "../services/adminService";
import { getAllProjects } from "../services/projectService";
import StudentCard from "../components/StudentCard";
import ProjectCard from "../components/ProjectCard";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchProjects();
  }, []);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const fetchProjects = async () => {
    const res = await getAllProjects();
    setProjects(res.data);
  };

  const handleApprove = async (id) => {
    await approveStudent(id);
    setStudents((prev) =>
      prev.map((s) => (s._id === id ? { ...s, gotPermission: true } : s)),
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AdminSidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container>
          <Typography variant="h5">Students</Typography>

          {students.map((s) => (
            <StudentCard key={s._id} student={s} onApprove={handleApprove} />
          ))}

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5">All Projects</Typography>

          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              refreshProjects={fetchProjects}
            />
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
