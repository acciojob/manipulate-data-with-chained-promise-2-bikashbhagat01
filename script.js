//your JS code here. If required.
// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // Initial array
    }, 3000);
  });
}

// Function to filter out odd numbers
function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter((num) => num % 2 === 0); // Filter even numbers
      document.getElementById("output").textContent = evenNumbers.join(", ");
      resolve(evenNumbers);
    }, 1000);
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map((num) => num * 2); // Multiply even numbers by 2
      document.getElementById("output").textContent = multipliedNumbers.join(", ");
      resolve(multipliedNumbers);
    }, 2000);
  });
}

// Chaining the promises
getNumbers()
  .then(filterEvenNumbers)
  .then(multiplyEvenNumbers)
  .catch((error) => {
    console.error("An error occurred:", error);
  });
