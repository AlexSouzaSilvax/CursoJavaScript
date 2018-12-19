export class Pessoa {
	constructor(id, nome, idade){
		this.id = id;
		this.nome = nome;
		this.idade = idade;
	}
	
	get dados() {
		return `ID: ${this.id}, NOME: ${this.nome}, IDADE: ${this.idade}`;
	}
}