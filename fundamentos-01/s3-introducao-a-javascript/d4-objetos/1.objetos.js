const residents = [
    {
      name: 'Luíza',
      lastName: 'Guimarães',
      floor: 10,
      apartment: 1005,
    },
    {
      name: 'William',
      lastName: 'Albuquerque',
      floor: 5,
      apartment: 502,
    },
    {
      name: 'Murilo',
      lastName: 'Ferraz',
      floor: 8,
      apartment: 804,
    },
    {
      name: 'Zoey',
      lastName: 'Brooks',
      floor: 1,
      apartment: 101,
    },
  ];

  const firstResident = residents[0];
console.log(firstResident); // Resultado do log: { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }
console.log(firstResident.floor);
    
    // como descobrir o ultimo residente do array:

    const lastResident = residents[residents.length - 1];
console.log(lastResident); // Resultado do log: { name: 'Zoey', lastName: 'Brooks', floor: 1, apartment: 101 }

    // fazer o log de todas as pessoas residentes através do loop

    for (let index = 0; index < residents.length; index += 1) {
        const resident = residents[index];
        console.log('nome e sobrenome: ' + resident.name + ' ' + resident.lastName);
      };

// exercicio:

// Crie uma variável chamada player e atribua a ela um objeto que reúna todas as informações das variáveis listadas.

const player = { // Crie a variável player, inicialmente armazenando um objeto vazio.

    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  };

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, concatene as informações e armazene na variável message no seguinte formato: 
// “A jogadora Marta Silva tem 34 anos de idade”.

let message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`
console.log(message);

// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e armazene na variável achievements a quantidade de títulos no seguinte formato: 
// “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

let achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes.`;

console.log(achievements);