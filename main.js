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

let index = 0;
animateHeading(headings[index]);
setInterval(() => {
  index++;
  if (index >= headings.length) {
    index = 0;
  }
  animateHeading(headings[index]);
}, 1500);
