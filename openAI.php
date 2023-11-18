<?php

function enviar($nombreArchivo) {
    $filePath = 'audio/'.$nombreArchivo;
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
            'Cache-Control: no-cache' // Agrega esta línea
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
            echo 'La respuesta de la API no fue correcta 2';
        }
    }

    curl_close($ch);
    if (file_exists($filePath)) {
        unlink($filePath);
    }
}

if (isset($_GET['nombreArchivo'])) {
    $nombreArchivo = $_GET['nombreArchivo'];
    enviar($nombreArchivo);
}
// Llamada a la función