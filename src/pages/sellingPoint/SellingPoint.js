import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
//import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";

import http from "../../services/httpService";
import { CircularProgress } from "@material-ui/core";
import moment from "moment";

const columns = [
  { field: "sellpoint_id", headerName: "ID", width: 100 },
  { field: "user_id", headerName: "User id", width: 150 },
  {
    field: "name",
    headerName: "User",
    width: 150,
  },
  {
    field: 'user_name',
    headerName: 'User name',
    width: 150,
  },
  //   {
  //     field: 'availabilityType',
  //     headerName: 'Availability Type',
  //     width: 150,
  //   },
  // {
  //   field: "start_Time",
  //   headerName: "Start Date",
  //   width: 150,
  // },
  // {
  //   field: "end_Time",
  //   headerName: "End Date",
  //   width: 150,
  // },
  {
    field: "name_en",
    headerName: "City",
    width: 150,
  },
  {
    field: "view",
    headerName: "View",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/viewSellingPoint/" + params.row.sellpoint_id}>
            <button className="userListEdit">View Details</button>
          </Link>
        </>
      );
    },
  },
];

const rows = [
  {
    sellpoint_id: 1,
    shop_id: 26,
    status: 1,
    start_time: "2021-09-21T06:36:00.000Z",
    end_time: "2021-09-23T08:36:00.000Z",
    user_id: 26,
    name: "hjbm,",
    user_name: "shop",
    name_en: "Jaffna"
  },
  // { id: 1, name: 'Snow', userType: 'NGO',date: '21.09.2021', time: '10.30', city:<Visibility/>,view:'view' },
  // { id: 2, name: 'Snow', userType: 'NGO',date: '21.09.2021', time: '10.30', city:<Visibility/>,view:'view' },
  // { id: 3, name: 'Snow', userType: 'NGO',date: '21.09.2021', time: '10.30', city:<Visibility/>,view:'view' },
  // { id: 4, name: 'Snow', userType: 'NGO',date: '21.09.2021', time:' 10.30', city:<Visibility/>,view:'view' },
];

export default function SellingPoint() {
  const [sellingPoint, setSellingPoint] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSelling = async () => {
      setLoading(true);
      const { data } = await http.get("/admin/viewSellPoint");
      for (let i = 0; i < data.result.row.length; i++) {
        data.result.row[i]["id"] = data.result.row[i]["sellpoint_id"];
        data.result.row[i]["start_time"] = moment(
          data.result.row[i]["start_time"]
        ).format("YYYY/MM/DD HH:mm");

        data.result.row[i]["end_time"] = moment(
          data.result.row[i]["end_time"]
        ).format("YYYY/MM/DD HH:mm");
      }
      setSellingPoint(data.result.row);
      console.log(data.result.row);
      setLoading(false);
    };
    fetchSelling();
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

  return (
    <div style={{ height: 500, width: "100%" }}>
      <div>
        <span
          style={{
            textAlign: "center",
            color: "#3F51B5",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <center>Selling Point</center>
        </span>
      </div>
      <DataGrid
        rows={sellingPoint}
        columns={columns}
        pageSize={6}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
}
