import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import Filter from '../Filter';
const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const {
    className,
    onFilter,
    degerguncelle,
    otamatikDoldur,
    ayDegistir,
    ...rest
  } = props;
  const [openFilter, setOpenFilter] = useState(false);
  const classes = useStyles();

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Puantaj
          </Typography>
          <Typography
            component="h1"
            variant="h3"
          >
            Puantaj Ekranı
          </Typography>
        </Grid>

        <Grid
          container
          item
          spacing={3}
        >
          <Grid item>
            <Button
              color="primary"
              onClick={otamatikDoldur}
              variant="contained"
            >
              Otamatik Doldur
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="primary"
              onClick={() => ayDegistir('2020', '01')}
              variant="contained"
            >
              2020 OCAK
            </Button>
          </Grid>
          <Grid
            item
            xs
          >
            <Button
              color="primary"
              onClick={() => ayDegistir('2020', '02')}
              variant="contained"
            >
              2020 ŞUBAT
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={handleFilterOpen}
              variant="contained"
            >
              Hızlı İşlemler
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Filter
        degerguncelle={degerguncelle}
        onClose={handleFilterClose}
        onFilter={onFilter}
        open={openFilter}
      />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
