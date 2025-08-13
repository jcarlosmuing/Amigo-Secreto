/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    return Math.floor(Math.random()*numeroMaximo)+1;
}

function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // == igual en valor, === igual en tipo de dato y valor
    if (numeroDeUsuario === numeroSecreto) { // ${(intentos ===1) ? 'vez' : 'veces' funcion ternaria para simplicar el if - else
        asignarTextoElementos('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElementos('p','El número secreto es menor');
        } else {
            asignarTextoElementos('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function intentoDeUsuario() {
    verificarIntento();
}

function condicionesIniciales() {
    asignarTextoElementos('h1','Juego del número secreto!');
    asignarTextoElementos('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    // valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElementos('p','Ya se sortearon todos los números disponibles');
    } else {
        // Si el número gerado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de número
    // Generar el número aleatorio
    // Inicializar el número intentos
    condicionesIniciales();    
    //Deshabilitar el botón de nuevo juego
     document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
