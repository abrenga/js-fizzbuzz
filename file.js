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

function ciClaNumeri() {
    for (let i = 1; i <= n; i++) {
        fizzbuzz(i);
    }

}

function fizzbuzz(i) {
    let numdicinque = i % 5;
    let numditre = i % 3;
    if (numditre == 0 && numdicinque == 0) {

        creaHTML("FIZZBUZZ", "bg-body-secondary", "redTex");

    } else if (numdicinque == 0) {

        creaHTML("Buzz", "bg-body-secondary","buzzTellow");

    } else if (numditre == 0) {

        creaHTML("Fizz", "bg-body-secondary","fizzBlu");
    } else {

        creaHTML(i);
    }
}

function creaHTML(fizzbuzz, classUno, classDue) {
    let divFather = document.getElementById("num");
    let divChildS = document.createElement("div");
    divFather.appendChild(divChildS);
    divChildS.classList.add(classUno, classDue);
    divChildS.textContent = fizzbuzz;
    return divChildS;
    /*divFatheri.innerHTML += `<div > ${fizzbuzz} </div>`;
    return divFatheri.innerHTML;*/
}

ciClaNumeri()








