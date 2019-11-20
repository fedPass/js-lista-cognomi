// alert('prova');

var listaCognomi = ['Agrigento','Trapani','Palermo','Caltanissetta'];
// var newList = listaCognomi.toUpperCase();
console.log(listaCognomi);
// Chiedi all’utente il cognome
var cognomeUtente = prompt('Inserisci il tuo cognome (es. Rossi):');
var iniziale = cognomeUtente.charAt(0).toUpperCase();
var restoCognome = cognomeUtente.slice(1);
cognomeUtente = iniziale + restoCognome;
console.log('Il cognome inserito è ' + cognomeUtente);

// inseriscilo in un array con altri cognomi
// listaCognomi.unshift(cognomeUtente);
listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

// stampa la lista ordinata alfabeticamente.
//prompt è case sensitive quindi se non metto la prima maiuscola me lo inserisce alla fine o all'inizio
//dovrei convertire sia listaCognomi che cognomeUtente in maiuscolo con .toUpperCase()
var listSorted = listaCognomi.sort();
console.log(listSorted);

// Scrivi la posizione della lista in cui  il nuovo utente si trova
/*
confronto nomeUtente con posizione
se è verificato --> stampo posizione
se è falso --> continuo controllo --> posizione = posizione + 1 e riparto
*/
// var posizione = listSorted.indexOf(cognomeUtente) +1;
// console.log(posizione);

var i = 0;
do {
    if (listSorted[i] == cognomeUtente) {
    }
    i++;
} while (listSorted[i] != cognomeUtente);

console.log('Sei al numero ' + (i +1) + ' della lista');
