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

const ViewAvailability = (props) => {
  const [values, setValues] = useState({
    name: 'Katarina',
    user_Name: 'Smith',
    email: 'demo@devias.io',
    phone: '0774458400',
    total:'15',
    availability_type:'wedding',
    description:'qqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    food_type:'veg',
    cooked_time:'12.30',
    best_befor:'4.30',
    status:'pending',


    
  });

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
                value={values.name}
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
                label="User_Name"
                name="lastName"
               
                required
                value={values.user_Name}
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
                value={values.email}
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
                value={values.phone}
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
                label="Total quantity"
                name="total"
                type="number"
                value={values.total}
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
                label="Availability type"
                name="availability_type)"
                type="text"
                value={values.availability_type}
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
                value={values.description}
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
                label="Food Type"
                name="food_type"
                type="text"
                value={values.food_type}
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
                label="Cooked Time"
                name="cooked_time"
                type="datetime"
                value={values.cooked_time}
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
                label="Best before"
                name="best_before"
                type="datetime"
                value={values.best_befor}
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
                label="Status"
                name="status"
                type="text"
                value={values.status}
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

export default ViewAvailability;
