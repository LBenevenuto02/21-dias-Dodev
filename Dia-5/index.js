let nome = ""
let postoDeGasolina = ""
let valor = 0
let calibrar = "Sim"

nome = prompt("Insira seu nome")
postoDeGasolina = prompt(nome + ", você vai abastecer com: Gasolina == R$5 ou Álcool ==R$3?")
valor = prompt("Qual será o valor?")
calibrar = prompt("Deseja calibrar os pneus?")

switch(postoDeGasolina){
    case "Gasolina":
        console.log("A quantidade de litros abastecido em gasolina é: " + [valor/5] + "(l)");
        break;
    case "Álcool":
        console.log("A quantidade de litros abastecido em álcool é: " + [valor/3] + "(l)");
        break;
    default:
        console.log("Opção inválida");
        break;
}

if (calibrar === "Sim"){
    console.log("Pneus calibrados com sucesso")
}else{
    console.log("Pneus não estão calibrados")
}