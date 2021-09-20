import React from "react";
import "./topbar.css";
//import { NotificationsNone, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
//import "NotificationsNone"

export default function Topber() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">We4us</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            {/* <Link to="/notification" className="link" >
              <NotificationsNone/>
              <span className="topIconBadge">2</span>
             </Link> */}
          </div>
          {/* <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <Link to="/" className="link">
            <span className="logout">log out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
