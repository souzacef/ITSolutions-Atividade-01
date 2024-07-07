// Função para calcular o IMC
function calcularIMC() {

  // Obter o valor do peso digitado pelo usuário
  peso = document.getElementById("peso").value;

  // Obter o valor da altura digitado pelo usuário
  altura = document.getElementById("altura").value;

  // Verificar se o usuário preencheu os campos de peso e altura
  if (peso === "" || altura === "") {
    // Se os campos estiverem vazios, exibir um alerta e retornar da função
    alert("Por favor, preencha os campos de peso e altura!");
    return;
  }

  // Converter o peso e a altura para números decimais (float)
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  // Calcular o IMC usando a fórmula: peso / (altura/100 * altura/100)
  resultado = (peso / ((altura / 100) * (altura / 100))).toFixed(2);

  // Obter o elemento HTML que exibe o valor do IMC
  let mostraImc = document.getElementById("mostra-imc");

  // Atualizar o conteúdo do elemento HTML com o valor do IMC calculado
  mostraImc.textContent = "Seu IMC é: " + resultado;

  // Determinar a classificação do IMC com base no valor calculado
  if (resultado < 18.5) {
    // Se o IMC for menor que 18,5, classificar como "Abaixo do peso"
    document.getElementById("classificacao").value = "Abaixo do peso";
  } else if (resultado >= 18.5 && resultado < 24.9) {
    // Se o IMC estiver entre 18,5 e 24,9, classificar como "Peso normal"
    document.getElementById("classificacao").value = "Peso normal";
  } else if (resultado >= 25 && resultado < 29.9) {
    // Se o IMC estiver entre 25 e 29,9, classificar como "Sobrepeso"
    document.getElementById("classificacao").value = "Sobrepeso";
  } else {
    // Se o IMC for maior ou igual a 30, classificar como "Obesidade"
    document.getElementById("classificacao").value = "Obesidade";
  }

  // Registrar o resultado do IMC e a classificação no console do navegador
  console.log("Resultado do IMC:", resultado);
  console.log("Classificação:", document.getElementById("classificacao").value);

  // Prevenir o envio padrão do formulário após o clique no botão
  event.preventDefault();
}
