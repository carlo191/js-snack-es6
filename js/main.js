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

/*Snack 2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".*/

const squadre = [
  { nome: `SSC Napoli`, puntiFatti: 0, falliSubiti: 0 },
  { nome: `AS Roma`, puntiFatti: 0, falliSubiti: 0 },
  { nome: `AC Milan`, puntiFatti: 0, falliSubiti: 0 },
  { nome: `ACF Fiorentina`, puntiFatti: 0, falliSubiti: 0 },
];

/**
 *
 * @returns un numero casuale tra 1 e 100
 */
function generaNumeriRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

squadre.forEach((squadra) => {
  squadra.puntiFatti = generaNumeriRandom();
  squadra.falliSubiti = generaNumeriRandom();
});

console.log(squadre);
