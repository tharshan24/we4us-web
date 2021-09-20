import { useState, useEffect } from "react";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { useParams, useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../notification/user.css";

import http from "../../services/httpService";
import { CircularProgress, Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";
  
  export default function ViewCollectionPoint() {
    const history = useHistory();

    const [collection, setColleciton] = useState();
     const [loading, setLoading] = useState(false);

   // const [isSuccess, setIsSuccess] = useState(false);
  
    const { userId } = useParams();
  
    useEffect(() => {
        const fetchCollection = async () => {
          setLoading(true);
          const { data } = await http.get(`/admin/viewColPointById/${userId}`);
          setColleciton(data.result.row[0]);
          console.log(data.result.row[0]);
          setLoading(false);
        };
        fetchCollection();
      }, []);
  
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">DETAILS</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{collection.name}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">{collection.email}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowTitle">Account Details</span>
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Account Details</span>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <span className="userShowTitle">Contact Details</span>  
                <span className="userShowInfoTitle">{collection.description}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <span className="userShowTitle">Contact Details</span>
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowTitle">Contact Details</span>
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <div className="userTitleContainer">
                <h1 className="userTitle">DETAILS</h1>
              </div>
              <div className="userContainer">
                <div className="userShow">
                  <div className="userShowTop">
                    <div className="userShowTopTitle">
                      <span className="userShowUsername">Anna Becker</span>
                    </div>
                  </div>
                  <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                      <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    <div className="userShowInfo">
                      <span className="userShowTitle">Account Details</span>
                      <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">Account Details</span>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                      <span className="userShowTitle">Contact Details</span>  
                      <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                      <span className="userShowTitle">Contact Details</span>
                      <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                      <span className="userShowTitle">Contact Details</span>
                      <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                  </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    );
  }