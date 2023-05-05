document.getElementById('adicao').addEventListener('click', adicao, false)
document.getElementById('subtracao').addEventListener('click', subtracao, false)
document.getElementById('divisao').addEventListener('click', divisao, false)
document.getElementById('multiplicacao').addEventListener('click', multiplicacao, false)

function adicao(){
    var numero1 = document.querySelector('input#numero1')
    var numero2 = document.querySelector('input#numero2')
    var blocores = document.querySelector('p#res')
    var res = Number(numero1.value) + Number(numero2.value)
    blocores.innerHTML = `Resultado: ${res}`
}
function subtracao(){
    var numero1 = document.querySelector('input#numero1')
    var numero2 = document.querySelector('input#numero2')
    var blocores = document.querySelector('p#res')
    var res = Number(numero1.value) - Number(numero2.value)
    blocores.innerHTML = `Resultado: ${res}`
}
function divisao(){
    var numero1 = document.querySelector('input#numero1')
    var numero2 = document.querySelector('input#numero2')
    var blocores = document.querySelector('p#res')
    var res = Number(numero1.value) / Number(numero2.value)
    blocores.innerHTML = `Resultado: ${res}`
}
function multiplicacao(){
    var numero1 = document.querySelector('input#numero1')
    var numero2 = document.querySelector('input#numero2')
    var blocores = document.querySelector('p#res')
    var res = Number(numero1.value) * Number(numero2.value)
    blocores.innerHTML = `Resultado: ${res}`
}