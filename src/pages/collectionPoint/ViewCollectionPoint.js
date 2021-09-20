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
import moment from "moment";
import http from "../../services/httpService";
import { GridAddIcon } from "@material-ui/data-grid";

const ViewCollectionPoint = (props) => {
  const { userId } = useParams();

  const [collection, setColleciton] = useState();
  const [loading, setLoading] = useState(false);

  const [values] = useState({
    name: "Katarina",
    ngo_id:"45",
    email: "demo@devias.io",
    mobile_number: "0774458400",
    name_en:"Jaffna",
    description: "qqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    status: "pending",
    start_time:"2021/4/5",
    end_time:"2021/12/2",
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

  if (!collection) return <div>Not found</div>;
  /*
  collection response sample
  {
    colpoint_id: 5
    end_time: "2021-09-24T00:00:00.000Z"
    name: "carehome"
    name_en: "Hulannuge"
    ngo_id: 285
    start_time: "2021-09-17T00:00:00.000Z"
    status: 1
    user_id: 285
    user_name: "carehome"
  }
*/

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
                label="Creater"
                name="name"
                required
                value={collection.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Creater Id"
                name="ngo_id"
                required
                value={collection.ngo_id}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                value={collection.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="mobile_number"
                required
                value={collection.mobile_number}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
            <TextField
                fullWidth
                label="City"
                name="name_en"
                required
                value={collection.name_en}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                type="text"
                value={collection.description}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Start Time"
                name="start_time"
                type="datetime"
                value={moment(collection.start_time).format("YYYY/MM/DD  HH:mm")}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="End Time"
                name="end_time"
                type="datetime"
                value={moment(collection.end_time).format("YYYY/MM/DD  HH:mm")}
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
