/* Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e
peso.
 */

let listaBici = [
    {nome: "SuperSix Evo",
    peso: 7.3,}
    ,
    {nome: "TCR ",
    peso: 6.8,}
    ,
    {nome: "SL7 ",
    peso: 6.8,}
    ,
    {nome: "Pinarello Dogma F12",
    peso: 0.8,}
];
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
[a, , , d] = listaBici;
console.log(`Il peso minore tra le biciclette inserite nell'array appartiene a ${d.nome}, che ha un peso di: ${d.peso} grammi`);