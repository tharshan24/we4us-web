import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { useParams } from "react-router-dom";

import http from "../../services/httpService";
import moment from "moment";

const ViewAvailability = (props) => {
  const { userId } = useParams();
  const [availability, setAvailability] = useState();
  const [values, setValues] = useState({
    name: "Katarina",
    user_Name: "Smith",
    email: "demo@devias.io",
    phone: "0774458400",
    total: "15",
    availability_type: "wedding",
    description: "qqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    food_type: "veg",
    cooked_time: "12.30",
    best_befor: "4.30",
    status: "pending",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const { data } = await http.get(`/admin/viewAvailabilityById/${userId}`);
      setAvailability(data.result.row[0]);
      console.log(data.result.row[0]);
      setLoading(false);
    };
    fetchUser();
  }, []);

  //   const handleChange = (event) => {
  //     setValues({
  //       ...values,
  //       [event.target.name]: event.target.value
  //     });
  //   };

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
                value={availability.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="User_Name"
                name="lastName"
                required
                value={availability.user_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                value={availability.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="number"
                value={availability.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Total quantity"
                name="total"
                type="number"
                value={availability.total_quantity}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Availability type"
                name="availability_type)"
                type="text"
                value={availability.availability_type}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                type="text"
                value={availability.description}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Food Type"
                name="food_type"
                type="text"
                value={availability.food_type}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Cooked Time"
                name="cooked_time"
                type="datetime"
                value={moment(availability.cooked_time).format("HH:mm")}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Best before"
                name="best_before"
                type="datetime"
                value={moment(availability.best_before).format("HH:mm")}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Status"
                name="status"
                type="text"
                value={availability.avail_status}
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

export default ViewAvailability;
