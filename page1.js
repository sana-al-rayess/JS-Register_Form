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
  sortedOutput.textContent = sortedNumbers.join(", ");

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
