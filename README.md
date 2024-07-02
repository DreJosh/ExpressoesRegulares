# Expressões Regulares: faça buscas, validações e substituições de textos

Em ciência da computação, uma expressão regular (do inglês regular expression, abreviado regex ou regexp) provê uma forma concisa e flexível de identificar cadeias de caracteres de interesse, como caracteres particulares, palavras ou padrões de caracteres. Expressões regulares são escritas numa linguagem formal que pode ser interpretada por um processador de expressão regular, um programa que serve um gerador de analisador sintático ou examina o texto e identifica as partes que casam com a especificação dada.

- Regular Expression: campo para inserção da expressão regular.
- Test String: campo para inserir seu texto de teste.
- Flavor: opções de construção de regex com diferentes linguagens de programação.
- Function: opções de funcionalidade ou recursos para Regex, como a captura de ocorrências, substituição por um padrão.
- Explanation: apresenta uma explicação sobre o funcionamento da sua Regex.
- Match Information: campo em que as informações detalhadas do match são exibidas automaticamente.
- Quick Reference: contém uma breve explicação sobre o funcionamento de tokens, metachars, classes, grupos, âncoras, quantificadores, dentre outros.

## Busca no terminal

No Linux ou WSL podemos realizar algumas consultas atraves do comando `grep`. Que é uma abreviação para Global Regular Expression Print (Impressão Global da Expressão Regular).

Para isso, existe uma ferramenta muito útil e comumente utilizada no dia a dia, que é a linha de comando via terminal do WSL ou do Linux, onde podemos utilizar expressões regulares. Portanto, vamos verificar como realizar essa busca!

Começaremos abrindo o terminal WSL. Em seguida, vamos inserir o comando `grep`. Logo após esse comando, adicionamos espaço e inserimos o nome do padrão que desejamos buscar. Neste caso, vamos adicionar o nome do primeiro usuário teste fornecido pelo time: "Anna".

`grep Anna ./database.csv`

Quando encontrado retornar a linha com a palavra em destaque e quando não encontrado retorna sem nada (linha em branco).

Para retornar o numero da linha colocamos um `-n` na frente da palavra que queremos encontrar.

Nós estamos fazendo com o arquivo **CSV** mas podemos fazer com outros como **TXT, JS, etc..**.

E temos opções para inserir no comando `grep`.

As opções são inseridas através de flags e você pode especificar os usos do comando, conheça algumas opções a seguir:

- grep -i ou --ignore-case: Ignora a diferenciação entre maiúsculas e minúsculas, tornando a pesquisa insensível a letras maiúsculas ou minúsculas.
- grep -v ou --invert-match: Inverte a correspondência, exibindo linhas que não contêm o padrão especificado.
- grep -r ou -R ou --recursive: Realiza uma pesquisa recursiva em diretórios e seus subdiretórios. Útil para encontrar padrões em árvores inteiras de diretórios.
- grep -l ou --files-with-matches: Exibe apenas os nomes dos arquivos que contêm correspondências, em vez das próprias linhas correspondentes.
- grep -c ou --count: Exibe apenas o número de correspondências em cada arquivo, em vez das próprias linhas correspondentes.
- grep -n ou --line-number: Exibe o número da linha junto com as linhas correspondentes.
- grep -E ou --extended-regexp: Interpreta o padrão de pesquisa como uma expressão regular estendida (Regex) em vez de uma correspondência literal.
- grep -f ou --file=: Lê os padrões de pesquisa de um arquivo em vez de especificá-los diretamente na linha de comando.
- grep -h ou --no-filename: Suprime a exibição dos nomes dos arquivos ao imprimir as linhas correspondentes.
- grep -P : habilita o modo de interpretação de padrões como expressões regulares Perl (Perl-Compatible Regular Expressions ou PCRE). Isso significa que você pode usar padrões de expressões regulares mais avançados e complexos com a flag -P. As expressões regulares Perl são mais poderosas e flexíveis do que as expressões regulares básicas usadas pelo grep por padrão. No entanto, nem todas as versões do grep suportam a opção -P, pois ela depende da biblioteca PCRE (Perl-Compatible Regular Expressions). Portanto, verifique a disponibilidade dessa opção na versão específica do grep em seu sistema.
- man grep: é uma opção que apresenta toda a documentação do grep no terminal.

