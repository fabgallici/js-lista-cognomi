// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova


var unorderSurname = ['Vena', 'Siri', 'Biava', 'Grassi', 'Inglima', 'Neroni', 'Rispoli', 'Polino'];

//chiedo il Cognome, lo inserisco nell'array e visualizzo
var userSurname = prompt('Inserisci il tuo Cognome');
unorderSurname.push(userSurname);
console.log(unorderSurname);
