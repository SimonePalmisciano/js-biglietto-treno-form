'use strict';

const prezzoKm = 0.21;
const scontoJunior = 0.8;
const scontoSenior = 0.6;
const nomePasseggero = document.querySelector('#inputNameSurname');
const kmPasseggero = document.querySelector('#inputKm');
const etaPasseggero = document.querySelector('#selectAge');
const bottoneConferma = document.querySelector('#btnConferma');
const bottoneAnnulla = document.querySelector('#btnAnnulla');

function calcolaPrezzoBiglietto(event) {
    event.preventDefault();

    const nomePasseggeroValue = nomePasseggero.value;
    const kmPasseggeroValue = kmPasseggero.value;
    const etaPasseggeroValue = etaPasseggero.value;
    const prezzoBiglietto = kmPasseggeroValue * prezzoKm;

    if (etaPasseggeroValue === "underage") {
        console.log(`prezzo scontato Junior ${prezzoBiglietto * scontoJunior}`);
        

    } else if (etaPasseggeroValue === "adult") {
        console.log(`prezzo normale ${prezzoBiglietto}`);
        
    } else if (etaPasseggeroValue === "over65") {
        console.log(`prezzo scontato Senior ${prezzoBiglietto * scontoSenior}`);
        
    }

}

bottoneConferma.addEventListener('click', calcolaPrezzoBiglietto);
