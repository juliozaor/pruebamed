const signos_Vitales = document.getElementById('signosVitales');
const presion_Sitolica = document.getElementById('presionSitolica');
const presion_Diastolica = document.getElementById('presionDiastolica');
const motivo_consulta = document.getElementById('motivoConsulta');
const motivo_consulta_transcripcion = document.getElementById('motivoConsultaTranscripcion');
const enfermedad_actual = document.getElementById('enfermedadActual');
const enfermedad_actual_transcipcion = document.getElementById('enfermedadActualTranscipcion');

let signosVitales = false;
let presionSitolica = false;
let presionDiastolica = false;
let motivoConsulta = false;
let procesaMotivo = false;
let enfermedadActual = false;
let procesaEnfermedad = false;

function procesarTexto(texto) {

  if (texto.includes('motivo de consulta')) {
    estadoActual('motivoConsulta');
  }else if (texto.includes('procesa motivo')) {
    estadoActual('procesaMotivo');
    mostrarTexto(texto);
  }else if (texto.includes('enfermedad actual')) {
    estadoActual('enfermedadActual');
  } else if (texto.includes('procesa enfermedad')) {
    estadoActual('procesaEnfermedad');
    mostrarTexto(texto);
  }else if (texto.includes('signos vitales')) {
    estadoActual('signosVitales');
  } else if (texto.includes('presión arterial sistólica')) {
    estadoActual('presionSitolica');
  } else if (texto.includes('presión arterial diastólica')) {
    estadoActual('presionDiastolica');
  } else if (texto.includes('finalizar')) {
    estadoActual('finalizar');
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

  // procesar con chat gpt
  else if (procesaMotivo) {
    console.log("entro 2");
    enviarChatGpt(motivo_consulta.value, 'motivoConsultaTranscripcion');
  }else if (procesaEnfermedad) {
    enviarChatGpt(enfermedad_actual.value, 'enfermedadActualTranscipcion');
  }
}