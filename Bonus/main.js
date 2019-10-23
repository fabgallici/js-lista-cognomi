// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova


var unorderedSurname = ['Vena', 'Siri', 'Biava', 'Grassi', 'Inglima', 'Neroni', 'Rispoli', 'Polino'];

//chiedo il Cognome, lo inserisco nell'array e visualizzo
var userSurname = prompt('Inserisci il tuo Cognome');
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
