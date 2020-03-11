import React, { Fragment, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { LinearProgress, makeStyles } from '@material-ui/core';

import { Topbar } from './components';

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
}));

const Auth = props => {
  const { route } = props;
  const logged = useSelector(state => state.auth.logged);
  const classes = useStyles();

  if (logged) {
    return <Redirect to="/anasayfa" />;
  }

  return (
    <Fragment>
      <Topbar />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>{renderRoutes(route.routes)}</Suspense>
      </main>
    </Fragment>
  );
};

Auth.propTypes = {
  route: PropTypes.object,
};

export default Auth;
