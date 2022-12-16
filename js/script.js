// CHECK JS LINK
console.log('JS OK');

//! TESTO
/*
 L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto 
un messaggio in console con il numero della cella cliccata.
MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play,
 vengono generate 100 celle in 10 righe da 10 celle ciascuna.
MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 
 */


// * FUNZIONI -----------------------------------------------

    const createCellNumber = (number) => {
        const cell = document.createElement( 'div');
        cell.append(number);
        cell.classList.add('cell');
        return cell;
    }




//* RECUPERO ELEMENTI Dal DOM

const grid = document.querySelector('.grid');
const startScreen = document.getElementById('start-play');
const button = document.getElementById('button');
const reset = document.getElementById('reset');
const select = document.getElementById('difficulty');



//* INIZIALIZZAZIONE VALIDAZIONE
let isGenerated = false;

// *CREO LOGICA AD AZIONAMENTO PULSANTE

button.addEventListener('click' , () => {

//* INIZIALIZZO VALORI
const square = parseInt(select.value);
const totalCells = square * square ;
grid.classList.remove('disp-none');
startScreen.classList.add('disp-none');

//*VALIDAZIONE
if(!isGenerated){
isGenerated = true;
for(let i = 1 ; i <= totalCells ; i++) {

    const cell =  createCellNumber(i);
    //*GESTINSCO DIFFICOLTA
    if(square === 7){
        cell.classList.add('hard');
    }
    else if (square === 9){
        cell.classList.add('medium');
    }
    else {
        cell.classList.add('easy');
    }
    
    //* AGGIUNGO CLASSE A CLICK DELLA CELLA
    cell.addEventListener('click' , () =>{
        cell.classList.toggle('clicked');
        console.log ( 'Cella cliccata: ' + i);
    })
    //* INSERISCO IN PAGINA
    grid.appendChild(cell); 

}
}
});

reset.addEventListener('click' , () => {
    window.location.reload();
});
