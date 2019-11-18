// alert('prova');

var listaCognomi = ['Agrigento','Trapani','Palermo','Caltanissetta'];
// var newLista = listaCognomi.toUpperCase();
// return listaCognomi.toLowerCase();
console.log(listaCognomi);
// Chiedi all’utente il cognome
var cognomeUtente = prompt('Inserisci il tuo cognome (es. Rossi):');
// return cognomeUtente.toLowerCase();
console.log('Il cognome inserito è ' + cognomeUtente);

// inseriscilo in un array con altri cognomi
// listaCognomi.push(cognomeUtente);
listaCognomi.unshift(cognomeUtente);
console.log(listaCognomi);

// stampa la lista ordinata alfabeticamente.
//credevo che non ordinasse ma invece è case sensitive quindi se non metto la prima maiuscola me lo inserisce alla fine o all'inizio
//dovrei convertire sia listaCognomi che cognomeUtente in maiuscolo con .toUpperCase()
listaCognomi.sort();
console.log(listaCognomi);

// Scrivi anche la posizione della lista in cui  il nuovo utente si trova.
var posizione = false;
var i = 0;
do {
    if (listaCognomi[i] == cognomeUtente) {
        posizione = true;
    }
    i ++;
} while (i < listaCognomi.lenght && listaCognomi[i] == cognomeUtente);

var posizione = [i] + 1
console.log('Sei al numero ' + posizione + ' della lista');
