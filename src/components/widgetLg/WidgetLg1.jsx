import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DialogTitle } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
    flex: 1,
  },
});

function createData(name, date, time, amount, status) {
  return { name, date, time, amount, status };
}

const rows = [
  createData('Thishan', "12 sep 2021", "1pm", 240, "Deliverd"),
  createData('Tharshan', "12 sep 2021", "1pm", 240, "Deliverd"),
  createData('Athavan', "12 sep 2021", "1pm", 240, "Deliverd"),
  createData('Mathura', "12 sep 2021", "1pm", 240, "Deliverd"),
  createData('Mithula', "12 sep 2021", "1pm", 240, "Deliverd"),
];

export default function WidgetLg() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <DialogTitle>Latest Transactions</DialogTitle>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

