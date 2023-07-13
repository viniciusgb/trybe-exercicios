// ARROW FUNCTIONS - sintaxe curta para escrever funções, não possuem nomes e são armazenadas em variáveis.

function subtraction(num1, num2) {
    return num1 - num2;
  };

console.log(subtraction(10,1));

// convertendo em Arrow function: ------

const subtraction2 = (num1, num2) => {
    return num1 - num2;
};

console.log (subtraction2(100, 30)); 

// Simplificando a Arrow:

const subtraction3 = (num1, num2) => { return num1 - num2 };

console.log (subtraction3 (100, 50)); 

// Remoção das chaves e o return:

const subtraction4 = (num1, num2) => num1 - num2;

console.log (subtraction4 (10, 50));