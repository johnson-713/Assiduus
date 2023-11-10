import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css";
import {  Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img
            className="navbar__logo"
            src="https://mma.prnewswire.com/media/1920828/Assiduus_Global_Logo.jpg?p=facebook"
            alt=""
          />
        </Link>
      </div>

      <div className="navbar__right">
        <input type="text" name="searchbox" className="navbar__searchbox" />
        <NotificationsIcon style={{ width: 30 }} />
        <Avatar
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
          style={{ width: 30, height: 30 }}
        />
        <ArrowDropDownIcon style={{ marginRight: 40 }} />
      </div>
    </div>
  );
}

export default Navbar;
