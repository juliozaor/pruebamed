const signos_Vitales = document.getElementById('signosVitales');
const presion_Sitolica = document.getElementById('presionSitolica');
const presion_Diastolica = document.getElementById('presionDiastolica');
const motivo_consulta = document.getElementById('motivoConsulta');
const motivo_consulta_transcripcion = document.getElementById('motivoConsultaTranscripcion');
const enfermedad_actual = document.getElementById('enfermedadActual');
const enfermedad_actual_transcipcion = document.getElementById('enfermedadActualTranscipcion');

const patologicosCampo = document.getElementById('patologicos');
const traumaticosCampo = document.getElementById('traumaticos');
const quirurgicosCampo = document.getElementById('quirurgicos');
const alergicosCampo = document.getElementById('alergicos');
const toxicologicosCampo = document.getElementById('toxicologicos');
const farmacologicosCampo = document.getElementById('farmacologicos');
const inmunologicosCampo = document.getElementById('inmunologicos');
const ocupacionalCampo = document.getElementById('ocupacional');

const patologicosTranscriocion = document.getElementById('patologicosTranscripcion');
const traumaticosTranscriocion = document.getElementById('traumaticosTranscripcion');
const quirurgicosTranscriocion = document.getElementById('quirurgicosTranscripcion');
const alergicosTranscriocion = document.getElementById('alergicosTranscripcion');
const toxicologicosTranscriocion = document.getElementById('toxicologicosTranscripcion');
const farmacologicosTranscriocion = document.getElementById('farmacologicosTranscripcion');
const inmunologicosTranscriocion = document.getElementById('inmunologicosTranscripcion');
const ocupacionalTranscriocion = document.getElementById('ocupacionalTranscripcion');

let signosVitales = false;
let presionSitolica = false;
let presionDiastolica = false;

let motivoConsulta = false;
let procesaMotivo = false;
let enfermedadActual = false;
let procesaEnfermedad = false;

let patologicos = false;
let traumaticos = false;
let quirurgicos = false;
let alergicos = false;
let toxicologicos = false;
let farmacologicos = false;
let inmunologicos = false;
let ocupacional = false;

let patologicosProcesa = false;
let traumaticosProcesa = false;
let quirurgicosProcesa = false;
let alergicosProcesa = false;
let toxicologicosProcesa = false;
let farmacologicosProcesa = false;
let inmunologicosProcesa = false;
let ocupacionalProcesa = false;

function procesarTexto(texto) {


  if (texto.includes('motivo de consulta')) {
    estadoActual('motivoConsulta');
    seleccionado('motivoConsulta');
  } else if (texto.includes('procesa motivo')) {
    estadoActual('procesaMotivo');
    seleccionado('procesaMotivo');
    mostrarTexto(texto);
  } else if (texto.includes('enfermedad actual')) {
    estadoActual('enfermedadActual');
    seleccionado('enfermedadActual');
  } else if (texto.includes('procesa enfermedad')) {
    estadoActual('procesaEnfermedad');
    seleccionado('procesaEnfermedad');
    mostrarTexto(texto);
  } else if (texto.includes('signos vitales')) {
    estadoActual('signosVitales');
    seleccionado('signosVitales');
  } else if (texto.includes('presión arterial sistólica')) {
    estadoActual('presionSitolica');
    seleccionado('presionSitolica');
  } else if (texto.includes('presión arterial diastólica')) {
    estadoActual('presionDiastolica');
    seleccionado('presionDiastolica');

  } else if (texto.includes('procesa patológicos')) {
    estadoActual('patologicosTranscripcion');
    seleccionado('patologicosTranscripcion');
  mostrarTexto(texto);
  } else if (texto.includes('procesa traumáticos')) {
    estadoActual('traumaticosTranscripcion');
    seleccionado('traumaticosTranscripcion');
  mostrarTexto(texto);
  } else if (texto.includes('procesa quirúrgicos')) {
    estadoActual('quirurgicosTranscripcion');
    seleccionado('quirurgicosTranscripcion');
  mostrarTexto(texto);
  } else if (texto.includes('procesa alérgicos')) {
    estadoActual('alergicosTranscripcion');
    seleccionado('alergicosTranscripcion');
  mostrarTexto(texto);
  } else if (texto.includes('procesa toxicológicos')) {
    estadoActual('toxicologicosTranscripcion');
    seleccionado('toxicologicosTranscripcion');
  mostrarTexto(texto);
  } else if (texto.includes('procesa farmacológicos')) {
    estadoActual('farmacologicosTranscripcion');
    seleccionado('farmacologicosTranscripcion');
  mostrarTexto(texto);
  } else if (texto.includes('procesa inmunológicos')) {
    estadoActual('inmunologicosTranscripcion');
    seleccionado('inmunologicosTranscripcion');
  mostrarTexto(texto);
  } else if (texto.includes('procesa ocupacional')) {
    estadoActual('ocupacionalTranscripcion');
    seleccionado('ocupacionalTranscripcion');
    mostrarTexto(texto);

  }else if (texto.includes('patológicos')) {
    estadoActual('patologicos');
    seleccionado('patologicos');
  } else if (texto.includes('traumáticos')) {
    estadoActual('traumaticos');
    seleccionado('traumaticos');
  } else if (texto.includes('quirúrgicos')) {
    estadoActual('quirurgicos');
    seleccionado('quirurgicos');
  } else if (texto.includes('alérgicos')) {
    estadoActual('alergicos');
    seleccionado('alergicos');
  } else if (texto.includes('toxicológicos')) {
    estadoActual('toxicologicos');
    seleccionado('toxicologicos');
  } else if (texto.includes('farmacológicos')) {
    estadoActual('farmacologicos');
    seleccionado('farmacologicos');
  } else if (texto.includes('inmunológicos')) {
    estadoActual('inmunologicos');
    seleccionado('inmunologicos');
  } else if (texto.includes('ocupacional')) {
    estadoActual('ocupacional');
    seleccionado('ocupacional');

  } else if (texto.includes('finalizar')) {
    estadoActual('finalizar');
    seleccionado('finalizar');
    $('#grabando').hide();
    recognition.abort();
  } else {
    mostrarTexto(texto);
  }
}

