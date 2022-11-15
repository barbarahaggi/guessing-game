var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Wow, it seems that we have a Sherlock Holmes here";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "0 to 10!!!! ARE YOU BLIND?";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Too high, try a lower number";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Too low, try a higher number";
  }
}
