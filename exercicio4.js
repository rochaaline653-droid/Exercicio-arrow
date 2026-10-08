const equipeMarketing = ['Joana', 'Marcela', 'Bruna']; 
const equipeComercial = ['Talita', 'Luisa', 'Vitória']; 

// Unindo as duas equipes com o operador Spread 
const timeCompleto = [...equipeMarketing, ...equipeComercial];

// Exibindo a equipe completa no console
console.log(timeCompleto);