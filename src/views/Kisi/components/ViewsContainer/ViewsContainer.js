import React from 'react';
import clsx from 'clsx';
import {
  Checkbox,
  Typography,
  IconButton,
  Input,
  Paper,
  Tooltip,
  makeStyles,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'column',
    display: 'flex',
  },
  header: {
    height: 68,
    padding: theme.spacing(2),

    height: 68,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  backButton: {
    marginRight: theme.spacing(2),
  },
}));

const ViewsContainer = props => {
  const { onBack, children, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.header}>
        <Tooltip title="Geri">
          <IconButton
            className={classes.backButton}
            onClick={onBack}
            size="small"
          >
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
      </div>
      {children}
    </div>
  );
};

export default ViewsContainer;
