/* 
  const tipo_consulta = document.getElementById('tipoConsulta');
  const tipoConsultaChoices = new Choices('#tipoConsulta', {
    placeholder: true,
    searchPlaceholderValue: 'Buscar opciones'
}); */

const signos_Vitales = document.getElementById('signosVitales');
const presion_Sitolica = document.getElementById('presionSitolica');
const presion_Diastolica = document.getElementById('presionDiastolica');
const frecuenciaCardiacaCampo = document.getElementById('frecuenciaCardiaca');
const frecuenciaRespiratoriaCampo = document.getElementById('frecuenciaRespiratoria');
const temperaturaCorporalCampo = document.getElementById('temperaturaCorporal');
/* const pesoCampo = document.getElementById('peso');
const tallaCampo = document.getElementById('talla');
const imcCampo = document.getElementById('imc');
const estadoGeneralCampo = document.getElementById('estadoGeneral');
const cabezaCampo = document.getElementById('cabeza');
const organosSentidosCampo = document.getElementById('organosSentidos');
const cuelloCampo = document.getElementById('cuello');
const cardiopulmonarCampo = document.getElementById('cardiopulmonar');
const toraxMamasCampo = document.getElementById('toraxMamas');
const abdomenCampo = document.getElementById('abdomen');
const genitourinarioCampo = document.getElementById('genitourinario');
const osteomuscularCampo = document.getElementById('osteomuscular');
const neurologicoCampo = document.getElementById('neurologico');
const vascularPerifericoCampo = document.getElementById('vascularPeriferico');
const pielFanerasCampo = document.getElementById('pielFaneras');
const otrosHallazgosCampo = document.getElementById('otrosHallazgos');
const analisisPlanManejoCampo = document.getElementById('analisisPlanManejo');
const recomendacionesCampo = document.getElementById('recomendaciones');
const remitidoCampo = document.getElementById('remitido');
const motivoRemisionCampo = document.getElementById('motivoRemision');
const especialidadCampo = document.getElementById('especialidad'); */



const motivo_consulta = document.getElementById('motivoConsulta');
const motivo_consulta_transcripcion = document.getElementById('motivoConsultaTranscripcion');
/* const enfermedad_actual = document.getElementById('enfermedadActual');
const enfermedad_actual_transcipcion = document.getElementById('enfermedadActualTranscipcion'); */

const patologicosCampo = document.getElementById('patologicos');
const traumaticosCampo = document.getElementById('traumaticos');
const quirurgicosCampo = document.getElementById('quirurgicos');
const alergicosCampo = document.getElementById('alergicos');
const toxicologicosCampo = document.getElementById('toxicologicos');
/* const farmacologicosCampo = document.getElementById('farmacologicos');
const inmunologicosCampo = document.getElementById('inmunologicos');
const ocupacionalCampo = document.getElementById('ocupacional'); */

const patologicosTranscriocion = document.getElementById('patologicosTranscripcion');
const traumaticosTranscriocion = document.getElementById('traumaticosTranscripcion');
const quirurgicosTranscriocion = document.getElementById('quirurgicosTranscripcion');
const alergicosTranscriocion = document.getElementById('alergicosTranscripcion');
const toxicologicosTranscriocion = document.getElementById('toxicologicosTranscripcion');
/* const farmacologicosTranscriocion = document.getElementById('farmacologicosTranscripcion');
const inmunologicosTranscriocion = document.getElementById('inmunologicosTranscripcion');
const ocupacionalTranscriocion = document.getElementById('ocupacionalTranscripcion'); */

let tipoConsulta = false;
let signosVitales = false;
let presionSitolica = false;
let presionDiastolica = false;
let frecuenciaCardiaca = false;
let frecuenciaRespiratoria = false;
let temperaturaCorporal = false;
/* let peso = false;
let talla = false;
let imc = false;
let estadoGeneral = false;
let cabeza = false;
let organosSentidos = false;
let cuello = false;
let cardiopulmonar = false;
let toraxMamas = false;
let abdomen = false;
let genitourinario = false;
let osteomuscular = false;
let neurologico = false;
let vascularPeriferico = false;
let pielFaneras = false;
let otrosHallazgos = false;
let analisisPlanManejo = false;
let recomendaciones = false;
let remitido = false;
let motivoRemision = false;
let especialidad = false; */

