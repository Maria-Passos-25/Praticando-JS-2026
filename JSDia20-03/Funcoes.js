// a partir da linha 80
//--------------//
// // TRIM -> remove espaços no inicio e final de uma string 

// let nome = "     João ";
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);

//----------------//
// // INCLUDES -> Verifica se existe um valor dentro de uma lista ou string
// let frutas= ["maça" , "banana"];

// let frutasIncludes = frutas.includes("banana");
// console.log(frutasIncludes); // true (verdadeiro)




//----------//
// //toLowerCase -> tranforma texto em minúsculo

// //toUpperCase -> tranforma texto em maiúsculo

// let nome="MADU";
// let cargo="intrutora";


// console.log(nome.toLowerCase());
// console.log(cargo.toUpperCase());

//--------------//
// //FOREACH - Percorre todos os elementos do array
// //diferente do map não retorna um novo array

// let nomes= ["Pedro", "João", "Guilherme"];

// nomes.forEach(nome => console.log("Seu nome é:", nome));

//---------------------//
// //SOME -> Verifica se PELO MENOS UM item atende a condição
// let numeros = [1, 3, 5, 8];

// // se eu dividir  número por 2 e o resto for igual a 0, então o número é par
// // o operador % significa resto da divisão
// // num % 2 === 0 -. se o resto da divisão por 2 for igual a 0, então atende a condição.
// let temPar = numeros.some(num => num % 2 === 0);

// console.log(temPar); // true(verdadeiro)

//---------------

// //EVERY -> verifica se TODOS os elementos atendem a uma condição

// let numeros = [1, 3, 5, 8];

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); // false

//---------------//

// // SORT -> Ordena os elementos do array
// let numeros = [ 3, 5, 2, 4]
// let letras = [ "a", "u", "o", "i", "e"]

// numeros.sort((a, b) => a - b); // para números
// console.log(numeros); // [2, 3, 4, 5]

// letras.sort(); // para letras
// console.log(letras); 


//-----------------//

// // REVERSE -> Inverte a ordem de um Array(lista)
// let numeros = [1, 2, 3];
// numeros.reverse();
// console.log(numeros); // [3, 2, 1]



//-----------------//

// // JOIN -> junta os elementos de um array(lista) em uma string()
// let palavras = ["Js", "é", "muito", "bom"];

// let frase = palavras.join(" ");
// console.log(frase); // "Js é muito bom"

//-----------------//

// //PUSH -> Adiciona elementos no final do array(lista)
// // POP -> Remove elementos no final do array(lista)

// let lista = ["A", "B"];

// lista.push("C") // adicionar
// lista.pop(); // remove
// console.log(lista);


//-----------------//

// // SHIFT -> Remove do inicio do array(lista)
// // UNSHIFT -> adiciona no inicio do array(lista)

// let lista=["B", "C"];

// lista.unshift("A"); //adiciona
// lista.shift(); //remove

// console.log(lista);
//--------------------


// // SLICE -> Cria uma cópia de uma parte da lista

// /*

//     array.slice(inicial, final);

//     inicial -> onde começa
//     final -> onde para (não inclui a posição (indice ou index))

// */
// let numeros =[1, 2, 3, 4] // numero 1 posição 0, numero 2 posição 1, numero 3 posição 2, numero 4 posição 3
// let parte = numeros.slice(1, 3);; // 1 e 3 são as posições do array

// console.log(parte);// [2, 3] não pega a posição final [3]

//--------------------
// // SPLICE -> Remove ou adiciona elementos em qualquer posição

// /*
//     array.splice(index, count, item1, ....., itemX)

//     index -> indice(posição do elemento do array)
//     count -> número de itens a serem removidos (pode ser 0)
//     item1, item2.... -> itens a serem adicionados
// */

// // removendo elementos, sem adicionar

// let numeros = [1, 2, 3, 4];

// numeros.splice(1, 1);

// console.log(numeros); // [1, 3, 4]

// //removendo e adicionando mais dois elementos


// let frutas = ["Banana", "Laranja", "Maça", "Manga"];

// frutas.splice(0,4, "Limão", "Kiwi");
// // primeiro elemento é a posição e o segundo elemento é a quantidade
// console.log(frutas)


// //adiciona dois elementos sem remover nenhum
// let frutasNovas = ["Banana", "Laranja", "Maça", "Manga"];
// frutasNovas.splice(2,0, "limão", "kiwi");
// console.log(frutasNovas);

//----------------------//

// REPLACE -> Substitui uma parte da string

let texto ="Olá mundo";

let novoTexto = texto.replace("mundo", "cliente");
console.log(novoTexto);



// SPOILEERRRRRRR

let textoP = document.getElementById("texto");

let saudacao = prompt("Digite a saudação:  ")

if(saudacao == "Bom dia!") {
    textoP.textContent = saudacao;
} else {
    textoP.textContent = "SEXTOOOU!";
}








