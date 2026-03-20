/*
## Exercício 1 — Perfil

Crie variáveis:

=
nome
idade
profissao
cidade

Mostre no console:

Meu nome é ___, tenho ___ anos, trabalho como ___ e moro em ___.

*/
 console.log("Exercicio 1");
let nome = ("Maria Eduarda");
let idade = (22);
let profissao = ("designer");
let cidade = ("São Paulo");

console.log(`Meu nome é ${nome}, tenho ${idade} anos, trabalho como ${profissao} e moro em ${cidade}.`);

/* ## Exercício 2 — Produto

Crie variáveis:

produto
preco
quantidade

Mostre:
Comprei ___ unidades de ___ por R$___ cada.
*/
 console.log("Exercicio 2");
let produto = ("Chiclete");
let preco = (2.00)
let quantidade = (3)

console.log(`Comprei ${quantidade} unidades de ${produto} por R$ ${preco} reais cada.`)


/* ## Exercício 3 — Calculando valores

Crie:

valor1 = 10
valor2 = 20

Mostre no console:

Soma
Subtração
Multiplicação
Divisão
*/
 console.log("Exercicio 3");
let valor1 = 10;
let valor2 = 20;

console.log ( valor1 + valor2);
console.log ( valor1 - valor2);
console.log ( valor1 * valor2);
console.log ( valor1 / valor2);

/* ## Exercício 4 — Tipos

Crie 5 variáveis com tipos diferentes e mostre:

valor
tipo

Exemplo esperado:

Olá - string
10 - number
true - boolean
*/
 console.log("Exercicio 4");
//1
console.log (typeof nome);

//2
console.log (typeof idade);

//3
let oGatoMia = true
let oGatoLate = false

 console.log (typeof oGatoMia);
 console.log (typeof oGatoLate);

//4
  let exercicios;
 console.log (typeof exercicios)


/* ## Exercício 5 — Conversões

Crie:

let numero = "100"

Converta para:

number
string novamente

*/
 console.log("Exercicio 5");
let numero = "100";

console.log (typeof numero);

let numeroConvertido = Number(numero);
console.log (typeof numeroConvertido);

let numeroConvertidodnv = String(numeroConvertido);
console.log (typeof numeroConvertidodnv );

/*
# Desafio:

Criar um **mini cadastro**:

VARIAVEIS:
nome
idade
altura
peso
cidade
profissao

MOSTRAR:
Cadastro do usuário
Nome:
Idade:
Altura:
Peso:
Cidade:
Profissão:

*/

 console.log("Exercicio 6- desafio");
let apelido = prompt("Digite seu nome:");
let anosDeIdade = prompt("Digite sua idade:");
let altura = prompt("Digite sua altura:");
let peso = prompt("Digite seu peso:");
let cep = prompt("Digite sua cidade:");
let trabalho = prompt("Digite sua profissão:");

console.log("\nCadastro do usuário");
console.log("Nome:", apelido);
console.log("Idade:", anosDeIdade);
console.log("Altura:", altura);
console.log("Peso:", peso);
console.log("Cidade:", cep);
console.log("Profissão:", trabalho);