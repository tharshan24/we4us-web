import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import http from "../../services/httpService";
import { CircularProgress } from "@material-ui/core";
import moment from "moment";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user_name",
    headerName: "Creater name",
    width: 180,
  },
  {
    field: "user_type_name",
    headerName: "Creater Type",
    width: 180,
  },
  // {
  //   field: "avail_type_name",
  //   headerName: "Availability Type",
  //   width: 150,
  // },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "time",
    headerName: "Time",
    type: "time",
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
          <Link to={"/viewAvailability/" + params.row.id}>
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
    avail_type_name: "ttttt",
    date: "21.09.2021",
    time: 10.3,
    city: <Visibility />,
    view: "view",
  },
];

export default function Availability() {
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetctAvailability = async () => {
      setLoading(true);
      const { data } = await http.get("/admin/viewAvailability");
      const avail = data.result.row;
      for (let i = 0; i < data.result.row.length; i++) {
        data.result.row[i]["date"] = moment(
          data.result.row[i]["created_at"]
        ).format("YYYY/MM/DD");

        data.result.row[i]["time"] = moment(
          data.result.row[i]["created_at"]
        ).format("HH:mm");
      }
      setAvailability(avail);
      setLoading(false);
    };
    fetctAvailability();
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
          <center> Availability</center>
        </span>
      </div>
      <DataGrid
        rows={availability}
        columns={columns}
        pageSize={6}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
}
