const headings = document.getElementsByTagName("h1");

function animateHeading(heading) {
  const text = heading.innerText;
  heading.innerText = "";

  for (let i = 0; i < text.length; i++) {
    const letter = document.createElement("span");
    letter.innerText = text.charAt(i);
    letter.style.opacity = 0;
    heading.appendChild(letter);

    setTimeout(() => {
      letter.style.opacity = 1;
    }, 100 * i);
  }
}

// Call the animateHeading function for each h1 element
let index = 0;
animateHeading(headings[index]);

// Set the interval to repeat the animation every 2 seconds
setInterval(() => {
  index++;
  if (index >= headings.length) {
    index = 0;
  }
  animateHeading(headings[index]);
}, 500);


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

 async function getIpSum() {
        try {
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          const ip = data.ip.replace(/\./g, ''); // remove dots
          let sum = 0;
          for (let i = 0; i < ip.length; i++) {
            const digit = parseInt(ip[i]);
            if (!isNaN(digit) && digit % 2 === 0) { // check if digit is even
              sum += digit;
            }
          }
          return { ip, sum };
        } catch (error) {
          console.error(error);
        }
        
      }
      
      const getIpSumButton = document.getElementById('get-ip-sum-button');
      getIpSumButton.addEventListener('click', () => {
        getIpSum().then(({ ip, sum }) => {
          const ipElement = document.getElementById('ip');
          ipElement.textContent = "Your IP address is:"+ip;

          const sumElement = document.getElementById('sum');
          sumElement.textContent ="The sum of the even digits in your IP address is: " +sum;
        });
      });

      function goToTop() {
        // Scroll to the top of the page
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
 // Flag variable to keep track of whether alert has been triggered or not
      let alertTriggered = false;

      window.addEventListener("scroll", function () {
        // Get the coordinates of the section we want to trigger the alert for
        const section2Coords = document.getElementById("section2").getBoundingClientRect();

        // Check if the top of the section is within the visible viewport and the alert has not been triggered yet
        if (section2Coords.top <= window.innerHeight * 0.5 && section2Coords.bottom >= window.innerHeight * 0.5 && !alertTriggered) {
          alert("You have scrolled to Section 2!");
          alertTriggered = true;
        }
    })
        
    