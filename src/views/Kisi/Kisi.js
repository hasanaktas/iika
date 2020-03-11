import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { KisiNavigasyon, ViewsContainer } from './components';
import { GenelBilgiler, UcretYonetimi } from './views';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },

  kisiNavigasyon: {
    flexShrink: 0,
    width: 300,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabs: {
    padding: 20,
    flexGrow: 1,
    overflow: 'hidden',
  },
  emailDetails: {
    flexGrow: 1,
  },
}));

const Mail = () => {
  const classes = useStyles();

  const [openFolder, setOpenFolder] = useState(true);

  const { tab } = useParams();

  const handleFolderOpen = () => {
    setOpenFolder(true);
  };

  const handleFolderClose = () => {
    setOpenFolder(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.kisiNavigasyon}>
        <KisiNavigasyon />
      </div>
      <div className={classes.tabs}>
        <GenelBilgiler />
      </div>
    </div>
  );
};

export default Mail;
