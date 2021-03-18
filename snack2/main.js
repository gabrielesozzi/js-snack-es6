// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e
// falli subiti. Infine usando la destrutturazione creiamo un nuovo array i
// cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

$(document).ready(function(){

  const équipes = [
    {
      nome : "Paris_Saint_German",
      punti : 0,
      falli : 0,
    },

    {
      nome : "Inter",
      punti : 0,
      falli : 0,
    },

    {
      nome : "Real_Madrid",
      punti : 0,
      falli : 0,
    },

    {
      nome : "Juventus",
      punti : 0,
      falli : 0,
    }
  ]
  console.log(équipes);

  let statistiche = [];

  for (let i = 0; i < équipes.length; i++) {
    équipes[i].punti = randomNumber (0, 100);
    équipes[i].falli = randomNumber (0, 100);

    const {nome, falli} = équipes[i];
    statistiche.push(nome, falli)
  }
  console.log(statistiche);
})


// FUNCTIONS

function randomNumber (min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non hai inserito un numero");
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
