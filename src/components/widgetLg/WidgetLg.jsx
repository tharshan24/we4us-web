import React, { useEffect, useState } from "react";
import "./widgeLg.css";
import { Typography,Button } from "@material-ui/core";
import {
  AccountBalance,
  Group,
  HomeWork,
  ShopTwo,
} from "@material-ui/icons";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import RoomIcon from '@mui/icons-material/Room';

import http from "../../services/httpService";
import axios from "axios";

export default function WidgetLg() {
  const [count, setCount] = useState({
    availability: 0,
    request: 0,
    collectionPoint: 0,
    sellingPoint: 0,
    driver: 0,
  });
  
console.log(count.availability)
  useEffect(() => {
    const fetchCounts = async () => {
      const results = await axios.all([
        http.get("/admin/countAvailability"),
        http.get("/admin/countRequest"),
        http.get("/admin/countColPoint"),
        http.get("/admin/countSellPoint"),
        http.get("/admin/countDrivers"),
      ]);

      if (results[0].data.result?.row[0]) {
        setCount({
          availability: Object.values(results[0].data.result.row[0])[0],
          request: Object.values(results[1].data.result.row[0])[0],
          collectionPoint: Object.values(results[2].data.result.row[0])[0],
          sellingPoint: Object.values(results[3].data.result.row[0])[0],
          driver: Object.values(results[4].data.result.row[0])[0],
        });
      }
    };

    fetchCounts();
  }, []);
  return (
    <div>
      <span
          style={{
            textAlign: "center",
            color: "#ffff",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <center>...............</center>
        </span>
        <span
          style={{
            textAlign: "center",
            color: "#ffff",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <center>         ........... </center>
        </span>
    <div className="featured">
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Availability <Group className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.availability}
        </Typography>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Request <PhoneInTalkIcon className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.request}
        </Typography>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Collection Point <AddShoppingCartIcon className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.collectionPoint}
        </Typography>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Selling Point <RoomIcon className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.sellingPoint}
        </Typography>
      </div>
      <div className="featuredItem">
        <Typography component="p" variant="h5">
          Driver <DeliveryDiningIcon className="featuredIcon negative" />
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {count.driver}
        </Typography>
      </div>
    </div>
    </div>
  );
}