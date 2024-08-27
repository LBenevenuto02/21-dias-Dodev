let qtdDeHomens = 0
let qtdDeMulheres = 0
let pessoasQueNaoTomaramCafe = 0
let pessoaQueTomaramCafe = 0
let contador = 1

while (contador <10){
    cafe = prompt(contador + " º tomou café? Sim/Não")
    sexo = prompt(contador + " º é m/f?" )

    if (cafe == "Não"){
        pessoasQueNaoTomaramCafe++
    }
    if (cafe == "Sim"){
        pessoaQueTomaramCafe++
    }
    if (sexo == "m"){
        qtdDeHomens++
    }
    if (sexo == "f"){
        qtdDeMulheres++
    }
    contador++
}

console.log("Pessoas que não tomaram cafe: " + pessoasQueNaoTomaramCafe)
console.log("Pessoas que tomaram cafe: " + pessoaQueTomaramCafe)
console.log("Pessoas que tomaram café do sexo m foram: " + qtdDeHomens)
console.log("Pessoas que tomaram café do sexo f foram: " + qtdDeMulheres)