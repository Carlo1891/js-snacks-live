// Primo Snack

// const userNumber2 = parseInt (prompt("Inserisci un numero"));
// const userNumber1 = parseInt (prompt("Inserisci un numero"));

// if (userNumber1 > userNumber2){
//     console.log (userNumber1);
// } else if (userNumber2 > userNumber1){
//     console.log (userNumber2);
// } else if (userNumber1 = userNumber2){
//     console.log ("Numeri uguali");
// } else {
//     console.log ("errore");
// }


// Secondo Snack

// const numberList = [];
// let sum = 0;

// for (let index = 0 ; index < 10 ; index++){
// const userNumber= parseint (prompt('Insert'));
// numberlist.push (userNumber);
// sum = sum + userNumber;
// }

// let average = sum / numberList.length;

// console.log (sum, average);
// console.log (numberList);

// Terzo Snack

// const invitati =[];

// const userName=prompt('Inserisci')

// let invitatoTrovato=false;

// for (let i=0;i<invitati.length;i++){
//     if(){
//         invitatoTrovato=true;
//     }
// }

// let i=0;

// while (i<invitati.length){
//     if(username===invitati[i]){
//         invitati=true;
//     }
//     i++;
//     console.log(i);
// }

// let i=0;

// while((i<invitati.length)&&(invitatoTrovato===false) ){
//     if(userName=== invitati[i]){
//         invitatoTrovato=true;
//     }
//     i++;
//     console.log(i;)
// }


// // if (invitatoTrovato===true){
// //         console.log ('Sei invitato');
// //     }else{
// //         console.log ('Non sei invitato');
// //     }
// // }

// Quarto Snack

// const array=[];

// for (let i=0;i<7;i++){
//     const userNumber=parent(prompt('inserisci numero'));
//     if((userNumber%2===0) && (isNaN(userNumber)))
//     array.push (userNumber);
// }

// console.log(array);

// Quinto Snack

/* 
 * Dare la possibilità di inserire due parole. Verificare tramite 
 * una funzione che le due parole abbiano la stessa lunghezza. 
 * Se hanno la stessa lunghezza, stamparle entrambe 
 * altrimenti stampare la più lunga delle due.
*/

// function wordMuchLonger (word1, word2){
//     if (firstWord.lenght === secondWord.lenght){
//         console.log (`${word1} ${word2}, ho scritto entrambe uguali`)
//     } else if (firstWord.lenght === secondWord.lenght){
//         console.log (`${word1} ${word2}, ho scritto entrambe uguali`)
    
//     return result;
// };

// const firstWord = prompt ('Scrivi una parola');
// const secondWord = prompt ('Scrivi un\'altra parola');

// const result = wordMuchLonger(primaParola, secondaParola);

// sesto snack

/* 
Crea un array vuoto e chiedi all'utente un numero
da inserire nell'array. Continua a chiedere i numeri 
all'utente e a inserirli nell'array fino a quando 
a somma degli elementi è minore di 50.
Microbonus: controlla la somma degli elementi usando una funzione che prenda come argomento solo l'array
*/

// const array = [];

// let sum = 0;
// let numberUser;

// while (sum < 50) {
//     numberUser = parseInt( prompt ('numero)'));

//     if (isNaN(numberUser)===false){
//         array.push(numberUser);
//         sum = sum + numberUser;
//     }
// };

// console.log (array);
// console.log (sum);

// function getSumOfElementsInArray (array){
//     let result =0;
//     for (let i=0;i<array.length; i++){
//         const currentNumber =parseInt(array[i]);
//         if (isNaN (currentNumber)===flase){
//             result +=currentNumber
//         }
//     }
//     return result
// }

// settimo Snack

/* 
 * Crea 10 oggetti che rappresentano un peperone, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutti i peperoni.
 */

// const peperoni = [
//     {
//         tipo : 'peperone nano',
//         peso : 0.5,
//         lunghezza : "20 cm"
//     },
//     {
//         tipo : 'peperone nano',
//         peso : 0.5,
//         lunghezza : "20 cm"
//     },
//     {
//         tipo : 'peperone nano',
//         peso : 0.5,
//         lunghezza : "20 cm"
//     },
//     {
//         tipo : 'peperone nano',
//         peso : 0.5,
//         lunghezza : "20 cm"
//     },
// ];

// let sommaPeso = 0;

// for ( let i = 0; i < peperoni.length; i++) {
//     sommaPeso = sommaPeso + peperoni [i].peso;
// }
// console.log (sommaPeso);

// Ottavo snack 
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */
