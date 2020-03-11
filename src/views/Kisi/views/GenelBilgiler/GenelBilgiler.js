import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import { OzetBilgiler } from './components';
export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        aria-labelledby={`full-width-tab-${index}`}
        component="div"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        role="tabpanel"
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <Paper square>
        <Tabs
          aria-label="disabled tabs example"
          indicatorColor="primary"
          onChange={handleChange}
          scrollButtons="on"
          textColor="primary"
          value={value}
          variant="scrollable"
        >
          <Tab label="Özet Bilgiler" />
          <Tab label="Kimlik Bilgileri" />
          <Tab label="Adres Bilgileri" />
          <Tab label="Öğrenim Bilgileri" />
          <Tab label="Askerlik Bilgileri" />
          <Tab label="Özel Durumu" />
        </Tabs>
      </Paper>
      <div style={{ marginTop: 20, flexGrow: 1 }}>{value === 0 && <OzetBilgiler />}</div>
    </div>
  );
}
