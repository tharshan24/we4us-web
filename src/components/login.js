import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from 'react-helmet';
import logo from '../images/logo-gr.png'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import back from '../images/login2.jpg';
import { makeStyles } from '@material-ui/core/styles';
function Login() {

  const navigate = useNavigate("");
  const [loginemail, setEmail] = useState("");
  const [loginpassword, setPassword] = useState("");
  const [loginStatusadmin, setLoginStatusadmin] = useState("");
  
  const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
  
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: 'black',
      },
      formbox: {
        backgroundColor: 'gray',
        width: '60%',
        marginTop: '40px',
        marginLeft: '200px',
        height: 'full',
        boxShadow: "2px 2px 5px  2px #9E9E9E",
        padding: "2vh",
        borderRadius: "5px",
        align: 'center',
      },
      textfield: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: '0px',
        marginLeft: '100px',
        height: '100%',
        padding: "2vh",
        borderRadius: "5px",
      },
      link: {
        color: '#FFF',
      },
      h1: {
        color: '#FFF',
        fontFamily: "Sans-serif",
      },
      view: {
        paddingRight:'10px',
        color: '#FFF',
        size:'200px',
      },
      backgroud: {
        backgroundColor: '#5eb6b8',
        backgroundImage: `url(${back})`
      },
    }));
  

    const classes = useStyles();
  return (

    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
        className={classes.backgroud}
      >
        <img style={{
          width: "86px",
          height: "86px",
          alignSelf: "center"
        }} src={logo} alt="Logo" />

        <Container maxWidth="xs">
          <Box sx={{ mb: 3 }}>
            <Typography
              color="textPrimary"
              variant="h2"
              align="center"
            >
              Sign in
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
              align="center"
            >
              Sign in to Pettah Pharma
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              md={6}
            >
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
            >
            </Grid>
          </Grid>
          <Box
            sx={{
              pb: 1,
              pt: 3
            }}
          >
          </Box>
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            name="email"
            type="email"
            // value={values.email}
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            type="password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={Login}
            >
              Sign in now
            </Button>
          </Box>
          <Typography
            color="red"
            textAlign="center"
          >{validation}</Typography>
        </Container>
      </Box>
    </>
  );
};

export default Login;
