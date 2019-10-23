// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova


var unorderedSurname = ['Vena', 'Siri', 'Biava', 'Grassi', 'Inglima', 'Neroni', 'Rispoli', 'Polino'];

//chiedo il Cognome, lo inserisco nell'array e visualizzo
var userSurname = prompt('Inserisci il tuo Cognome');
unorderedSurname.push(userSurname);
console.log(unorderedSurname);

//ordino l'array alfabeticamente
var orderedSurname = unorderedSurname.sort();
console.log(orderedSurname);
