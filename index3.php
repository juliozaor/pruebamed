<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title> 
  <link rel="stylesheet" href="css/style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>

  <div class="m-2">
    <button class="btn btn-success" id="btnStart">COMENZAR</button>
    <button class="btn btn-danger" id="btnStop">DETENER</button>
    <br>
     <span class="grabando" id="grabando"> <strong>Grabando ....</strong> <br>
     <small> para terminar, diga la palabra 'finalizar' o haga clic en el boton detener</small></span>
  </div>
  <div class="m-4">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="anamnesis-tab" data-bs-toggle="tab" data-bs-target="#anamnesis" type="button" role="tab" aria-controls="anamnesis" aria-selected="true">ANAMNESIS</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="revisionporsistema-tab" data-bs-toggle="tab" data-bs-target="#revisionporsistema" type="button" role="tab" aria-controls="revisionporsistema" aria-selected="true">EXAMEN FISICO</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="examenfisico-tab" data-bs-toggle="tab" data-bs-target="#examenfisico" type="button" role="tab" aria-controls="examenfisico" aria-selected="false">Profile</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="anamnesis" role="tabpanel" aria-labelledby="anamnesis-tab">
    <?php include 'formularios/anamnesis.php'; ?>
    </div>
      <div class="tab-pane fade" id="revisionporsistema" role="tabpanel" aria-labelledby="revisionporsistema-tab">
        
      <?php include 'formularios/signosVitales.php'; ?>

      </div>
      <div class="tab-pane fade" id="examenfisico" role="tabpanel" aria-labelledby="examenfisico-tab">...</div>

    </div>
  </div>
  <script src="scripts/audio.js"></script>
  <script src="scripts/procesarAudio.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>