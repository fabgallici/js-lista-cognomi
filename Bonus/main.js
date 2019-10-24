// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova

//BONUS
// Controllo che valore inserito non sia vuoto/undefined
// Stringa di ingresso Cognome prima lettera viene Capitalizzata
// visualizzo array non ordinato semplificata come stringa
// visualizzo array ordinato come lista ordinata
// Conteggio posizione a partire da 1


var unorderedSurname = ['Vena', 'Siri', 'Biava', 'Grassi', 'Inglima', 'Neroni', 'Rispoli', 'Polino'];

//chiedo il Cognome, lo inserisco nell'array e visualizzo
var userSurname = prompt('Inserisci il tuo Cognome');

//Controllo che dato Cognome non sia vuoto/undefined
if (!userSurname) {
  alert('Cognome Non inserito correttamente, aggiornare la pagina e ripetere');
}
// Stringa di ingresso Cognome prima lettera viene Capitalizzata
userSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1);

//Aggiungo dato Cognome alla lista non ordinata
unorderedSurname.push(userSurname);
console.log('unorderedSurname ' + unorderedSurname);

//visualizzo array non ordinato inviato come stringa
document.getElementById('unordered').innerHTML = unorderedSurname.join(' ');
//posso creare una copia array originale da poter riutilizzare (visto dopo a lezione)
var orderedSurname = unorderedSurname.slice().sort();



//ordino l'array alfabeticamente (non creo una copia,creo un puntatore allo stesso array)
//quindi ora sono entrambi ordinati perchè sort ordina in-place, ved slice() per salvare stato precedente di unorderedSurname
// orderedSurname.sort();
console.log('orderedSurname ' + orderedSurname);

//visualizzo array ordinato
var orderedOutput;
for (var a = 0; a < orderedSurname.length; a++) {
  orderedOutput = document.getElementById('ordered').innerHTML;
  document.getElementById('ordered').innerHTML = orderedOutput + "<li>" + orderedSurname[a] + "</li>";
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

//stampo pos usando metodo veloce
var orderPos = orderedSurname.indexOf(userSurname) + 1;
console.log('Posizione ', orderPos);
