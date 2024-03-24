function trocarLuz() {
  if (document.getElementById("vermelho").className === "luz vermelho") {
    document.getElementById("vermelho").className = "luz semluz"
    document.getElementById("verde").className = "luz verde"
  }
  else {
    if (document.getElementById("verde").className === "luz verde") {
      document.getElementById("verde").className = "luz semluz"
      document.getElementById("amarelo").className = "luz amarelo"
    }
    else {
      document.getElementById("amarelo").className = "luz semluz"
      document.getElementById("vermelho").className = "luz vermelho"
      }
    }
  }
