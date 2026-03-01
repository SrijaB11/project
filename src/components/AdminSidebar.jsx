// import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

// const AdminSidebar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: 240,
//           boxSizing: "border-box",
//         },
//       }}
//     >
//       <Toolbar />
//       <List>
//         <ListItem button>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default AdminSidebar;
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

const AdminSidebar = () => {
  return (
    <Drawer variant="permanent">
      <Toolbar />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Students" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
