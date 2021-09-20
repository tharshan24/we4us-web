import React, { useEffect, useState } from "react";
import "./featuredInfo.css";
import { Typography,Button } from "@material-ui/core";
import {
  AccountBalance,
  Group,
  HomeWork,
  Restaurant,
  ShopTwo,
} from "@material-ui/icons";
import http from "../../services/httpService";
import { Link } from "react-router-dom";
import axios from "axios";
// import constants from "../../constants/Constants";

export default function FeaturedInfo() {
  // const userCount= async ()=>{
  //   await axios
  //     .get(constants.BASE_URL + 'public/viewProfile/' + userId, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then(function (response) {
  //       response.data.result.map((val) => {
  //         // console.log(val);
  //         setAccNo(val.account_number);
  //         setDriverStatus(val.driver_status);
  //       });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }

  const [count, setCount] = useState({
    public: 0,
    ngo: 0,
    carehome: 0,
    shop: 0,
    restaurant: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const results = await axios.all([
        http.get("/admin/countPublic"),
        http.get("/admin/countNgo"),
        http.get("/admin/countCarehomes"),
        http.get("/admin/countShops"),
        http.get("/admin/countRestaurants"),
      ]);

      console.log(results);

      if (results[0].data.result?.row[0]) {
        setCount({
          public: Object.values(results[0].data.result.row[0])[0],
          ngo: Object.values(results[1].data.result.row[0])[0],
          carehome: Object.values(results[2].data.result.row[0])[0],
          shop: Object.values(results[3].data.result.row[0])[0],
          restaurant: Object.values(results[4].data.result.row[0])[0],
        });
      }
    };

    fetchCounts();
  }, []);
  return (
    <div className="featured">
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Public <Group className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.public}
        </Typography>
        <Link to="/users" className="link">
            <span className="view">View</span>
         </Link>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          NGO <AccountBalance className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.ngo}
        </Typography>
        <Link to="/ngo" className="link">
            <span className="view">View</span>
         </Link>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Care Home <HomeWork className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.carehome}
        </Typography>
        <Link to="/careHome" className="link">
            <span className="view">View</span>
         </Link>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Shop <ShopTwo className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.shop}
        </Typography>
        <Link to="/shops" className="link">
            <span className="view">View</span>
         </Link>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Restaurant <Restaurant className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.restaurant}
        </Typography>
        <Link to="/restaurant" className="link">
            <span className="view">View</span>
         </Link>
      </div>
      {/* <div className="featuredItem">
        <span className="featuredTitle">NGO <AccountBalance className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4</span>
          </div>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Care Home <HomeWork className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2</span>
          </div>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Shop  <ShopTwo className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1</span>
          </div>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Restaurant <Restaurant className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4</span>
          </div>
        </div> */}
    </div>
  );
}
