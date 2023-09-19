<?php
/**
 * Grabar audio obtenido del micr車fono con JavaScript, seleccionando
 * un dispositivo de grabaci車n de una lista; usando MediaRecorder
 * y getUserMedia
 *
 * Extra: no descargar el audio, sino enviarlo a un servidor con PHP y guardarlo en la nube
 * Recomendado: https://parzibyte.me/blog/2018/11/06/cargar-archivo-php-javascript-formdata/
 *
 *
 * @author parzibyte
 * @see https://parzibyte.me/blog
 */
# Si no hay archivos, salir inmediatamente
if (count($_FILES) <= 0 || empty($_FILES["audio"])) {
    exit("No hay archivos");
}
# De d車nde viene el audio y en d車nde lo ponemos
$rutaAudioSubido = $_FILES["audio"]["tmp_name"];
$nuevoNombre = "sintomas.wav";
$rutaDeGuardado = __DIR__ . "/audio/" . $nuevoNombre;
// Mover el archivo subido a la ruta de guardado
move_uploaded_file($_FILES["audio"]["tmp_name"], $rutaDeGuardado);
// Imprimir el nombre para que la petici車n lo lea
echo $nuevoNombre;