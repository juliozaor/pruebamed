<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body class="contenedor">
	<div class="app">
		<div class="filas">
			<select name="" id="micSelect" class="form-select"></select>

			<select id="visSelect" class="form-select">
				<option value="frequencybars">Bar</option>
				<option value="sinewave">Wave</option>
				<option value="circle">Circle</option>
			</select>

		</div>

		<!-- 	<a id="download" >Descargar</a> -->

		<div class="filas">
			<div id="botones">
				<button id="record" class="btn btn-danger">Grabar</button>
				<button id="stop" class="btn btn-success">Stop</button>
				<button id="restart" class="btn btn-primary" onclick="reiniciar()">Reiniciar</button>
			</div>
			<button id="iniciar" class="btn btn-success" onclick="iniciar()">Iniciar</button>
			<!-- 	<audio id="audio" controls></audio> -->
		</div>

		<div id="msg">Grabando...</div>

		<div class="contenido">
			<div class="videoContenedor">
				<video id="video" width="100%" autoplay="autoplay">
					<source src="video/saludo.mp4" type="video/mp4">
				</video>
			</div>
			<div class="ondas">

				<canvas width="300" height="330"></canvas>
			</div>
			<div class="respuestas">
				<div class="paciente">
					<label for="respuesta"><strong>Paciente: </strong>Transcripci&oacute;n sintomatologia </label>
					<textarea class="form-control" id="respuesta" id="respuesta" style="height: 130px"></textarea>
				</div>
				<div class="medico">

					<label for="respuestaChatGpt"><strong> Medico: </strong>Transcripci&oacute;n sintomatologia </label>
					<textarea class="form-control" id="respuestaChatGpt" style="height: 130px"></textarea>

				</div>
			</div>
		</div>



	</div>

</body>
<link rel="stylesheet" href="css/style.css">
<script src="scripts/voz.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
</script>
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
</script>

</html>