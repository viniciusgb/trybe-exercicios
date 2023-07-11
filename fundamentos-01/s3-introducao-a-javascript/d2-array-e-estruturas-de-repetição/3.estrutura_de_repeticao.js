// Estrutura de repetição FOR -------------------------------------------------------------

const laps = 6;

for (let index = 1; index <= laps; index += 1) {
  console.log(`Volta ${index} completada!`);
}

console.log('Acabou a corrida!');

// ------------- somando todos os elementos de um array de números ------------------------

// Array de números
const numbers = [2, 19, 23, 4, 8, 10];

// Variável complementar que irá acumular os valores da somados
let sum = 0;

// Loop for, que irá iterar da posição 0 até o último elemento do array
// A variável sum sempre irá receber o valor atual dela + o número do array

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

console.log(sum);

// ----------------------------------------------------------------------------------------

const shopp = ['sabão', 'macarrão', 'leite'];

for (let index = 0; index < shopp; index += 1) {
    console.log(index);
}; // não ta rodando. 

