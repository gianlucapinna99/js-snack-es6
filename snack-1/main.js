const table = "Tavolo";
const guests = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin"
];

//Creo i segnaposto per gli invitati
const seatCards = guests.map((guest, index) => {
  return {
    table: table,
    guest: guest,
    seat: index + 1
  };
});

//Stampo a console gli invitati
console.log(seatCards);