// ESTRUTURAS DE REPETIÇÃO
// permite executar um bloco de código várias vezes
// com base em uma condição. Ex quero que execute com base em 10 vezes


//TIPOS:

/*
FOR (para)
WHILE (enquanto)
DO WHILE (faça quando)
FOREACH (para cada  )
*/


// FOR - Usamos quando sabemos quantas vezes o código vai se repetir.

// Explicação: let=1; i <= 5; i++


// let i=1 -> criamos uma variavel e chamamos ela de "i"
// essa váriavel vai servir como estado inicial da estrutura de repetição
// conforme for repetindo, ela vai aumentando de valor

// i <= 5 -> condição: essa condição vai definir o limite de repetições.
// significa = "enquando o valor de 'i' for menor ou igual a 5.."

//i++ ->iterador: nesse caso, quando usamos o ++, quer dizer que estamos acrescentando +1 dentro do 1
// i++ é a mesma coisa que i= i+1

// for(let i= 1; i<=5; i++) {

//     console.log("Oi!!!");
//     console.log("número", i);
// }



// // WHILE -> Executa o bloco de código enquanto uma condição for verdadeira.

//  let contador = 1;
//  while (contador <=3) { // contador é menor ou igual a 3?
//      console.log ("Repetindo.....");
//    console.log (contador);
//     contador++ // contador = contador + 1
    
//  }

// // contador é menor ou igual a 3? verdadeiro
// // imprime e faz contador = contador + 1
// // contador = 1 + 1 -> contador agora vale 2


// // contador é menor ou igual a 3? verdadeiro

// let numero = 5;

// do {
//     console.log("Executou pelo menos uma vez.");
   
// }
// while (numero < 3); // false

// //---------//---------------//--------

// while (numero < 3) {
//     console.log ("Executou aqui");
//     numero++
// }


// FOREACH- Usado para quando temos uma lista de elementos e queremos percorrer os elementos dessa lista

// lista (array)

// let nomes = ["Maria Eduarda", "Kauê", "Lailon"];

// nomes.forEach(function(nome) {
//     console.log ("Nome: ", nome)
//     // console.log (nome[1]); 

// })

// //pega a lista de nomes e para cada nome, imprima o nome

// // forEach simplicando -> (arrow(function))


// let nomes1 = ["Maria Eduarda", "Kaue", "Lailon"]

// nomes1.forEach(nome =>{
//     console.log (nome)
// })




// // Sistemas de intervalo definido pelo usuarui

// let inicio = Number (prompt("digite o número inicial"));
// let fim = Number (prompt("Digite o número final: "));

// for(let i = inicio; i <= fim; i+=5) {
//     console.log(i);
// }


// //contagem pulando os numeros
// for(let i = 0; i <= 20; i+=2) {
//     console.log(i);
// // }

// let valor = "";

// while (valor != "sair") {
//     valor= prompt("Digite algo ou 'sair' para parar");
//     console.log("Você digitou:", valor);
// }


// //contador om regra
// let limite = Number(prompt("Mostrar números maiores que:"));

// for (let i=1; i <= 10; i++) {
//     if(i > limite) {
//         console.log(i);
//     }
// }

// //Percorrendo array usando for

// let cores = ["Azul", "Verde", "Vermelho"];
// //tamanho 3
// //posição (indice) começa em zero- vai de 0 a 2.

// //length -> tamanho (pega o tamanho do array (lista))
// for(let i = 0; i < cores.length; i++) {
//     console.log("Posição da cor: " + i + "-" + cores [i]);
// } 

// // i -> imprime o número da posição
// // cores[i] -> imprime a cor da posição


// condição dentro do foreach

let numeros = [3, 7, 10, 15];

numeros. forEach (num => {
    if(num >8) {
        console.log("Maior que 8:", num)
    }
})