import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";

import http from "../../services/httpService";
import moment from "moment";
import { CircularProgress } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user_name",
    headerName: "User name",
    width: 150,
  },
  {
    field: "user_type_name",
    headerName: "User Type",
    width: 150,
  },
  //   {
  //     field: 'availabilityType',
  //     headerName: 'Availability Type',
  //     width: 150,
  //   },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "time",
    headerName: "Time",
    width: 120,
  },
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
          <Link to={"/ViewRequest/" + params.row.id}>
            <button className="userListEdit">View Details</button>
          </Link>
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "Snow",
    userType: "NGO",
    date: "21.09.2021",
    time: "10.30",
    city: <Visibility />,
    view: "view",
  },
  {
    id: 2,
    name: "Snow",
    userType: "NGO",
    date: "21.09.2021",
    time: "10.30",
    city: <Visibility />,
    view: "view",
  },
  {
    id: 3,
    name: "Snow",
    userType: "NGO",
    date: "21.09.2021",
    time: "10.30",
    city: <Visibility />,
    view: "view",
  },
  {
    id: 4,
    name: "Snow",
    userType: "NGO",
    date: "21.09.2021",
    time: " 10.30",
    city: <Visibility />,
    view: "view",
  },
];

export default function Request() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequest = async () => {
      setLoading(true);
      const { data } = await http.get("/admin/viewRequest");
      if (data.result?.row) {
        for (let i = 0; i < data.result.row.length; i++) {
          data.result.row[i]["date"] = moment(
            data.result.row[i]["created_at"]
          ).format("YYYY/MM/DD");

          data.result.row[i]["time"] = moment(
            data.result.row[i]["created_at"]
          ).format("HH:mm");
        }
        setRequests(data.result.row);
        setLoading(false);
      }
    };
    fetchRequest();
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
          <center>Request</center>
        </span>
      </div>
      <DataGrid
        rows={requests}
        columns={columns}
        pageSize={6}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
}
