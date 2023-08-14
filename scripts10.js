const currentYear = new Date().getFullYear();

const holidays = {
    0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: `16 December ${currentYear}`,
    },
 1: {
    id: 1,
    name: 'Worker\'s Day',
    date: new Date (`1 April ${currentYear}`),
    },
 2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date (`26 December ${currentYear}`),
        },  
 3: {
            id: 3,
            name: 'New Year\'s Day',
            date: new Date (`1 January ${currentYear}`),
    }, 
    4: {
        id: 4,
        name: 'Women\'s Day',
        date: new Date (`9 August ${currentYear}`),
}, 
5: {
    id: 5,
    name: 'Heritage Day',
    date: new Date (`24 September ${currentYear}`),
}, 
6: {
    id: 6,
    name: 'Christmas Day',
    date: new Date (`25  December ${currentYear}`),
}, 
7: {
    id: 7,
    name: 'Youth Day',
    date: new Date (`16 June ${currentYear}`),
}, 
8: {
    id: 8,
    name: 'Human Rights Day',
    date: new Date (`21 March ${currentYear}`),
}, 
}

const christmas = 6
const futureId = 9

console.log(holidays[futureId] ? holidays[futureId].name: `ID ${futureId} not created yet`); 

const copied = {...holidays[christmas]};
copied.name = 'X-mas Day';
copied.date.setHours(0,0,0,0)

const correctDate = copied.date
const isEarlier = copied.date < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);
if (isEarlier)copied.date = correctDate;

console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.id);
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
    `${randomHoliday.date.getDate().toString().padStart(2, 0)}/${(randomHoliday.date.getMonth() + 1).toString().padStart(2, 0)}/${currentYear}`
  );