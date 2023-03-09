"use strict"

const bikes = [
  { nome: 'Bianchi', peso: 7 },
  { nome: 'Decathlon', peso: 5 },
  { nome: 'Shimano', peso: 6.5 },
  { nome: 'Cannondale', peso: 7.5 }
];

const lightestBike = bikes.reduce((acc, bike) => {
    if (bike.peso < acc.peso) {
      return bike;
    } else {
      return acc;
    }
  });

const { nome, peso } = lightestBike;
console.log(`La bici più leggera è ${nome} con un peso di ${peso} kg.`);
