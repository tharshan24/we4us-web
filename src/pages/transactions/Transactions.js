import React, { useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import http from "../../services/httpService";
import { CircularProgress } from "@material-ui/core";
import moment from "moment";

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'use_name',
    headerName: 'Driver Name',
    width: 150,
  },
  // {
  //   field: 'name',
  //   headerName: 'Name',
  //   width: 150, 
  // },
  {
    field: 'user_name',
    headerName: 'Creater',
    width: 150,
  },
  {
    field: 'user1_name',
    headerName: 'Requster',
    width: 150,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
  },
  {
    field: 'time',
    headerName: 'Time',
    type: 'number',
    width: 120,
  },
  {
    field: 'payment_Type',
    headerName: 'Payment Type',
    width: 150,
  },
  {
    field: 'amount',
    headerName: 'Payment',
    type: 'number',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
  },
];

const rows = [
  { id: 1, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 2, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 3, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 4, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 5, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 6, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 7, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 8, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 9, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 10, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 11, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 12, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 13, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },
  { id: 14, userName: 'Snow', name: 'Jon',from: 'Mathu', to: 'Mithula',date: '21.09.2021', time: 10.30,paymentType: 'paid', amount: 200 ,status: 'deliverd' },

];

export default function Transactions() {
  //backend connection
  const [tracsactions, setTracsactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetctTracsactions = async () => {
      setLoading(true);
      const { data } = await http.get("/admin/deliveryPaymentFilter");
      const avail = data.result.row;
      for (let i = 0; i < data.result.row.length; i++) {
        data.result.row[i]["date"] = moment(
          data.result.row[i]["created_at"]
        ).format("YYYY/MM/DD");

        data.result.row[i]["time"] = moment(
          data.result.row[i]["created_at"]
        ).format("HH:mm");
      }
      setTracsactions(avail);
      setLoading(false);
    };
    fetctTracsactions();
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
    <div style={{ height: 500, width: '100%' }}>
      <div>
        <span style={{textAlign: 'center', 
          color:'#3F51B5',
          fontSize:32,
          fontWeight:600}}>  
          <center>   Transaction Table</center>
        </span>
      </div>
      <DataGrid
        rows={tracsactions}
        columns={columns}
        pageSize={6}
       // checkboxSelection
       // disableSelectionOnClick
      />
    </div>
  );
}
