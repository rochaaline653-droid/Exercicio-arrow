class VideoGame {
    constructor(nome, marca, preco) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
    }
}

class PlayStation extends VideoGame {
    constructor(nome, marca, preco, nEntradasUSB, voltagem, adicionais) {
        super(nome, marca, preco);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

const playStation = new PlayStation(
    'PlayStation 5',
    'Sony',
    3999.99,
    4,
    110,
    ['Controle sem fio', 'Headset']
);

console.log(playStation);