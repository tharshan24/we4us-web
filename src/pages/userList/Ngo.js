import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import http from "../../services/httpService";
import { CircularProgress } from "@material-ui/core";

export default function Ngo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [data1, setData] = useState([]);

  useEffect(() => {
    const fetchNgo = async () => {
      setLoading(true);
      const { data } = await http.get("/admin/viewNgo");
      setData(data.result.row);
      console.log(data.result.row);
      setLoading(false);
    };
    fetchNgo();
  }, []);
  
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
   
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "user_type_name",
      headerName: "User Type",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/viewUser/" + params.row.id}>
              <button className="userListEdit">View</button>
            </Link>
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
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
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        // checkboxSelection
      />
    </div>
  );
}
