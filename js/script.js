const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

// variáveis de controle temporizadores de exibição de erro e resultado
let errorTime;
let resultTime;

// atualizar os resultados com base no valor de entrada
function updateResults() {
  // verifica se o valor de entrada é inválido (menor ou igual a zero ou não é um número)
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    
    // define um novo temporizador para limpar a mensagem de erro após 2 segundos
    errorTime = setTimeout(() => {
      errorEl.innerText = ""; // limpa a mensagem de erro
      inputEl.value = "";     // limpa o campo de entrada
    }, 2000);
  } else {

    // calcula e exibe o resultado convertendo o valor de entrada para quilogramas
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(2);
    
    // limpa o temporizador de resultado anterior, se houver
    clearTimeout(resultTime);
    
    // define um novo temporizador para limpar o resultado após 10 segundos
    resultTime = setTimeout(() => {
      resultEl.innerText = ""; // limpa o resultado
      inputEl.value = "";      // limpa o campo de entrada
    }, 10000);
  }
}

// evento para detectar entrada ao campo de entrada para chamar a função de atualização de resultados
inputEl.addEventListener("input", updateResults);
