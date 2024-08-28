console.log('Estou no dia 2, aprendi Git!')


let nome1 = ""
let nome2 = ""
let idade1 = 0
let idade2 = 0

nome1 = prompt ("Digite um nome: ")
nome2 = prompt ("Digite outro nome: ")
idade1 = prompt ("Digite a idade do primeiro nome: ")
idade2 = prompt ("Digite a idade do segundo nome: ")

console.log ("O primeiro nome é: " + nome1)
console.log ("O segundo nome é: " + nome2)
console.log ("A idade do(a) " + nome1 + " é de " + idade1 + " anos ")
console.log ("A idade do(a) " + nome2 + " é de " + idade2 + " anos ")
console.log ("E a diferença das idades deles é de " + [idade1 - idade2] + " ano(s) ")

if (idade1 >= idade2){
    console.log(nome1 + " é mais velho(a) ou tem a mesma idade que " + nome2)
}else{
    console.log(nome1 + " é mais novo que " + nome2)
}