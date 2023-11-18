<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">


</head>
<body>
  <div class="m-2">
    <h1>Historia clinica morbilidad</h1>
    <p>Para iniciar la grabación haga cick en 'Comenzar' y luego diga el nombre del campo que desea llenar. <br>
      Si el campo tiene texto entre parentesis, ese es el que se debe mencionar. <br>
      los campos se iran lleando despues que mencione el nobre</p>
  </div>

  <div class="m-2">
    <button class="btn btn-success" id="btnStart">COMENZAR</button>
    <button class="btn btn-danger" id="btnStop">DETENER</button>
    <p><span class="grabando" id="grabando"> <strong>Grabando ....</strong> <br>

        <small> para terminar, diga la palabra 'finalizar' o haga clic en el boton detener</small></span></p>

  </div>
  <div class="m-4">
  <?php include 'formularios/formularioGeneral.php'; ?>
    <!-- <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="anamnesis-tab" data-bs-toggle="tab" data-bs-target="#anamnesis" type="button" role="tab" aria-controls="anamnesis" aria-selected="true">ANAMNESIS</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="antecedentes-tab" data-bs-toggle="tab" data-bs-target="#antecedentes" type="button" role="tab" aria-controls="antecedentes" aria-selected="true">ANTECEDENTES</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="revisionporsistema-tab" data-bs-toggle="tab" data-bs-target="#revisionporsistema" type="button" role="tab" aria-controls="revisionporsistema" aria-selected="true">EXAMEN FISICO</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">

      <div class="tab-pane fade show active" id="anamnesis" role="tabpanel" aria-labelledby="anamnesis-tab">
        <?php include 'formularios/anamnesis.php'; ?>
      </div>

      <div class="tab-pane fade" id="antecedentes" role="tabpanel" aria-labelledby="antecedentes-tab">
        <?php include 'formularios/antecedentes.php'; ?>
      </div>

      <div class="tab-pane fade" id="revisionporsistema" role="tabpanel" aria-labelledby="revisionporsistema-tab">
        <?php include 'formularios/signosVitales.php'; ?>
      </div> -->


    </div>
  </div>
  <script src="scripts/audio.js"></script>
<script src="scripts/procesarAudio.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>


</body>

</html>