import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import http from "../../services/httpService";
import { CircularProgress } from "@material-ui/core";


export default function DriverList() {
  const [data] = useState(userRows);
  const [drivers, setDrivers] = useState([]);
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchDrivers = async () => {
      setLoading(true);
      const { data } = await http.get("/admin/viewAllDrivers/");
      setDrivers(data.result.row);
      setStatus(data.result.row.status);
      console.log(data.result.row);
      setLoading(false);
    };
    fetchDrivers();
  }, []);

  const columns = [
    { field: "id",
     headerName: "ID",
      width: 100,
     },
     { field: "user_name",
     headerName: "User Name",
      width: 160,
     },
    // {
    //   field: "profile_picture_path",
    //   headerName: "Profile",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avatar} alt="" />
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    { field: "email", headerName: "Email", width: 200 },
    

    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    // {
    //   field: "type",
    //   headerName: "User Type",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/viewDriver/" + params.row.id}>
              <button className="userListEdit">ViewDriver</button>
            </Link>
          </>
        );
      },
    },
  ];

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
    <div className="userList">
      <DataGrid
        rows={drivers}
        disableSelectionOnClick
        columns={columns}
        // pageSize={8}
        //checkboxSelection
      />
    </div>
  );
}
