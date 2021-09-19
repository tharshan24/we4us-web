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

const ViewCollectionPoint = (props) => {
  const { userId } = useParams();

  const [collection, setColleciton] = useState();
  const [loading, setLoading] = useState(false);

  const [values] = useState({
    name: "Katarina",
    email: "demo@devias.io",
    phone: "0774458400",
    description: "qqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    status: "pending",
  });

  useEffect(() => {
    const fetchCollection = async () => {
      setLoading(true);
      const { data } = await http.get(`/admin/viewColPointById/${userId}`);
      setColleciton(data.result.row[0]);
      console.log(data.result.row[0]);
      setLoading(false);
    };
    fetchCollection();
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
                value={collection.name}
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
                label="Description"
                name="description"
                type="text"
                value={values.description}
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

export default ViewCollectionPoint;
