import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { useState, useEffect } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [state, setState] = useState(true);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menuOptions = [
    ["Home", <HomeIcon sx={{ color: "white" }} />],
    ["Explore", <ExploreOutlinedIcon sx={{ color: "white" }} />],
    ["Subscriptions", <SubscriptionsOutlinedIcon sx={{ color: "white" }} />],
    ["Library", <VideoLibraryOutlinedIcon sx={{ color: "white" }} />],
    ["History", <HistoryOutlinedIcon sx={{ color: "white" }} />],
    ["Your Videos", <OndemandVideoOutlinedIcon sx={{ color: "white" }} />],
    ["Watch Later", <WatchLaterOutlinedIcon sx={{ color: "white" }} />],
    ["Show More", <KeyboardArrowDownOutlinedIcon sx={{ color: "white" }} />],
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#202020",
        color: "#fff",
        height: "100%",
        overflowY: "scroll",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="burgerMenu">
        <MenuIcon sx={{ color: "white", mt: 3, ml: 2, mb: 3 }} />
        <div className="youtubeLogo">
          <YouTubeIcon sx={{ color: "red", fontSize: "30px", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, mr: 5 }}
          >
            YouTube
          </Typography>
        </div>
      </div>

      <List>
        {menuOptions.slice(0, 3).map(([label, Icon]) => (
          <ListItem button key={label}>
            <ListItemIcon>{Icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#2c2c2c" }} />

      <List>
        {menuOptions.slice(3, 8).map(([label, Icon]) => (
          <ListItem button key={label}>
            <ListItemIcon>{Icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#2c2c2c" }} />
      <Typography
        variant="subtitle2"
        noWrap
        component="div"
        sx={{
          ml: 3,
          mt: 2,
          color: "#aaa",
          fontWeight: "bolder",
          letterSpacing: "1px",
        }}
      >
        SUBSCRIPTIONS
      </Typography>
      <div className="imagesForChannelSubs">
        <img src="" alt="" />
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ color: "white" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
