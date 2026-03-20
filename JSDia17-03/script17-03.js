/* 
comentario em bloco
*/

// comentario em linha

/* 
O que são váriaveis- declarar váriaveis

palavras chaves para criar variaveis: antes de colocar o nome da variaveç

CONST 
LET 
VAR 

*/

// //CONST - utilizada quando o valor nn pode mudar (+ seguro)
// const idade = 30; //caixinha idade recebe o valor 30.


// //LET quando o valor pode mudar (+ utilizado)
// //tudo que for texto é entre ""
// let nome = "Kessia"; 

// //VAR - forma antiga de declaração (evitar usar)
// var cidade= "São Caetano do sul";

/*
//imprimindo os valores
console.log (idade); // imprimir o valor 30 
console.log (nome); // imprimir o valor "Kessia"
console.log (cidade); //imprimir o valor "São Caetano do sul"
*/

//alterando valores
/*console. log (nome);
nome ="Lucas";
console. log (nome);


console. log (idade);
idade = 25;
console. log (idade);
*/

// ======================================
// //INTERPOLAÇÃO
// console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade.`);
// console.log("Juntando nome " + nome + " com idade " + idade);


//=====================================
//  // TIPOS PRIMITIVOS

// //1. string (Textos em geral (numero,caracteres))
//  let mensagem = "Olá mundo!";
//  console.log( typeof mensagem); //imprime o tipo de dado


// //2. Number  (armazena numeros inteiros ou decimais)

// let quantidade = 5;
// let temperatura = 36.5;
// console.log (typeof quantidade);


//3. boolean (verdadeiro ou falso)

// let estaChovendo = true;
// let temSol = false;
// console.log (typeof temSol);


// //4. Undefined (indefinido - variavel ainda não recebeu valor)

// let pedido;
// console.log (typeof pedido)



// //5. Null ( usado para representar intensionamente ausencia de valor)
// let endereco = null;
// console.log (typeof endereco);

// =========================================
// // CONVERSÃO DE TIPOS

// // Conversão implicita (automática)
// console.log ("5" + 3); //concatenação - 53 (tipo string)
// console.log ("5" -3 ); // 2 tipo (number)


// Conversão explicita (manualmente)

// //se eu QUISER converter para numero:

// let numero = "42"; //string (texto)
// console.log (typeof numero);

// let numeroConvertido = Number(numero);
// console.log(typeof numeroConvertido);

// // converter para string
// let num= 100;
// console.log (typeof num)

// let texto = String(num); //convertando o numero para
// console.log(typeof texto);


// //converter booleano para numero

// let trueConvertido = Number (true); //1
// console.log(trueConvertido);

// let falseConvertido = Number(false); //0
// console.log(falseConvertido);



// /*=====================================================
// //OPERADORES RELACIONAIS
// // servem para comparar valores

// /*
//  > maior que
//  < menor que
//  >= maior ou igual
//  <= menor ou igual
//  == igualdade (ignora o tipo)
//  === igualde (verificca o tipo, para verificar o mesmo tipo)
//  != diferente (ignora o tipo)
//  !== diferente (verifica o tipo)
// */

// // exemplos:

// console.log ( 10 > 5); // true (verdade)
// console.log (10<5); // false 


// // diferença entre == e ===
// console.log( 5== "5");
// console.log(5 === "5"); 
//=======================================================
// OPERADORES MATEMÁTICOS
// São usados para fazer calculos - como soma, multiplicação etc.

/* 
+ soma
- Subtração
* Multiplicação
/ divisão
% resto da divisão
** potencia
*/
// 
// exemplos: 

// let a = 10;
// let b = 5;

// console.log (a + b); // 15
// console.log (a - b); // 5
// console.log (a * b); // 50
// console.log (a / b); // 2 


// // exemplo 
// // OPERADOR DE RESTO
// console.log( 10 % 3); // retornar o resto 1

// //OPERADOR POTENCIA
// console.log (2 ** 3); // potencia elevado a 3 - 2 * 2 * 2

// ================================================================
































