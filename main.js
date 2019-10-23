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

//visualizzo array ordinato
var orderedOutput = document.getElementById('ordered');
for (var a = 0; a < orderedSurname.length; a++) {
  orderedOutput.innerHTML += orderedSurname[a] + ' - ';
}

//stampo posizione dell'array in cui si trova il nome
var i = 0;
var surnameFound = false;
while (i < orderedSurname.length && !surnameFound) {
  if (orderedSurname[i] === userSurname) {
    console.log('il cognome ' + userSurname + ' si trova in posizione ' + i);
    document.getElementById('position').innerHTML = 'il cognome ' + userSurname + ' si trova in posizione ' + i;
    surnameFound = true;
  }
  i++;
}
