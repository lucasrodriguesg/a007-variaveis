//Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial
let a = +prompt("Digite um número")
let b = +prompt("Digite outro número")
console.log("O valor de A é:", a, "O valor de B é:", b)

//Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`
var c = a

a = b
b = c 

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

