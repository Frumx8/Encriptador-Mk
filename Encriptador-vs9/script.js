// Selección de elementos del DOM
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var cajatexto = document.querySelector(".cajatexto");
const btnCopiar = document.querySelector(".btn-copiar");

// Asignación de eventos a los botones
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
btnCopiar.addEventListener("click", copiar);

// Función para encriptar el texto
function encriptar() {
    ocultarAdelante();
    var texto = recuperarTexto();
    resultado.textContent = encriptarTexto(texto);
}

// Función para desencriptar el texto
function desencriptar() {
    ocultarAdelante();
    var texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(texto);
}

// Función para recuperar el texto de la caja de texto
function recuperarTexto() {
    return cajatexto.value;
}

// Función para ocultar los elementos no necesarios
function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

// Función para encriptar el texto según las reglas definidas
function encriptarTexto(mensaje) {
    var textoFinal = "";

    for (var i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case 'a':
                textoFinal += "ai";
                break;
            case 'e':
                textoFinal += "enter";
                break;
            case 'i':
                textoFinal += "imes";
                break;
            case 'o':
                textoFinal += "ober";
                break;
            case 'u':
                textoFinal += "ufat";
                break;
            default:
                textoFinal += mensaje[i];
        }
    }

    return textoFinal;
}

// Función para desencriptar el texto según las reglas definidas
function desencriptarTexto(mensaje) {
    var textoFinal = "";
    var i = 0;

    while (i < mensaje.length) {
        if (mensaje.substring(i, i + 2) === "ai") {
            textoFinal += "a";
            i += 2;
        } else if (mensaje.substring(i, i + 5) === "enter") {
            textoFinal += "e";
            i += 5;
        } else if (mensaje.substring(i, i + 4) === "imes") {
            textoFinal += "i";
            i += 4;
        } else if (mensaje.substring(i, i + 4) === "ober") {
            textoFinal += "o";
            i += 4;
        } else if (mensaje.substring(i, i + 4) === "ufat") {
            textoFinal += "u";
            i += 4;
        } else {
            textoFinal += mensaje[i];
            i++;
        }
    }

    return textoFinal;
}

// Función para copiar el texto al portapapeles
function copiar() {
    var contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        console.log("Texto copiado al portapapeles: " + contenido);
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
