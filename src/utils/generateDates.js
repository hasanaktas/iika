import moment from 'moment';

export default {};

export const generateMonth = (year, month) => {
  const days = [
    ...Array(moment(`${year} ${month}`, 'YYYY-MM').daysInMonth()).keys()
  ];

  const startDate = moment.utc([year, month]);
  const firstDay = moment(startDate)
    .startOf(month)
    .format('DD');
  const endDay = moment(startDate)
    .endOf(month)
    .format('DD');
  const dayArray = days.map((day, index) => {
    const newDate = moment(`${year} ${month}`, 'YYYY-MM').date(day + 1);

    return {
      day: newDate.format('DD-MM-YYYY'),
      sunday: newDate.format('dddd') === 'Pazar',
      off: newDate.format('dddd') === 'Pazar',
      weekend:
        newDate.format('dddd') === 'Pazar' ||
        newDate.format('dddd') === 'Cumartesi',
      index: index,
      order: newDate.format('DD'),
      short: newDate.format('dd')
    };
  });

  const firstSunday = dayArray.findIndex(item => {
    return item.sunday;
  });

  return {
    days: dayArray,
    year: year,
    monthName: moment(`${month}`, 'MM').format('MMMM'),
    firstDay,
    endDay,
    firstSunday: firstSunday
  };
};
