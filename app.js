let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){ //FORMA OPTIMIZADA 
    let elementoHTML = document.querySelector(elemento); // es un objeto
    elementoHTML.innerHTML = texto; // propiedad del objeto
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1 ) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else {
            asignarTextoElemento('p','El número secreto es mayor');
        
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;
    //si ya sorteamos todos lso numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    } else {
    //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();//recursividad utilizar la misma función
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`); //FORMA OPTIMIZADA
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja(); 
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializr el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
console.log(numeroSecreto);



