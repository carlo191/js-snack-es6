/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const biciclette = [
  { nome: "BMX", peso: 7.5 },
  { nome: "MB", peso: 6.8 },
  { nome: "Rossa", peso: 7.2 },
  { nome: "Gialla", peso: 6.5 },
];

let biciLeggera = biciclette[0];

biciclette.forEach((bici) => {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
});

console.log(
  `La bici con il peso minore è ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`
);
