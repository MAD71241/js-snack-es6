/* SNACK1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
 */

let listaBici = [
    {
        nome: "SuperSix Evo",
        peso: 7.3,
    }
    ,
    {
        nome: "TCR ",
        peso: 6.8,
    }
    ,
    {
        nome: "SL7 ",
        peso: 6.8,
    }
    ,
    {
        nome: "Pinarello Dogma F12",
        peso: 0.8,
    }
];
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const [a, b, c, d] = listaBici;
let weightArray = [];

for (let i = 0; i < listaBici.length; i++) {
    weightArray.push(listaBici[i].peso);
}
weightArray.sort;
const weightLastItem = weightArray[weightArray.length - 1];

console.log(`Il peso minore tra le biciclette inserite nell'array appartiene a ${d.nome}, che ha un peso di: ${weightLastItem} grammi`);

/* SNACK2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 */

let serieA = [
    {
        nome: "AC Milan",
        punti: 0,
        falli: 0
    }
    ,
    {
        nome: "FC Inter",
        punti: 0,
        falli: 0
    }
    ,
    {
        nome: "Juventus FC",
        punti: 0,
        falli: 0
    }
    ,
    {
        nome: "AS Roma",
        punti: 0,
        falli: 0
    }
    ,
    {
        nome: "SS Lazio",
        punti: 0,
        falli: 0
    }
    ,
];
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
for (let i = 0; i < serieA.length; i++) {
    let pointsGen = Math.floor(Math.random() * 100) + 1;
    let foulsGen = Math.floor(Math.random() * 300) + 1;
    serieA[i].punti = pointsGen;
    serieA[i].falli = foulsGen;
}
console.log(serieA);
let finalStanding = [];
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
for (let i = 0; i < serieA.length; i++) {
    const {nome, falli} = serieA[i];
    finalStanding.push({nome, falli});
}
console.log(finalStanding);