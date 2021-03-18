// Creare un array di oggetti: Ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome
// e peso. Stampare a schermo la bici con peso minore
// utilizzando destructuring e template literal

$(document).ready(function(){

const parking = [
  {
    nome : "bici1",
    peso : 50
  },

  {
    nome : "bici2",
    peso : 23
  },

  {
    nome : "bici 3",
    peso : 18
  },

  {
    nome : "bici 4",
    peso : 30
  }
]

console.log(parking);

let min = parking[0].peso;
let index = 0
for (let i = 1; i < parking.length; i++) {
     if (parking[i].peso < min) {
       const{peso} = parking[i]
       min = peso;
       index = i;
     }
}

console.log(`La bici più leggera è la ${parking[index].nome} ed il suo peso è ${parking[index].peso}`);

const {nome, peso} = index;
document.getElementById('risultato').innerHTML =
`<p>La bici più leggera è la ${parking[index].nome} ed il suo peso è ${parking[index].peso} kg</p>
`

})
