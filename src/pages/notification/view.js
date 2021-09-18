import {
    // CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    // Publish,
  } from "@material-ui/icons";
  // import { Link } from "react-router-dom";
  import "../notification/user.css";
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">DETAILS</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Anna Becker</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99</span>
              </div>
              <div className="userShowInfo">
                {/* <CalendarToday className="userShowIcon" /> */}
                <span className="userShowInfoTitle">12452112</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Description</span>
            <div className="userShowBottom">
            <div className="img1">
            <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
                height={100} width={200}
            />
            </div> 
            <div className="img2">
            <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
                height={100} width={200}
            />
            </div>
            </div>
            <div className="userUpdateRight">
            <button className="userUpdateButton1">Accept</button>
            </div>
            <div className="userUpdateRight">
            <button className="userUpdateButton2">Reject</button>
             </div>
          </div>
        </div>
      </div>
    );
  }