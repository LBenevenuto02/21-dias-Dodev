let nome = ""
let fome = ""
let dinheiro = ""
let restaurante = ""

nome = prompt ("Digite seu nome: ")
fome = prompt (nome + " você está com fome? ")
dinheiro = prompt (nome + " você tem dinheiro?")
restaurante = prompt ("O restaurante está aberto?")

if (fome === "não" || dinheiro === "não"){
    console.log(" Hoje a janta será em casa ")
} else if (fome === "sim" && dinheiro === "sim" && restaurante === "não"){
    console.log("Peça um delivery!")
}else{
    console.log("Hoje o jantar será no restaurante preferido!")
}