## Utilizando o Regex no JS

### Método Match()

O método match() é proveniente do prototype da string, utilizado para manipulação das Regex. Podemos consultar a documentação do MDN para obter uma visão geral de como esse método funciona, o que ele faz, quais são os parâmetros, e o que ele retorna.

A primeira informação importante sobre o `match()` é que se trata de um método `String.prototype.match()`.

### Metachars

Porém, o que são esses símbolos /\(\d+\)\s\d+-\d+/g? O que é essa "sopa de letrinhas" com \ (barra), d, s, +, o que isso significa?

No mundo das Regex, chamamos essas informações, esses caracteres de metachars(metacaracteres). Eles têm um significado especial dentro da nossa Regex. Não significam, literalmente, um d, s ou +, mas podem representar um grupo, uma classe de caracteres, como encontramos no d, que é a classe de dígitos. O \d é uma classe de dígitos de 0 a 9.

Já o s é uma classe que agrupa vários espaços vazios. Então, temos o backspace, o tab e vários outros espaços vazios também, que compõem essa classe de caracteres.

Temos também +, que significa uma série de repetições, o que entenderemos um pouco melhor mais adiante. E temos g, que é uma flag e diz para a Regex aplicar todo esse padrão no documento integralmente. Portanto, não vai parar somente na primeira ocorrência, vai buscar todas as ocorrências que encontrar no arquivo.

O parêntese também é um metachar, mas para transformá-lo em um parêntese literal, trabalhamos com a barra de escape \. Notamos também que as barras de escape são muito importantes.

Uma abordagem comum para criar padrões de de expressões regulares é usar metacaracteres, que são caracteres com significados especiais dentro de uma Regex. Mas você sabia que é possível trabalhar com expressões regulares além dos meta-chars?

Outra abordagem para a construção de padrões é com o uso de POSIX (Portable Operating System Interface for Unix, Interface de Sistema Operacional Portátil para Unix). O POSIX é uma padronização que define algumas funcionalidades suportadas por sistemas operacionais baseados em UNIX e garante a comunicação universal entre os sistemas.

O que temos em primeiro lugar? Temos uma sequência de três dígitos. Portanto, podemos trabalhar com metacharacter \d para representar esses três dígitos. Conseguimos até notar que ele identifica todos os dígitos, obtendo 33 matches no regex101. Para especificar que são três dígitos, usamos o quantificador.

Entretanto, o primeiro padrão exige um ponto (.). O que acontece se incluímos um ponto na regex (\d{3}.)? Isso captura tudo, tanto o ponto, quanto outro dígito, como o hífen. O ponto na regex, da forma como está, também é um metacharacter. Este metacharacter significa "qualquer coisa".

Para transformar o ponto em um ponto literal, podemos colocar uma barra de escape (\). O problema, porém, é que não foi capturado o hífen. Para resolver isso, podemos criar uma classe, que é uma sequência de caracteres. Basta abrir colchetes e colocar os caracteres que desejamos, que no caso são o ponto e o hífen ([.-]).

Agora, ele capturou o ponto e o hífen, mas a sequência apenas de dígitos não foi capturada. Para resolver isso, inserimos ao final da classe um ponto de interrogação (?). Esse ponto de interrogação também é um metacharacter que, neste caso, é um quantificador que torna essa classe opcional, ou seja, ela vai aparecer zero ou uma vez dentro dos padrões.

Já que encontramos repetição deste padrão, podemos simplesmente copiar e inserir ao final da regex o mesmo padrão mais duas vezes. Resta apenas, por fim, uma sequência de dois dígitos. Para isso, vamos usar \d e inserir o quantificador.
