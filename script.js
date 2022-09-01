
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".text-input-salida");
const btnCopy = document.querySelector(".copiar");


function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    text-input-salida.value ; textoEncriptado
    text-input-salida.style.backgroundImage ; "none"
    inputTexto.value = ""
    btnCopy.style.display = "block"

}


function encriptar (){
    var texto = document.querySelector(".input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector(".input-texto").value;
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    btnCopy.style.display = "block"
    }


var boton1 = document.querySelector(".btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){ var texto = document.querySelector(".input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".text-input-salida").value = textoCifrado; document.querySelector(".input-texto").value;

}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    text-input-salida.value ; textoEncriptado
    inputTexto.value = ""  
}

var boton2 = document.querySelector(".btn-desencriptar"); boton2.onclick = desencriptar;


function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
 
}
