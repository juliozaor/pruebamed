const urlChatGpt = 'https://api.openai.com/v1/chat/completions';
const tokenChatGpt = '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';

const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');


const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.continuous = true;
recognition.lang = 'es-ES';
recognition.interimResult = false;

btnStart.addEventListener('click', () => {
    $('#grabando').show();
    recognition.start();
});

btnStop.addEventListener('click', () => {
    $('#grabando').hide();
    recognition.abort();
});

recognition.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
    //  textArea.value = texto;
    procesarTexto(texto);
    //leerTexto(texto)

}

/* function leerTexto(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 0.4;
    speech.lang = 'es-ES'

    window.speechSynthesis.speak(speech);
} */




//Enviar a Chat GPT
function enviarChatGpt(texto, campo) {
    console.log("entro a chat", texto, campo);
    if (texto !== '') {
        const contexto = {
            "model": "gpt-3.5-turbo",
            "messages": [
                { "role": "system", "content": "Eres un experto en terminologia medica usando la semiología de suros" },
                { "role": "user", "content": `por favor traduce los síntomas que te paso a continuación usando terminología medica y semiología de suros, sin encabezado y redactando el texto continuo sin expliación: ${texto}` }],
            "temperature": 0.7
        };

        fetch(urlChatGpt, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokenChatGpt
            },
            body: JSON.stringify(contexto)
        })
            .then(function (response) {                
                console.log("entro a validar respuesta", texto, campo);
                if (!response.ok) {
                    throw new Error('La respuesta de la API no fue correcta 0');
                }
                return response.json();
            })
            .then(function (data) {
                // Procesar los datos de respuesta de la API aquí

                if (!data.choices[0]) {
                    throw new Error('La respuesta de la API no fue correcta 1');

                }
                const respuesta = data.choices[0].message.content;
                console.log(respuesta);
                const responder2 = document.getElementById(campo);
                responder2.value = respuesta; // respuesta chatGpt
            })

    }
}