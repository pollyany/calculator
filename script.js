const resultado = document.getElementById("res")

function insert(num) {
    resultado.innerHTML += num
}

function limpar() {
    resultado.innerHTML = " "
}

function back() {
    const result = document.getElementById("res").innerHTML
    resultado.innerHTML = result.substring(0, result.length -1)
}

function calcular() {
    const result = resultado.innerHTML
    if(result) {
        resultado.innerHTML = eval(result)
    }
}