<?php

if (count($_FILES) <= 0 || empty($_FILES["audio"])) {
    exit("No hay archivos");
}

// Obtener la lista de archivos en la carpeta
$archivos = glob('audio' . '*');

// Recorrer y eliminar cada archivo
foreach ($archivos as $archivo) {
    if (is_file($archivo)) {
        unlink($archivo);
    }
}

# De dónde viene el audio y en dónde lo ponemos
$rutaAudioSubido = $_FILES["audio"]["tmp_name"];
$nuevoNombre = uniqid().".wav";
$rutaDeGuardado = __DIR__ . "/audio/" . $nuevoNombre;
// Mover el archivo subido a la ruta de guardado
move_uploaded_file($_FILES["audio"]["tmp_name"], $rutaDeGuardado);
echo $nuevoNombre;