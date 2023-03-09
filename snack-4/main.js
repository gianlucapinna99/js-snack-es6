"use strict"

//Creo variabili
const teams = [
    { nome: 'Rubentus', punti: 0, falli: 0 },
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Seconda squadra di Milan', punti: 0, falli: 0 },
    { nome: 'Daje-Roma', punti: 0, falli: 0 },
    { nome: 'Napoli', punti: 0, falli: 0 }
];


//Trovo valori casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  

//Assegno valori casuali
for (let i = 0; i < teams.length; i++) {
    teams[i].punti = getRandomNumber(0, 100);
    teams[i].falli = getRandomNumber(0, 50);
}

//Nuovo array senza punti
const teamsStats = [];

for (let i = 0; i < teams.length; i++) {
  const { nome, falli } = teams[i];
  teamsStats.push({ nome, falli });
}

//Stampo a console
console.log('Squadre di calcio:', teams);
console.log('Statistiche squadre:', teamsStats);