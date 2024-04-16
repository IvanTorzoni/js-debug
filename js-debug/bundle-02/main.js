/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// Eercizio 1: spiegazione.
//La funzione presenta un errore logico (mostrato anche in console). Viene dichiarata la variabile di appoggio del messaggio con "const". 

// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

//Soluzione
// Cambiamo la variabile da const a let
console.log(`Debug problema 1`);
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }

    console.log(message);
    console.log(`Debug problema 1`);

    console.log(`////////////////////////////////////////`);
}
checkAge();

// Eercizio 2: spiegazione.
//La funzione presenta un errore logico.
// Quello che ci aspettiamo è che il log della console mi dia il numero, in valore numerico, dei colori presenti nell'array.
// Tuttavia in console viene mostrato undefined 

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

//Soluzione
// Creo un ciclo for per estrarre il valore numerico di tutti i colori presenti nell'array, tramite variabile di blocco
//Sostituisco nel template literal color.length con la variabile che creo 
console.log(`Debug problema 2`);
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    for (i = 1; i < colors.length + 1; i++) {
        colorTotal = i
    }
    console.log(`Nella mia palette ci sono ${colorTotal} colori!`);
    console.log(`Debug problema 2`);

    console.log(`////////////////////////////////////////`);
}
printColorsNumber();


// Eercizio 3: spiegazione.
//La funzione presenta un errore logico.
// Quello che ci aspettiamo è che all' inserimento del numero da parte dell'utente, il risultato finale ci restituisca quel numero maggiorato di 12
// Tuttavia in console viene mostrato il risultato errato
// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

//Soluzione
// Senza parsInt viene concatenato il valore in input con il valore da sommare
// Inserendo parsInt davanti al prompt trasformo l'input da stringa a numero. Facendo ciò è possibile eseguire la somma algebrica tra numeri.
console.log(`Debug problema 3`);
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
    console.log(`Debug problema 3`);

    console.log(`////////////////////////////////////////`);
}
addNumbers();

// ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();

