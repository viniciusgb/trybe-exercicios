// Crie uma função para calcular o menor número de uma array

const getBiggestAndSmallestNumber = (numbers) => {
    let biggest = numbers[0];
    let smallest = numbers[0];
  
    for (let index=1; index < numbers.length; index+=1) {
      if (numbers[index] < smallest) {
        smallest = numbers[index];
      } else if (numbers[index] > biggest){
        biggest = numbers[index];
      }
    }
  
    return `O maior valor foi ${biggest} e o menor valor ${smallest}`;
  }
  
  const result = getBiggestAndSmallestNumber([5, 3, 80 , 4, 6, 9])
  console.log(result);