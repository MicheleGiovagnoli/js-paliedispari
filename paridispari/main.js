const sceltaUtente = prompt('scegli se pari o dispari');
const numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));

console.log(numeroUtente);
console.log(sceltaUtente);


const somma = numeroUtente + numeroRandom(1,5);
console.log(somma);
const risultatoPariDispari = pariDispari(somma);



if (sceltaUtente == risultatoPariDispari) {
    console.log('complimenti hai vinto');
}
else {
    console.log('ritenta e sarai piu fortunato');
}





function pariDispari (valore) {
    
    let risultato = '';
    
    if (valore % 2 == 0) { 
        risultato = 'pari';
    }
    else {
        risultato = 'dispari';
    }
    return risultato;
}


function numeroRandom (min, max) {
  const numeroRandom = Math.floor( Math.random() * (max - min + 1) ) + min;
  console.log(numeroRandom);
  return numeroRandom;
}