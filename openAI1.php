<?php

function enviar() {
    $filePath = 'audio/sintomas.wav';
    $urlChatGpt = 'https://api.openai.com/v1/audio/transcriptions';
    $tokenChatGpt = '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';

    $data = array(
        'file' => new CURLFile($filePath),
        'model' => 'whisper-1'
    );

    $options = array(
        CURLOPT_URL => $urlChatGpt,
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer ' . $tokenChatGpt,
            'Cache-Control: no-cache' // Agrega esta l¨ªnea
        ),
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_RETURNTRANSFER => true
    );

    $ch = curl_init();
    curl_setopt_array($ch, $options);
    $response = curl_exec($ch);

    if ($response === false) {
        echo 'Error: ' . curl_error($ch);
    } else {
      
        $responseData = json_decode($response, true);


        if (isset($responseData['text'])) {
            $respuesta = $responseData['text'];
            echo $respuesta;
        } else {
            echo 'La respuesta de la API no fue correcta';
        }
    }

    curl_close($ch);
    if (file_exists($filePath)) {
        unlink($filePath);
    }
}

// Llamada a la funci¨®n
enviar();