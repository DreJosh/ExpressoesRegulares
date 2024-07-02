
const fs = require('fs')
const bancoCsv = 'databse.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g
// Podemos inserir um \d. Ele sinaliza para a nossa Regex que ela vai precisar capturar uma classe de números.Vamos colocar um + para representar a repetição dos nossos dígitos. Portanto, ela vai retornar os dígitos em sequência. Se estiverem juntos, ela retorna, do contrário, não vai retornar.
// Ao final da nossa Regex, vamos colocar um g. Ao fazer isso, é como se disséssemos para a Regex: pegue todos os dígitos em sequência e do arquivo todo.
// Para informarmos isso à Regex, vamos abrir uma barra de escape \, adicionar um parêntese (. Depois do dígito, também vamos inserir outra barra de escape \ e parêntes ).
const matchTelefone = banco.match(regexTelefone)
console.log(matchTelefone);


const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g
const matchCelular = banco.match(patternCel)
console.log(matchCelular);
