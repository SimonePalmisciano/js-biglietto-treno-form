'use strict';

const prezzoKm = 0.21;
const scontoJunior = 0.8;
const scontoSenior = 0.6;
const nomePasseggero = document.querySelector('#inputNameSurname');
const kmPasseggero = document.querySelector('#inputKm');
const etaPasseggero = document.querySelector('#selectAge');
const bottoneConferma = document.querySelector('#btnConferma');
const bottoneAnnulla = document.querySelector('#btnAnnulla');



bottoneConferma.addEventListener('click', calcolaPrezzoBiglietto);
bottoneAnnulla.addEventListener('click', )