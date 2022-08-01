// Campo Minato


// Prendo l'elemento Button dal DOM
const submitGameLevel = document.querySelector('button[type="submit"]');


// Prendo elemento Select dal DOM
const gameLevel = document.querySelector('.level');



// Prendo Griglia da DOM
const gridTable = document.querySelector('.grid_table');

// Prendo Contenitore con Risultato dal DOM
const resultIsBomb = document.querySelector('.result')

// Inizializzo variabile con punteggio
let gameScore = 0;








// EVENTO CLICK SUL TASTO PLAY PER CREAZIONE TABELLA  START

// Inserisco Evento Click sul Button
submitGameLevel.addEventListener('click', function() {

    // Reset del punteggio
    gameScore = 0;

    // Svuoto il contenuto della griglia ad ogni click
    gridTable.innerHTML = '';

    // Prendo il valore dell'elemento Select e lo salvo in una variabile
    let gameUserLevel = gameLevel.value;

    // Dichiaro la variabile dimensione griglia con valore di default Normal
    let dimensionGrid = 9;

    // Dichiariamo variabile con il numero di bombe da creare con un range di numeri da 1 a 81
    let getMeBomb = createBomb(9 **2);



// 


    // CONDIZIONE PER CREAZIONE GRIGLIA EASY OR HARD  START

   if(gameUserLevel === 'Easy') {
    // Resetto il dato delle bombe
    getMeBomb = 0;

    // Rimuovo la classe Hard
    gridTable.classList.remove('hard')


    // Cambio la ripartizione della griglia e aggiungo quindi una classe all'elemento
    gridTable.classList.add('easy')

    dimensionGrid = 10;

    // Crea 16 bombe su un range di numeri da 1 a 100
    getMeBomb = createBomb(10 **2);

    

   } else if(gameUserLevel === 'Hard') {

    // Resetto il dato delle bombe
    getMeBomb = 0;

    // Cambio la ripartizione della griglia e aggiungo quindi una classe all'elemento
    gridTable.classList.add('hard')

    dimensionGrid = 7;

    // Crea 16 bombe su un range di numeri da 1 a 49
    getMeBomb = createBomb(7 **2);

    

   } else {
    // Tolgo la disposizione della griglia quando la sceltà del livello è Normal
    gridTable.classList.remove('easy','hard')

    // EVENTO CLICK SUL TASTO PLAY PER CREAZIONE TABELLA  START
   }


   // CONDIZIONE PER CREAZIONE GRIGLIA EASY OR HARD  END


  //  Dichiaro il numero di celle di cui è composta la griglia
   let numberCells = dimensionGrid **2;



// CICLO FOR PER APPENDERE ELEMENTI AL DOM START



// Creo un ciclo FOR in cui ad ogni iterazione in cui grazie alla funzione getElementGrid ad ogni iterazione creerà un div con una classe"
for (let i = 0; i < numberCells; i++) {
    
    // Invoco la funzione per la creazione della cella
    const cells = getElementGrid()
    // Appendo ora l'elemento creato alla Tabella
    gridTable.append(cells);
    // Dico per ogni iterazione di inserire il numero i incrementato di uno all'interno della cella
    cells.innerHTML = i + 1;



    // ADDEVENTLISTENER CLICK SU SINGOLA CELLA START

    // Inserisco l'evento click su ogni cella
    cells.addEventListener('click', function(){


        let clikedCell = (parseInt(cells.innerHTML));

        

        // Inserisco If ed indico cosa fare se la cella cliccata è una bomba
        if (getMeBomb.includes(clikedCell)) {

            // Dico ad ogni singola cella di cambiare colore al click
            cells.classList.add('bomb');

            resultIsBomb.innerHTML = 'Mi dispiace, hai perso, il tuo punteggio è :' + (gameScore)

            cells.removeEventListener('click',);
            






         
        
        } else {


            // Dico ad ogni singola cella di cambiare colore al click
            cells.classList.add('nobomb');

            // Incremento il punteggio ogni qualvolta non trovo la bomba
            gameScore++;
        
        }

        



        

        


        
    })

    // ADDEVENTLISTENER CLICK SU SINGOLA CELLA  END




}

// CICLO FOR PER APPENDERE ELEMENTI AL DOM END


})

// EVENTO CLICK SUL TASTO PLAY PER CREAZIONE TABELLA  END



// // // FUNZIONI



// FUNZIONE CHE GENERA NUMERI CASUALI INTERI IN UN RANGE PRESTABILITO DI NUMERI  START

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

// FUNZIONE CHE GENERA NUMERI CASUALI INTERI IN UN RANGE PRESTABILITO DI NUMERI END 



// FUNZIONE PER CREAZIONE ARRAY BOMBE START

function createBomb(max) {

    // Creo un array vuoto in cui dopo genereremo casualmente le bombe
    let gameBomb = [];
    // Finchè non avremo 16 numeri nell'array continueremo a generarli
    while(gameBomb.length < 16) {
        // genero numero intero casuale da 1, a (max)
        const nBomb = getRandomIntInclusive(1,max)
        // Se il numero creato è non incluso nell'array allora più essere creato
        if (!gameBomb.includes(nBomb)) {
            // Pushiamo il numero nell'array
            gameBomb.push(nBomb);
        }

    }

    return gameBomb;
} 



// FUNZIONE PER CREAZIONE ARRAY BOMBE END



// FUNZIONE CREAZIONE DIV CON CLASSE CELLS START


// La funzione è stata creata per creare l'elemento div con classe cells
function getElementGrid() {

    // Dico alla funzione di creare il div
    const div = document.createElement('div');

    // Darò ad ogni elemento creato la classe "cells"
    div.classList.add('cells');

    // Do come valore di ritorno l'oggetto Div creato
    return div;

}

// FUNZIONE CREAZIONE DIV CON CLASSE CELLS END

