//Declare uma variável para armazenar um **nome**, sem atribuir um valor.
const nome = null
//Declare uma variável para armazenar uma **idade**, sem atribuir um valor.
let idade = null
//Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log(typeof(nome, idade))

//Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
let nomePrompt = prompt('Qual o seu nome?')
let idadePrompt = prompt('Qual a sua idade?')

//Novamente, imprima na tela o tipo dessas variáveis.
console.log(typeof(nomePrompt))
console.log(typeof(idadePrompt))
//Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu.

console.log('Olá', nomePrompt, "você tem", idadePrompt, 'anos.')


