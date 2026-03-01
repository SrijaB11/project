import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const StudentSidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/student-dashboard")}>
            <ListItemText primary="My Projects" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/add-project")}>
            <ListItemText primary="Add Project" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default StudentSidebar;
