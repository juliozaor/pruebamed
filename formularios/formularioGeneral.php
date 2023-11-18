<form>
  <div class="row">
    <div class="col">
      <label for="tipoconsulta" class="form-label"><strong>Tipo de consulta</strong></label>
      <select class="form-control choices-single">
        <option value="CONSULTA DE CONTROL O SEGUIMIENTO POR MEDICINA GENERAL">CONSULTA DE CONTROL O SEGUIMIENTO POR
          MEDICINA GENERAL</option>
        <option value="CONSULTA PRIMERA VEZ POR MEDICINA GENERAL">CONSULTA PRIMERA VEZ POR MEDICINA GENERAL</option>
      </select>
    </div>
  </div>

  <div class="row">
    <label for="anamnesis" class="form-label"><strong>Anamnesis</strong></label>
    <div class="col">
      <label for="motivoConsulta">MOTIVO DE CONSULTA</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="motivoConsulta"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">ENFERMEDAD ACTUAL</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="motivoConsultaTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <label for="anamnesis" class="form-label"><strong>Antecedentes</strong></label>
    <label for="anamnesis" class="form-label">
      <h6>Antecedentes personales</h6>
    </label>
    <div class="col">
      <label for="motivoConsulta">¿SUFRE DE ALGUNA ENFERMEDAD?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="patologicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">PATOLOGICOS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="patologicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿SE HA FRACTURADO O HA SUFRIDO ALGÚN GOLPE FUERTE?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="traumaticos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">TRAUMATICOS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="traumaticosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ALGUNA VEZ HA TENIDO UNA OPERACIÓN O CIRUGÍA?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="quirurgicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">QUIRURGICOS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="quirurgicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ES ALÉRGICO A ALGÚN MEDICAMENTO?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="alergicos" style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">ALERGICOS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="alergicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ALGUNA VEZ SE HA INTOXICADO (CON ALGÚN MEDICAMENTO COMIDA O SUSTANCIA)?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="toxicologicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">TOXICOLOGICOS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="toxicologicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** CONSUME ALGÚN FARMACO ***?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="farmacologicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">FARMACOLOGICOS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="farmacologicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** TIENE ALGUNA ENFERMADAD DEL SISTEMA INMUNE***?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="inmunologicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">INMUNOLOGICOS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="inmunologicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** TIENE ALGUNA ENFERMADAD OCUPACIONAL***?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="ocupacional"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">OCUPACIONAL</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="ocupacionalTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <label for="antecedentes_obstetricos" class="form-label"><strong>Antecedentes Gineco - obstétricos</strong></label>
    <div class="col">
      <label for="motivoConsulta">¿*** CÚAL ES SU EDAD***?</label>
      <input type="text" id="edadmenarquia" class="form-control" placeholder="edad menarquia"
        aria-label="edad menarquia">
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">EDAD MENARQUIA</label>
      <input type="text" id="edadmenarquiaTranscripcion" class="form-control" placeholder="edad menarquia"
        aria-label="edad menarquia">
    </div>
    <div class="col">
      <label for="motivoConsulta">¿***FECHA DE ULTIMA MESTRUACIÓN***?</label>
      <input type="text" id="fum" class="form-control" placeholder="FUM" aria-label="FUM">
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">FUM</label>
      <input type="text" id="fumTranscripcion" class="form-control" placeholder="FUM" aria-label="FUM">
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** COMÓ ES SU CICLO***?</label>
      <select class="form-control choices-single2">
        <option value="IRREGULAR">REGULAR</option>
        <option value="IRREGULAR">IRREGULAR</option>
        <option value="NO APLICA">NO APLICA</option>
      </select>

    </div>
    <div class="col">
      <label for="motivoConsulta">¿*** Intención Reproductiva***?</label>
      <select class="form-control choices-single3">
        <option value="Mayor a un año">Mayor a un año</option>
        <option value="Menor a un año">Menor a un año</option>
      </select>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** # GESTACIONES***?</label>
      <input type="text" id="gestaciones" class="form-control" placeholder="gestaciones" aria-label="gestaciones">
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">GESTACIONES</label>
      <input type="text" id="gestacionesTranscripcion" class="form-control" placeholder="gestaciones"
        aria-label="gestaciones">
    </div>
    <div class="col">
      <label for="motivoConsulta">¿***# PARTOS***?</label>
      <input type="text" id="partos" class="form-control" placeholder="partos" aria-label="partos">
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">PARTOS</label>
      <input type="text" id="partosTranscripcion" class="form-control" placeholder="partos" aria-label="partos">
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** # CESAREAS***?</label>
      <input type="text" id="cesareas" class="form-control" placeholder="cesareas" aria-label="cesareas">
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">CESAREAS</label>
      <input type="text" id="cesareasTranscripcion" class="form-control" placeholder="cesareas" aria-label="cesareas">
    </div>
    <div class="col">
      <label for="motivoConsulta">¿***# ABORTOS***?</label>
      <input type="text" id="abortos" class="form-control" placeholder="abortos" aria-label="abortos">
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">ABORTOS</label>
      <input type="text" id="abortosTranscripcion" class="form-control" placeholder="abortos" aria-label="abortos">
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** # EMBARAZOS ECTOPICOS***?</label>
      <input type="text" id="ectopicos" class="form-control" placeholder="ectopicos" aria-label="ectopicos">
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">ECTOPICOS</label>
      <input type="text" id="ectopicosTranscripcion" class="form-control" placeholder="ectopicos"
        aria-label="ectopicos">
    </div>
    <div class="col">
      <label for="motivoConsulta">¿***# HIJOS VIVOS***?</label>
      <input type="text" id="hijosvivos" class="form-control" placeholder="hijosvivos" aria-label="hijosvivos">
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">HIJOS VIVOS</label>
      <input type="text" id="hijosvivosTranscripcion" class="form-control" placeholder="hijosvivos"
        aria-label="hijosvivos">
    </div>
  </div>

  <div class="row">
    <div class="col-3">
      <label for="motivoConsulta">¿*** # HIJOS MUERTOS***?</label>
      <input type="text" id="ectopicos" class="form-control" placeholder="hijosmuertos" aria-label="hijosmuertos">
    </div>
    <div class="col-3">
      <label for="motivoConsultaTranscripcion">HIJOS MUERTOS</label>
      <input type="text" id="ehijosmuertosTranscripcion" class="form-control" placeholder="hijosmuertos"
        aria-label="hijosmuertos">
    </div>
    <div class="col-6">
      <label for="motivoConsulta">Observaciones</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="observacionesTranscripcion"
        style="height: 100px"></textarea>
    </div>

  </div>

  <div class="row">
    <div class="col-3">
      <label for="motivoConsulta">¿*** Planificación familiar***?</label>
      <select class="form-control choices-single4">
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>
    </div>

    <div class="col-3">
      <label for="motivoConsulta">¿*** Metodo de planificación***?</label>
      <select class="form-control choices-single5">
        <option value='Barrera - Condon Femenino'>Barrera - Condon Femenino</option>
        <option value='Barrera - Condon Masculino'>Barrera - Condon Masculino</option>
        <option value='Dispositivo Intrauterino'>Dispositivo Intrauterino</option>
        <option value='Dispositivo Intrauterino y Barrera'>Dispositivo Intrauterino y Barrera</option>
        <option value='Esterilizacion femenina'>Esterilizacion femenina</option>
        <option value='Esterilizacion femenina y Barrera'>Esterilizacion femenina y Barrera</option>
        <option value='Esterilizacion masculina'>Esterilizacion masculina</option>
        <option value='Esterilizacion masculina y barrera'>Esterilizacion masculina y barrera</option>
        <option value='Implante Subdérmico'>Implante Subdérmico</option>
        <option value='Implante Subdérmico y Barrera'>Implante Subdérmico y Barrera</option>
        <option value='Inyectable combinado - Mensual '>Inyectable combinado - Mensual </option>
        <option value='Inyectable combinado - Mensual y Barrera'>Inyectable combinado - Mensual y Barrera</option>
        <option value='Inyectable solo progestina - Trimestral'>Inyectable solo progestina - Trimestral</option>
        <option value='Inyectable solo progestina - Trimestral y Barrera'>Inyectable solo progestina - Trimestral y
          Barrera</option>
        <option value='NO APLICA '>NO APLICA </option>
        <option value='Oral combinado'>Oral combinado</option>
        <option value='Oral Combinado y Barrera'>Oral Combinado y Barrera</option>
        <option value='Oral solo progestina'>Oral solo progestina</option>
        <option value='Oral solo progestina y Barrera'>Oral solo progestina y Barrera</option>
        <option value='Pildora Anticonceptiva de emergencia'>Pildora Anticonceptiva de emergencia</option>
        <option value='Pildora Anticonceptiva de emergencia y Barrera'>Pildora Anticonceptiva de emergencia y Barrera
        </option>
      </select>
    </div>

    <div class="col-3">
      <label for="motivoConsulta">¿*** Tiene otros antecedentes***?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="otrosantecedentes"
        style="height: 100px"></textarea>
    </div>

    <div class="col-3">
      <label for="motivoConsulta">Otros antecedentes</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="otrosantecedentesTranscripcion"
        style="height: 100px"></textarea>
    </div>

  </div>


  <div class="row">
  <label for="anamnesis" class="form-label"><strong>Antecedentes familiares</strong></label>
    <div class="col">
      <label for="motivoConsulta">¿ANTECEDENTES DE LA MADRE?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="antecedentesmadre"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="antecedentesmadreTranscripcion">MADRE</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="antecedentesmadreTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ANTECEDENTES DEL PADRE?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="antecedentespadre"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="antecedentespadreTranscripcion">PADRE</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="antecedentespadreTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ANTECEDENTES DE HERMANOS?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="antecedenteshermanos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="antecedenteshermanosTranscripcion"> HERMANOS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="antecedenteshermanosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ANTECEDENTES OTROS?</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="antecedentesotros"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="antecedenteshermanosTranscripcion"> OTROS</label>
      <textarea class="form-control" placeholder="Leave a comment here" id="antecedentesotrosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

</form>