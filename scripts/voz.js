

(async () => {
  let leftchannel = [];
  let rightchannel = [];
  let recorder = null;
  let recording = false;
  let recordingLength = 0;
  let volume = null;
  let audioInput = null;
  let sampleRate = null;
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let context = null;
  let analyser = null;
  let canvas = document.querySelector('canvas');
  let canvasCtx = canvas.getContext("2d");
  let visualSelect = document.querySelector('#visSelect');
  let micSelect = document.querySelector('#micSelect');
  let stream = null;
  let tested = false;

  try {
    window.stream = stream = await getStream();
    console.log('Got stream');
  } catch (err) {
    alert('Issue getting mic', err);
  }

  const deviceInfos = await navigator.mediaDevices.enumerateDevices();

  var mics = [];
  for (let i = 0; i !== deviceInfos.length; ++i) {
    let deviceInfo = deviceInfos[i];
    if (deviceInfo.kind === 'audioinput') {
      mics.push(deviceInfo);
      let label = deviceInfo.label ||
        'Microphone ' + mics.length;
      console.log('Mic ', label + ' ' + deviceInfo.deviceId)
      const option = document.createElement('option')
      option.value = deviceInfo.deviceId;
      option.text = label;
      micSelect.appendChild(option);
    }
  }

  function getStream(constraints) {
    if (!constraints) {
      constraints = { audio: true, video: false };
    }
    return navigator.mediaDevices.getUserMedia(constraints);
  }


  setUpRecording();

  function setUpRecording() {
    context = new AudioContext();
    sampleRate = context.sampleRate;

    // crea un nodo de ganancia
    volume = context.createGain();

    // crea un nodo de audio desde el flujo entrante del micrófono
    audioInput = context.createMediaStreamSource(stream);

    // Crear analizador
    analyser = context.createAnalyser();

    // conectar la entrada de audio al analizador
    audioInput.connect(analyser);

    // conectar analizador al control de volumen
    // analyser.connect(volume);

    let bufferSize = 2048;
    let recorder = context.createScriptProcessor(bufferSize, 2, 2);

    // conectamos el control de volumen al procesador
    // volume.connect(recorder);

    analyser.connect(recorder);

    // finally connect the processor to the output
    recorder.connect(context.destination);

    recorder.onaudioprocess = function (e) {
      // Check 
      if (!recording) return;
      // Haz algo con los datos, es decir, convierte esto a WAV
      console.log('recording');
      let left = e.inputBuffer.getChannelData(0);
      let right = e.inputBuffer.getChannelData(1);
      if (!tested) {
        tested = true;
        // si esto se reduce a 0 no estamos recibiendo ningún sonido
        if (!left.reduce((a, b) => a + b)) {
          alert("There seems to be an issue with your Mic");
          // clean up;
          stop();
          stream.getTracks().forEach(function (track) {
            track.stop();
          });
          context.close();
        }
      }
      // clonamos las muestras
      leftchannel.push(new Float32Array(left));
      rightchannel.push(new Float32Array(right));
      recordingLength += bufferSize;
    };
    visualize();
  };



  function mergeBuffers(channelBuffer, recordingLength) {
    let result = new Float32Array(recordingLength);
    let offset = 0;
    let lng = channelBuffer.length;
    for (let i = 0; i < lng; i++) {
      let buffer = channelBuffer[i];
      result.set(buffer, offset);
      offset += buffer.length;
    }
    return result;
  }

  function interleave(leftChannel, rightChannel) {
    let length = leftChannel.length + rightChannel.length;
    let result = new Float32Array(length);

    let inputIndex = 0;

    for (let index = 0; index < length;) {
      result[index++] = leftChannel[inputIndex];
      result[index++] = rightChannel[inputIndex];
      inputIndex++;
    }
    return result;
  }

  function writeUTFBytes(view, offset, string) {
    let lng = string.length;
    for (let i = 0; i < lng; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  function start() {
    const stop = document.getElementById('stop');
    stop.disabled = false;
    const record = document.getElementById('record');
    record.disabled = true;
    recording = true;
    document.querySelector('#msg').style.visibility = 'visible'
    // reset the buffers for the new recording
    leftchannel.length = rightchannel.length = 0;
    recordingLength = 0;
    console.log('context: ', !!context);
    if (!context) setUpRecording();
  }

  function stop() {
    const stop = document.getElementById('stop');
    stop.disabled = true;
    recording = false;
    document.querySelector('#msg').style.visibility = 'hidden'


    // bajamos los canales izquierdo y derecho
    let leftBuffer = mergeBuffers(leftchannel, recordingLength);
    let rightBuffer = mergeBuffers(rightchannel, recordingLength);
    // we interleave both channels together
    let interleaved = interleave(leftBuffer, rightBuffer);

    // creamos nuestro archivo wav
    let buffer = new ArrayBuffer(44 + interleaved.length * 2);
    let view = new DataView(buffer);

    // RIFF chunk descriptor
    writeUTFBytes(view, 0, 'RIFF');
    view.setUint32(4, 44 + interleaved.length * 2, true);
    writeUTFBytes(view, 8, 'WAVE');
    // FMT sub-chunk
    writeUTFBytes(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    // stereo (2 channels)
    view.setUint16(22, 2, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 4, true);
    view.setUint16(32, 4, true);
    view.setUint16(34, 16, true);
    // data sub-chunk
    writeUTFBytes(view, 36, 'data');
    view.setUint32(40, interleaved.length * 2, true);

    // escribe las muestras de PCM
    let lng = interleaved.length;
    let index = 44;
    let volume = 1;
    for (let i = 0; i < lng; i++) {
      view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
      index += 2;
    }

    // our final binary blob
    const blob = new Blob([view], { type: 'audio/wav' });

    const audioUrl = URL.createObjectURL(blob);
    console.log('BLOB ', blob);
    console.log('URL ', audioUrl);

    downloadBlob(blob);

  }

  function visualize() {
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    CENTERX = canvas.width / 2;
    CENTERY = canvas.height / 2;

    let visualSetting = visualSelect.value;
    console.log(visualSetting);
    if (!analyser) return;

    if (visualSetting === "sinewave") {
      analyser.fftSize = 2048;
      var bufferLength = analyser.fftSize;
      console.log(bufferLength);
      var dataArray = new Uint8Array(bufferLength);

      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      var draw = function () {

        drawVisual = requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        canvasCtx.fillStyle = 'rgb(200, 200, 200)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

        canvasCtx.beginPath();

        var sliceWidth = WIDTH * 1.0 / bufferLength;
        var x = 0;

        for (var i = 0; i < bufferLength; i++) {

          var v = dataArray[i] / 128.0;
          var y = v * HEIGHT / 2;

          if (i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }

          x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
      };

      draw();

    } else if (visualSetting == "frequencybars") {
      analyser.fftSize = 64;
      var bufferLengthAlt = analyser.frequencyBinCount;
      console.log(bufferLengthAlt);
      var dataArrayAlt = new Uint8Array(bufferLengthAlt);

      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      var drawAlt = function () {
        drawVisual = requestAnimationFrame(drawAlt);

        analyser.getByteFrequencyData(dataArrayAlt);

        canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        var barWidth = (WIDTH / bufferLengthAlt);
        var barHeight;
        var x = 0;

        for (var i = 0; i < bufferLengthAlt; i++) {
          barHeight = dataArrayAlt[i];

          canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
          canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);

          x += barWidth + 1;
        }
      };

      drawAlt();

    } else if (visualSetting == "circle") {
      analyser.fftSize = 32;
      let bufferLength = analyser.frequencyBinCount;
      console.log(bufferLength);
      let dataArray = new Uint8Array(bufferLength);

      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      let draw = () => {
        drawVisual = requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);
        canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        // let radius = dataArray.reduce((a,b) => a + b) / bufferLength;
        let radius = dataArray[2] / 2
        if (radius < 20) radius = 20;
        if (radius > 100) radius = 100;
        // console.log('Radius ', radius)
        canvasCtx.beginPath();
        canvasCtx.arc(CENTERX, CENTERY, radius, 0, 2 * Math.PI, false);
        // canvasCtx.fillStyle = 'rgb(50,50,' + (radius+100) +')';
        // canvasCtx.fill();
        canvasCtx.lineWidth = 6;
        canvasCtx.strokeStyle = 'rgb(50,50,' + (radius + 100) + ')';
        canvasCtx.stroke();
      }
      draw()
    }

  }

  visualSelect.onchange = function () {
    window.cancelAnimationFrame(drawVisual);
    visualize();
  };

  micSelect.onchange = async e => {
    console.log('now use device ', micSelect.value);
    stream.getTracks().forEach(function (track) {
      track.stop();
    });
    context.close();

    stream = await getStream({
      audio: {
        deviceId: { exact: micSelect.value }
      }, video: false
    });
    setUpRecording();
  }

  function pause() {
    recording = false;
    context.suspend()
  }

  function resume() {
    recording = true;
    context.resume();
  }

  document.querySelector('#record').onclick = (e) => {
    console.log('Start recording')
    start();
  }

  document.querySelector('#stop').onclick = (e) => {
    stop();
  }
})()

function downloadBlob(blob) {
  const formData = new FormData();
  // Enviar el BinaryLargeObject con FormData
  formData.append("audio", blob);
  const RUTA_SERVIDOR = "descarga.php";
  fetch(RUTA_SERVIDOR, {
    method: "POST",
    body: formData,
  })
    .then(respuestaRaw => respuestaRaw.text()) // Decodificar como texto
    .then(respuestaComoTexto => {
      // Aquí haz algo con la respuesta ;)
      console.log("La respuesta: ", respuestaComoTexto);
      // Abrir el archivo, es opcional y solo lo pongo como demostración
      // enviar();

      llamarFuncionEnPHP(respuestaComoTexto);
    })
}

const urlChatGpt = 'https://api.openai.com/v1/chat/completions';
const tokenChatGpt = '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';


function llamarFuncionEnPHP(nombreArchivo) {

  $.ajax({
    type: "GET",
    url: "openAI.php", // Reemplaza con la ruta correcta
    data: { nombreArchivo: nombreArchivo },
    success: function (response) {
      //alert(response); // Muestra la respuesta de la función PHP
      console.log('response', response)
      const responder = document.getElementById('respuesta');
      responder.value = response; // texo del usuario
      enviarChatGpt(response);
    }
  });
  /* fetch('openAI.php', {
      method: 'GET' // Puedes usar 'POST' u otro método aquí si es necesario
  })
  .then(response => response.text())
  .then(data => {
      // Manejar la respuesta de la función PHP aquí
      const responder = document.getElementById('respuesta');
      responder.value=data; // texo del usuario
      enviarChatGpt(data);
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  }); */
}

function enviarChatGpt(texto) {
  if (texto !== '') {
    const contexto = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { "role": "system", "content": "Eres un experto en terminologia medica usando la semiología de suros" },
        { "role": "user", "content": `por favor traduce los síntomas que te paso a continuación usando terminología medica y semiología de suros, solo retorna el diagnostico sin encabezado y redactando el texto continuo y el texto debe tener a lo sumo 60 caracteres para transcribir en una hitoria clinica: ${texto}` }],
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

        if (!response.ok) {
          throw new Error('La respuesta de la API no fue correcta 4');
        }
        return response.json();
      })
      .then(function (data) {
        // Procesar los datos de respuesta de la API aquí

        if (!data.choices[0]) {
          throw new Error('La respuesta de la API no fue correcta 5');

        }
        const respuesta = data.choices[0].message.content;
        console.log(respuesta);
        const responder2 = document.getElementById('respuestaChatGpt');
        responder2.value = respuesta; // respuesta chatGpt
      })
      .catch(function (error) {
        // Manejar errores de la llamada a la API aquí
        console.log('Error:', error.message);
        // Puedes intentar la llamada nuevamente en este punto
        setTimeout(function () {
          enviar();
        }, 1000);
      });

  }
}


function iniciar() {
  $('#botones').show();
  $('#iniciar').hide();
  const video = document.getElementById('video');
  video.play();
  const record = document.getElementById('record');
  record.disabled = true;

  setTimeout(() => {
    record.disabled = false;
  }, 5000);

}

function reiniciar() {
  $('#botones').hide();
  $('#iniciar').show();
  document.getElementById('respuestaChatGpt').value = '';
  document.getElementById('respuesta').value = '';
  const record = document.getElementById('record');
  record.disabled = false;
}

window.onload = function () {
  const stop = document.getElementById('stop');
  stop.disabled = true;
}