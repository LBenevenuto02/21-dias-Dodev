let seuNome = ""
let idade = 0
let altura = 0
let peso = 0

seuNome = prompt ("Qual é o seu nome?")
idade = parseInt (prompt("Qual é a sua idade?"))
altura = parseFloat (prompt("Qual é a sua altura?"))
peso = parseInt (prompt("Qual é o seu peso?"))

let anoDeNasc = 0
anoDeNasc = 2024 - idade 

let imc = 0
imc = peso / (altura*altura)

console.log("Olá " + seuNome + ", você tem " + idade + " anos, nasceu em " + anoDeNasc + ", tem " + altura + " de altura, pesa " + peso + "Kg e seu IMC é " + imc + "Kg/m2")

