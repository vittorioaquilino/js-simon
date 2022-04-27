// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ALGORITMO
// [*] creare 5 numeri random da 1 a 100
// [*] stampare i numeri da memorizzare in html
// [*] creo un timer di 30 secondi
// [*] dopo 30 secondi:
    // [*] chiedo all'utente di inserire i numeri che ha visto
    // [*] dopo aver inserito i numeri:
      // [] stampare quanti e quali numeri sono stati indovinati

  
// genero i 5 numeri random
let mindNumbers = [];

for (let i = 0; i < 5; i++) {
    const randomNumber = getRndInteger(1, 100);
    mindNumbers.push(randomNumber);
}
console.log(mindNumbers);

// stampo in html i numeri da memorizzare
const countContainer = document.getElementById("number");
countContainer.innerHTML = `questi sono i numeri da memorizzare: ${mindNumbers}`;

// creo una funzione per il timer dei 30 secondi
setTimeout(function(){
    countContainer.classList.add("hidden");
}, 3000);

// chiedo all'utente di inserire i numeri che ricorda
setTimeout(function(){
    let userNumber = [];
    for (let i = 0; i < mindNumbers.length; i++) {
        userNumber.push(parseInt(prompt`Inserisci un numero che ricordi`));
    }
    console.log(userNumber);

}, 3000);


// function random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)  ) + min;
}

