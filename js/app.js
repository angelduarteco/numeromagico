const numeroEntrada = document.getElementById("numero");
const intentosDiv = document.getElementById("intentos");
const mensajeDiv = document.getElementById("mensaje");

let numeroMagico = Math.floor(Math.random() * 100)+1;
let numeroIntentos = 5;

function adivinar(){

    let intento = numeroEntrada.value;
   
    numeroIntentos = numeroIntentos - 1;
    if (intento === numeroMagico){
        mensajeDiv.textContent = "Ganaste...!!!";
        return;
    }

    if (numeroIntentos === 0){
        mensajeDiv.textContent = "Perdiste...!!! El numero era: "+numeroMagico;
        return;
    }

    if(intento < numeroMagico){
        mensajeDiv.textContent = "El numero magico es mayor";
    }else{
        mensajeDiv.textContent = "El numero magico es menor";
    }

    intentosDiv.textContent="Te quedan... "+numeroIntentos+ " intentos!"
    numeroEntrada.value="";

}

