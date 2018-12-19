/*
    var area = document.getElementById('area').innerHTML;

    const nomes = ['Alex','Souza','Silva'];

    let {1:segundoNome} = nomes;
    console.log(segundoNome);
 */
/*
    var nomes = {
        nome: "Alex",
        sobreNome: "Souza",
        idade: 17
    };

    let {nome} = nomes;
    console.log(nome);
    */
   /*
    const nomes = ['Alex','Souza','Silva'];

    let [nome,sobreNome,ultNome] = nomes;
    console.log(nome,sobreNome,ultNome);
    */
    /*
    const mat = {
        somar:function(x,y) {return x+y;},
        multiplicar:function(x,y) {return x*y;}
    };    

    let {somar} = mat;
    let {somar:adicionar} = mat;

    console.log(mat.somar(10,15));
    console.log(somar(10,15));
    console.log(adicionar(10,15));
    */
   
    //Objeto Literal

/* ex1
    function setPessoa(nome, sobrenome, idade) {
        const newPessoa = {nome, sobrenome, idade};
        return console.log(newPessoa);
    }
*/
/* ex2 
    function setPessoa(nome, sobrenome, idade) {
        const newPessoa = {primeiroNome:nome, segundoNome:sobrenome, idade};
        return console.log(newPessoa);
    }

    setPessoa('Alex','Silva',17);
*/

//Exercício addEndereco
/* 
 function addEndereco(endereco) {
    const novoEndereco = {
        cidade:endereco.cidade,
        estado:endereco.estado,
        pais:'Brasil'
    }
    console.log(novoEndereco.cidade + ", " + novoEndereco.estado + ", " + novoEndereco.pais);
}

addEndereco({cidade:'Campina Grande',estado:'Paraiba'});
*/
/*
    function addEndereco(endereco) {
        const {cidade, estado} = endereco;
        const novoEndereco = {
            cidade,
            estado,
            pais:'Brasil'
        }
        console.log(`${novoEndereco.cidade}, ${novoEndereco.estado}, ${novoEndereco.pais}`);    
    }

    var cidadee = prompt("Cidade:");
    var estadoo = prompt("Estado:");
    var paiss = prompt("Pais:");

addEndereco({cidade:cidadee, estado:estadoo, pais:paiss});
*/

//Operador Spread
/* 
let numeros = [1,2,3];
let outros = [...numeros,4,5,6,7,8];
console.log(outros);
*/

/*let pessoa = {
    nome:"Alex",
    sobrenome:"Silva",
    idade:17
}

let pf = {
    ...pessoa,
    cpf:"00000000000"    
}

console.log(pf);
*/

/*
function adcInfo(info) {
    let newInfo = {
        ...info,
        status:'ativo',
        token:845745,
        data:'18-12-2018'
    }
    return newInfo;
}
console.log(adcInfo({nome:'Alex',sobrenome:'Silva',idade:17}));
*/

//Operador Rest
/*function adc(...nomes) {
    console.log(nomes);
}

adc("Alex","Allan","Rafael","Cintia");
*/

/* Rest e Spread
function adc(nomes,...novosNomes) {
    let novosConjuntos = [
        ...nomes,
        ...novosNomes
    ]
    return novosConjuntos;
}

let nomes = ['Bonieky','Paulo'];
let outros = adc(nomes,"Alex","Nildo","José");

console.log(outros);
*/

//Funções anônimas
/*function adc(...numeros) {
    let total = numeros.reduce( (atual, x) => atual + x );
    console.log(total);
}

adc(1,2,3,4,5,6,4,5);
*/

//Valor padrão no parâmetro
/*function adc(nome="", sobrenome="", status = false) {
    console.log(nome,sobrenome,status);
}

adc("Alex");
*/

//Código modular com import e export
/*
import { somar,subtrair } from './mat.js';
console.log(somar(9,16));
console.log(subtrair(25,16));
*/

//Classes no ES6
/*
import { Gato } from './animal.js';
    
let gato = new Gato(4,'Preto','Alex');

alert(gato.dados);
console.log(gato.dados);

console.log("Cor: " + gato.cor);
*/
/*
import { Cachorro } from './animal.js';

let dog = new Cachorro('Marley','Cor de pele');

console.log(dog.dados);
*/

//Promise
/*
function fazer() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('OK');
        }, 3000);        
    });
    return promise;
};

fazer().then((resposta)=>{    		
        console.log("Resposta: " + resposta);         
});
*/

//Fetch
/*
const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method:'POST',
    body:JSON.stringify({
        nome:'Bonieky',
        idade:99
    })
};

fetch(url, params)
.then((r) =>r.json())
.then((json) => {
    //IMPLEMENTA UM FOR
    console.log(json);
});   
 */

/* GERANDO JSON APARTIR DE UM OBJETO
var pessoa = [
    {nome:'Alex', sobreNome:'Silva'},
    {nome:'Wellerson',sobreNome:'Moreira'}
];

let pJson = JSON.stringify(pessoa);

console.log(pJson);

var teste = document.getElementById('teste');
teste.innerHTML = pJson;
*/

//Async e Await
function requisitar() {
    const url = 'https://alunos.b7web.com.br/api/ping';
    const params = {
        method:'POST',
        body:JSON.stringify({
            nome:'Bonieky',
            idade:99
        })
    };

    fetch(url, params)
        .then((r) =>r.json())
        .then((json) => {
            //IMPLEMENTAR UM FOR
            console.log(json);
        });   
}

requisitar();

/* Example
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 5000)
    });
  
    let result = await promise; // wait till the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  f();
*/