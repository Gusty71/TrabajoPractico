function encriptar(){
    let inputText=document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    if (hasInvalidCharacters(inputText)){
        showErrorMessage("Por favor, ingrese solo letras minusculas sin acento.");
        return ;
    } else{
        showErrorMessage("");
    }

    
    let encryptedText = inputText.
    replace(/e/gi,"enter").
    replace(/i/gi,"imes").
    replace(/a/gi,"ai").
    replace(/o/gi,"ober").
    replace(/u/gi,"ufat");
                       
    if (inputText.length != 0){
        document.getElementById("texto").value = encryptedText;
        tituloMensaje.textContent ="Texto encriptado con exito.";
        parrafo.textContent = "";
        muñeco.src ="./imagenes/encriptado.jpg";
    }else{
        muñeco.src = "./imagenes/buscador.jpg";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar.";
        alert("Debes ingresar algùn texto.");
    }        

}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let decryptedText = texto.
        replace(/enter/gi,"e").
        replace(/imes/gi,"i").
        replace(/ai/gi,"a").
        replace(/ober/gi,"o").
        replace(/ufat/gi,"u");
   
    if (texto.length != 0){
        document.getElementById("texto").value = decryptedText;
        tituloMensaje.textContent ="Texto desencriptado con exito.";
        parrafo.textContent = "";
        muñeco.src="./imagenes/desencriptado.jpg";
    }else{
        muñeco.src = "./imagenes/buscador.jpg";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar.";
        alert("Debes ingresar algùn texto.");
    }       
}    

function copyToClipboard(){
    let encryptedText = document.getElementById("texto").value;
    let parrafo = document.getElementById("parrafo");
    navigator.clipboard.writeText(encryptedText);
    parrafo.textContent = "Copiado al portapapeles";
    document.getElementById("texto").value = "";
    alert("Texto encriptado copiado al portapapeles");
}

function hasInvalidCharacters(text){
    return /[^a-z, ""]/.test(text);
}

function showErrorMessage(mensaje){
    document.getElementById('error-mensaje').textContent = mensaje;   
}

function hideErrorMessage(){
    document.getElementById('error-mensaje').textContent = "";
}


