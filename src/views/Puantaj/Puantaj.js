import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Header, Table } from './components';
import { generateMonth } from 'utils/generateDates';
import data from './data';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  filter: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = () => {
  const classes = useStyles();
  const [date, setDate] = useState(generateMonth(2020, '01'));
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState([]);
  const [persons, setPersons] = useState(data);

  useEffect(() => {
    const newSelectedDays = [];
    for (const week of selectedWeek) {
      const haftaIndex = Number(week.substr(0,1))-1;
      const weeekStart = date.firstSunday + 1 + ((haftaIndex-1)*7);
      const weeekEnd = date.firstSunday + (haftaIndex*7);
      for (const day of date.days) {
        if (day.index >= weeekStart && day.index <= weeekEnd) newSelectedDays.push(day.index);
      }
    }

    setSelectedDays(newSelectedDays);
  }
  // eslint-disable-next-line
  ,[selectedWeek]);

  function degerguncelle(value) {
    const newPersons = persons.map((person, index) => {
      if (selectedPersons.includes(index)) {
        selectedDays.map(selected => {
          person.puantaj[date.year][date.monthName][selected] = value;
          return selected;
        });
      }
      return person;
    });
    setPersons(newPersons);
    setSelectedPersons([]);
    setSelectedDays([]);
  }

  function otamatikdoldur() {
    const newPersons = persons.map((person, index) => {
      for (const day of date.days) {
        person.puantaj[date.year][date.monthName][day.index] = day.off ? '' : '+';
      }
      return person;
    });

    setPersons(newPersons);
    setSelectedPersons([]);
    setSelectedDays([]);
  }

/*  function hepsiniDoldur() {
    const newPersons = persons.map((person, index) => {
      date.days.forEach(function(day) {
        person.puantaj[date.year][date.monthName][day.index] = '+';
      });

      return person;
    });
    setPersons(newPersons);
    setSelectedPersons([]);
    setSelectedDays([]);
  }*/

  function ayDegistir(year, month) {
    setDate(generateMonth(year, month));
  }

  return (
    <div className={classes.root}>
      <Header
        ayDegistir={ayDegistir}
        degerguncelle={degerguncelle}
        otamatikDoldur={otamatikdoldur}
      />

      {persons && (
        <Table
          className={classes.results}
          date={date}
          persons={persons}
          selectedDays={selectedDays}
          selectedPersons={selectedPersons}
          selectedWeek={selectedWeek}
          setSelectedDays={setSelectedDays}
          setSelectedPersons={setSelectedPersons}
          setSelectedWeek={setSelectedWeek}
        />
      )}
    </div>
  );
};

export default CustomerManagementList;
