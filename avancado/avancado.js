// EVENTOS DE MOUSE
function apertouMouse() {
    console.log("Apertou o Mouse.");
}
function soltouMouse() {
    console.log("Soltou o Mouse.");
}
function mouseEmCima() {
    console.log("Mouse passou por cima.");
}
function mouseSaiuDeCima() {
    console.log("Mouse saiu de cima.");
}
function mouseFoiMovido() {
    console.log("Mouse foi movido.");
}
function clicou() {
    console.log("Clicou!");
}
function clicouDireito() {    
    console.log("Clicou com botao direito!");
    return false;        
}
function clickDuplo() {    
    console.log("Clicou duas vezes!");    
}
// EVENTOS DE TECLADO
function apertouTecla(event) {    
    console.log("Apertou alguma tecla " + event.keyCode);
}
function apertouTecla2(event) {      
    if(event.shiftKey == true) {
    console.log("Apertou alguma tecla com shift..."); // retorna true ou false, se apertou alguma tecla com shift
 } else if(event.ctrlKey == true) {
    console.log("Apertou alguma tecla com ctrl..."); // retorna true ou false, se apertou alguma tecla com ctrl
 } else if(event.altKey == true) {
    console.log("Apertou alguma tecla com alt..."); // retorna true ou false, se apertou alguma tecla com alt
 } else if(event.metaKey == true) {
    console.log("Apertou alguma tecla com meta..."); // retorna true ou false, se apertou alguma tecla com meta
 } else if(event.capslockKey == true) {
    console.log("Apertou alguma tecla com fixa(capslock) ativo..."); // retorna true ou false, se apertou alguma tecla com capslock
 }
}
// EVENTOS DE PAGINA
function carregou() {
    alert("pagina carregada");
}
function paginafechada() { // impossivel de usar está bosta
    alert("pagina fechada");
}
// Eventos de formulários
function mudouOpcao(objeto) {
    console.log("Selecionou: " + objeto.value);
}
function focou() {
    console.log("focou");
}
function desfocou() {
    console.log("saiu do foco");
}
/*
JOGO ESTOURAR BALOES
function addBola() {

        var bola = document.createElement("div");
        bola.setAttribute("class", "bola");
            
        var p1 = Math.floor(Math.random() * 500);
        var p2 = Math.floor(Math.random() * 400);
        bola.setAttribute("style", "left:" + p1 + "px;top:"+ p2 + "px;");
        bola.setAttribute("onclick", "estourar(this)");
            
        document.body.appendChild(bola);
}
function estourar(elemento) {
    document.body.removeChild(elemento);
}
function iniciar() {
    setInterval(addBola, 1000);
}
*/

//Tratando datas

//-----------------
function validar() {
    var valor = document.getElementById("numero").value;
    if(valor.length > 2) {
        alert("Maior que 2 algarismos.");             
    } else if(valor.length < 2){
        alert("Menor que 2 algarismos.");    
    } else if (valor.length == 2) {
        alert("2 algarismos.");              
        return true;                
 }
}

