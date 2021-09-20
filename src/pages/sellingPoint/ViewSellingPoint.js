import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const ViewSellingPoint = (props) => {
  const { userId } = useParams();
  const [sellingPoint, setSellingPoint] = useState();
  const [values, setValues] = useState({
    name: 'Katarina',
    email: 'demo@devias.io',
    phone: '0774458400',
    description:'qqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    status:'pending',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const { data } = await http.get(`/admin/viewSellPointById/${userId}`);
      setSellingPoint(data.result.row[0]);
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

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          title="Details"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                required
                value={sellingPoint.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                required
                value={sellingPoint.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="number"
                value={sellingPoint.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                name="description"
                type="text"
                value={sellingPoint.description}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
        </Box>
      </Card>
    </form>
  );
};

export default ViewSellingPoint;
