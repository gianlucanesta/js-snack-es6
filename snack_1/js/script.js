// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

const racingBikes = 
[
    {
        nome: 'Atala',
        peso: 12
    },

    {
        nome: 'Basso',
        peso: 9
    },

    {
        nome: 'Bianchi',
        peso: 11
    },

    {
        nome: 'Bottecchia',
        peso: 8
    },

    {
        nome: 'Look',
        peso: 13
    },

    {
        nome: 'Pinarello',
        peso: 15
    },
    
    {
        nome: 'Time',
        peso: 14
    },

    {
        nome: 'Shimano',
        peso: 7
    }
]

// console.log(racingBikes)

// Variabile  bici con peso minore in questo momento
let lightestBike = racingBikes[0];
// console.log(lightestBike)

// Analizzo ogni bici
for(let i = 0; i < racingBikes.length; i++) {
    const thisBike = racingBikes[i];
    
    // Se il peso della bici analizzata è minore della bici più leggera in questo momento
    if(thisBike.peso < lightestBike.peso) {
        // La bici analizzata diventa la bici più leggera
        lightestBike = thisBike;
    }
}
console.log(lightestBike);


// DESTRUTTURAZIONE

const {nome, peso} = lightestBike;

const racingBikeHTML = `

    <h2> ${nome} </h2>
    
    <h4> ha un peso di soli ${peso} Kg</h4>

`;
///////////////////////////////////////////////////


// TEMPLATE LITERAL

// const racingBikeHTML = `
// <h2> ${lightestBike.nome} </h2>
    
// <h4> ha un peso di soli ${lightestBike.peso} Kg</h4>

// `;
////////////////////////////////////////////////////



const bikeContainer = document.getElementById('bike-container');

bikeContainer.innerHTML = racingBikeHTML;