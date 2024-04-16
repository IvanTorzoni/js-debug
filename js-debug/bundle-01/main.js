/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// Eercizio 1: spiegazione.
//il ciclo for mi deve restituire il valore della variabile i raggiungento il limite impostato, ovvero 5.
//Questo non avviene per un errore logico perchè impostando i > 0 questa condizione non viene considerata valida e quindi il ciclo non parte mai.

// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

//Soluzione
// invertiamo il segno da maggiore a minore. Facendo ciò il ciclo funzionerà correttamente
console.log(`Debug problema 1`);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(`Debug problema 1`);

console.log(`////////////////////////////////////////`);

// Eercizio 2: spiegazione.
//La funzione presenta un errore di sintassi (mostrato anche in console). L'errore è l'uguale singolo, doverbbe essere doppio o triplo uguale.
//Inoltre la funzione non andrà se non specifichiamo almeno 1 parametro di ingresso

// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

//Soluzione
// insetiamo triplo uguale e un valore di partenza che fungerà da parametro per la funzione
console.log(`Debug problema 2`);

let i = 2

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

console.log(addIfEven(i));
console.log(`Debug problema 2`);
console.log(`////////////////////////////////////////`);

// Eercizio 3: spiegazione.
//il ciclo for presenta un errore di sintassi. Vengono inserite le virgole al posto dei punti e virgola
//La funzione deve essere richiamata per vedere il risultato

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }

//Soluzione
//Cambio le vigole e richiamo la funzione alla fine
console.log(`Debug problema 3`);
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

loopToFive()
console.log(`Debug problema 3`);
console.log(`////////////////////////////////////////`);

// Eercizio 4: spiegazione.
//In questo esercizio sono presenti sia errori sintattici che logici
//La funzione dovrebbe al termine del ciclo for e impostate le condizioni di per il numero pari, dovrebbe restituire l'array evenNumbers con i numeri pari

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {  
//         if (numbers % 2 = 0); {                      
//             evenNumbers.push(i);                     
//         }
//         return evenNumbers;                          
//     }
// }



//Soluzione
//Inseriamo l'uguale dopo il minore in modo da far prendere i numeri fino all'8
//Eliminiamo il punto e virgola dopo l'incremento
//inserisco una variabile di blocco e associo la sequaenza di numeri
//all' if metto i tre uguali
//tolgo il punto e virgola tra le parentesi tonde e quadre della condizione
//pusho i valori rimasti nella variabile dentro l'array
//tolgo il return

console.log(`Debug problema 4`);
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++) { 
        let num = numbers[i];
        if (num % 2 === 0) {
            evenNumbers.push(num)
        }
    }
    console.log(evenNumbers);
    console.log(`Debug problema 4`);
}
displayEvenNumbers();
// dovrebbe restituire [2,4,6,8]