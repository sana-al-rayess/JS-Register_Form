

function sortNumbers() {
    
    const input = prompt("Please enter 10 numbers separated by commas:");
  
    // Split the input string into an array of numbers
    const numbers = input.split(",").map(Number);
  
    
    const numbersOutput = document.getElementById("numbers-output");
    numbersOutput.textContent = numbers.join(", ");


function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
      mergeSort(left),
      mergeSort(right)
    );
  }

  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  
  const sortedNumbers = mergeSort(numbers);
  const sortedOutput = document.getElementById("sorted-output");
  sortedOutput.textContent ="Sorted Numbers:"+ sortedNumbers.join(", ");

}

function checkPalindrome() {
    const inputString = document.getElementById("input-string").value;
    const isPalindrome = palindrome(inputString);
    const message = isPalindrome ? "The string is a palindrome!" : "The string is not a palindrome.";
    document.getElementById("palindrome-result").innerHTML = message;
  }

  function palindrome(str) {
    if (str.length <= 1) {
      return true;
    }

    if (str[0] !== str[str.length - 1]) {
      return false;
    }

    return palindrome(str.slice(1, str.length - 1));
  }

  function checkPrimeAge() {
    const inputYear = document.getElementById("input-year").value;
    const age = new Date().getFullYear() - inputYear;
    const isPrimeAge = isPrime(age);
    const message = isPrimeAge ? "Your age is a prime number!" : "Your age is not a prime number.";
    document.getElementById("prime-age-result").innerHTML = message;
  }

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  function reverseAndConvert() {
    let input = document.getElementById("inputString").value;
    let reversedInput = input.split("").reverse().join("");
    let consonantRegex = /^[^aeiou]+/;
    let consonants = input.match(consonantRegex);
    let result;
    if (consonants) {
      result = input.substring(consonants[0].length) + consonants[0] + "ay";
    } else {
      result = input + "ay";
    }
    document.getElementById("result").innerHTML = "Reversed: " + reversedInput + "<br>Converted: " + result;
  }
  function showLocation() {
    const locationParagraph = document.getElementById("location");
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        locationParagraph.textContent = `Your current location is: (${latitude}, ${longitude})`;
      }, (error) => {
        locationParagraph.textContent = `Unable to retrieve location: ${error.message}`;
      });
    } else {
      locationParagraph.textContent = "Geolocation is not supported by your browser.";
    }
  }

 