function estadoActual(campo) {
  signosVitales = (campo == 'signosVitales');
  presionSitolica = (campo == 'presionSitolica');
  presionDiastolica = (campo == 'presionDiastolica');

  motivoConsulta = (campo == 'motivoConsulta');
  enfermedadActual = (campo == 'enfermedadActual');
  procesaMotivo = (campo == 'procesaMotivo');
  procesaEnfermedad = (campo == 'procesaEnfermedad');

  patologicos = (campo == 'patologicos');
  traumaticos = (campo == 'traumaticos');
  quirurgicos = (campo == 'quirurgicos');
  alergicos = (campo == 'alergicos');
  toxicologicos = (campo == 'toxicologicos');
  farmacologicos = (campo == 'farmacologicos');
  inmunologicos = (campo == 'inmunologicos');
  ocupacional = (campo == 'ocupacional');

  patologicosProcesa = (campo == 'patologicosTranscripcion');
  traumaticosProcesa = (campo == 'traumaticosTranscripcion');
  quirurgicosProcesa = (campo == 'quirurgicosTranscripcion');
  alergicosProcesa = (campo == 'alergicosTranscripcion');
  toxicologicosProcesa = (campo == 'toxicologicosTranscripcion');
  farmacologicosProcesa = (campo == 'farmacologicosTranscripcion');
  inmunologicosProcesa = (campo == 'inmunologicosTranscripcion');
  ocupacionalProcesa = (campo == 'ocupacionalTranscripcion');
}

