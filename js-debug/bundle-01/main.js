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



// // ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }


// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }


// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
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
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]