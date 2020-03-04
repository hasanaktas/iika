import React, { useState } from 'react';
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

  console.log(selectedDays);
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
    console.log(date);
    setPersons(newPersons);
    setSelectedPersons([]);
    setSelectedDays([]);
  }

  function otamatikdoldur() {
    const newPersons = persons.map((person, index) => {
      date.days.forEach(function(day) {
        day.off === false
          ? (person.puantaj[date.year][date.monthName][day.index] = '+')
          : (person.puantaj[date.year][date.monthName][day.index] = '');
      });

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
