// import { Card, CardContent, Typography, Button } from "@mui/material";

// const StudentCard = ({ student, onApprove }) => {
//   return (
//     <Card sx={{ mt: 2 }}>
//       <CardContent>
//         <Typography variant="h6">{student.name}</Typography>
//         <Typography variant="body2">{student.email}</Typography>

//         <Button
//           sx={{ mt: 2 }}
//           variant="contained"
//           color={student.gotPermission ? "success" : "primary"}
//           disabled={student.gotPermission}
//           onClick={() => onApprove(student._id)}
//         >
//           {student.gotPermission ? "Approved" : "Approve"}
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default StudentCard;
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const StudentCard = ({ student, onApprove }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{student.name}</Typography>
        <Typography>Email: {student.email}</Typography>
        <Typography>
          Status: {student.gotPermission ? "Approved" : "Not Approved"}
        </Typography>

        {!student.gotPermission && (
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="contained" onClick={() => onApprove(student._id)}>
              Approve
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default StudentCard;
