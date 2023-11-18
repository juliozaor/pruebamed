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
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="motivoConsulta"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">ENFERMEDAD ACTUAL</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="motivoConsultaTranscripcion"
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
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="patologicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">PATOLOGICOS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="patologicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿SE HA FRACTURADO O HA SUFRIDO ALGÚN GOLPE FUERTE?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="traumaticos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">TRAUMATICOS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="traumaticosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ALGUNA VEZ HA TENIDO UNA OPERACIÓN O CIRUGÍA?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="quirurgicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">QUIRURGICOS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="quirurgicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ES ALÉRGICO A ALGÚN MEDICAMENTO?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="alergicos" style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">ALERGICOS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="alergicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ALGUNA VEZ SE HA INTOXICADO (CON ALGÚN MEDICAMENTO COMIDA O SUSTANCIA)?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="toxicologicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">TOXICOLOGICOS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="toxicologicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** CONSUME ALGÚN FARMACO ***?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="farmacologicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">FARMACOLOGICOS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="farmacologicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** TIENE ALGUNA ENFERMADAD DEL SISTEMA INMUNE***?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="inmunologicos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">INMUNOLOGICOS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="inmunologicosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿*** TIENE ALGUNA ENFERMADAD OCUPACIONAL***?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="ocupacional"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsultaTranscripcion">OCUPACIONAL</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="ocupacionalTranscripcion"
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
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="observacionesTranscripcion"
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
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="otrosantecedentes"
        style="height: 100px"></textarea>
    </div>

    <div class="col-3">
      <label for="motivoConsulta">Otros antecedentes</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="otrosantecedentesTranscripcion"
        style="height: 100px"></textarea>
    </div>

  </div>


  <div class="row">
  <label for="anamnesis" class="form-label"><strong>Antecedentes familiares</strong></label>
    <div class="col">
      <label for="motivoConsulta">¿ANTECEDENTES DE LA MADRE?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="antecedentesmadre"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="antecedentesmadreTranscripcion">MADRE</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="antecedentesmadreTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ANTECEDENTES DEL PADRE?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="antecedentespadre"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="antecedentespadreTranscripcion">PADRE</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="antecedentespadreTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ANTECEDENTES DE HERMANOS?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="antecedenteshermanos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="antecedenteshermanosTranscripcion"> HERMANOS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="antecedenteshermanosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="motivoConsulta">¿ANTECEDENTES OTROS?</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="antecedentesotros"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="antecedenteshermanosTranscripcion"> OTROS</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="antecedentesotrosTranscripcion"
        style="height: 100px"></textarea>
    </div>
  </div>

  <div class="row">
  <label for="anamnesis" class="form-label"><strong>Revisión por sistemas </strong></label>
    <div class="col">
      <label for="motivoConsulta">Cabeza</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="cabeza"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Organos de los sentidos</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="organossentidos"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Cuello</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="cuello"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Cardio pulmonar</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="cardiopulmonar"
        style="height: 100px"></textarea>
    </div>    
  </div>

  <div class="row">
 
    <div class="col">
      <label for="motivoConsulta">Cabeza</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="cabeza"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Gastro intestinal</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="gastrointestinal"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Gastro unirario</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="gastrourinario"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Osteo muscular</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="osteomuscular"
        style="height: 100px"></textarea>
    </div>    
  </div>

  <div class="row">
 
    <div class="col-6">
      <label for="motivoConsulta">Neurologico</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="neurologico"
        style="height: 100px"></textarea>
    </div>
    <div class="col-3">
      <label for="motivoConsulta">Vascular perifierico</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="vascularperiferico"
        style="height: 100px"></textarea>
    </div>
    <div class="col-3">
      <label for="motivoConsulta">Piel y faneras</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="pielfaneras"
        style="height: 100px"></textarea>
    </div>
       
  </div>

  <div class="row">
    <label for="anamnesis" class="form-label"><strong>Examen Fisico</strong></label>
    <label for="anamnesis" class="form-label">
      <h6>Signos Vitales</h6>
    </label>
    <div class="col">
      <label for="motivoConsulta">Presión arterial sistólica mmhg</label>
      <input type="text" id="presionartsis" class="form-control" placeholder="Presión arterial sistólica mmhg"
        aria-label="Presión arterial sistólica mmhg">
    </div>
    <div class="col">
      <label for="motivoConsulta">Presión arterial diastólica mmhg</label>
      <input type="text" id="presionartdia" class="form-control" placeholder="Presión arterial diastólica mmhg"
        aria-label="Presión arterial diastólica mmhg">
    </div>
    <div class="col">
      <label for="motivoConsulta">Frecuencia cardiaca /min</label>
      <input type="text" id="frecuenciacardiaca" class="form-control" placeholder="Frecuencia cardiaca /min"
        aria-label="Frecuencia cardiaca /min">
    </div>
    <div class="col">
      <label for="motivoConsulta">Frecuencia respiratorio /min</label>
      <input type="text" id="frecuenciarespiratoria" class="form-control" placeholder="Frecuencia respiratorio /min"
        aria-label="Frecuencia respiratorio /min">
    </div>  
