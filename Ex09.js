let pontos = [80, 120, 75, 100, 90];
let jogadores = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

let maiorPontuacao = pontos[0];
let indiceMaior = 0;

for (let i = 1; i < pontos.length; i++) {
    if (pontos[i] > maiorPontuacao) {
        maiorPontuacao = pontos[i];
        indiceMaior = i;
    }
}

console.log("Maior pontuação: " + maiorPontuacao + " do jogador " + jogadores[indiceMaior]);

//Exercicio incorreto