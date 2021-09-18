import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";

const columns = [
  { field: 'id',
   headerName: 'ID',
    width: 100 
  },
  {
    field: 'name',
    headerName: 'User name',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
  {
    field: 'start_Time',
    headerName: 'Start Date',
    width: 150,
  },
  {
    field: 'end_Time',
    headerName: 'End Date',
    width: 150,
  },
  {
    field: 'city',
    headerName:'City',
    width: 150,
  },
  {
    field: "view",
    headerName: "View",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/viewCollectionPoint/" + params.row.id}>
            <button className="userListEdit">View Details</button>
          </Link>
        </>
      );
    },
  },
];



const rows = [
  { id: 1, name: 'Snow', status:'pending', start_Time: '10.30',end_Time: '10.30', city:<Visibility/>,view:'view' },
//   { id: 2, name: 'Snow', userType: 'NGO',date: '21.09.2021', time: '10.30', city:<Visibility/>,view:'view' },
//   { id: 3, name: 'Snow', userType: 'NGO',date: '21.09.2021', time: '10.30', city:<Visibility/>,view:'view' },
//   { id: 4, name: 'Snow', userType: 'NGO',date: '21.09.2021', time:' 10.30', city:<Visibility/>,view:'view' },

];

export default function CollectionPoint() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <div>
        <span style={{textAlign: 'center', 
          color:'#3F51B5',
          fontSize:32,
          fontWeight:600}}>  
          <center>CollectionPoint Point</center>
        </span>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
       // checkboxSelection
       // disableSelectionOnClick
      />
    </div>
  );
}
