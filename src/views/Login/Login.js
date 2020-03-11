import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { LoginForm } from './components';
import { useStyles } from './Login.styles';

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography
            gutterBottom
            variant="h3"
          >
            Giriş Yap
          </Typography>

          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
