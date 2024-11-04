const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "white",
];

const buttonChangeColor = document.querySelector("#change-color-btn")

function gerarUmIndiceAlatorio() {
  let indice = Math.round(Math.random() * 10);
  return indice
}

let result; 

function trocarCor(){
    result = gerarUmIndiceAlatorio();
    document.body.style.backgroundColor = colors[result];
}

buttonChangeColor.addEventListener("click", trocarCor)