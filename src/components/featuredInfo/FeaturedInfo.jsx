import "./featuredInfo.css";
import { Typography } from "@material-ui/core";
import { AccountBalance, Group, HomeWork, Restaurant, ShopTwo } from "@material-ui/icons";
// import axios from "axios";
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
  return (

    <div className="featured">
      {/* <div className="featuredItem">
        <span className="featuredTitle">Public  <Group className="featuredIcon negative"/></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10</span>
        </div>
      </div> */}
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Public <Group className="featuredIcon negative"/>
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          5
        </Typography>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          NGO <AccountBalance className="featuredIcon negative"/>
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          4
        </Typography>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Care Home <HomeWork className="featuredIcon negative"/>
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          5
        </Typography>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Shop <ShopTwo className="featuredIcon negative"/>
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          5
        </Typography>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Restaurant <Restaurant className="featuredIcon negative"/>
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          5
        </Typography>
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
