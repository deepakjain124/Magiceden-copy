import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import SendIcon from "@mui/icons-material/Send";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Divider from "@mui/material/Divider";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Smallslider from "./Smallslider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";
import Carousal from "./Carousal";
import { Auctions, launchpad, Newtonft } from "./Alldata";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Bar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleResize = () => {
    if (window.innerWidth < 620) {
      setOpen(false);
    } else if (window.innerWidth < 720) {
      // setIsMobile(false)
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // create an event listener
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //   const responsive = {
  //     superLargeDesktop: {
  //       // the naming can be any, depends on you.
  //       breakpoint: { max: 4000, min: 3000 },
  //       items: 5
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 3
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1
  //     }
  //   };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}

        <Drawer
          sx={{
            width: drawerWidth,

            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              marginTop: "30px",
              background: "rgba(28,19,38)",
              color: "#fff",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> */}
          <Divider />

          <List>
            {[
              { text: "Marketpalce", icon: <AutoAwesomeIcon /> },
              { text: "Insight", icon: <InsightsOutlinedIcon /> },
              { text: "Launched", icon: <RocketLaunchOutlinedIcon /> },
              { text: "Eden Games", icon: <SportsEsportsOutlinedIcon /> },
              { text: "Creaters", icon: <WorkspacePremiumOutlinedIcon /> },
              {
                text: "Intro to Solana NFTs",
                icon: <WorkspacePremiumOutlinedIcon />,
              },
              { text: "Support", icon: <HelpOutlineOutlinedIcon /> },
              { text: "Resources", icon: <HelpOutlineOutlinedIcon /> },
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton style={{ fontSize: "14px" }}>
                  <ListItemIcon style={{ color: "white" }}>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.text} />
                  <ListItemIcon
                    style={{ marginRight: "-30px", color: "white" }}
                  >
                    <KeyboardArrowDownOutlinedIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider
            sx={{
              color: "white",
              marginTop: "80px",
            }}
          />
          <Stack
            direction="row"
            sx={{
              marginLeft: "15px",
              marginTop: "15px",
            }}
            spacing={1}
          >
            <Button
              size="small"
              sx={{ borderColor: "gray", color: "white" }}
              variant="outlined"
              startIcon={<PhoneIphoneOutlinedIcon />}
            >
              iOS App
            </Button>
            <Button
              size="small"
              sx={{ borderColor: "gray", color: "white" }}
              variant="outlined"
              startIcon={<SendIcon />}
            >
              Discord
            </Button>
          </Stack>
          <Stack
            direction="row"
            sx={{
              marginLeft: "15px",
              marginTop: "15px",
            }}
            spacing={1}
          >
            <Button
              size="small"
              sx={{ borderColor: "gray", color: "white" }}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Tik Tok
            </Button>
            <Button
              size="small"
              sx={{ borderColor: "gray", color: "white" }}
              variant="outlined"
              startIcon={<SendIcon />}
            >
              Youtube
            </Button>
          </Stack>
          <Stack
            direction="row"
            sx={{
              marginLeft: "15px",
              marginTop: "15px",
            }}
            spacing={1}
          >
            <Button
              size="small"
              sx={{ borderColor: "gray", color: "white" }}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Twitter
            </Button>
            <Button
              size="small"
              sx={{ borderColor: "gray", color: "white" }}
              variant="outlined"
              startIcon={<PodcastsOutlinedIcon />}
            >
              Podcast
            </Button>
          </Stack>
        </Drawer>

        <Main open={open} className="right_section">
          <DrawerHeader />
          <Smallslider toggle={true} text="Lanuchpad Drops" />
          <Carousal coming={launchpad} />
          <Smallslider text="New to NFTs" />
          <Carousal coming={Newtonft}  />
          <Smallslider text="Upcoming Launches" />
          <Carousal />
          <Smallslider text="Top Community Upvoted Drops" />
          <Carousal />
          <Smallslider text="Auctions" />
          <Carousal coming={Auctions} />
          <Smallslider text="Top Marketcap Projects" />
          <Carousal />
          <Smallslider text="OG SOL Projects" />
          <Carousal />
          <Smallslider text="Most Followed Collections" />
          <Carousal />
          <Smallslider text="MagicDAO Voted" />
          <Carousal />
          <Smallslider text="Highest Sales" />
          <Carousal />
          <Smallslider text="New Collections" />
          <Carousal />
          <Footer />
        </Main>
      </Box>
    </>
  );
}