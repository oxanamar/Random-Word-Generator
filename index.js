const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const generateButton = document.querySelector("#generateButton");

function generateRandomWord() {
  const randomIndex1 = Math.floor(Math.random() * alphabet.length);
  const randomIndex2 = Math.floor(Math.random() * alphabet.length);
  const randomIndex3 = Math.floor(Math.random() * alphabet.length);
  const randomIndex4 = Math.floor(Math.random() * alphabet.length);
  const randomWord =
    alphabet[randomIndex1] +
    alphabet[randomIndex2] +
    alphabet[randomIndex3] +
    alphabet[randomIndex4];
  document.querySelector(
    ".paragraph"
  ).textContent = `Random Word: ${randomWord}`;
}

generateButton.addEventListener("click", generateRandomWord);
