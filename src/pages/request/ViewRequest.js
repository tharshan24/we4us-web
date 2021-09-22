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
import moment from "moment";

import http from "../../services/httpService";

const ViewRequest = (props) => {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [request, setRequest] = useState();
  const [values, setValues] = useState({
    name: "Katarina",
    email: "demo@devias.io",
    phone: "0774458400",
    user_id: "12",
    total: "15",
    request_type: "wedding",
    description: "qqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    food_type: "veg",
    need_before: "12.30",
    user_type_name: "bnm",
    name_en: "pending",
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
                name="user_name"
                required
                value={request.user_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Requester_id"
                name="user_id"
                required
                value={request.user_id}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                value={request.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="mobile_number"
                required
                value={request.mobile_number}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Request type"
                name="request_type"
                type="text"
                value={request.request_type}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                type="text"
                value={request.description}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Create Date"
                name="created_at"
                type="datetime"
                value={moment(request.created_at).format("YYYY/MM/DD  HH:mm")}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Need before"
                name="need_before"
                type="datetime"
                value={moment(request.created_at).format("YYYY/MM/DD  HH:mm")}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="User Type"
                name="user_type_name"
                type="text"
                value={request.user_type_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                name="name_en"
                type="text"
                value={request.name_en}
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
