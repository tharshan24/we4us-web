import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Visibility } from "@material-ui/icons";
//import { Link } from "react-router-dom";

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
    field: 'userType',
    headerName: 'User Type',
    width: 150,
  },
//   {
//     field: 'availabilityType',
//     headerName: 'Availability Type',
//     width: 150,
//   },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 120,
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
    // renderCell: (params) => {
    //   return (
    //     <>
    //       <Link to={"/view/" + params.row.id}>
    //         <button className="userListEdit">View Details</button>
    //       </Link>
    //     </>
    //   );
    // },
  },
];



const rows = [
  { id: 1, name: 'Snow', userType: 'NGO',date: '21.09.2021', time: '10.30', city:<Visibility/>,view:'view' },
  { id: 2, name: 'Snow', userType: 'NGO',date: '21.09.2021', time: '10.30', city:<Visibility/>,view:'view' },
  { id: 3, name: 'Snow', userType: 'NGO',date: '21.09.2021', time: '10.30', city:<Visibility/>,view:'view' },
  { id: 4, name: 'Snow', userType: 'NGO',date: '21.09.2021', time:' 10.30', city:<Visibility/>,view:'view' },

];

export default function Request() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <div>
        <span style={{textAlign: 'center', 
          color:'#3F51B5',
          fontSize:32,
          fontWeight:600}}>  
          <center>Request</center>
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

