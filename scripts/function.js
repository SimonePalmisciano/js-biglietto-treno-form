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
    let prezzoBigliettoFinale = 0;
    let displayName = document.querySelector('#displayName');
    let displayData = document.querySelector('#displayData');
    let displayAge = document.querySelector('#displayAge');
    let displayPrice = document.querySelector('#displayPrice');


    // verifichiamo se viene inserito un nome
    if (!nomePasseggeroValue || nomePasseggeroValue.trim() === '') {
        alert('INSERISCI UN NOME VALIDO')
        return;
    }
    // verifichiamo se viene inserito un numero corretto
    if (!isNaN || kmPasseggeroValue <= 0 || kmPasseggeroValue > 9999) {
        alert('INSERISCI UN NUMERO DI KM VALIDO')
        return;
    }

    // verifichiamo lo sconto
    if (etaPasseggeroValue === "underage") {
        prezzoBigliettoFinale = prezzoBiglietto * scontoJunior;

    } else if (etaPasseggeroValue === "adult") {
        prezzoBigliettoFinale = prezzoBiglietto;

    } else if (etaPasseggeroValue === "over65") {
        prezzoBigliettoFinale = prezzoBiglietto * scontoSenior;

    }

    // TRADUZIONE VALORE ETA' IN TESTO LEGGIBILE
    let etaLabel;
    if (etaPasseggeroValue === 'underage') {
        etaLabel = 'Minorenne';
    } else if (etaPasseggeroValue === 'adult') {
        etaLabel = 'Maggiorenne';
    } else if (etaPasseggeroValue === 'over65') {
        etaLabel = 'Over 65';
    }

    // dichiariamo una variabile per poter stampare il giorno odierno
    const oggi = new Date().toLocaleDateString('it-IT');


    displayName.textContent = nomePasseggeroValue;
    displayPrice.textContent = `${prezzoBigliettoFinale} €`;
    displayAge.textContent = etaLabel;
    displayData.textContent = oggi;

    const formTitle = document.querySelector('#titolo');
    const formControl = document.querySelector('#formControl');
    const bigliettoMostrato = document.querySelector('#bigliettoMostrato');

    formTitle.classList.add('d-none');
    formControl.classList.add('d-none');
    bigliettoMostrato.classList.remove('d-none');

}

// funzione che ricarica la pagina
function clickBottonReloadHandler() {
    location.reload();
}