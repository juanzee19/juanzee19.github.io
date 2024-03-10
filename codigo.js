const textArea = document.querySelector(".input-incri-unincrip-1");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function boton1(){
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value ="";
    
}

function boton3() {
    const mensaje = document.querySelector(".mensaje");
    const texto = mensaje.value;

    
    navigator.clipboard.writeText(texto)
        .then(() => {
            
            alert("Texto copiado al portapapeles");
        })
        .catch((error) => {
            
            console.error("Error al copiar texto: ", error);
            alert("Error al copiar texto. Por favor, inténtalo de nuevo.");
        });
}




function encriptar(stringEncriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replace(new RegExp(matrizCodigo[i][0], 'gi'), matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}





function boton2(){
    const textEncriptado = desencriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value ="";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replace(new RegExp(matrizCodigo[i][1], 'gi'), matrizCodigo[i][0]);
        }
    }
return stringDesencriptada;

}




