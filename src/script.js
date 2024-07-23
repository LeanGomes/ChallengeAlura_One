// Função para criptografar o texto usando a cifra de César
function criptografar() {
  // Obtém o valor do campo de entrada de texto
  let textoNormal = document.getElementById("texto__area").value;
  // Obtém o botão de copiar
  let bntCopiar = document.getElementById("bnt__copiar");
  // Obtém a área de texto onde o texto criptografado será exibido
  let textAreaCri = document.getElementById("texto__areaDois");
  // Obtém o elemento que será escondido ao criptografar
  let esconderTag = document.getElementById("esconderTag");
  // Obtém o elemento de aviso para mostrar mensagens de erro
  let span = document.getElementById("spanAtencao");

  // Define o número de deslocamento para a cifra de César
  let crypt = 8;

  // Inicializa a variável para armazenar o texto criptografado
  let textoCriptografado = "";

  // Define uma expressão regular para verificar se o texto contém apenas letras minúsculas
  let regex = /^[a-z]+$/;

  // Verifica se o texto contém caracteres não permitidos
  if (!regex.test(textoNormal)) {
    // Se o texto contém caracteres não permitidos, limpa o campo de entrada
    document.getElementById("texto__area").value = "";
    // Altera a cor do texto de aviso para vermelho
    span.style.color = "red";
    return; // Sai da função sem criptografar o texto
  } else {
    // Se o texto é válido, criptografa o texto
    for (let i = 0; i < textoNormal.length; i++) {
      let char = textoNormal[i];
      // Verifica se o caractere é uma letra minúscula
      if (char >= "a" && char <= "z") {
        // Obtém o código ASCII do caractere
        let charCode = char.charCodeAt(0);
        // Aplica a cifra de César para criptografar o caractere
        char = String.fromCharCode(((charCode - 97 + crypt) % 26) + 97);
      }
      // Adiciona o caractere criptografado ao resultado
      textoCriptografado += char;
    }
  }

  // Se o campo de entrada estiver vazio, não faz nada
  if (textoNormal == "") {
    return;
  }

  // Define a cor do texto de aviso para preto (normal)
  span.style.color = "black";
  // Esconde a tag de aviso
  esconderTag.style.display = "none";
  // Exibe o botão de copiar
  bntCopiar.style.display = "block";
  // Exibe a área de texto onde o texto criptografado será mostrado
  textAreaCri.style.display = "block";

  // Atualiza a área de texto com o texto criptografado
  document.getElementById("texto__areaDois").value = textoCriptografado;
}

// Função para copiar o texto criptografado para a área de transferência
function copiarTexto() {
  // Obtém o texto criptografado da área de texto
  let textoCopiado = document.getElementById("texto__areaDois").value;

  // Copia o texto para a área de transferência
  navigator.clipboard.writeText(textoCopiado);
  // Limpa a área de texto onde o texto criptografado foi exibido
  document.getElementById("texto__areaDois").value = "";
}

// Função para descriptografar o texto usando a cifra de César
function descriptografar() {
  // Obtém o texto criptografado do campo de entrada
  let textoNormal = document.getElementById("texto__area").value;
  // Define o número de deslocamento para a cifra de César na direção oposta
  let crypt = -8;

  // Inicializa a variável para armazenar o texto descriptografado
  let textoDescriptografado = "";

  // Descriptografa o texto
  for (let i = 0; i < textoNormal.length; i++) {
    let char = textoNormal[i];
    // Verifica se o caractere é uma letra minúscula
    if (char >= "a" && char <= "z") {
      // Obtém o código ASCII do caractere
      let charCode = char.charCodeAt(0);
      // Aplica a cifra de César para descriptografar o caractere
      char = String.fromCharCode(((charCode - 97 + crypt) % 26) + 97);
    }
    // Adiciona o caractere descriptografado ao resultado
    textoDescriptografado += char;
  }

  // Atualiza o campo de entrada com o texto descriptografado
  document.getElementById("texto__area").value = textoDescriptografado;
}
