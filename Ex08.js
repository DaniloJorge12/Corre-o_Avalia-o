let altura = 1.42;

if (altura >= 1.50 && altura >= 1.40 && altura >= 1.10){
    console.log("Permitidos: Todos ")
}else if(altura < 1.50 && altura >= 1.40 && altura >= 1.10){
    console.log("Permitidos: Tirolesa e Carrossel")
}else if(altura < 1.50 && altura < 1.40 && altura >= 1.10){
    console.log("Permitidos: Carrossel")
}else if(altura < 1.50 && altura < 1.40 && altura < 1.10){
    console.log("Permitidos: Nenhum, você não possuí altura o suficiente ainda")
}

//Exercicio correto