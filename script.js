// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // Initial array
    }, 3000); // Delay 3 seconds before resolving
  });
}

// Function to filter out odd numbers and update the DOM after 1 second
function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter((num) => num % 2 === 0); // Filter even numbers
      document.getElementById("output").textContent = "Filtered Even Numbers: " + evenNumbers.join(", ");
      resolve(evenNumbers); // Pass the even numbers to the next chain
    }, 1000); // Delay 1 second for filtering
  });
}

// Function to multiply even numbers by 2 and update the DOM after 2 seconds
function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map((num) => num * 2); // Multiply even numbers by 2
      document.getElementById("output").textContent = "Multiplied Numbers: " + multipliedNumbers.join(", ");
      resolve(multipliedNumbers); // Final result
    }, 2000); // Delay 2 seconds for multiplication
  });
}

// Chaining the promises
getNumbers()
  .then(filterEvenNumbers) // After 3 seconds, filter even numbers
  .then(multiplyEvenNumbers) // After 1 second, multiply even numbers by 2
  .catch((error) => {
    console.error("An error occurred:", error); // Handle any errors
  });
