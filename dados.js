const entradas = [1,5,3,6,4,8,10];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}
function arrayLength(){
    return entradas.length;
}
module.exports = { gets, print,arrayLength };