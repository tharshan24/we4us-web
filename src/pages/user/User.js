import React, { useState, useEffect } from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  // Publish,
} from "@material-ui/icons";
// import { Link } from "react-router-dom";
import "./user.css";

import http from "../../services/httpService";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

export default function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const { data } = await http.get(`/admin/viewPublicbyId/${userId}`);
      setUser(data.result.row[0]);
      console.log(data.result.row[0]);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading)
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

  if (!user)
    return (
      <div className="user">
        <p>User not found</p>
      </div>
    );

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">User Details</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
              {user.profile_picture_path && (
                  <img src={user.profile_picture_path.split(" ")[0]} height={50} width={50} />
                )}
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.user_name}</span>
              <span className="userShowUserTitle">{user.user_type_name}</span>
              <span className="userShowUserTitle">Active</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{`${user.first_name} ${user.last_name}`}</span>
            </div>
            {/* <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{user.dob}</span>
            </div> */}
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.mobile_number}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{user.name_en}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
