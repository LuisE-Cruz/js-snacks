/*
JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
 */


// forVersion
let result = 0;

for (let i = 0; i < 5; i++) {
    const addNumber = parseFloat(prompt('Inserisci un numero'));
    result += addNumber;
}
console.log("Il risultato di tutti i numeri sommati è: " + result);


// whileVersion
let counter = 0;
let resultWhile = 0;

while(counter < 5) {
    const newNumber = parseFloat(prompt('inserisci un numero'));
    resultWhile += newNumber;
    counter++
}
console.log('La somma dei numeri sommati è: ' + resultWhile);