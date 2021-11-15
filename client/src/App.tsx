import React from "react";
import { theme } from "./MuiTheme";
import {
  Divider,
  Box,
  Drawer,
  List, 
  AppBar,
  Button,
  ListItemIcon,
  ListItemText,
  ListItem,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { PatreonButton } from "./components/PatreonButton";
import logo from "./assets/logo_no_text_white.png";
import { Router } from "./Router";
import { Link, useNavigate } from 'react-router-dom'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'
import HomeIcon from '@mui/icons-material/Home'
import GetAppIcon from '@mui/icons-material/GetApp'

const ResourceMenuItems = [
  {
    title: "YouTube Videos",
    url: "/youtube",
    icon: <YouTubeIcon style={{ fontSize: 32}} />,
  },
  {
    title: "GitHub Repositories",
    url: "/github",
    icon: <GitHubIcon style={{ fontSize: 32}} />,
  },
];

const ToolsMenuItems = [
  {
    title: "Install a Component",
    url: "install-component",
    icon: <GetAppIcon style={{ fontSize: 32}} />,
  },
];

const MenuItems = [
  {
    items: [
      {
        title: "Welcome",
        url: "",
        icon: <HomeIcon style={{ fontSize: 32}} />,
      },
    ],
  },
  // { items: ResourceMenuItems },
  { items: ToolsMenuItems },
];

const drawerWidth = 240;

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                window.location.href = 'https://www.pragmaflow.com'
              }}
              sx={{ mr: 2 }}
            >
              <img
                alt="logo"
                src={logo}
                height="45"
                style={{ marginRight: "15px", cursor: "pointer" }}
              />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PragmaFlow's Adalo Resource Center
            </Typography>
            <PatreonButton />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box>
            <List>
              {MenuItems.map((menuItem, i) => (
                <React.Fragment key={i}>
                  {menuItem.items.map((item) => (
                    <Link key={item.title} to={item.url}>
                    <ListItem
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItem>
                    </Link>
                  ))}
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Router />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
