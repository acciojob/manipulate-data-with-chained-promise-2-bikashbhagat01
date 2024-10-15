const outputDiv = document.getElementById('output');

function filterOddNumbers(numbers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      outputDiv.innerText = evenNumbers.join(', ');
      resolve(evenNumbers);
    }, 1000);
  });
}

function multiplyEvenNumbers(numbers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map(num => num * 2);
      outputDiv.innerText = multipliedNumbers.join(', ');
      resolve(multipliedNumbers);
    }, 2000);
  });
}

function processNumbers() {
  return new Promise((resolve, reject) => {
    const numbers = [1, 2, 3, 4];
    filterOddNumbers(numbers)
      .then(evenNumbers => multiplyEvenNumbers(evenNumbers))
      .then(result => {
        resolve(result);
      })
      .catch(error => reject(error));
  });
}

processNumbers()
  .then(finalResult => {
    // The final result [4, 8] is available here after 3 seconds
    console.log('Final result:', finalResult);
  })
  .catch(error => console.error(error));
