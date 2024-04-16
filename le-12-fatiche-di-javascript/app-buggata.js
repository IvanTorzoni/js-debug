const input = document.querySelector('input');
const array = [];  //creare array vuoto

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value == '') return;  //tolto .length

    array.push(input.value);  //cambiato add con push dato che i dati devono essere pushati nell'array

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value;  //modificato in innerText
    document.querySelector('ul').append(li);  //creo l'elemento in HTML

    let counter = 0;  //resettaro il counter a 0
    let max   = 1;  //cambiato max da const a let. Il valore è varibile 
    let item    = array[0];
    const elems = [];

    for (let i = 0; i < array.length; i++) {  //aggiunto length
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) { //aggiustato incremento
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {   //aggiunte parentesi all'if
                    max  = counter;
                    item = array[i];
                }
            }
        }
        counter = 0;
    }

    const alert = document.getElementsByClassName('alert')[0]; //Aggiunto counter per le ripetizioni

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`); //Sugar Syntax
});