function seleccionado(campo) {
  (campo == 'signosVitales') ? signos_Vitales.classList.add('resaltar') : signos_Vitales.classList.remove('resaltar');
  (campo == 'presionSitolica') ? presion_Sitolica.classList.add('resaltar') : presion_Sitolica.classList.remove('resaltar');
  (campo == 'presionDiastolica') ? presion_Diastolica.classList.add('resaltar') : presion_Diastolica.classList.remove('resaltar');

  (campo == 'motivoConsulta') ? motivo_consulta.classList.add('resaltar') : motivo_consulta.classList.remove('resaltar');
  (campo == 'procesaMotivo') ? motivo_consulta_transcripcion.classList.add('resaltar') : motivo_consulta_transcripcion.classList.remove('resaltar');
  (campo == 'enfermedadActual') ? enfermedad_actual.classList.add('resaltar') : enfermedad_actual.classList.remove('resaltar');
  (campo == 'procesaEnfermedad') ? enfermedad_actual_transcipcion.classList.add('resaltar') : enfermedad_actual_transcipcion.classList.remove('resaltar');

  (campo == 'patologicos') ? patologicosCampo.classList.add('resaltar') : patologicosCampo.classList.remove('resaltar');
  (campo == 'traumaticos') ? traumaticosCampo.classList.add('resaltar') : traumaticosCampo.classList.remove('resaltar');
  (campo == 'quirurgicos') ? quirurgicosCampo.classList.add('resaltar') : quirurgicosCampo.classList.remove('resaltar');
  (campo == 'alergicos') ? alergicosCampo.classList.add('resaltar') : alergicosCampo.classList.remove('resaltar');
  (campo == 'toxicologicos') ? toxicologicosCampo.classList.add('resaltar') : toxicologicosCampo.classList.remove('resaltar');
  (campo == 'farmacologicos') ? farmacologicosCampo.classList.add('resaltar') : farmacologicosCampo.classList.remove('resaltar');
  (campo == 'inmunologicos') ? inmunologicosCampo.classList.add('resaltar') : inmunologicosCampo.classList.remove('resaltar');
  (campo == 'ocupacional') ? ocupacionalCampo.classList.add('resaltar') : ocupacionalCampo.classList.remove('resaltar');

  (campo == 'patologicosTranscripcion') ? patologicosTranscripcion.classList.add('resaltar') : patologicosTranscripcion.classList.remove('resaltar');
  (campo == 'traumaticosTranscripcion') ? traumaticosTranscripcion.classList.add('resaltar') : traumaticosTranscripcion.classList.remove('resaltar');
  (campo == 'quirurgicosTranscripcion') ? quirurgicosTranscripcion.classList.add('resaltar') : quirurgicosTranscripcion.classList.remove('resaltar');
  (campo == 'alergicosTranscripcion') ? alergicosTranscripcion.classList.add('resaltar') : alergicosTranscripcion.classList.remove('resaltar');
  (campo == 'toxicologicosTranscripcion') ? toxicologicosTranscripcion.classList.add('resaltar') : toxicologicosTranscripcion.classList.remove('resaltar');
  (campo == 'farmacologicosTranscripcion') ? farmacologicosTranscripcion.classList.add('resaltar') : farmacologicosTranscripcion.classList.remove('resaltar');
  (campo == 'inmunologicosTranscripcion') ? inmunologicosTranscripcion.classList.add('resaltar') : inmunologicosTranscripcion.classList.remove('resaltar');
  (campo == 'ocupacionalTranscripcion') ? ocupacionalTranscripcion.classList.add('resaltar') : ocupacionalTranscripcion.classList.remove('resaltar');
}



function mostrarTexto(texto) {
  if (motivoConsulta) {
    motivo_consulta.value += texto + ' ';
  } else if (enfermedadActual) {
    enfermedad_actual.value += texto + ' ';
  } else if (signosVitales) {
    signos_Vitales.value += texto + ' ';
  } else if (presionSitolica) {
    presion_Sitolica.value += texto + ' ';
  } else if (presionDiastolica) {
    presion_Diastolica.value += texto + ' ';
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
  else if (farmacologicos) {
    farmacologicosCampo.value += texto + ' ';
  }
  else if (inmunologicos) {
    inmunologicosCampo.value += texto + ' ';
  }
  else if (ocupacional) {
    ocupacionalCampo.value += texto + ' ';
  }

  // procesar con chat gpt
  else if (procesaMotivo) {
    enviarChatGpt(motivo_consulta.value, 'motivoConsultaTranscripcion');
  } else if (procesaEnfermedad) {
    enviarChatGpt(enfermedad_actual.value, 'enfermedadActualTranscipcion');
  }

  else if (patologicosProcesa) {
    enviarChatGpt(patologicosCampo.value, 'patologicosTranscripcion')
  }
  else if (traumaticosProcesa) {
    enviarChatGpt(traumaticosCampo.value, 'traumaticosTranscripcion')
  }
  else if (quirurgicosProcesa) {
    enviarChatGpt(quirurgicosCampo.value, 'quirurgicosTranscripcion')
  }
  else if (alergicosProcesa) {
    enviarChatGpt(alergicosCampo.value, 'alergicosTranscripcion')
  }
  else if (toxicologicosProcesa) {
    enviarChatGpt(toxicologicosCampo.value, 'toxicologicosTranscripcion')
  }
  else if (farmacologicosProcesa) {
    enviarChatGpt(farmacologicosCampo.value, 'farmacologicosTranscripcion')
  }
  else if (inmunologicosProcesa) {
    enviarChatGpt(inmunologicosCampo.value, 'inmunologicosTranscripcion')
  }
  else if (ocupacionalProcesa) {
    enviarChatGpt(ocupacionalCampo.value, 'ocupacionalTranscripcion')
  }
}