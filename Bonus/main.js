// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova

//BONUS
//Controllo che valore inserito non sia vuoto/undefined
// Stringa di ingresso Cognome viene Capitalizzata
// Conteggio posizione a partire da 1


var unorderedSurname = ['Vena', 'Siri', 'Biava', 'Grassi', 'Inglima', 'Neroni', 'Rispoli', 'Polino'];

//chiedo il Cognome, lo inserisco nell'array e visualizzo
var userSurname = prompt('Inserisci il tuo Cognome');

//Controllo che dato Cognome non sia vuoto/undefined
if (!userSurname) {
  alert('Cognome Non inserito correttamente, aggiornare la pagina e ripetere');
}
// Stringa di ingresso Cognome viene Capitalizzata
userSurname = userSurname.toLowerCase();
userSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1);

//Aggiungo dato Cognome alla lista non ordinata
unorderedSurname.push(userSurname);
console.log('unorderedSurname ' + unorderedSurname);

//visualizzo array non ordinato
var unorderedOutput = document.getElementById('unordered');
for (var b = 0; b < unorderedSurname.length; b++) {
  unorderedOutput.innerHTML += unorderedSurname[b] + ' ';
}
//ordino l'array alfabeticamente
var orderedSurname = unorderedSurname.sort();
console.log('orderedSurname ' + orderedSurname);

//visualizzo array ordinato
var orderedOutput;
for (var a = 0; a < orderedSurname.length; a++) {
  orderedOutput = document.getElementById('ordered').innerHTML;
  document.getElementById('ordered').innerHTML = orderedOutput + orderedSurname[a] + ' ';
}

//stampo posizione dell'array in cui si trova il nome
var i = 0;
var surnameFound = false;
while (i < orderedSurname.length && !surnameFound) {
  if (orderedSurname[i] === userSurname) {
    console.log('il cognome ' + userSurname + ' si trova in posizione ' + i);
    document.getElementById('position').innerHTML = 'il cognome ' + userSurname + ' si trova in posizione ' + (i + 1) + ' di ' + orderedSurname.length;
    surnameFound = true;
  }
  i++;
}
