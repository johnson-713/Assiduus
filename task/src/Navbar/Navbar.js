import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from '@mui/material/Avatar';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__empty"></div>

      <div className="navbar__contents">
        <input type="text" name="searchbox" className="navbar__searchbox" />
        <NotificationsIcon style={{ width: 30}} />
        <Avatar src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" style={{ width: 30, height: 30}} />
        <ArrowDropDownIcon style={{ marginRight: 40}} />
      </div>
    </div>
  );
}

export default Navbar;
