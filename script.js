function Soma() {
    var numeroUm = parseInt(document.getElementById("valor1").value);
    var numeroDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numeroUm + numeroDois);
}

function Subtracao() {
    var numeroUm = parseInt(document.getElementById("valor1").value);
    var numeroDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numeroUm - numeroDois);
}

function Multiplicacao() {
    var numeroUm = parseInt(document.getElementById("valor1").value);
    var numeroDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numeroUm * numeroDois);

}

function Divisao() {
    var numeroUm = parseInt(document.getElementById("valor1").value);
    var numeroDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numeroUm / numeroDois);
}




