const lotteryNumber = [];
const firstGame = [4, 16, 27, 29, 41, 57] // Vini

// sorteio dos numeros

for (let index = 0; index < firstGame.length; index += 1) {
    let randomNum = Math.ceil(Math.random () * 60); // variável vai armazenar a geração de numeros aleatórios armazenados para cima
    if (!lotteryNumber.includes(randomNum)) { // se o numero não for gerado
        lotteryNumber.push(randomNum); // ele entra no array vazio
    } else { // caso o numero gerado exista
        index -= 1; // decrementa 1 do index
    }
}

 // comparação do sorteio com o jogo.

 let hits = [];
 let numberOfHits = 0;

 for (let indexlottery = 0; indexlottery < lotteryNumber.length; indexlottery += 1) {
    for (let indexGame = 0; indexGame < firstGame.length; indexGame += 1) {
        if (lotteryNumber[indexlottery] === firstGame[indexGame]){
            numberOfHits += 1
            hits.push(lotteryNumber[indexlottery]); // adiciona os numeros acertados no array hits
        }
    }
 }

 // quantidade de acertos

 console.log(`Mega-Sena: ${lotteryNumber}`);
 console.log(`Vini-Game: ${firstGame}`);
 console.log(`Numero de acertos: ${numberOfHits}`);
 console.log(`Números acertados: ${hits}`);
 