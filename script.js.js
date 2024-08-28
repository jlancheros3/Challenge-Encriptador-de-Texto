
let textoentrada = document.getElementById("texto-entrada"); 
let textosalida = document.getElementById("texto-salida"); 
let encriptar = document.getElementById("encriptar"); 
let Desencriptar = document.getElementById("Desencriptar"); 
let botoncopiar = document.getElementById("boton-copiar");   

function encrypt(text) {
    let textoencriptado = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoencriptado;
}

function desencriptado(text) {
    let textodesencriptado = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textodesencriptado;
}

encriptar.addEventListener("click", () => {
    let text = textoentrada.value;
    textosalida.value = encrypt(text);
});

Desencriptar.addEventListener("click", () => {
    let text = textoentrada.value;
    textosalida.value = desencriptado(text);
});

botoncopiar.addEventListener("click", () => {
    textosalida.select();
    document.execCommand("copy");
    alert("Texto copiado");
});