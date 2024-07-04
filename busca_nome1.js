const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternNomes = /[A-Za-zÀ-ÿ]+\s[A-Za-zÀ-ÿ]+/g
// Para trabalhar com letras de A a Z temos que adicionar a nossa regex a letra de origem do alfabeto e a letra final do alfabeto.
// Os regex são sensitive, com ponta disso temos que colocar as letras maiusculas e minisculas, e para verifica as letra com acento temos que colocar elas também.

const matchNomes = banco.match(patternNomes)
console.log(`todos os nomes:`, matchNomes);
