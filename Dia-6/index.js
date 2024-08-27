//Exercício:1 
//criando variáveis
let escolhaUmNumero = 0

escolhaUmNumero = prompt ("Escolha um número: ")
console.log("O número escolhido é: " + escolhaUmNumero)

//criando loop for
for (let contador = 0; contador <= escolhaUmNumero; contador++){
    console.log("A contagem é: " + contador)
}

//Exercício:2
//criando loop for
for (let contador = 0; contador <=50; contador+=5){
    console.log("A contagem é: " + contador)
}

//Exercício:3 
//criando loop for
for (let contador = 50; contador >=0; contador-=5){
    console.log("A contagem é: " + contador)
}

//Exercício:4
let numero = parseInt(prompt("Digite um número inteiro e positivo"))
for (let i = numero; i <= numero + 2; i++){
    console.log("Tabuada do número: " + i)
    for (let j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i * j))
    }
}