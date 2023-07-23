const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: new Date(`16 December ${currentYear}`),
  },
  // ... (other holidays)
  6: {
    id: 6,
    name: 'Christmas Day',
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  // ... (other holidays)
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

copied = { ...holidays[christmas] };
copied.name = 'X-mas';
copied.date.setHours(0, 0, 0, 0);

const correctDate = copied.date;
const isEarlier = copied.date < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);
if (isEarlier) copied.date = correctDate;

console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name);
console.log('Date change:', holidays[christmas].date !== copied.date || copied.date);

const firstHoliday = new Date(Math.min(
  holidays[0].date,
  holidays[1].date,
  holidays[2].date,
  holidays[3].date,
  holidays[4].date,
  holidays[5].date,
  holidays[6].date,
  holidays[7].date,
  holidays[8].date,
));

const lastHoliday = new Date(Math.max(
  holidays[0].date,
  holidays[1].date,
  holidays[2].date,
  holidays[3].date,
  holidays[4].date,
  holidays[5].date,
  holidays[6].date,
  holidays[7].date,
  holidays[8].date,
));

console.log(
  `${firstHoliday.getDate().toString().padStart(2, '0')}/${(firstHoliday.getMonth() + 1).toString().padStart(2, '0')}/${currentYear}`
);

console.log(
  `${lastHoliday.getDate().toString().padStart(2, '0')}/${(lastHoliday.getMonth() + 1).toString().padStart(2, '0')}/${currentYear}`
);

const randomIndex = Math.floor(Math.random() * 9); // Generate a random index between 0 and 8
const randomHoliday = holidays[randomIndex];
console.log(
  `${randomHoliday.date.getDate().toString().padStart(2, '0')}/${(randomHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/${currentYear}`
);



