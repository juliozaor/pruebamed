<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>

  <!--    <button id="btnStart">COMENZAR</button>
    <button id="btnStop">DETENER</button>
    <textarea id="textArea1" cols="30" rows="10"></textarea>
    <textarea id="textArea2" cols="30" rows="10"></textarea> -->
  <div class="m-2">
    <button class="btn btn-success" id="btnStart">COMENZAR</button>
    <button class="btn btn-danger" id="btnStop">DETENER</button>
    <!--  <span> Grabando ....</span> -->
  </div>
  <div class="m-4">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="revisionporsistema-tab" data-bs-toggle="tab" data-bs-target="#revisionporsistema" type="button" role="tab" aria-controls="revisionporsistema" aria-selected="true">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="examenfisico-tab" data-bs-toggle="tab" data-bs-target="#examenfisico" type="button" role="tab" aria-controls="examenfisico" aria-selected="false">Profile</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="revisionporsistema" role="tabpanel" aria-labelledby="revisionporsistema-tab">
        
      <div class="form-floating">
          <textarea class="form-control m-2" placeholder="Leave a comment here" id="signosVitales" style="height: 100px"></textarea>
          <label for="signosVitales">SIGNOS VITALES</label>
        </div>

        <div class="form-floating">
          <textarea class="form-control m-2" placeholder="Leave a comment here" id="presionSitolica" style="height: 100px"></textarea>
          <label for="presionSitolica">PRESION ARTERIAL SISTOLICA</label>
        </div>

        <div class="form-floating">
          <textarea class="form-control m-2" placeholder="Leave a comment here" id="presionDiastolica" style="height: 100px"></textarea>
          <label for="presionDiastolica">PRESION ARTERIAL DIASTOLICA</label>
        </div>

      </div>
      <div class="tab-pane fade" id="examenfisico" role="tabpanel" aria-labelledby="examenfisico-tab">...</div>

    </div>
  </div>
  <script src="scripts/audio.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>