const days = {
  'Mon': 'Monday',
  'Tue': 'Tuesday', 
  'Wed': 'Wednesday', 
  'Thu': 'Thursday', 
  'Fri': 'Friday', 
  'Sat': 'Saturday', 
  'Sun': 'Sunday'
};

const ONE_DAY = 86400000;
const TWO_DAYS = 172800000;

function getAcronym(date) {
  return date.toString().slice(0, 3);
}

function getDayNumber(date) {
  return date.toString().slice(8, 10);
}

function getDate(milliseconds = 0) {
  return new Date(Date.now() + milliseconds);
}

const data = [
  {
    id: 1,
    name: days[getAcronym(getDate(-TWO_DAYS))],
    short: getAcronym(getDate(-TWO_DAYS)),
    number: getDayNumber(getDate(-TWO_DAYS))
  },
  {
    id: 2,
    name: 'Yesterday',
    short: getAcronym(getDate(-ONE_DAY)),
    number: getDayNumber(getDate(-ONE_DAY))
  },
  {
    id: 3,
    name: 'Today',
    short: getAcronym(getDate()),
    number: getDayNumber(getDate())
  },
  {
    id: 4,
    name: 'Tomorrow',
    short: getAcronym(getDate(ONE_DAY)),
    number: getDayNumber(getDate(ONE_DAY))
  },
  {
    id: 5,
    name: days[getAcronym(getDate(TWO_DAYS))],
    short: getAcronym(getDate(TWO_DAYS)),
    number: getDayNumber(getDate(TWO_DAYS))
  }
];

module.exports = data;