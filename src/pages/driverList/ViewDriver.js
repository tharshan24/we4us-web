import { useState, useEffect } from "react";
import {
  // CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  // Publish,
} from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../notification/user.css";

import http from "../../services/httpService";
import { CircularProgress, Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";

export default function ViewDriver() {
  const history = useHistory();

  const [driver, setDriver] = useState();
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const { userId } = useParams();

  useEffect(() => {
    const fetchDriver = async () => {
      setLoading(true);
      const { data } = await http.get(`/admin/viewDriverById/${userId}`);
      setDriver(data.result.row[0]);
      console.log(data.result.row[0]);
      setLoading(false);
    };
    fetchDriver();
  }, []);

  const handleDriverStatus = async (status) => {
    try {
      await http.get(`/admin/updateDriverStatus/${userId}/${status}`);
      setIsSuccess(true);
    } catch (e) {
      console.log(e);
    }
  };

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

  return (
    <div className="user">
      <Snackbar
        open={isSuccess}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => {
          setIsSuccess(false);
          history.goBack();
        }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Successfully updated the status
        </Alert>
      </Snackbar>
      ;
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
              <span className="userShowUsername">{`${driver.first_name} ${driver.last_name}`}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{driver.user_name}</span>
            </div>
            <div className="userShowInfo">
              {/* <CalendarToday className="userShowIcon" /> */}
              <span className="userShowInfoTitle">12452112</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{driver.mobile_number}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{driver.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{driver.name_en}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Description</span>
          <div className="userShowBottom"></div>
          <div className="img1">
            {driver.license_proof_path && (
              <img src={driver.license_proof_path} height={100} width={200} />
            )}
          </div>
          <div className="img2">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg"
              height={100}
              width={200}
            />
          </div>
          <div className="userUpdateRight">
            <button
              className="userUpdateButton1"
              onClick={() => handleDriverStatus(1)}
            >
              Accept
            </button>
          </div>
          <div className="userUpdateRight">
            <button
              className="userUpdateButton2"
              onClick={() => handleDriverStatus(0)}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
