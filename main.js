const zucchine = [
    { varieta: "1", peso: 4, lunghezza: "10" },
    { varieta: "2", peso: 3, lunghezza: "50" },
    { varieta: "3", peso: 5, lunghezza: "20" },
    { varieta: "4", peso: 8, lunghezza: "30" },
    { varieta: "5", peso: 9, lunghezza: "25" },

    { varieta: "6", peso: 10, lunghezza: "27" },
    { varieta: "7", peso: 1, lunghezza: "32" },
    { varieta: "8", peso: 4, lunghezza: "37" },
    { varieta: "9", peso: 3, lunghezza: "31" },
    { varieta: "10", peso: 2, lunghezza: "7" },
]


const melanzane = [
    { varieta: "1", peso: 2, lunghezza: "10" },
    { varieta: "2", peso: 3, lunghezza: "50" },
    { varieta: "3", peso: 2, lunghezza: "20" },
]

let risultatoAddizione = addizione2(zucchine);
console.log("le zucchine pesano " + risultatoAddizione)
risultatoAddizione2 = addizione2(melanzane);
console.log("le melanzane pesano " + risultatoAddizione2)


/*
function addizione(dati) {
    let pesoGruppo = 0;
    for (let i = 0; i < dati.length; i++) {
        let pesoSingolo = dati[i].peso;
        pesoGruppo = pesoGruppo + pesoSingolo;

        // console.log("ciclo ", pesoGruppo);
    }
    return "Il peso finale è " + pesoGruppo;
}
*/

function addizione2(dati) {
    let pesoGruppo = 0;
    dati.forEach(function (element) {
        let pesoSingolo = element.peso;

        pesoGruppo = pesoGruppo + pesoSingolo;

    });
    return pesoGruppo;
}



//Questo funziona senza array
/*
function misura15cm(dati) {
    let misuraMaggiore = 0;
    let pesoMaggiore = 0;

    let misuraMinore = 0;
    let pesoMinore = 0; //Qua non funzionava perché non avevo assegnato 0;

    let pesoDato = 0;



    for (let i = 0; i < dati.length; i++) {

        if (dati[i].lunghezza > 15) {
            misuraMaggiore++;
            pesoDato = dati[i].peso;
            pesoMaggiore = pesoMaggiore + pesoDato;
        }

        else {
            misuraMinore++;
            pesoDatoMin = dati[i].peso;
            pesoMinore = pesoMinore + pesoDato;
        }

    }
    console.log(`Gli oggetti che mi misurano più di 15cm sono: ${misuraMaggiore} e pesano un totale di ${pesoMaggiore}.
    Mentre quelli che misurano meno di 15cm sono: ${misuraMinore} e pesano un totale di ${pesoMinore}.`)
}
*/

//Questo funziona con la creazione degli array specifici
function misura15cmArray(dati) {
    let misuraMaggiore = 0;
    let pesoMaggiore = 0;

    let misuraMinore = 0;
    let pesoMinore = 0; //Qua non funzionava perché non avevo assegnato 0;

    let pesoDato = 0;


    let arrayLungo = [];
    let arrayCorto = [];


    for (let i = 0; i < dati.length; i++) {

        if (dati[i].lunghezza > 15) {
            arrayLungo.push(dati[i])
            pesoDato = dati[i].peso;
            pesoMaggiore = pesoMaggiore + pesoDato;
        }

        else {
            arrayCorto.push(dati[i])
            misuraMinore++;
            pesoDatoMin = dati[i].peso;
            pesoMinore = pesoMinore + pesoDato;
        }

    }

    console.log("lungo", arrayLungo);
    console.log("corto", arrayCorto);
    console.log(`Gli oggetti che mi misurano più di 15cm sono: ${misuraMaggiore} e pesano un totale di ${pesoMaggiore}.
    Mentre quelli che misurano meno di 15cm sono: ${misuraMinore} e pesano un totale di ${pesoMinore}.`)
}

//Snack 3
/*
let userString = prompt("inserisci una Stringa");

// userString.split("");
// userString.reverse();
// userString.join();
// console.log(userString)

let reversed = [...userString].reverse().join('');//Fatto ma non ho capito perché si debbano usare i 3 puntini
console.log(reversed)
*/


//Snack 4
const array = [1, 2, 3];
const arrayLettere = ["a", "b", "c"];
let arrayFinale = [];
let arrayPersonale = [];

for (let i = 0; i < array.length; i++) {
    arrayFinale.push(array[i]);
    arrayFinale.push(arrayLettere[i]);
    arrayPersonale.push(array[i] + arrayLettere[i]);

}
console.log("primo array ", array);
console.log("secondo array ", arrayLettere);
console.log("array finale ", arrayFinale);
console.log("array personale", arrayPersonale);


//Snack 5
function snack5(array "2"){
    while(a<b && b=array.length){

    }
}