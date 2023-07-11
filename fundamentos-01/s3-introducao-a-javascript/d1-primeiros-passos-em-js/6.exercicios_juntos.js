// Exercício 1

let num1 = 10;
let num2 = 5;

console.log('Soma: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' + (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Módulo: ' + (num1 % num2));


// Exercício 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

const primeiroNumero = 12;
const segundoNumero = 11;

if (primeiroNumero > segundoNumero) {
    console.log(primeiroNumero + " é maior que " + segundoNumero);
} else if (primeiroNumero === segundoNumero) {
    console.log('são iguais');
} else {
    console.log(segundoNumero);
}

// Exercício 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

const primeiroNumero2 = 13;
const segundoNumero2 = 14;
const terceiroNumero2 = 12;

if (primeiroNumero2 > segundoNumero2 && primeiroNumero2 > terceiroNumero2) {
    console.log(primeiroNumero2);
} else if (segundoNumero2 > primeiroNumero2 && segundoNumero2 > terceiroNumero2) {
    console.log(segundoNumero2);
} else if (terceiroNumero2 > primeiroNumero2 && terceiroNumero2 > segundoNumero2) {
    console.log(terceiroNumero2);    
}

// Exercício 4 - Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

const primeiroAngulo = 70
const segundoAngulo = 50
const terceiroAngulo = 60
mensagem2 = ''

if (primeiroAngulo + segundoAngulo + terceiroAngulo == 180) {
    mensagem2 = 'true'
} else {
    mensagem2 = 'false'
}
console.log(mensagem2);

// Exercício 5 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
// Atenção ⚠️: não sabe o que é switch/case? Reveja a aula pois pode ter passado despercebido ☺️. Caso queira se aventurar na aprendizagem do switch/case através da documentação, tem um link muito bom te esperando na lição de Recursos Adicionais. Por fim, você terá mais oportunidades de sedimentar o conhecimento sobre a estrutura condicional switch/case ao longo da formação! Agora, só queremos dar visibilidade que existem outras ferramentas para fazer operações condicionais, ok?
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).
// Exemplo: Bispo -> Diagonais.

let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei -> Uma casa para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonais.');
    break;
  case 'rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
};

// Exercício 6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false. Faça esse exercício utilizando somente um if.

const num11 = 1;
const num22 = 3;
const num33 = 5;

let isEven = false;

if ((num11 % 2 === 0 || num22 % 2 === 0 || num33 % 2 === 0)) {
  isEven = true;
};

console.log(isEven);

// Exercício 7 - Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda). ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
};

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: R$" + (baseSalary - aliquotIR));
