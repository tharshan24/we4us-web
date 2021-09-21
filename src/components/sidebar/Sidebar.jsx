import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  BarChart,
  WorkOutline,
} from "@material-ui/icons";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RoomIcon from '@mui/icons-material/Room';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
              </Link>
            {/* <Link to="/analytics" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link> */}
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Services</h3>
          <ul className="sidebarList">
            <Link to="/availability" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Availability
              </li>
            </Link>
            <Link to="/request" className="link">
              <li className="sidebarListItem">
                <PhoneInTalkIcon className="sidebarIcon" />
                Request
              </li>
            </Link>
            <Link to='/collectionPoint' className="link">
              <li className="sidebarListItem">
                <AddShoppingCartIcon className="sidebarIcon" />
                Collection Points
              </li>
            </Link>
            <Link to="/sellingPoint" className="link">
              <li className="sidebarListItem">
                <RoomIcon className="sidebarIcon" />
                Selling Points
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            {/* <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link> */}
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
          </ul>
        </div> */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Driver</h3>
          <ul className="sidebarList">
            <Link to="/driverList" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            </Link>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
            {/* <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
