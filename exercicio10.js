/*
O problema está no segundo .then():

promise
    .then((data) => console.log(`resultado positivo: ${data}`))
    .then((data) => console.log(`resultado positivo 2: ${data}`))
    .catch((data) => console.log(`resultado negativo: ${data}`));

O primeiro .then() apenas executa:

console.log(...)

Como console.log() não retorna um valor, o segundo .then() recebe undefined.

Uma forma correta é retornar o valor no primeiro .then()
*/
const promise = Promise.resolve('Dados recebidos');
promise
    .then((data) => {
        console.log(`resultado positivo: ${data}`);
        return data;
    })
    .then((data) => {
        console.log(`resultado positivo 2: ${data}`);
    })
    .catch((data) => {
        console.log(`resultado negativo: ${data}`);
    });