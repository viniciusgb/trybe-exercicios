// Array é uma estrutura de dados que nos permite armazenar uma lista de elementos. 
// São úteis para inserir, alterar ou remover itens de uma lista de compras por exemplo.

const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];

// Acessando o primeiro elemento do array shoppingList

console.log(shoppingList[0]); // Saída: Arroz

// Acessando o terceiro elemento do array shoppingList e guardando dentro de uma constante

const item = shoppingList[2];

console.log(item);  // Saída: Leite Ninho

// Alterar o valor de um elemento

shoppingList[1] = 'Suco de Cajú';

console.log(shoppingList); // Saída: [ 'Arroz', 'Suco de Cajú', 'Leite Ninho', 'Sucrilhos' ]

// Adicionar e remover elementos de um array

// Método	 -               Descrição
// push()	 - Adiciona um elemento ao final do array
// unshift() - Adiciona um elemento no início do array
// pop()	 - Remove o último elemento do array
// shift()	 - Remove o primeiro elemento do array

// push()
shoppingList.push('Cotonetes');

// unshift()
shoppingList.unshift('Água de Coco');

// pop()
shoppingList.pop();

// shift()
shoppingList.shift();

console.log(shoppingList);

// TAMANHO DO ARRAY - percorrer um array, realizar exclusões, realizar adições, modificações ou exibir o total de elementos daquele array.

console.log(shoppingList); // Saída: ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos']

console.log(shoppingList.length); // Saída: 4

// para fixar  

// exercicio 1 - Altere o valor da variável menuServices para que ela passe a 
// ter o valor “Serviços”. Isso deve ser feito através da variável menu.

const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1];

console.log(menuServices);

// Exercício 2
// Adicione o valor “Contato” no final do array menu.

const menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu2.push('Contato')

console.log(menu2);

