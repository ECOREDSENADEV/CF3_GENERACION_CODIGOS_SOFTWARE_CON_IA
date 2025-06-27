<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Fundamentos de programación estructurada y herramientas de desarrollo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer los conocimientos relacionados con programación estructurada y herramientas de desarrollo',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función de un editor de código como <em>Visual Studio Code</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dibujar gráficos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Navegar por internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Escribir, editar y depurar código fuente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reproducir música.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de <em>software</em> es <em>Visual Studio Code</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Privativo y de pago.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libre y de pago.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Libre y de pago.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivo para <em>macOS</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes NO es una estructura básica de la programación estructurada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Secuencia',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Repetición',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inteligencia artificial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Selección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué salida produce el siguiente código? x = 5; y = 3; print(x + y)',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '53.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '8.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'x + y.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Error.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal ventaja de la programación estructurada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hace que el código sea más largo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite copiar y pegar más fácilmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hace que el programa funcione más lento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Facilita la lectura, mantenimiento y reutilización del código.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué es una estructura de control en programación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una forma de organizar el código fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de herramientas para hacer pruebas de <em>software</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un tipo de archivo que contiene datos estructurados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una instrucción que permite modificar el flujo de ejecución del programa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué permite hacer el sistema de extensiones en VS Code?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Agregar funciones nuevas según el lenguaje o herramienta usada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejorar los gráficos del editor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instalar videojuegos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar el sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué es un editor de código fuente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un programa especializado que permite escribir y editar código fuente, ofreciendo funciones que facilitan la programación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un componente físico del computador encargado de ejecutar programas automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un lenguaje de programación utilizado para desarrollar aplicaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El proceso de traducir código fuente a lenguaje máquina (compilación).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál de los siguientes no es un editor de código fuente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Visual Studio Code</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sublime Text.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Microsoft Word.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Atom.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué es la programación estructurada?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un lenguaje de programación específico que solo se utilizó en la década de 1980 para programar sistemas antiguos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una técnica de encriptación de datos basada en algoritmos de estructura secuencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un método de inteligencia artificial para generar automáticamente la estructura de un programa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un estilo o paradigma de programación que utiliza únicamente estructuras de control básicas para crear programas más claros, modulares y fáciles de mantener.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
