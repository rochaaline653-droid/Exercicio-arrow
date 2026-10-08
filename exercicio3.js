/*
Rest e Spread utilizam os três pontos (...), mas possuem funções diferentes.

Rest serve para reunir vários valores em uma única variável, geralmente dentro de parâmetros de uma função.

function somar(...numeros) {
    return numeros;
}

console.log(somar(10, 20, 30));

Spread serve para espalhar os valores de um array ou objeto em outro contexto.

const numeros1 = [1, 2, 3];
const numeros2 = [...numeros1, 4, 5];

console.log(numeros2);

Portanto:

Rest (...) → reúne valores.
Spread (...) → espalha valores.
*/