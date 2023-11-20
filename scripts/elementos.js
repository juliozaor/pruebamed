const objetosGpt = [
  /* Anamnesis */
  {
    principal: 'motivoConsulta',
    procesado: 'motivoConsultaTranscripcion',
    frases: ['motivo de consulta', 'motivo de la consulta', 'cuénteme porque viene a consulta'],
    gtp:true
  },  
  {
    principal: 'patologicos',
    procesado: 'patologicosTranscripcion',
    frases: ['sufre de alguna enfermedad', 'sufre alguna enfermedad', 'patológicos'],
    gtp:true
  },
  {
    principal: 'traumaticos',
    procesado: 'traumaticosTranscripcion',
    frases: ['se ha fracturado o ha sufrido algún golpe fuerte', 'ha sufrido algún golpe fuerte', 'se ha fracturado','traumaticos'],
    gtp:true
  },
  {
    principal: 'quirurgicos',
    procesado: 'quirurgicosTranscripcion',
    frases: ['alguna vez ha tenido una operación o cirugía', 'alguna vez ha tenido una operación', 'quirurgicos'],
    gtp:true
  },
  {
    principal: 'alergicos',
    procesado: 'alergicosTranscripcion',
    frases: ['es alérgico a algún medicamento', 'sufre de alergias', 'alergicos', 'es alérgico algún medicamento'],
    gtp:true
  },
  {
    principal: 'toxicologicos',
    procesado: 'toxicologicosTranscripcion',
    frases: ['alguna vez se ha intoxicado con algún medicamento comida o sustancia', 'alguna vez se ha intoxicado', 'toxicologicos'],
    gtp:true
  },
  {
    principal: 'farmacologicos',
    procesado: 'farmacologicosTranscripcion',
    frases: ['consume algún fármaco', 'consume drogas', 'farmacologicos'],
    gtp:true
  },
  {
    principal: 'inmunologicos',
    procesado: 'inmunologicosTranscripcion',
    frases: ['tiene alguna enfermedad del sistema inmune', 'inmunologicos'],
    gtp:true
  },
  {
    principal: 'ocupacional',
    procesado: 'ocupacionalTranscripcion',
    frases: ['tiene alguna enfermedad ocupacional', 'ocupacional'],
    gtp:true
  },

  /* Antecedentes Gineco - obstétricos */

  {
    principal: 'edadmenarquia',
    procesado: 'edadmenarquiaTranscripcion',
    frases: ['cuál es su edad', 'edad menarquia'],
    gtp:false
  },
  {
    principal: 'fum',
    procesado: 'fumTranscripcion',
    frases: ['fecha de ultima menstruación', 'Cuando fue su ultima menstruación'],
    gtp:false
  },
  {
    principal: 'gestaciones',
    procesado: 'gestacionesTranscripcion',
    frases: ['gestaciones'],
    gtp:false
  },
  {
    principal: 'partos',
    procesado: 'partosTranscripcion',
    frases: ['partos'],
    gtp:false
  },
  {
    principal: 'cesareas',
    procesado: 'cesareasTranscripcion',
    frases: ['cesáreas'],
    gtp:false
  },
  {
    principal: 'abortos',
    procesado: 'abortosTranscripcion',
    frases: ['abortos', 'número de abortos'],
    gtp:false
  },
  {
    principal: 'ectopicos',
    procesado: 'ectopicosTranscripcion',
    frases: ['embarazos ectópicos'],
    gtp:false
  },
  {
    principal: 'ectopicos',
    procesado: 'ectopicosTranscripcion',
    frases: ['embarazos ectópicos', 'ectopicos'],
    gtp:false
  },
  {
    principal: 'hijosvivos',
    procesado: 'hijosvivosTranscripcion',
    frases: ['hijos vivos', 'número de hijos vivos', 'Cuantos hijos vivos tiene'],
    gtp:false
  },
  {
    principal: 'hijosmuertos',
    procesado: 'hijosmuertosTranscripcion',
    frases: ['hijos muertos', 'número de hijos muertos'],
    gtp:false
  },
  {
    principal: 'observaciones',
    procesado: '',
    frases: ['observaciones'],
    gtp:false
  },
  {
    principal: 'otrosantecedentes',
    procesado: 'otrosantecedentesTranscripcion',
    frases: ['tiene otros antecedentes'],
    gtp:false
  },

/* Antecedentes familiares */
  {
    principal: 'antecedentesmadre',
    procesado: 'antecedentesmadreTranscripcion',
    frases: ['antecedentes de la madre'],
    gtp:true
  },
  {
    principal: 'antecedentespadre',
    procesado: 'antecedentespadreTranscripcion',
    frases: ['antecedentes del padre'],
    gtp:true
  },
  {
    principal: 'antecedenteshermanos',
    procesado: 'antecedenteshermanosTranscripcion',
    frases: ['antecedentes de hermanos'],
    gtp:true
  },
  {
    principal: 'antecedentesotros',
    procesado: 'antecedentesotrosTranscripcion',
    frases: ['antecedentes otros'],
    gtp:true
  }
/* Revisión por sistemas */
  ,
  {
    principal: 'cabeza',
    procesado: '',
    frases: ['cabeza'],
    gtp:false
  },
  {
    principal: 'organossentidos',
    procesado: '',
    frases: ['órganos de los sentidos'],
    gtp:false
  },
  {
    principal: 'cuello',
    procesado: '',
    frases: ['cuello'],
    gtp:false
  },
  {
    principal: 'cardiopulmonar',
    procesado: '',
    frases: ['cardio pulmonar'],
    gtp:false
  },
  {
    principal: 'mamas',
    procesado: '',
    frases: ['mamas'],
    gtp:false
  },
  {
    principal: 'gastrointestinal',
    procesado: '',
    frases: ['gastro intestinal'],
    gtp:false
  },
  {
    principal: 'gastrourinario',
    procesado: '',
    frases: ['gastro urinario'],
    gtp:false
  },
  {
    principal: 'osteomuscular',
    procesado: '',
    frases: ['osteomuscular'],
    gtp:false
  },
  {
    principal: 'neurologico',
    procesado: '',
    frases: ['neurológico'],
    gtp:false
  },
  {
    principal: 'vascularperiferico',
    procesado: '',
    frases: ['vascular periférico'],
    gtp:false
  },
  {
    principal: 'pielfaneras',
    procesado: '',
    frases: ['piel y faneras'],
    gtp:false
  }

 /* Examen Fisico - Signos Vitales */
  ,
  {
    principal: 'presionartsis',
    procesado: '',
    frases: ['presión arterial sistólica'],
    gtp:false
  },
  {
    principal: 'presionartdia',
    procesado: '',
    frases: ['presión arterial diastólica'],
    gtp:false
  },
  {
    principal: 'frecuenciacardiaca',
    procesado: '',
    frases: ['frecuencia cardiaca'],
    gtp:false
  },
  {
    principal: 'frecuenciarespiratoria',
    procesado: '',
    frases: ['frecuencia respiratoria'],
    gtp:false
  },
  {
    principal: 'temperaturacorporal',
    procesado: '',
    frases: ['temperatura corporal'],
    gtp:false
  },
  {
    principal: 'pesokg',
    procesado: '',
    frases: ['peso'],
    gtp:false
  },
  {
    principal: 'frecuenciacardiaca',
    procesado: '',
    frases: ['talla'],
    gtp:false
  },
  {
    principal: 'imc',
    procesado: '',
  frases: ['imc', 'índice de masa corporal'],
    gtp:false
  }

  /* Examen Fisico - Exploración física */
  ,
  {
    principal: 'estadogeneral',
    procesado: '',
    frases: ['estado general'],
    gtp:false
  },
  {
    principal: 'cabeza2',
    procesado: '',
    frases: ['cabeza dos'],
    gtp:false
  },
  {
    principal: 'organossentidos2',
    procesado: '',
    frases: ['órganos de los sentidos dos'],
    gtp:false
  },
  {
    principal: 'cuello2',
    procesado: '',
    frases: ['cuello dos'],
    gtp:false
  },
  {
    principal: 'cardiopulmonar2',
    procesado: '',
    frases: ['cardio pulmonar dos'],
    gtp:false
  },
  {
    principal: 'toraxmamas',
    procesado: '',
    frases: ['tórax'],
    gtp:false
  },
  {
    principal: 'abdomen',
    procesado: '',
    frases: ['abdomen'],
    gtp:false
  },
  {
    principal: 'genitourinario',
    procesado: '',
    frases: ['genitourinario'],
    gtp:false
  },
  {
    principal: 'osteomuscular2',
    procesado: '',
    frases: ['osteomuscular dos'],
    gtp:false
  },
  {
    principal: 'neurologico2',
    procesado: '',
    frases: ['neurológico dos'],
    gtp:false
  },
  {
    principal: 'vascularperiferico2',
    procesado: '',
    frases: ['vascular periférico dos'],
    gtp:false
  },
  {
    principal: 'pielfaneras2',
    procesado: '',
    frases: ['piel y faneras dos'],
    gtp:false
  },{
    principal: 'otroshallazgos',
    procesado: '',
    frases: ['otros hallazgos'],
    gtp:false
  }

  /* Intervenciones */
  ,{
    principal: 'analisisplanmanejo',
    procesado: '',
    frases: ['análisis y plan de manejo'],
    gtp:false
  },{
    principal: 'recomendaciones',
    procesado: '',
    frases: ['recomendaciones'],
    gtp:false
  },{
    principal: 'motivoremision',
    procesado: '',
    frases: ['motivo de remisión'],
    gtp:false
  },{
    principal: 'especialidad',
    procesado: '',
    frases: ['especialidad'],
    gtp:false
  }

];
