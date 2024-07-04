// Expressão regular para validar uma URL canônica "www.alura.com.br"
const regexCanonica = /^https?:\/\/www\.alura\.com\.br$/;

// URLs de exemplo
const urlsDeExemplo = [
  "https://www.alura.com.br",
  "http://www.alura.com.br",
  "https://www.alura.com.br/pagina",
  "https://www.alura.com",
];

// Verificando se as URLs de exemplo correspondem à regex canônica
urlsDeExemplo.forEach((url) => {
  if (regexCanonica.test(url)) {
    console.log(`A URL '${url}' é uma URL canônica válida.`);
  } else {
    console.log(`A URL '${url}' não é uma URL canônica válida.`);
  }
});
