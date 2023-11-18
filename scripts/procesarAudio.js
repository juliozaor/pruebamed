/* 
  const tipo_consulta = document.getElementById('tipoConsulta');
  const tipoConsultaChoices = new Choices('#tipoConsulta', {
    placeholder: true,
    searchPlaceholderValue: 'Buscar opciones'
}); */





const motivo_consulta = document.getElementById('motivoConsulta');
const motivo_consulta_transcripcion = document.getElementById('motivoConsultaTranscripcion');

const patologicosCampo = document.getElementById('patologicos');
const traumaticosCampo = document.getElementById('traumaticos');
const quirurgicosCampo = document.getElementById('quirurgicos');
const alergicosCampo = document.getElementById('alergicos');
const toxicologicosCampo = document.getElementById('toxicologicos');

const patologicosTranscriocion = document.getElementById('patologicosTranscripcion');
const traumaticosTranscriocion = document.getElementById('traumaticosTranscripcion');
const quirurgicosTranscriocion = document.getElementById('quirurgicosTranscripcion');
const alergicosTranscriocion = document.getElementById('alergicosTranscripcion');
const toxicologicosTranscriocion = document.getElementById('toxicologicosTranscripcion');

//let tipoConsulta = false;

let motivoConsulta = false;
let procesaMotivo = false;

let patologicos = false;
let traumaticos = false;
let quirurgicos = false;
let alergicos = false;
let toxicologicos = false;

let patologicosProcesa = false;
let traumaticosProcesa = false;
let quirurgicosProcesa = false;
let alergicosProcesa = false;
let toxicologicosProcesa = false;

let textoIn = '';

function procesarTexto(texto) {
  textoIn = texto;
  console.log(texto);
 /*  if (texto.includes('tipo de consulta')) {
    estadoActual('tipoConsulta');
      tipo_consulta.focus();
      // Resaltar los elementos
      tipoConsultaChoices.highlightAll();

  }else */ if (texto.includes('motivo de consulta') || texto.includes('cuénteme porque viene a consulta')) {
    estadoActual('motivoConsulta');
    motivo_consulta.focus();
  } else if (texto.includes('sufre de alguna enfermedad') || texto.includes('patológicos') || texto.includes('sufre alguna enfermedad')) {
    estadoActual('patologicos');
    patologicosCampo.focus();
  } else if (texto.includes('traumáticos') || texto.includes('se ha fracturado o ha sufrido algún golpe fuerte')) {
    estadoActual('traumaticos');
    traumaticosCampo.focus();
  } else if (texto.includes('quirúrgicos') || texto.includes('alguna vez ha tenido una operación o cirugía')) {
    estadoActual('quirurgicos');
    quirurgicosCampo.focus();
  } else if (texto.includes('alérgicos') || texto.includes('es alérgico a algún medicamento')) {
    estadoActual('alergicos');
    alergicosCampo.focus();
  } else if (texto.includes('toxicológicos') || texto.includes('alguna vez se ha intoxicado con algún medicamento comida o sustancia')) {
    estadoActual('toxicologicos');
    toxicologicosCampo.focus();
  } else if (texto.includes('finalizar') || texto.includes('detener')) {
    estadoActual('finalizar');
    $('#grabando').hide();
    recognition.abort();
  } else if (texto.includes('borrar texto')) {
    borrar();
  } else {
    mostrarTexto(texto);
  }
}

function estadoActual(campo) {

  motivoConsulta = (campo == 'motivoConsulta');

  patologicos = (campo == 'patologicos');
  traumaticos = (campo == 'traumaticos');
  quirurgicos = (campo == 'quirurgicos');
  alergicos = (campo == 'alergicos');
  toxicologicos = (campo == 'toxicologicos');
}

function estadoActualEnvio(campo) {
  procesaMotivo = (campo == 'procesaMotivo');
  patologicosProcesa = (campo == 'patologicosTranscripcion');
  traumaticosProcesa = (campo == 'traumaticosTranscripcion');
  quirurgicosProcesa = (campo == 'quirurgicosTranscripcion');
  alergicosProcesa = (campo == 'alergicosTranscripcion');
  toxicologicosProcesa = (campo == 'toxicologicosTranscripcion');
}



