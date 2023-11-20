let elementoPrincipal;
let elementoProcesado = '';
let estadoActual = false;
let procesar = false;
let gpt = false;


let textoIn = '';

const procesarTexto = async (texto) => {
  textoIn = texto;
  const textoLowerCase = texto.toLowerCase().trim();
  const objetoEncontrado = objetosGpt.find(objeto => objeto.frases.includes(textoLowerCase));

  if (objetoEncontrado) {
    if (elementoPrincipal) {
      elementoPrincipal.blur();
      elementoPrincipal.classList.remove('resaltar');
      estadoActual = false;
      if (gpt) {
        enviarChatGpt(elementoPrincipal.value, elementoProcesado);
      } else {
        if(elementoProcesado !== ''){
          pasarTexto(elementoPrincipal.value, elementoProcesado);
        }

      }
    }

    elementoPrincipal = document.getElementById(objetoEncontrado.principal);
    elementoPrincipal.focus();

    if (elementoPrincipal) {
      elementoProcesado = objetoEncontrado.procesado;
      gpt = objetoEncontrado.gtp
      elementoPrincipal.focus();
      elementoPrincipal.classList.add('resaltar');
    }
    estadoActual = true;

  } else if (texto.includes('finalizar') || texto.includes('detener')) {
    $('#grabando').hide();
    recognition.abort();
  } else if (texto.includes('borrar texto')) {
    borrar();
  } else {
    mostrarTexto(texto);
  }
}


function mostrarTexto(texto) {
  if (estadoActual) {
    elementoPrincipal.value += texto + ' ';

  }


}

function borrar() {
  if (estadoActual) {
    elementoPrincipal.value = '';
  }

}

