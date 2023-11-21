let nickname = "Homem de Ferro"
let nivelXp = 9050

console.log("O Herói de nome " + nickname)

if(nivelXp <= 1000){
    console.log("Está no Xp Ferro")
}
else if (nivelXp <= 2000){
    console.log("Está no Xp Bronze")
}
else if(nivelXp <= 5000){
    console.log("Está no Xp Prata")
}
else if (nivelXp <= 7000){
    console.log("Está Xp Ouro")
}
else if(nivelXp <= 8000){
    console.log("Está no Xp Platina")
}
else if(nivelXp <= 9000){
    console.log("Está no Xp Ascendente")
}
else if(nivelXp <= 10000){
    console.log("Está no Xp Imortal")
}
else if (nivelXp >= 10001){
    console.log("Está no Xp Radiante")
}     

let value = calculate(62, 5) 

function calculate(figths, loss){
    return (figths - loss) 
}

console.log("O Herói tem saldo de " + value + " Vitórias")

if(value <= 10){
    console.log("Está no nível Ferro")
}
else if (value <= 20){
    console.log("Está no nível Bronze")
}
else if(value <= 50){
    console.log("Está no nível Prata")
}
else if (value <= 80){
    console.log("Está no nível Ouro")
}
else if(value <= 90){
    console.log("Está no nível Diamante")
}
else if(value <= 100){
    console.log("Está no nível Lendario")
}
else if(value >= 101){
    console.log("Está no nível Imortal")
}