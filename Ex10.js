let ataques = [40 + 50 + 70 + 80 + 60];
let vidas = 500;
let sobrou = vidas - ataques;

if (vidas >= ataques){
    console.log("O reino resistiu!")
}else if (vidas <= ataques){
    console.log("O reino foi destruído!")
}

console.log("O castelo possui " + sobrou + " vidas restantes");

//Exercicio incorreto