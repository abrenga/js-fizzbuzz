/*fizzbuzz 
Stampare in console i numeri che vanno da uno a 100 
per i numeri multipli di tre stampare la parola "Fizz" anzichè il numero


per i numeri multipli di cinque stampare la parola "Buzz" anzichè il numero

per i numeri multipli di tre e contemporaneamente di 5 stampare la parola "FizzBuzz" anzichè il numero


/*Per tutti gli altri stampa il numero*/



let n = 100;

for (let i = 1; i <= n; i++) {
    let numdicinque = i % 5;
    let numditre = i % 3;

    if (numditre == 0 && numdicinque == 0) {
        console.log("FIZZBUZZ");


    } else if (numdicinque == 0) {
        console.log("Buzz");


    } else if (numditre == 0) {
        console.log("Fizz");

    } else {
        console.log(i);

    }
}