motivo_consulta.addEventListener('blur', () => {
  motivo_consulta.classList.remove('resaltar');
  estadoActualEnvio('procesaMotivo');
  enviarTexto(textoIn);
});

motivo_consulta.addEventListener('focus', () => {
  motivo_consulta.classList.add('resaltar');
});

patologicosCampo.addEventListener('blur', () => {
  patologicosCampo.classList.remove('resaltar')
  estadoActualEnvio('patologicosTranscripcion');
  enviarTexto(textoIn);
});
patologicosCampo.addEventListener('focus', () => {
  patologicosCampo.classList.add('resaltar');
});


traumaticosCampo.addEventListener('blur', () => {
  estadoActualEnvio('traumaticosTranscripcion');
  enviarTexto(textoIn);
});


quirurgicosCampo.addEventListener('blur', () => {
  quirurgicosCampo.classList.add('resaltar');
  estadoActualEnvio('quirurgicosTranscripcion');
  enviarTexto(textoIn);
});
quirurgicosCampo.addEventListener('focus', () => {
  quirurgicosCampo.classList.add('resaltar');
});

alergicosCampo.addEventListener('blur', () => {
  alergicosCampo.classList.add('resaltar');
  estadoActualEnvio('alergicosTranscripcion');
  enviarTexto(textoIn);
});
alergicosCampo.addEventListener('focus', () => {
  alergicosCampo.classList.add('resaltar');
});

toxicologicosCampo.addEventListener('blur', () => {
  toxicologicosCampo.classList.add('resaltar');
  estadoActualEnvio('toxicologicosTranscripcion');
  enviarTexto(textoIn);
});
toxicologicosCampo.addEventListener('focus', () => {
  toxicologicosCampo.classList.add('resaltar');
});


function enviarTexto(texto) {
  if (procesaMotivo) {
    procesaMotivo = false;
    enviarChatGpt(motivo_consulta.value, 'motivoConsultaTranscripcion');
  }
  else if (patologicosProcesa) {
    patologicosProcesa = false;
    enviarChatGpt(patologicosCampo.value, 'patologicosTranscripcion')
  }
  else if (traumaticosProcesa) {
    traumaticosProcesa = false;
    enviarChatGpt(traumaticosCampo.value, 'traumaticosTranscripcion')
  }
  else if (quirurgicosProcesa) {
    quirurgicosProcesa = false;
    enviarChatGpt(quirurgicosCampo.value, 'quirurgicosTranscripcion')
  }
  else if (alergicosProcesa) {
    alergicosProcesa = false;
    enviarChatGpt(alergicosCampo.value, 'alergicosTranscripcion')
  }
  else if (toxicologicosProcesa) {
    toxicologicosProcesa = false;
    enviarChatGpt(toxicologicosCampo.value, 'toxicologicosTranscripcion')
  }

}

function mostrarTexto(texto) {
  /*  if (tipoConsulta) {
     const opcionesActuales = tipoConsultaChoices.currentState.choices;
     opcionesActuales[0].value = valorOtroInput;
     opcionesActuales[0].label = valorOtroInput;
 
     // Actualizar el campo de búsqueda del select
     tipoConsultaChoices.setChoices(opcionesActuales, 'value', 'label', false);
   }else */
  if (motivoConsulta) {
    motivo_consulta.value += texto + ' ';
  }
  else if (patologicos) {
    patologicosCampo.value += texto + ' ';
  }
  else if (traumaticos) {
    traumaticosCampo.value += texto + ' ';
  }
  else if (quirurgicos) {
    quirurgicosCampo.value += texto + ' ';
  }
  else if (alergicos) {
    alergicosCampo.value += texto + ' ';
  }
  else if (toxicologicos) {
    toxicologicosCampo.value += texto + ' ';
  }



}

function borrar() {
  if (motivoConsulta) {
    motivo_consulta.value = '';
  }


  if (patologicos) {
    patologicosCampo.value = '';
  }

  if (traumaticos) {
    traumaticosCampo.value = '';
  }

  if (quirurgicos) {
    quirurgicosCampo.value = '';
  }

  if (alergicos) {
    alergicosCampo.value = '';
  }

  if (toxicologicos) {
    toxicologicosCampo.value = '';
  }
}