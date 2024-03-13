/*fizzbuzz 
Stampare in console i numeri che vanno da uno a 100 
per i numeri multipli di tre stampare la parola "Fizz" anzichè il numero

per i numeri multipli di cinque stampare la parola "Buzz" anzichè il numero

per i numeri multipli di tre e contemporaneamente di 5 stampare la parola "FizzBuzz" anzichè il numero

/*Per tutti gli altri stampa il numero

let n = 100;
let oi = document.getElementById("num");


for (let i = 1; i <= n; i++) {
    let numdicinque = i % 5;
    let numditre = i % 3;

    if (numditre == 0 && numdicinque == 0) {
        console.log("FIZZBUZZ");
        oi.innerHTML += `<p> "FIZZBUZZ" </p>`;

    } else if (numdicinque == 0) {
        console.log("Buzz");
        oi.innerHTML += `<p> BUZZ </p>`;

    } else if (numditre == 0) {
        console.log("Fizz");
        oi.innerHTML += `<p> Fizz </p>`;

    } else {
        console.log(i);
        oi.innerHTML += `<p> ${i} </p>`;
    }
}
*/
let n = 100;
let array = [];


function ciClaNumeri() {
    for (let i = 1; i <= n; i++) {
        let numeri = fizzbuzz(i);
        array.push(numeri);
    }
    return array;
}

function fizzbuzz(i) {
    let numdicinque = i % 5;
    let numditre = i % 3;
    if (numditre == 0 && numdicinque == 0) {
        console.log("Buzz");
        return creaHTML("FIZZBUZZ");


    } else if (numdicinque == 0) {
        console.log("Buzz");
        creaHTML("Buzz");


    } else if (numditre == 0) {
        console.log("Fizz");
        creaHTML("Fizz");


    } else {
        console.log(i);
        creaHTML(i);

    }

}

function creaHTML(fizzbuzz) {
    let oi = document.getElementById("num");
    oi.innerHTML += `<p> ${fizzbuzz} </p>`;
}





ciClaNumeri()








