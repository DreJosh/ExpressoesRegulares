const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternNomes =  /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/g
// Quando colocamos um "/s" na frente da sequencia estamos falando que queremos retorna os espaços.
// Quando colocamos o "?:" estamos falando para não capturar mais os espaços vazio na nossa captura.

const matchNomes = banco.match(patternNomes)
console.log(`todos os nomes:`, matchNomes);
