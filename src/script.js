// Função para criptografar o texto
function criptografar() {
  let textoNormal = document.getElementById("texto__area").value; // Obtém o texto do campo de entrada
  let bntCopiar = document.getElementById("bnt__copiar"); // Botão de copiar
  let textAreaCri = document.getElementById("texto__areaDois"); // Área de texto criptografada
  let esconderTag = document.getElementById("esconderTag"); // Tag que é escondida após a criptografia
  let span = document.getElementById("spanAtencao"); // Mensagem de atenção

  let textoCriptografado = "";
  let regex = /^[a-z\s]+$/; // Expressão regular para validar letras minúsculas e espaços
  span.style.color = "black"; // Reseta a cor do span para preto

  // Verifica se o texto contém apenas letras minúsculas e espaços
  if (!regex.test(textoNormal)) {
    document.getElementById("texto__area").value = ""; // Limpa o campo de entrada se houver caracteres inválidos
    span.style.color = "red"; // Altera a cor do span para vermelho
    return;
  } else {
    // Realiza a substituição de caracteres para criptografar o texto
    textoCriptografado = textoNormal
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  // Verifica se o campo de entrada está vazio
  if (textoNormal == "") {
    return;
  }

  // Esconde a tag de mensagem inicial e exibe a área criptografada
  span.style.color = "black";
  esconderTag.style.display = "none";
  bntCopiar.style.display = "block";
  textAreaCri.style.display = "block";

  // Exibe o texto criptografado e limpa o campo de entrada original
  document.getElementById("texto__areaDois").value = textoCriptografado;
  document.getElementById("texto__area").value = "";
}

// Função para descriptografar o texto
function descriptografar() {
  let textoNormal = document.getElementById("texto__area").value; // Obtém o texto criptografado

  // Realiza a substituição inversa para descriptografar o texto
  let textoDescriptografado = textoNormal
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // Exibe o texto descriptografado e limpa o campo de entrada original
  document.getElementById("texto__areaDois").value = textoDescriptografado;
  document.getElementById("texto__area").value = "";
}

// Função para copiar o texto criptografado para a área de transferência
function copiarTexto() {
  let textoCopiado = document.getElementById("texto__areaDois").value; // Obtém o texto criptografado

  // Copia o texto para a área de transferência
  navigator.clipboard.writeText(textoCopiado);

  // Limpa o campo de texto criptografado após a cópia
  document.getElementById("texto__areaDois").value = "";
}
