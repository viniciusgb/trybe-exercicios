// maneiras de declarar variáveis em JS

var userEmail = 'maria@email.com';

let userId = 78945;

const userLocation = 'Brasil';

if (true) {
    // Início do escopo do if
    var userAge = '20';
    console.log(userAge); // 20
    // Fim do escopo do if
  }
  
  console.log(userAge); // 20

  const favoriteLanguage = 'Javascript';
// erro: favoriteLanguage = 'Python';

console.log(favoriteLanguage); 
// TypeError: Assignment to constant variable.

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';

console.log(favoriteTechnology); 
// Facial recognition

// TIPOS DE VARIÁVEIS:

let patientId = 50;
let isEnrolled = true;
let patientEmail = 'ana@email.com';

console.log(typeof patientId); // number

console.log(typeof patientAge);
