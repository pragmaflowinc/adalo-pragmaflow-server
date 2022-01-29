import React, { useState } from "react";
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
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  ListItemButton as MuiListItemButton,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import logo from "./assets/logo_no_text_white.png";
import { Router } from "./Router";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GetAppIcon from "@mui/icons-material/GetApp";
import TranslateIcon from "@mui/icons-material/Translate";
import StoreIcon from "@mui/icons-material/Store";
import ArticleIcon from "@mui/icons-material/Article";
import TheatersIcon from "@mui/icons-material/Theaters";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import UpdateIcon from "@mui/icons-material/Update";
import { FeedbackButton } from "./components/FeedbackButton";
import ConstructionIcon from "@mui/icons-material/Construction";
import PolicyIcon from "@mui/icons-material/Policy";

const ListItemButton = withStyles({
  root: {
    "& .listItemIcon": {
      color: "#BBBCC1",
    },
    "&:hover": {
      color: "#50b6e8",
      backgroundColor: "#101011",
      "& .listItemIcon": {
        color: "#50b6e8",
      },
    },
    "&.Mui-selected": {
      backgroundColor: "#BBBCC1",
      color: "#18212D",
      "& .listItemIcon": {
        color: "#18212D",
      },
      "&:hover": {
        backgroundColor: "#BBBCC1",
        color: "#50b6e8",
      },
    },
  },
  selected: {},
})(MuiListItemButton);

function PrivacyPolicyDialog(props: any) {
  return (
    <Dialog
      open={props.showPrivacyPolicy}
      onClose={props.handlePrivacyClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <div>
          <h1>PragmaFlow Privacy Policy</h1>
          <p>
            We believe digital privacy is a fundamental right and work hard to
            make sure that it is respected. We do not do anything without you
            knowing. If you give us your email in the Leave Feedback form then
            your email will be stored in a postgres database so we can get back
            to you if you want. If you want your email removed from the
            database, just let us know. This site is hosted on the CA-CENTRAL-1
            servers from AWS. The only thing we can see is the number of page
            hits, but we don't bother to look. The Patron button had some
            tracking stuff built into it from Patreon, so I removed the button
            and replaced it with a link. We do use Vimeo, they might record your
            IP address. We have a mailchimp thing, if you drop us your email it
            will be stored in mailchimp until you unsubscribe.
          </p>
          <h1>PragmaFlow Terms</h1>
          <p>
            This tool is provided without warranty, guarantee, or much in the
            way of explanation. Note that use of this tool may or may not crash
            your browser, lock up your machine, erase your hard drive, or e-mail
            those naughty pictures you hid in the Utilities folder to your
            mother. Don't blame me if anything bad happens to you, because it's
            actually the aliens' fault. The code expressed herein is solely that
            of the author, and he's none too swift with the JavaScript, if you
            know what we mean, so it's likely to cause giggle fits in anyone who
            knows what they're doing. Not a flying toy. Thank you for playing.
            Insert coin to continue.
          </p>
          <p>taken from https://meyerweb.com/eric/tools/dencoder/</p>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handlePrivacyClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const ResourceMenuItems = [
  {
    title: "Component Docs",
    url: "/component-docs",
    icon: <ArticleIcon style={{ fontSize: 32 }} />,
  },
  {
    title: "Video How Tos",
    url: "/how-to",
    icon: <TheatersIcon style={{ fontSize: 32 }} />,
  },
  {
    title: "Best Practices",
    url: "/best-practices",
    icon: <HealthAndSafetyIcon style={{ fontSize: 32 }} />,
  },
  {
    title: "Compliance",
    url: "/compliance",
    icon: <PolicyIcon style={{ fontSize: 32 }} />,
  },
];

const ToolsMenuItems = [
  {
    title: "Install a Component",
    url: "/install-component",
    icon: <GetAppIcon style={{ fontSize: 32 }} />,
  },
  {
    title: "Other Marketplaces",
    url: "/other-marketplaces",
    icon: <StoreIcon style={{ fontSize: 32 }} />,
  },
  {
    title: "Translation Helper",
    url: "/translation-helper",
    icon: <TranslateIcon style={{ fontSize: 32 }} />,
  },
  {
    title: "Other Tools",
    url: "/other-tools",
    icon: <ConstructionIcon style={{ fontSize: 32 }} />,
  },
];

const MenuItems = [
  {
    items: [
      {
        title: "Welcome",
        url: "/welcome",
        icon: <HomeIcon style={{ fontSize: 32 }} />,
      },
    ],
  },
  { items: ToolsMenuItems },
  { items: ResourceMenuItems },
  {
    items: [
      {
        title: "Whats Next?",
        url: "/whats-next",
        icon: <UpdateIcon style={{ fontSize: 32 }} />,
      },
    ],
  },
];

const drawerWidth = 240;

function App() {
  const location = useLocation();
  const activeRoute = (routeName: string) => {
    return location.pathname.startsWith(routeName);
  };
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const handlePrivacyClose = () => setShowPrivacyPolicy(false);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "rgb(63,156,229)",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                window.location.href = "https://www.pragmaflow.com";
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
            <Button
              sx={{
                backgroundColor: "#0171BA",
                color: "white",
                marginRight: 1,
              }}
              onClick={() =>
                window.open(
                  "https://www.paypal.com/donate/?hosted_button_id=ZXNWD4QK8R2K4"
                )
              }
            >
              Donate via Paypal
            </Button>
            <Button
              sx={{ backgroundColor: "#FF424D", color: "white" }}
              onClick={() =>
                window.open("https://www.patreon.com/bePatron?u=64273451")
              }
            >
              Become a Patron
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              backgroundColor: "#18212D",
              width: drawerWidth,
              boxSizing: "border-box",
              color: "#BBBCC1",
            },
          }}
        >
          <Toolbar />
          <Box
            sx={{
              height: "100%",
              display: "grid",
              alignContent: "space-between",
            }}
          >
            <List>
              {MenuItems.map((menuItem, i) => (
                <React.Fragment key={i}>
                  {menuItem.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      style={{ textDecoration: "none" }}
                    >
                      <ListItemButton
                        selected={activeRoute(item.url)}
                        sx={{
                          color: "#BBBCC1",
                        }}
                      >
                        <ListItemIcon className="listItemIcon">
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItemButton>
                    </Link>
                  ))}
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            <Button
              sx={{ color: "#BBBCC1", height: 25, marginBottom: 1 }}
              onClick={() => setShowPrivacyPolicy(true)}
            >
              Privacy &amp; Terms
            </Button>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> 
          <Router />
        </Box>
        <FeedbackButton />

        <PrivacyPolicyDialog
          showPrivacyPolicy={showPrivacyPolicy}
          handlePrivacyClose={handlePrivacyClose}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
