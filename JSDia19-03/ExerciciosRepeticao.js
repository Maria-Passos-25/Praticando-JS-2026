/*EXERCICIOS DE REPETIÇÃO

NÍVEL BÁSICO

1. Contagem de 1 a 10:
    - Use um `for` para exibir os números de 1 a 10 no console.
    
    */
   for(let i= 1; i<=10; i++) {

    console.log("Número", i);
 }
        
        /*
2. **Tabuada de um número:**
    - Peça um número ao usuário.
    - Exiba a tabuada desse número de 1 a 10 usando um `for`.
    
        */
        
let tabuada = prompt("Digite um número para ver a tabuada:");

// Converte a entrada de texto para número
tabuada = Number(tabuada);

// Gera e exibe a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
    let resultado = tabuada * i;
    console.log(`${tabuada} x ${i} = ${resultado}`);}
      
    
    
    /*
3. **Soma dos primeiros N números naturais:**
    - Peça um número `N` ao usuário.
    - Use um `while` ou `for` para somar os números de `1` até `N`.
    - Exemplo:
        - Se um usuário inserir o número 4, o código deverá fazer a soma do 1, 2, 3 e 4 totalizando **10**.
            
            1 + 2 + 3 + 4 = 10
            
        - Se um usuário inserir o número 6, o código deverá fazer a soma do 1, 2, 3, 4 , 5 e 6 totalizando **21**.
            
            1 + 2 + 3 + 4 + 5 + 6 = 21
            */
let numero = prompt("Digite um número N para somar os primeiros N números naturais:");

// Converte a entrada para número
numero = Number(numero);

// Inicializa a variável para armazenar a soma
let soma = 0;
let sequencia = "";  // Variável para armazenar a sequência dos números

// Laço de repetição para somar os números de 1 até N
for (let i = 1; i <= N; i++) {
    soma += i;  // Soma os números
    sequencia += i;  // Adiciona o número à sequência

    // Adiciona o "+" se não for o último número
    if (i < N) {
        sequencia += " + ";
    }
}

// Exibe a sequência e o resultado da soma
console.log(`${sequencia} = ${soma}`);