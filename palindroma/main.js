//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma



const parola = prompt('Digita una parola:');
const arrayParola = parola;

let arrayParolaInversa = '';

let prelievoCarattere;
let contatore = arrayParola.length-1;

while(contatore >= 0) {                          // il ciclo si ripete per ogni lettera che compone la parola

    prelievoCarattere = arrayParola[contatore];  //Scorro arrayParola, ad ogni ciclo prelevo una lettera e la salvo in prelievoCarattere 
    console.log(prelievoCarattere);

    arrayParolaInversa += prelievoCarattere;     //Salvo in arrayParolaInversa le lettera appena presa

    contatore--                                  //siccome inizio dall'ultima lettera di arrayParola per realizzare una parola inversa, con il contatore "torno indietro"
}                                                //ripeto il ciclo fin che arrayParolaInversa non contenga tutte le lettere 
console.log(arrayParolaInversa);
console.log(arrayParola);

if (arrayParola == arrayParolaInversa) {
    console.log("e' palindroma");
}
else {
    console.log("non e' palindroma");
}


