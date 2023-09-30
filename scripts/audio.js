const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const signos_Vitales = document.getElementById('signosVitales');
const presion_Sitolica = document.getElementById('presionSitolica');
const presion_Diastolica = document.getElementById('presionDiastolica');

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.continuous = true;
recognition.lang = 'es-ES';
recognition.interimResult = false;

btnStart.addEventListener('click', () => {
    recognition.start();
});

btnStop.addEventListener('click', () => {
    recognition.abort();
});

recognition.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
  //  textArea.value = texto;
  procesarTexto(texto);
 //leerTexto(texto)
   
}

function leerTexto(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 0.4;
    speech.lang = 'es-ES'

    window.speechSynthesis.speak(speech);
}

let signosVitales = false;  
let presionSitolica = false;  
let presionDiastolica = false;  

function procesarTexto(texto) {
    if (texto.includes('signos vitales')) {
        signosVitales = true;
        presionSitolica = false;
        presionDiastolica = false;
    } else if (texto.includes('presión arterial sistólica')) {
        presionSitolica = true;
        signosVitales = false;
        presionDiastolica = false;
    } else if (texto.includes('presión arterial diastólica')) {
      presionSitolica = false;
      signosVitales = false;
      presionDiastolica = true;
  } else if (texto.includes('finalizar')) {
        signosVitales = false;
        presionSitolica = false;
        presionSitolica = false;
        recognition.abort();
    } else {
        if (signosVitales) {
          signos_Vitales.value += texto + ' '; 
        } else if (presionSitolica) {
          presion_Sitolica.value += texto + ' '; 
        }else if (presionDiastolica) {
          presion_Diastolica.value += texto + ' '; 
        }
    }
}
