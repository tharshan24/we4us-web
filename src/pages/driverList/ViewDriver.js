import { useState, useEffect } from "react";
import {
  // CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  // Publish,
} from "@material-ui/icons";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
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
          {driver.profile_picture_path && (
              <img src={driver.profile_picture_path.split(" ")[0]} height={10} width={20} />
            )}
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
              <FeaturedPlayListIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{driver.license_no}</span>
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
              <img src={driver.license_proof_path.split(" ")[0]} height={100} width={200} />
            )}
          </div>
          <div className="img2">
            {driver.license_proof_path && (
              <img src={driver.vehicle_book_proof.split(" ")[0]} height={100} width={200} />
            )}
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
