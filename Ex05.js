let compartilhamentos = ['4','7','8','9','9','10'];
let i = 0;
let maior = Number(compartilhamentos[0]); // inicializa com o primeiro valor convertido para número

while (i < compartilhamentos.length) {
    let valorAtual = Number(compartilhamentos[i]);
    if (valorAtual > maior) {
        maior = valorAtual;
    }
    i++;
}

console.log('Maior: ' + maior);

//Exercicio incorreto