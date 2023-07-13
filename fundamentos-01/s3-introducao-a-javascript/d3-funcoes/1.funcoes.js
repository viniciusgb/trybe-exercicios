// FUNÇÕES 

// function - é uma palavra reservada do JavaScript, onde deixamos explícito que iremos declarar uma função;
// giveGreeting - é o nome da função. Neste caso utilizamos o nome giveGreeting para deixar nítido que a 
//     função irá dar uma saudação;
// () - dentro dos parênteses é onde definimos os parâmetros da função. Eles são uma espécie de “variáveis” 
//     utilizadas para passar informações para dentro da função, caso necessário;
// { } - os colchetes delimitam o escopo da função. É o “corpo” que contém o que a ser executado;
// return - é uma palavra-chave reservada do JavaScript que indica que a função deve retornar um valor quando 
//     é chamada. Logo após retornado um valor, a função se encerra. No nosso exemplo, estamos retornando a
//     string “Olá, boas-vindas à Trybe!”.

function giveGreeting() {
    return `Olá, boas-vindas à Trybe!`;
  };
  
  console.log(giveGreeting());

// Funções com parametros ---------------------------------------------------------------------------------------------------------

function sum(num1, num2) {
    return num1 + num2;
  };
  
  console.log(sum(10, 8));

//

const trybeBankCustomerss = ['Oliva', 'Nat', 'Gus'];

function greetCustomer(customer) {
  for (let index = 0; index < customer.length; index += 1) {
    console.log(`Olá, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  }
};

greetCustomer(trybeBankCustomerss);

// FIXAR - Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro passado deve ser do tipo string”.

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer (customers) { 
  if(typeof customers != 'string') {

    return 'O parametro enviado não é uma string'
  }

trybeBankCustomers.push(customers);
return 'Pessoa adicionada com sucesso';

};

console.log(addCustomer(true));
console.log(addCustomer('Vinícius'));
console.log((trybeBankCustomers));

// FIXAR - Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
//    Essa função deve receber dois parâmetros: o array trybeBankCustomers e um novo array de pessoas que devem ser adicionadas.
//    Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso algum elemento contido no segundo parâmetro não seja do tipo string, retorne a mensagem: “Todos os valores precisam ser strings.”.

const trybeBankCustomers3 = ['Oliva', 'Nat', 'Gus'];

function addCustomers3 (customers3, newCustomers3) {

  for (let index = 0; index < newCustomers3.length; index += 1) {
    if (typeof newCustomers3[index] === 'string') {
      customers3.push(newCustomers3[index]);
    } else {
      return 'Todos os valores precisam ser strings.';
    }
  }

  return trybeBankCustomers3;
};

console.log(addCustomers3(trybeBankCustomers3, ['Carolina', 'Adamastor'])); // [ 'Oliva', 'Nat', 'Gus', 'Carolina', 'Adamastor' ]
console.log(addCustomers3(trybeBankCustomers3, ['Miranda', 78])); // Todos os valores precisam ser strings.

//---------------------------------------------------------------------------------------------------------


