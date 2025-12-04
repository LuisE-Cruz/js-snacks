/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let promptNumber1 = parseInt(prompt("Inserisci il primo numero"));
let promptNumber2 = parseInt(prompt("Inserisci il secondo numero"));
// console.log(promptNumber1, promptNumber2);

if(promptNumber1 > promptNumber2){
    console.log(promptNumber1);
    //  + " è maggiore di " + promptNumber2
}else if (promptNumber2 > promptNumber1){
    console.log(promptNumber2);
    //  + " è maggiore di " + promptNumber1
}else {
        console.log("Sono uguali");

}



