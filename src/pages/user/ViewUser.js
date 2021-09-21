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

export default function ViewUser() {
  const [viewUser, setViewUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { userId } = useParams();

  useEffect(() => {
    const fetchViewUser = async () => {
      setLoading(true);
      const { data } = await http.get(`/admin/viewOrganizationsbyId/${userId}`);
      setViewUser(data.result.row[0]);
      console.log(data.result.row[0]);
      setLoading(false);
    };
    fetchViewUser();
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

  if (!viewUser)
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
          {viewUser.profile_picture_path && (
              <img src={viewUser.profile_picture_path.split(" ")[0]} height={50} width={50} />
            )}
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{viewUser.user_name}</span>
              <span className="userShowInfoTitle">{viewUser.name}</span>
            </div>
            <div className="userShowInfo">
              {/* <CalendarToday className="userShowIcon" /> */}
              <span className="userShowInfoTitle">{viewUser.website}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{viewUser.mobile_number}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{viewUser.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{viewUser.name_en}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
