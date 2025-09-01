// Typing effect for the profession line

const textArray = ["Web Developer", "Designer", "Tech Enthusiast"];

let index = 0, charIndex = 0;

const profession = document.querySelector(".profession");

function type() {

  if (charIndex < textArray[index].length) {

    profession.textContent = textArray[index].substring(0, charIndex + 1);

    charIndex++;

    setTimeout(type, 100);

  } else {

    setTimeout(erase, 1500);

  }

}

function erase() {

  if (charIndex > 0) {

    profession.textContent = textArray[index].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(erase, 50);

  } else {

    index = (index + 1) % textArray.length;

    setTimeout(type, 1000);

  }

}

document.addEventListener("DOMContentLoaded", () => {

  setTimeout(type, 500);

});