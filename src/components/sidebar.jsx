import { Button, IconButton } from "@mui/material";
import React from "react";
import "./sidebar.css";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./ui/SidebarOption";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {
    const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon fontSize="large" />}
        className="sidebar__compose"
        onClick = {() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      <SidebarOption Icon={SendIcon} title="Sent" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footer-icons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
