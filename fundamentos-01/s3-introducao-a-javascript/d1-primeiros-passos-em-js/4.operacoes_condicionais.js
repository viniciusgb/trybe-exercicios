// Operador de Comparação	Descrição
// ==	Igual a (valor)
// ===	Estritamente igual a (valor e tipo)
// !=	Diferente de
// >	Maior que
// >=	Maior ou igual que
// <	Menor que
// <=	Menor ou igual que

// IF & ELSE

const age = 87;

if (age >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}

//

const beenPrice = 10
const totalMoney = 10
let message = ''

if (totalMoney < beenPrice) {
    message = 'saldo insuficiente.';
} else if (totalMoney === beenPrice) {
    message = 'deu certinho mestre.';
} else {
    message = 'saldo suficiente.';
}
console.log(message);

// OPERADOR TERNÁRIO - toda a lógica em apenas 1 linha.
// 'condição' ? 'retorno se true' : 'retorno se false';

const personAge = 17;

const canVote = personAge >= 16 ? 'Pode votar!' : 'Não pode votar!';

console.log(canVote); // Pode votar!

//

let temperatura = 35;
let clima = temperatura > 30 ? 'ta quente' : 'ta ok'

console.log(clima);

// exercicio

const grade = 90
let mensagem = ''

if (grade >= 80) {
    mensagem = 'aprovada';
} else if (grade > 80) {
    mensagem = 'reprovada';
} else {
    mensagem = 'lista de espera';
}
console.log(mensagem);