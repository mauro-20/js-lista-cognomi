// 1. chiedi all’utente il cognome;
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente;
// 4. scrivi anche la posizione "umana"(partendo da 1) della lista in cui il nuovo utente si trova;

var lastName = ['bianchi', 'neri', 'rossi', 'verdi', 'gialli']

var userLastName = prompt('Inserisci il tuo cognome').toLowerCase();
lastName.push(userLastName)

lastName.sort()
console.log(lastName);
document.getElementById('last-name').innerHTML += lastName

console.log(`La posizione di ${userLastName} nella lista di cognomi è ${lastName.indexOf(userLastName)+1}`);
document.getElementById('user-last-name').innerHTML += `La posizione di "${userLastName}" nella lista di cognomi è ${lastName.indexOf(userLastName) + 1}`