</div>
<div class="row">
    <div class="col">
      <label for="motivoConsulta">Temperatura corporal °C</label>
      <input type="text" id="temperaturacorporal" class="form-control" placeholder="Temperatura corporal °C"
        aria-label="Temperatura corporal °C">
    </div>
    <div class="col">
      <label for="motivoConsulta">Peso Kg</label>
      <input type="text" id="pesokg" class="form-control" placeholder="Peso Kg"
        aria-label="Peso Kg">
    </div>
    <div class="col">
      <label for="motivoConsulta">Talla Mtrs</label>
      <input type="text" id="frecuenciacardiaca" class="form-control" placeholder="Talla Mtrs"
        aria-label="Talla Mtrs">
    </div>
    <div class="col">
      <label for="motivoConsulta">IMC</label>
      <input type="text" id="imc" class="form-control" placeholder="IMC"
        aria-label="IMC">
    </div>  
</div>

<div class="row">
<label for="anamnesis" class="form-label">
      <h6>Exploración física</h6>
    </label>
    <div class="col-6">
      <label for="motivoConsulta">Estado general</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="estadogeneral"
        style="height: 100px"></textarea>
    </div>
    <div class="col-3">
      <label for="motivoConsulta">Cabeza</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="cabeza2"
        style="height: 100px"></textarea>
    </div>
    <div class="col-3">
      <label for="motivoConsulta">Organos de los sentidos</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="organossentidos2"
        style="height: 100px"></textarea>
    </div>
       
  </div>

  <div class="row">
   
    <div class="col">
      <label for="motivoConsulta">Cuello2</label>
       <textarea class="form-control" placeholder="Deje un comentario aquí" id="cuello2"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Cardio pulmonar</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="cardiopulmonar"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Torax / mamas</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="toraxmamas"
        style="height: 100px"></textarea>
    </div>
    <div class="col">
      <label for="motivoConsulta">Abdomen</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="abdomen"
        style="height: 100px"></textarea>
    </div>  
</div>

<div class="row">
   
   <div class="col">
     <label for="motivoConsulta">Genitourinario</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="genitourinario"
       style="height: 100px"></textarea>
   </div>
   <div class="col">
     <label for="motivoConsulta">Osteomuscular</label>
     <textarea class="form-control" placeholder="Deje un comentario aquí" id="Osteomuscular"
       style="height: 100px"></textarea>
   </div>
   <div class="col">
     <label for="motivoConsulta">Neurológico</label>
     <textarea class="form-control" placeholder="Deje un comentario aquí" id="neurologico"
       style="height: 100px"></textarea>
   </div>
   <div class="col">
     <label for="motivoConsulta">Vascular periferico</label>
     <textarea class="form-control" placeholder="Deje un comentario aquí" id="vascularperiferico"
       style="height: 100px"></textarea>
   </div>  
</div>

<div class="row">
   
   <div class="col">
     <label for="motivoConsulta">Piel y faneras</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="pielfaneras2"
       style="height: 100px"></textarea>
   </div>
   <div class="col">
     <label for="motivoConsulta">Otros Hallazgos</label>
     <textarea class="form-control" placeholder="Deje un comentario aquí" id="otroshallazgos"
       style="height: 100px"></textarea>
   </div>
  
</div>

<div class="row">
<label for="anamnesis" class="form-label">
      <h6>Intervenciones</h6>
    </label>
   <div class="col">
     <label for="motivoConsulta">Análisis y plan de manejo</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="analisisplanmanejo"
       style="height: 100px"></textarea>
   </div>
   <div class="col">
     <label for="motivoConsulta">Recomendaciones</label>
     <textarea class="form-control" placeholder="Deje un comentario aquí" id="recomendaciones"
       style="height: 100px"></textarea>
   </div>
  
</div>



<div class="row">
<div class="col-6">
      <label for="motivoConsulta">¿Remitido?</label>
      <select class="form-control choices-single6">
        <option value="Si">Si</option>
        <option value="No" selected>No</option>
      </select>
    </div>
   <div class="col-3">
     <label for="motivoConsulta">Motivo de remisión</label>
      <textarea class="form-control" placeholder="Deje un comentario aquí" id="motivoremision"
       style="height: 100px"></textarea>
   </div>
   <div class="col-3">
     <label for="motivoConsulta">Especialidad</label>
     <textarea class="form-control" placeholder="Deje un comentario aquí" id="especialidad"
       style="height: 100px"></textarea>
   </div>
  
</div>

</form>