// Operador Lógico	Descrição
// &&	AND (E)
// ||	OR (Ou)
// !	NOT (Negação)
// AND (ou &&) ------------

const food = 'pão';
const drink = 'café';

if (drink === 'café' && food === 'pão') {
  console.log('Obrigado!');
} else {
  console.log('Erraram meu pedido.');
}

// ------------

let carrot = true;
let milk = true;
let rice = true;
let bean = true;

let listaDeCompras = carrot && milk && rice && bean;
console.log(listaDeCompras);

// Procedência de operadores ----------------

console.log(10 + 5 * 5); // 10 + 25

// exercicio: -----------

const currentHour = 23;
let mensagem = '';

if (currentHour >= 22) {
    mensagem = 'dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    mensagem = 'rango da noite';
} else if (currentHour >= 14 && currentHour < 18) {
    mensagem = 'bolo café da tarde';
} else if (currentHour >= 11 && currentHour < 14) { 
    mensagem = 'almoço';
} else {
    mensagem = 'cheiro de café';
}
console.log(mensagem);

// OPERADOR OR - (ou || in JS) (apenas uma das condições verdadeiras, ou isso ou aquilo)

const principalDrink = 'café';
const alternativeDrink = 'suco de laranja';

if (principalDrink === 'café' || alternativeDrink === 'suco de laranja') {
  console.log("Agradeço por me atender :D");
} else {
  console.log("Ei, não foi isso que eu pedi!");
}

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ------------ nenhuma hipóstese irá para 2 lugares ao msm tempo e irá para pelo menos 1

const goToSP = true;
const goToGO = false;

if ((goToSP === true && goToGO === false) || (goToSP === false && goToGO === true)) {
  console.log('Eu fui para apenas um dos lugares.');
} else {
  console.log('Eu fui para os dois, ou para nenhum.');
}

// operador NOT - (ou ! in JS) - poderoso, reverte o valor de variáveis.

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

// strings:

let charmander = "Melhor Pokémon inicial.";

console.log(!charmander); // false

// números

console.log(!42); // false

console.log(!0); // true // O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.

// valores nulos

console.log(!null); // true

// valores indefinidos

console.log(!undefined); // true