let motivoConsulta = false;
let procesaMotivo = false;
//let enfermedadActual = false;
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

let textoIn = '';

function procesarTexto(texto) {
  textoIn = texto;
console.log(texto);
 /*  if (texto.includes('tipo de consulta')) {
    estadoActual('tipoConsulta');
    seleccionado('tipoConsulta');
      tipo_consulta.focus();
      // Resaltar los elementos
      tipoConsultaChoices.highlightAll();

  }else */ if (texto.includes('motivo de consulta') || texto.includes('cuénteme porque viene a consulta') {
    estadoActual('motivoConsulta');
    seleccionado('motivoConsulta');
    motivo_consulta.focus();
  }/*  else if (texto.includes('enfermedad actual')) {
    estadoActual('enfermedadActual');
    seleccionado('enfermedadActual');
    enfermedad_actual.focus();
  }  */
  /* else if (texto.includes('signos vitales')) {
    estadoActual('signosVitales');
    seleccionado('signosVitales');
    signos_Vitales.focus();
  } else if (texto.includes('presión arterial sistólica')) {
    estadoActual('presionSitolica');
    seleccionado('presionSitolica');
    presion_Sitolica.focus();
  } else if (texto.includes('presión arterial diastólica')) {
    estadoActual('presionDiastolica');
    seleccionado('presionDiastolica');
    presion_Diastolica.focus();
  } else if (texto.includes('frecuencia cardíaca')) {
    estadoActual('frecuenciaCardiaca');
    seleccionado('frecuenciaCardiaca');
    frecuenciaCardiacaCampo.focus();
  } else if (texto.includes('frecuencia respiratoria')) {
    estadoActual('frecuenciaRespiratoria');
    seleccionado('frecuenciaRespiratoria');
    frecuenciaRespiratoriaCampo.focus();
  } else if (texto.includes('temperatura corporal')) {
    estadoActual('temperaturaCorporal');
    seleccionado('temperaturaCorporal');
    temperaturaCorporalCampo.focus();
  } */ 
  /* else if (texto.includes('peso')) {
    estadoActual('peso');
    seleccionado('peso');
  } else if (texto.includes('talla')) {
    estadoActual('talla');
    seleccionado('talla');
  } else if (texto.includes('imc')) {
    estadoActual('imc');
    seleccionado('imc');
  } else if (texto.includes('estado general')) {
    estadoActual('estadoGeneral');
    seleccionado('estadoGeneral');
  } else if (texto.includes('cabeza')) {
    estadoActual('cabeza');
    seleccionado('cabeza');
  } else if (texto.includes('órganos de los sentidos')) {
    estadoActual('organosSentidos');
    seleccionado('organosSentidos');
  } else if (texto.includes('cuello')) {
    estadoActual('cuello');
    seleccionado('cuello');
  } else if (texto.includes('cardiopulmonar')) {
    estadoActual('cardiopulmonar');
    seleccionado('cardiopulmonar');
  } else if (texto.includes('tórax')) {
    estadoActual('toraxMamas');
    seleccionado('toraxMamas');
  } else if (texto.includes('abdomen')) {
    estadoActual('abdomen');
    seleccionado('abdomen');
  } else if (texto.includes('genitourinario')) {
    estadoActual('genitourinario');
    seleccionado('genitourinario');
  } else if (texto.includes('osteomuscular')) {
    estadoActual('osteomuscular');
    seleccionado('osteomuscular');
  } else if (texto.includes('neurológico')) {
    estadoActual('neurologico');
    seleccionado('neurologico');
  } else if (texto.includes('vascular periférico')) {
    estadoActual('vascularPeriferico');
    seleccionado('vascularPeriferico');
  } else if (texto.includes('piel y faneras')) {
    estadoActual('pielFaneras');
    seleccionado('pielFaneras');
  } else if (texto.includes('otros hallazgos')) {
    estadoActual('otrosHallazgos');
    seleccionado('otrosHallazgos');
  } else if (texto.includes('análisis y plan de manejo')) {
    estadoActual('analisisPlanManejo');
    seleccionado('analisisPlanManejo');
  } else if (texto.includes('recomendaciones')) {
    estadoActual('recomendaciones');
    seleccionado('recomendaciones');
  } else if (texto.includes('remitido')) {
    estadoActual('remitido');
    seleccionado('remitido');
  } else if (texto.includes('motivo de remisión')) {
    estadoActual('motivoRemision');
    seleccionado('motivoRemision');
  } else if (texto.includes('especialidad')) {
    estadoActual('especialidad');
    seleccionado('especialidad');
  } */

   else if (texto.includes('sufre de alguna enfermedad') || texto.includes('patologicos') || texto.includes('sufre alguna enfermedad')) {
    estadoActual('patologicos');
    seleccionado('patologicos');
    patologicosCampo.focus();
  } else if (texto.includes('traumáticos') || texto.includes('se ha fracturado o ha sufrido algún golpe fuerte')) {
    estadoActual('traumaticos');
    seleccionado('traumaticos');
    traumaticosCampo.focus();
  } else if (texto.includes('quirúrgicos') || texto.includes('alguna vez ha tenido una operación o cirugía')) {
    estadoActual('quirurgicos');
    seleccionado('quirurgicos');
    quirurgicosCampo.focus();
  } else if (texto.includes('alérgicos') || texto.includes('es alérgico a algún medicamento')) {
    estadoActual('alergicos');
    seleccionado('alergicos');
    alergicosCampo.focus();
  } else if (texto.includes('toxicológicos') || texto.includes('alguna vez se ha intoxicado con algún medicamento comida o sustancia')) {
    estadoActual('toxicologicos');
    seleccionado('toxicologicos');
    toxicologicosCampo.focus();
  } else if (texto.includes('finalizar') || texto.includes('detener')) {
    estadoActual('finalizar');
    seleccionado('finalizar');
    $('#grabando').hide();
    recognition.abort();
  } else if (texto.includes('borrar texto')) {
    borrar();
  }else {
    mostrarTexto(texto);
  }
}

function estadoActual(campo) {
  tipoConsulta = (campo == 'tipoConsulta');
  signosVitales = (campo == 'signosVitales');
  presionSitolica = (campo == 'presionSitolica');
  presionDiastolica = (campo == 'presionDiastolica');
  frecuenciaCardiaca = (campo == 'frecuenciaCardiaca');
  frecuenciaRespiratoria = (campo == 'frecuenciaRespiratoria');
  temperaturaCorporal = (campo == 'temperaturaCorporal');

/*   peso = (campo == 'peso');
  talla = (campo == 'talla');
  imc = (campo == 'imc');
  estadoGeneral = (campo == 'estadoGeneral');
  cabeza = (campo == 'cabeza');
  organosSentidos = (campo == 'organosSentidos');
  cuello = (campo == 'cuello');
  cardiopulmonar = (campo == 'cardiopulmonar');
  toraxMamas = (campo == 'toraxMamas');
  abdomen = (campo == 'abdomen');
  genitourinario = (campo == 'genitourinario');
  osteomuscular = (campo == 'osteomuscular');
  neurologico = (campo == 'neurologico');
  vascularPeriferico = (campo == 'vascularPeriferico');
  pielFaneras = (campo == 'pielFaneras');
  otrosHallazgos = (campo == 'otrosHallazgos');
  analisisPlanManejo = (campo == 'analisisPlanManejo');
  recomendaciones = (campo == 'recomendaciones');
  remitido = (campo == 'remitido');
  motivoRemision = (campo == 'motivoRemision');
  especialidad = (campo == 'especialidad'); */

  motivoConsulta = (campo == 'motivoConsulta');
 // enfermedadActual = (campo == 'enfermedadActual');
 

  patologicos = (campo == 'patologicos');
  traumaticos = (campo == 'traumaticos');
  quirurgicos = (campo == 'quirurgicos');
  alergicos = (campo == 'alergicos');
  toxicologicos = (campo == 'toxicologicos');
  farmacologicos = (campo == 'farmacologicos');
  inmunologicos = (campo == 'inmunologicos');
  ocupacional = (campo == 'ocupacional');

}

function estadoActualEnvio(campo) {
  procesaMotivo = (campo == 'procesaMotivo');
  procesaEnfermedad = (campo == 'procesaEnfermedad');
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
 // (campo == 'tipoConsulta') ? tipo_consulta.classList.add('resaltar') : tipo_consulta.classList.remove('resaltar');
  /* (campo == 'signosVitales') ? signos_Vitales.classList.add('resaltar') : signos_Vitales.classList.remove('resaltar');
  (campo == 'presionSitolica') ? presion_Sitolica.classList.add('resaltar') : presion_Sitolica.classList.remove('resaltar');
  (campo == 'presionDiastolica') ? presion_Diastolica.classList.add('resaltar') : presion_Diastolica.classList.remove('resaltar');

  (campo == 'frecuenciaCardiaca') ? frecuenciaCardiacaCampo.classList.add('resaltar') : frecuenciaCardiacaCampo.classList.remove('resaltar');
  (campo == 'frecuenciaRespiratoria') ? frecuenciaRespiratoriaCampo.classList.add('resaltar') : frecuenciaRespiratoriaCampo.classList.remove('resaltar');
  (campo == 'temperaturaCorporal') ? temperaturaCorporalCampo.classList.add('resaltar') : temperaturaCorporalCampo.classList.remove('resaltar'); */
  /* (campo == 'peso') ? pesoCampo.classList.add('resaltar') : pesoCampo.classList.remove('resaltar');
  (campo == 'talla') ? tallaCampo.classList.add('resaltar') : tallaCampo.classList.remove('resaltar');
  (campo == 'imc') ? imcCampo.classList.add('resaltar') : imcCampo.classList.remove('resaltar');
  (campo == 'estadoGeneral') ? estadoGeneralCampo.classList.add('resaltar') : estadoGeneralCampo.classList.remove('resaltar');
  (campo == 'cabeza') ? cabezaCampo.classList.add('resaltar') : cabezaCampo.classList.remove('resaltar');
  (campo == 'organosSentidos') ? organosSentidosCampo.classList.add('resaltar') : organosSentidosCampo.classList.remove('resaltar');
  (campo == 'cuello') ? cuelloCampo.classList.add('resaltar') : cuelloCampo.classList.remove('resaltar');
  (campo == 'cardiopulmonar') ? cardiopulmonarCampo.classList.add('resaltar') : cardiopulmonarCampo.classList.remove('resaltar');
  (campo == 'toraxMamas') ? toraxMamasCampo.classList.add('resaltar') : toraxMamasCampo.classList.remove('resaltar');
  (campo == 'abdomen') ? abdomenCampo.classList.add('resaltar') : abdomenCampo.classList.remove('resaltar');
  (campo == 'genitourinario') ? genitourinarioCampo.classList.add('resaltar') : genitourinarioCampo.classList.remove('resaltar');
  (campo == 'osteomuscular') ? osteomuscularCampo.classList.add('resaltar') : osteomuscularCampo.classList.remove('resaltar');
  (campo == 'neurologico') ? neurologicoCampo.classList.add('resaltar') : neurologicoCampo.classList.remove('resaltar');
  (campo == 'vascularPeriferico') ? vascularPerifericoCampo.classList.add('resaltar') : vascularPerifericoCampo.classList.remove('resaltar');
  (campo == 'pielFaneras') ? pielFanerasCampo.classList.add('resaltar') : pielFanerasCampo.classList.remove('resaltar');
  (campo == 'otrosHallazgos') ? otrosHallazgosCampo.classList.add('resaltar') : otrosHallazgosCampo.classList.remove('resaltar');
  (campo == 'analisisPlanManejo') ? analisisPlanManejoCampo.classList.add('resaltar') : analisisPlanManejoCampo.classList.remove('resaltar');
  (campo == 'recomendaciones') ? recomendacionesCampo.classList.add('resaltar') : recomendacionesCampo.classList.remove('resaltar');
  (campo == 'remitido') ? remitidoCampo.classList.add('resaltar') : remitidoCampo.classList.remove('resaltar');
  (campo == 'motivoRemision') ? motivoRemisionCampo.classList.add('resaltar') : motivoRemisionCampo.classList.remove('resaltar');
  (campo == 'especialidad') ? especialidadCampo.classList.add('resaltar') : especialidadCampo.classList.remove('resaltar'); */

  //(campo == 'motivoConsulta') ? motivo_consulta.classList.add('resaltar') : motivo_consulta.classList.remove('resaltar');
  //(campo == 'enfermedadActual') ? enfermedad_actual.classList.add('resaltar') : enfermedad_actual.classList.remove('resaltar');
  
  (campo == 'patologicos') ? patologicosCampo.classList.add('resaltar') : patologicosCampo.classList.remove('resaltar');
  /*   
  (campo == 'traumaticos') ? traumaticosCampo.classList.add('resaltar') : traumaticosCampo.classList.remove('resaltar');
  (campo == 'quirurgicos') ? quirurgicosCampo.classList.add('resaltar') : quirurgicosCampo.classList.remove('resaltar');
  (campo == 'alergicos') ? alergicosCampo.classList.add('resaltar') : alergicosCampo.classList.remove('resaltar');
  (campo == 'toxicologicos') ? toxicologicosCampo.classList.add('resaltar') : toxicologicosCampo.classList.remove('resaltar'); */
  /*  (campo == 'farmacologicos') ? farmacologicosCampo.classList.add('resaltar') : farmacologicosCampo.classList.remove('resaltar');
   (campo == 'inmunologicos') ? inmunologicosCampo.classList.add('resaltar') : inmunologicosCampo.classList.remove('resaltar');
   (campo == 'ocupacional') ? ocupacionalCampo.classList.add('resaltar') : ocupacionalCampo.classList.remove('resaltar');
  */
}


/* motivo_consulta.addEventListener('blur', () => {
  estadoActualEnvio('procesaMotivo');
  enviarTexto(textoIn);
}); */
/* enfermedad_actual.addEventListener('blur', () => {
  estadoActualEnvio('procesaEnfermedad');
  enviarTexto(textoIn);
}); */
patologicosCampo.addEventListener('blur', () => {
  estadoActualEnvio('patologicosTranscripcion');
  enviarTexto(textoIn);
});
/* 
traumaticosCampo.addEventListener('blur', () => {
  estadoActualEnvio('traumaticosTranscripcion');
  enviarTexto(textoIn);
});
quirurgicosCampo.addEventListener('blur', () => {
  estadoActualEnvio('quirurgicosTranscripcion');
  enviarTexto(textoIn);
});
alergicosCampo.addEventListener('blur', () => {
  estadoActualEnvio('alergicosTranscripcion');
  enviarTexto(textoIn);
});
toxicologicosCampo.addEventListener('blur', () => {
  estadoActualEnvio('toxicologicosTranscripcion');
  enviarTexto(textoIn);
}); */


function enviarTexto(texto) {
   if (procesaMotivo) {
    procesaMotivo = false;
    enviarChatGpt(motivo_consulta.value, 'motivoConsultaTranscripcion');
  } /* else if (procesaEnfermedad) {
    procesaEnfermedad = false;
    enviarChatGpt(enfermedad_actual.value, 'enfermedadActualTranscipcion');
  }
 */
  else if (patologicosProcesa) {
    patologicosProcesa = false;
    enviarChatGpt(patologicosCampo.value, 'patologicosTranscripcion')
  }
  else if (traumaticosProcesa) {
    traumaticosProcesa=false;
    enviarChatGpt(traumaticosCampo.value, 'traumaticosTranscripcion')
  }
  else if (quirurgicosProcesa) {
    quirurgicosProcesa=false;
    enviarChatGpt(quirurgicosCampo.value, 'quirurgicosTranscripcion')
  }
  else if (alergicosProcesa) {
    alergicosProcesa=false;
    enviarChatGpt(alergicosCampo.value, 'alergicosTranscripcion')
  }
  else if (toxicologicosProcesa) {
    toxicologicosProcesa=false;
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
  }/*  else if (enfermedadActual) {
    enfermedad_actual.value += texto + ' ';
  } */ else if (signosVitales) {
    signos_Vitales.value += texto + ' ';
  } else if (presionSitolica) {
    presion_Sitolica.value += texto + ' ';
  } else if (presionDiastolica) {
    presion_Diastolica.value += texto + ' ';
  } else if (frecuenciaCardiaca) {
    frecuenciaCardiacaCampo.value += texto + ' ';
  } else if (frecuenciaRespiratoria) {
    frecuenciaRespiratoriaCampo.value += texto + ' ';
  } else if (temperaturaCorporal) {
    temperaturaCorporalCampo.value += texto + ' ';
  } 
  /* else if (peso) {
    pesoCampo.value += texto + ' ';
  } else if (talla) {
    tallaCampo.value += texto + ' ';
  } else if (imc) {
    imcCampo.value += texto + ' ';
  } else if (estadoGeneral) {
    estadoGeneralCampo.value += texto + ' ';
  } else if (cabeza) {
    cabezaCampo.value += texto + ' ';
  } else if (organosSentidos) {
    organosSentidosCampo.value += texto + ' ';
  } else if (cuello) {
    cuelloCampo.value += texto + ' ';
  } else if (cardiopulmonar) {
    cardiopulmonarCampo.value += texto + ' ';
  } else if (toraxMamas) {
    toraxMamasCampo.value += texto + ' ';
  } else if (abdomen) {
    abdomenCampo.value += texto + ' ';
  } else if (genitourinario) {
    genitourinarioCampo.value += texto + ' ';
  } else if (osteomuscular) {
    osteomuscularCampo.value += texto + ' ';
  } else if (neurologico) {
    neurologicoCampo.value += texto + ' ';
  } else if (vascularPeriferico) {
    vascularPerifericoCampo.value += texto + ' ';
  } else if (pielFaneras) {
    pielFanerasCampo.value += texto + ' ';
  } else if (otrosHallazgos) {
    otrosHallazgosCampo.value += texto + ' ';
  } else if (analisisPlanManejo) {
    analisisPlanManejoCampo.value += texto + ' ';
  } else if (recomendaciones) {
    recomendacionesCampo.value += texto + ' ';
  } else if (remitido) {
    remitidoCampo.value += texto + ' ';
  } else if (motivoRemision) {
    motivoRemisionCampo.value += texto + ' ';
  } else if (especialidad) {
    especialidadCampo.value += texto + ' ';
  } */
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
  /*  else if (farmacologicos) {
     farmacologicosCampo.value += texto + ' ';
   }
   else if (inmunologicos) {
     inmunologicosCampo.value += texto + ' ';
   }
   else if (ocupacional) {
     ocupacionalCampo.value += texto + ' ';
   } */

  
}

function borrar() {
  if (motivoConsulta) {
    motivo_consulta.value = '';
  }
 /*  if (enfermedadActual) {
    enfermedad_actual.value = '';
  } */
  if (signosVitales) {
    signos_Vitales.value = '';
  }
  if (presionSitolica) {
    presion_Sitolica.value = '';
  }
  if (presionDiastolica) {
    presion_Diastolica.value = '';
  }
  if (frecuenciaCardiaca) {
    frecuenciaCardiacaCampo.value = '';
  }
  if (frecuenciaRespiratoria) {
    frecuenciaRespiratoriaCampo.value = '';
  }
  if (temperaturaCorporal) {
    temperaturaCorporalCampo.value = '';
  }
  /* if (peso) {
    pesoCampo.value = '';
  }
  if (talla) {
    tallaCampo.value = '';
  }
  if (imc) {
    imcCampo.value = '';
  }
  if (estadoGeneral) {
    estadoGeneralCampo.value = '';
  }
  if (cabeza) {
    cabezaCampo.value = '';
  }
  if (organosSentidos) {
    organosSentidosCampo.value = '';
  }
  if (cuello) {
    cuelloCampo.value = '';
  }
  if (cardiopulmonar) {
    cardiopulmonarCampo.value = '';
  }
  if (toraxMamas) {
    toraxMamasCampo.value = '';
  }
  if (abdomen) {
    abdomenCampo.value = '';
  }
  if (genitourinario) {
    genitourinarioCampo.value = '';
  }
  if (osteomuscular) {
    osteomuscularCampo.value = '';
  }
  if (neurologico) {
    neurologicoCampo.value = '';
  }
  if (vascularPeriferico) {
    vascularPerifericoCampo.value = '';
  }
  if (pielFaneras) {
    pielFanerasCampo.value = '';
  }
  if (otrosHallazgos) {
    otrosHallazgosCampo.value = '';
  }
  if (analisisPlanManejo) {
    analisisPlanManejoCampo.value = '';
  }
  if (recomendaciones) {
    recomendacionesCampo.value = '';
  }
  if (remitido) {
    remitidoCampo.value = '';
  }
  if (motivoRemision) {
    motivoRemisionCampo.value = '';
  }
  if (especialidad) {
    especialidadCampo.value = '';
  } */

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