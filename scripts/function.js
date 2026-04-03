'use strict';

// devo controllare se l'utente inserisca un nome corretto e non inserisca un form vuoto
// che inserisca un numero e che non sia inferiore a 0

// funzione che calcola il prezzo del biglietto
function calcolaPrezzoBiglietto(event) {
    event.preventDefault();

    const nomePasseggeroValue = nomePasseggero.value;
    const kmPasseggeroValue = Number(kmPasseggero.value);
    const etaPasseggeroValue = etaPasseggero.value;
    const prezzoBiglietto = kmPasseggeroValue * prezzoKm;
    let prezzoBigliettoJunior = 0;
    let prezzoBigliettoNormale = 0;
    let prezzoBigliettoSenior = 0;

    if (!nomePasseggeroValue || nomePasseggeroValue.trim() === '') {
        alert('INSERISCI UN NOME VALIDO')
    }
    if (!isNaN || kmPasseggeroValue <= 0 || kmPasseggeroValue > 9999) {
        alert('INSERISCI UN NUMERO DI KM VALIDO')
    }

    if (etaPasseggeroValue === "underage") {
        prezzoBigliettoJunior = prezzoBiglietto * scontoJunior;

    } else if (etaPasseggeroValue === "adult") {
        prezzoBigliettoNormale = prezzoBiglietto;

    } else if (etaPasseggeroValue === "over65") {
        prezzoBigliettoSenior = prezzoBiglietto * scontoSenior;

    }

    console.log(prezzoBigliettoJunior);
    console.log(prezzoBigliettoNormale);
    console.log(prezzoBigliettoSenior);
    

}

// funzione che ricarica la pagina
function clickBottonReloadHandler (){
    location.reload();
}