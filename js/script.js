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

const grid = document.getElementById('grid');
const button = document.getElementById('button');


//* INIZIALIZZO VALORI
const row = 10;
const cols = 10;
const totalCells = row * cols ;

//* INIZIALIZZAZIONE VALIDAZIONE
let isGenerated = false;

// *CREO LOGICA AD AZIONAMENTO PULSANTE

button.addEventListener('click' , () => {
//*VALIDAZIONE
if(!isGenerated){
isGenerated = true;
for(let i = 1 ; i <= totalCells ; i++) {

    const cell =  createCellNumber(i);
    
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


