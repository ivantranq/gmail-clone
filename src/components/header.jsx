import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r4.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search in emails" type="text" />
        <TuneIcon className="header__input-caret" />
      </div>
      <div className="header__right">
        <IconButton>
            <HelpOutlineIcon />
        </IconButton>
        <IconButton>
            <SettingsIcon />
        </IconButton>
        <IconButton>
            <AppsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
