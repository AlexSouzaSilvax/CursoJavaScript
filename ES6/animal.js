export class Animal {
    constructor(tipo,pernas,som) {
        this.tipo = tipo;
        this.pernas = pernas;
        this.som = som;
    }
    falar(som = "Som Qualquer") {
        return som;
    }

    get dados() {
        return `Tipo: ${this.tipo}, Pernas: ${this.pernas}, Som: ${this.som}` ;
    }
}

export class Gato extends Animal {

    constructor(pernas,pele,nome) {
        super('Gato', pernas,nome);
        this.pele = pele;
        this.nome = nome;
    }

    falar(som = 'Miau') {
        return som;
    }

    get dados() {
        return `Nome: ${this.nome}, Cor: ${this.cor}` ;
    }

    get cor() {
        return this.pele;
    }
}

export class Cachorro extends Animal {
    constructor(nome,pele) {
        super('Cachorro',4,nome,pele);
        this.nome = nome;
        this.pele = pele;
    }

    get dados() {
        return `Nome: ${this.nome}, Cor: ${this.pele}`;
    }
}