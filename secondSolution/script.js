const whyYes = document.getElementById("why-yes");
const newText = document.getElementById("new-text");

let currentLine = 0;
const paragraphs = whyYes.innerText.split(".");

function showNewText() {
  const line = paragraphs[currentLine];
  if (line) {
    newText.innerHTML += line;

    currentLine++;
    setTimeout(showNewText, 3000);
  }
}

showNewText();
