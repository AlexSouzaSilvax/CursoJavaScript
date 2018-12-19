function trocaDiv() {
    var area = document.getElementById('area');
    var texto = prompt('Qual seu nome?');    
    area.innerHTML = texto;
}

function adicionarIngrediente() {
    var ing = document.getElementById('ingrediente').value;
    var listaHtml = document.getElementById('lista').innerHTML;

    listaHtml = listaHtml + "<li>"+ing+"</li>";

    document.getElementById('lista').innerHTML = listaHtml;

    document.getElementById('ingrediente').innerHTML = " ";
}

function verificar() {
        
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;

        if(n1 == n2) {
            alert("VOCE ACERTOU!");
        } else {
            alert("VOCE ERRO");
    }
    resetar();
}

function resetar() {

    document.getElementById("n2").value = "";

    var r = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = r;
}