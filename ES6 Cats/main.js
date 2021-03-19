// Milestone 1
// Definire un array di oggetti; ogni oggetto rappresenta un
// gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i
// gattini, ciascuno con il proprio colore e il proprio nome.

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso
// e aggiungere a fianco di ogni gattino un fiocco colorato di
// rosa, se femmina, o di blu, se maschio. Il colore del
// fiocco deve essere più tenue se il gatto è più giovane,
// più scuro se il gatto è più vecchio.

// Milestone 3
// Creare un nuovo array con prima tutti i gattini femmina e poi
// tutti i gattini maschio, inserendo solamente nome e colore
// e opacità del fiocco per ogni gatto.

$(document).ready(function(){


  // MILESTONE 1
  const cats = [
    {
      nome : "Fiocco",
      eta : 5,
      colore : "bianco",
      sesso : "maschio"
    },

    {
      nome : "Fiocchetta",
      eta : 8,
      colore : "bianco",
      sesso : "femmina"
    },

    {
      nome : "Harvey",
      eta : 18,
      colore : "nero",
      sesso : "maschio"
    },

    {
      nome : "Kira",
      eta : 20,
      colore : "marrone",
      sesso : "femmina"
    },
  ]

  // MILESTONE1 COMPLETATA E COMMENTATA

  // console.log(cats);

  // cats.forEach((element, index, array) => {
  //  console.log(element.nome, element.colore);
  //  $(".cats").append(`<li>${element.nome} è ${element.colore}</li>`)
  // });


  // MILESTONE 2 COMPLETATA E COMMENTATA

  // const catMan = cats.filter ((element) => element.sesso == "maschio");
  // const catWoman = cats.filter ((element) => element.sesso == "femmina")
  // console.log(catMan);
  // console.log(catWoman);

  // Separo in relazione al sesso e aggiungo classe all'elemento i per assegnare
  // colore al fiocco

  // catMan.forEach((element, index, array) => {
  //  $(".cats").append(`<li>${element.nome} è ${element.colore} <i class="fas fa-ribbon azzurro"></i></li>`)
  // });
  //
  // catWoman.forEach((element, index, array) => {
  //  $(".cats").append(`<li>${element.nome} è ${element.colore} <i class="fas fa-ribbon rosa"></i></li>`)
  // });


  // Assegno colore più o meno forte in relazione ad età del gatto
  // let colore;
  //
  // cats.forEach((element) => {
  //   if (element.sesso == "maschio" && element.eta <= 8) {
  //     colore = "bluelight";
  //   } else if (element.sesso == "maschio" && element.eta > 8) {
  //     colore = "blue";
  //   } else if (element.sesso == "femmina" && element.eta <= 8) {
  //     colore = "pinklight"
  //   } else if (element.sesso == "femmina" && element.eta > 8) {
  //     colore = "pink";
  //   }
  //   $(".cats").append(`<li>${element.nome} è ${element.colore} <i class="fas fa-ribbon ${colore}"></i></li>`)
  // });




  // MILESTONE 3
  const newCats = cats.map ((element) => {
    const nome = element.nome;
    const sesso = element.sesso;
    const eta = element.eta;
    const colore = element.colore;
    const opacity = element.eta / 100;

    return {
      nome,
      sesso,
      colore,
      eta,
      opacity
      // ribbon: {
      //   colore: (element.sesso === "maschio") ? "blue" : "pink",    !!Prova, non considerare!!
      //   opacity
      // }
    }
  });

  console.log(newCats);

  const catMaschio = newCats.filter ((element) => element.sesso == "maschio");
  const catFemmina = newCats.filter ((element) => element.sesso == "femmina")

  console.log(catMaschio);
  console.log(catFemmina);

  const newCatsOrdered = [...catMaschio, ...catFemmina]

  let colore;
  newCatsOrdered.forEach((element, index, array) => {
   console.log(element.nome, element.colore, element.opacity);
   if (element.sesso == "maschio") {
     colore = "blue";
   } else {
     colore = "pink"
   }
   $(".cats").append(`<li>${element.nome} è ${element.colore} <i class="fas fa-ribbon ${element.opacity, colore}"></i></li>`)
  });

});
