export default {
  global: {
    Name:
      'Fundamentos de programación estructurada y herramientas de desarrollo',
    Description:
      'Este componente formativo está orientado al reconocimiento, la configuración y el uso eficiente de los editores de código fuente como herramienta fundamental para el desarrollo de software, aplicando la programación estructurada. Se exploran conceptos claves como la estructura de la interfaz de los editores, sus funcionalidades básicas o la configuración del entorno de desarrollo. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Editor de código Fuente ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Editores populares',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Interfaz y estructura ',
            hash: 't_1_4',
          },
          {
            numero: '1.4',
            titulo: 'Instalación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Configuración del entorno de trabajo',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Uso del terminal integrado',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Programación estructurada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Estructuras',
            hash: 't_2_4',
          },
          {
            numero: '2.4',
            titulo: 'Funciones y modularidad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Ejemplos',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Editor de código Fuente ',
      referencia:
        'Moure, M. by B. [@mouredev]. (2023). Las 15 MEJORES EXTENSIONES para VSCODE. [Archivo de video] Youtube.  ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=lv88bCi7eyg ',
    },
    {
      tema: 'Editor de código Fuente ',
      referencia:
        'Programador X. (2023). Visual Studio Code: Tutorial (curso completo de VSCode). [Archivo de video] Youtube.  ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=FzRGSlhQIyY ',
    },
    {
      tema: 'Editor de código Fuente ',
      referencia: 'Visual Studio Code - code editing. Redefined. (2025). ',
      tipo: 'Sitio web',
      link: 'https://code.visualstudio.com/ ',
    },
    {
      tema: 'Editor de código Fuente ',
      referencia:
        'Geeky Script [@GeekyScript]. (2025). Cómo instalar Visual Studio Code en Windows 10/11 [Actualización 2025]. [Archivo de video] Youtube.  ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=2Gz-uuQWxu4 ',
    },
    {
      tema: 'Editor de código Fuente ',
      referencia:
        'Roelcode [@roelcode]. (2023). Configura Visual Studio Code para Python y crear proyectos | Paso a paso. [Archivo de video] Youtube.  ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=MVsNOtvwwlw',
    },
    {
      tema: 'Programación estructurada',
      referencia:
        'Contreras, M. [@martincontreras9589]. (2022). Python- programación estructurada. [Archivo de video] Youtube.  ',
      tipo: 'Vídeo',
      link:
        'http://www.youtube.com/playlist?list=PLcRgzfqsp7xpg1NEQ_CZMl7bLdPQlBVFm ',
    },
    {
      tema: 'Programación estructurada',
      referencia:
        'Huet, P. (2024). Fundamentos de Python: Sintaxis, variables y estructuras. Openwebinars.net. [Archivo de video] Youtube.  ',
      tipo: 'Sitio web',
      link:
        'https://openwebinars.net/blog/fundamentos-de-python-sintaxis-variables-y-estructuras-de-control/',
    },
    {
      tema: 'Programación estructurada',
      referencia:
        'Dalto, L. [@soydalto]. (2025). Curso de PYTHON desde CERO (Completo). [Archivo de video] Youtube.  ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=nKPbfIU442g',
    },
  ],
  glosario: [
    {
      termino: 'Código fuente',
      significado:
        'es el conjunto de instrucciones escritas por un programador en un lenguaje de programación legible por humanos. Representa la base de cualquier programa informático y debe ser interpretado o compilado para ejecutarse en una máquina. Su calidad influye directamente en el rendimiento, mantenimiento y seguridad del software.',
    },
    {
      termino: 'Desarrollo de software',
      significado:
        'es el proceso de diseñar, construir, probar y mantener programas informáticos. Involucra diferentes etapas como análisis, codificación, pruebas y documentación, y puede llevarse a cabo de manera individual o colaborativa. Es una actividad clave en la transformación digital y la automatización de procesos.',
    },
    {
      termino: 'Editor de código fuente',
      significado:
        'es una herramienta digital utilizada para escribir, editar y gestionar el código fuente de programas. Ofrece funciones como resaltado de sintaxis, autocompletado, terminal integrada y soporte para múltiples lenguajes. Facilita la productividad y organización del trabajo de los desarrolladores.',
    },
    {
      termino: 'Extensiones',
      significado:
        'son complementos que amplían las funcionalidades de un editor de código fuente. Permiten integrar nuevas herramientas como depuradores, asistentes de inteligencia artificial, soporte para nuevos lenguajes o gestores de versiones. Su uso personaliza y optimiza el entorno de desarrollo.',
    },
    {
      termino: 'Estructuras de control',
      significado:
        'son construcciones que permiten controlar el flujo de un programa mediante secuencia, selección e iteración. Facilitan la toma de decisiones, la repetición de acciones y la ejecución ordenada del código.',
    },
    {
      termino: 'Funciones',
      significado:
        'son bloques de código reutilizables que realizan tareas específicas. Pueden recibir datos (parámetros) y devolver resultados, facilitando la modularización y la organización del programa.',
    },
    {
      termino: 'Interfaz',
      significado:
        'es el conjunto de elementos visuales y de interacción que presenta una herramienta o software al usuario. En los editores de código, incluye menús, barras laterales, terminales y paneles que permiten navegar, configurar y escribir código de forma intuitiva.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'es un conjunto de reglas y sintaxis que los programadores usan para escribir instrucciones que la computadora pueda entender y ejecutar. Ejemplos incluyen Python, Java, C++ y JavaScript.',
    },
    {
      termino: 'Modularidad',
      significado:
        'es un principio que divide el programa en componentes independientes. Mejora la legibilidad, facilita el mantenimiento y permite la reutilización del código.',
    },
    {
      termino: 'Multiplataforma',
      significado:
        'hace referencia a la capacidad de un software para funcionar en diferentes sistemas operativos como Windows, macOS y Linux sin necesidad de modificaciones. Esta característica garantiza mayor compatibilidad, accesibilidad y flexibilidad para los usuarios.',
    },
    {
      termino: 'Programación estructurada',
      significado:
        'es un paradigma que organiza el código utilizando estructuras de control básicas y funciones. Mejora la claridad, la modularidad y la mantenibilidad del software.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'es el conjunto de reglas que define la estructura correcta de las instrucciones en un lenguaje de programación. Una sintaxis incorrecta genera errores de compilación o ejecución. Los editores de código suelen ayudar resaltando errores de sintaxis en tiempo real.',
    },
    {
      termino: 'Terminal',
      significado:
        'es una interfaz de línea de comandos que permite ejecutar instrucciones directamente al sistema operativo o entorno de desarrollo. En editores como Visual Studio Code, la terminal integrada facilita la ejecución de scripts, comandos Git o compilaciones sin salir del entorno de trabajo.',
    },
    {
      termino: 'Visual Studio Code',
      significado:
        'es un editor de código fuente desarrollado por Microsoft, ampliamente utilizado por su velocidad, versatilidad y soporte para múltiples lenguajes. Incluye terminal integrada, extensiones, depuración, control de versiones y herramientas colaborativas. Es gratuito, multiplataforma y de código abierto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Casero, A. (2023). ¿Qué es la modularidad en programación? KeepCoding.io. ',
      link:
        'https://keepcoding.io/blog/que-es-la-modularidad-en-programacion/ ',
    },
    {
      referencia:
        'Id digital school. (2024). ¿Qué es un editor de código? Id digital school.  ',
      link: 'https://iddigitalschool.com/bootcamps/que-es-un-editor-de-codigo/',
    },
    {
      referencia:
        'Maldonado, R. (2024). Descubre la terminal de Visual Studio Code. KeepCoding.  ',
      link: 'https://keepcoding.io/blog/terminal-de-visual-studio-code/',
    },
    {
      referencia: 'Microsoft. (2023). Funciones (C++). Microsoft.com. ',
      link:
        'https://learn.microsoft.com/es-es/cpp/cpp/functions-cpp?view=msvc-170 ',
    },
    {
      referencia:
        'Stack Overflow. (2024). Integrated development environment. Stackoverflow.Co.  ',
      link:
        'https://survey.stackoverflow.co/2024/technology#1-integrated-development-environment',
    },
    {
      referencia:
        'UNIR. (2022). ¿Qué es la programación estructurada? Unir.net. ',
      link:
        'https://unirfp.unir.net/revista/ingenieria-y-tecnologia/programacion-estructurada/ ',
    },
    {
      referencia:
        'UNIR. (2023). 5 editores de código indispensables para todo desarrollador. Unir.net.  ',
      link: 'https://www.unir.net/revista/ingenieria/editores-codigo/',
    },
    {
      referencia:
        'Weisheim, R. (2022). Los 17 mejores editores de código. Hostinger; Tutoriales Hostinger.  ',
      link: 'https://www.hostinger.com/es/tutoriales/editores-de-codigo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
