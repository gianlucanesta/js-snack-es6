// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi
// e falli subiti e stampiamo tutto in console.

const teams = 
[
    {
        nome: 'Napoli',
        punti: 0,
        falli_subiti: 0  
    },

    {
        nome: 'Milan',
        punti: 0,
        falli_subiti: 0   
    },

    {
        nome: 'Inter',
        punti: 0,
        falli_subiti: 0   
    },
    {
        nome: 'Atalanta',
        punti: 0,
        falli_subiti: 0   
    },
    {
        nome: 'Roma',
        punti: 0,
        falli_subiti: 0  
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli_subiti: 0  
    }
]


const newTeam = [];

for (let i = 0; i < teams.length; i++){
    const thisTeam = teams[i];
    // Genero numeri random per punti e falli subiti
    thisTeam.punti = getRndInteger(0, 32);
    thisTeam.falli_subiti = getRndInteger(0, 50);
    //console.log(thisTeam);

    // Con la destrutturazione creo un nuovo array con nomi e falli subiti
    const {nome, falli_subiti} = thisTeam;
    
    const teamValues = {
        nome,
        falli_subiti
    }
    newTeam.push(teamValues);
}

// Stampo in console i risultati
for(let i = 0; i < newTeam.length; i++) {
    thisNewTeam = newTeam[i];
    console.log(thisNewTeam.nome + ' ha subito: ' + thisNewTeam.falli_subiti + ' falli');
}

// Funzione standard per generare numero casuale
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

