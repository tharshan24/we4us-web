import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

import http from "../../services/httpService";

const ViewRequest = (props) => {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [request, setRequest] = useState();
  const [values, setValues] = useState({
    name: "Katarina",
    email: "demo@devias.io",
    phone: "0774458400",
    total: "15",
    request_type: "wedding",
    description: "qqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    food_type: "veg",
    need_before: "12.30",
    item_priority: "bnm",
    status: "pending",
  });

  //   const handleChange = (event) => {
  //     setValues({
  //       ...values,
  //       [event.target.name]: event.target.value
  //     });
  //   };

  useEffect(() => {
    const fetctRequest = async () => {
      setLoading(true);
      const { data } = await http.get(`/admin/viewRequestById/${userId}`);
      setRequest(data.result.row[0]);
      console.log(data.result.row[0]);
      setLoading(false);
    };
    fetctRequest();
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
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader title="Details" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Total quantity"
                name="total"
                type="number"
                value={values.total}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Request type"
                name="request_type)"
                type="text"
                value={values.request_type}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                type="text"
                value={values.description}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Food Type"
                name="food_type"
                type="text"
                value={values.food_type}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Need before"
                name="need_before"
                type="datetime"
                value={values.need_before}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Items_priority"
                name="items_priority"
                type="text"
                value={values.item_priority}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Status"
                name="status"
                type="text"
                value={values.status}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}></Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        ></Box>
      </Card>
    </form>
  );
};

export default ViewRequest;
