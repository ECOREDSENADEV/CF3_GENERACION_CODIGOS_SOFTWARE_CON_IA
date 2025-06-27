<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Editor de código fuente 
    
    div.bg-color-2.p-4
      .row
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema1/1.svg", data-aos="zoom-in")
        .col-lg-7
          .bloque-texto-d.color-primario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              p.mb-0 El editor de código fuente es una herramienta utilizada para escribir, corregir, modificar y gestionar código en distintos lenguajes de programación. Su uso resulta fundamental en el desarrollo de <em>software</em>, ya que permite crear aplicaciones y programas para entornos de escritorio, móviles o web. Además, facilita la depuración de errores, promueve el trabajo colaborativo —especialmente al integrarse con sistemas de control de versiones— y contribuye a una mayor organización en el proceso de desarrollo.
              i.fas.fa-quote-right
            .bloque-texto-d__autor.text-white 
              .h5.mb-0 Id Digital School, 2024
    
    div.bg-color-3.p-4.mb-5
      .row
        .col-lg-5.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/temas/tema1/2.svg", data-aos="zoom-in")
        .col-lg-7.order-lg-1
          .bloque-texto-d.color-primario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              p.mb-0 Es un programa diseñado para redactar y editar código, ofreciendo funciones que optimizan el trabajo del programador, tales como autocompletado, resaltado de sintaxis e indentación automática. Suele consumir pocos recursos del sistema, y su disponibilidad varía según el sistema operativo y el modelo de licenciamiento (gratuito o de pago). La elección del editor depende en gran medida de las preferencias personales del desarrollador.
              i.fas.fa-quote-right
            .bloque-texto-d__autor.text-white 
              .h5.mb-0 UNIR, 2023
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/3.svg", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-start.mb-3
          .col-lg-auto
            img(src="@/assets/curso/temas/tema1/4.svg", style="max-width: 190px").mx-auto
          .col-lg
            p.mb-0 Se trata, en esencia, de una herramienta especializada en la edición y mantenimiento del código fuente en uno o varios lenguajes de programación. A diferencia de los editores de texto convencionales, los editores de código están diseñados para optimizar el trabajo del programador mediante características como navegación por la estructura del proyecto, autocompletado inteligente, detección temprana de errores, entre otras funcionalidades.
    
        .bg-color-4.p-4.tarjeta(data-aos="fade-left")
          p.mb-0 Pueden funcionar de manera independiente o integrarse dentro de un entorno de desarrollo integrado (IDE). Su correcta elección influye directamente en la productividad y en la calidad del producto final. Entre los más populares se encuentran <em>Visual Studio Code</em>, Sublime Text, Vim e IntelliJ IDEA. En el flujo de trabajo actual, el editor de código fuente se ha convertido en una herramienta indispensable, permitiendo centralizar el diseño, la construcción y la evolución del <em>software</em> con mayor organización y control.
    
    p.mb-5 Dentro de las principales ventajas por las cuales se les recomienda a los programadores utilizar un buen editor de código fuente están (Id digital school, 2024): 

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Resaltado de sintaxis")
        .row.align-items-center.p-4
          .col-md-6.mb-4.mb-md-0
            h4 Resaltado de sintaxis
            p.mb-0 Facilita la identificación de la estructura del código y la detección de errores sintácticos mediante el uso de colores que diferencian palabras clave, funciones, variables, entre otros.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Autocompletado")
        .row.align-items-center.p-4
          .col-md-6.mb-4.mb-md-0
            h4 Autocompletado
            p.mb-0 Ayuda en la escritura del código al sugerir automáticamente palabras clave, variables, funciones y estructuras comunes, según el lenguaje de programación utilizado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Depuración integrada")
        .row.align-items-center.p-4
          .col-md-6.mb-4.mb-md-0
            h4 Depuración integrada
            p.mb-0 Permite identificar y corregir errores directamente desde el editor, con funciones como puntos de interrupción, ejecución paso a paso y seguimiento de variables, sin necesidad de herramientas externas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Control de versiones")
        .row.align-items-center.p-4
          .col-md-6.mb-4.mb-md-0
            h4 Control de versiones
            p.mb-0 Integra herramientas como Git para gestionar cambios en el código, hacer seguimiento del historial y facilitar la colaboración entre desarrolladores.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Extensibilidad")
        .row.align-items-center.p-4
          .col-md-6.mb-4.mb-md-0
            h4 Extensibilidad
            p.mb-0 Admite la instalación de extensiones o <em>plugins</em> para personalizar y ampliar las funcionalidades del editor, adaptándolo a diferentes lenguajes, <em>frameworks </em>o flujos de trabajo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Importancia
    
    .row.mb-5
      .col-lg-1.mb-3.mb-lg-0
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/10.svg", data-aos="zoom-in")
      .col-lg-11
        p(data-aos="fade-left") Los editores de código fuente son importantes, ya que en ellos se centraliza el trabajo del desarrollo de <em>software</em>, convirtiéndose en la herramienta principal, en donde los programadores escriben, organizan, administran y mantienen el código que da vida a los programas, sistemas y demás plataformas digitales. Se puede decir que relevancia estaba basada en aspectos claves cómo:
    
    .bg-full-width-2.bg-fondo-2
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white.tarjeta.p-5
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Eficiencia en la programación
              p.mb-0 Funcionalidades como la navegación rápida por archivos, autocompletado, atajos de teclado y formateo automático aceleran la escritura del código y reducen errores.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Prevención y detección de errores
              p.mb-0 El resaltado de sintaxis permite identificar errores comunes como palabras mal escritas, paréntesis sin cerrar o estructuras mal formadas durante la escritura.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/11.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Organización del código
              p.mb-0 Permite estructurar archivos y carpetas, aplicar indentación automática y trabajar con múltiples lenguajes, lo que facilita el mantenimiento del <em>software</em>.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/12.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Personalización y extensibilidad
              p.mb-0 Los editores modernos admiten extensiones, configuraciones y temas que adaptan el entorno a las necesidades del programador.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/13.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Integración con otras herramientas
              p.mb-0 Se pueden integrar con sistemas de control de versiones, depuradores, terminales, plataformas en la nube y gestores de paquetes, centralizando el flujo de trabajo.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/14.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Compatibilidad y portabilidad
              p.mb-0 La mayoría de los editores son multiplataforma, lo que permite trabajar en diferentes sistemas operativos sin pérdida de configuración o rendimiento.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/15.png', alt='Texto que describa la imagen')
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Editores populares
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/16.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") A la hora de elegir un buen editor de código para trabajar hay que tener en cuenta el tipo de proyecto en que se está trabajando o se desea desarrollar, los objetivos de programación que se están persiguiendo y el nivel de habilidad que se ha logrado como programador, con el fin de trabajar con el editor que más se ajuste a las necesidades. A la hora de elegir un editor, se recomienda tener en cuenta puntos como rendimiento optimizado, características del editor, funciones de navegación, código de referencias y que tan personalizable es (Weisheim, 2022).  A continuación se comparte una lista de editores, donde podrán encontrar un alista de herramientas para facilitar el trabajo de la programación:
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1
      span Lista de editores de código fuente
    .bg-full-width.bg-color-6
      .p-4.p-md-5
        .tabla-a.color-acento-botones.mb-5 
          table
            caption.bg-color-white Nota. Elaboración propia con datos de (Weisheim, 2022),  (UNIR, 2023)
            thead
              tr
                th.bg-color-5 Nombre
                th.bg-color-5 Licencia
                th.bg-color-5 Lenguajes compatibles
                th.bg-color-5 Plataformas compatibles
                th.bg-color-5 Link de descarga
            tbody.bg-color-white
              tr
                td <em>Visual Studio Code</em>
                td Gratuita
                td <em>Java</em>Script, TypeScript, <em>Python</em>, <em>C++</em>, entre otros
                td <em>macOS</em>, <em>Windows</em>, Linux (Debian, Ubuntu, Red Hat, Fedora, SUSE)
                td: a(href="https://code.visualstudio.com/" target="_blank") 
                      i.fas.fa-external-link-alt 
                
              tr
                td Sublime Text
                td Freemium (99 USD por licencia)
                td <em>C++</em>, <em>Python</em>, PHP, Rails y más
                td <em>Windows</em>, Linux, <em>macOS</em>
                td: a(href="https://www.sublimetext.com/" target="_blank")
                      i.fas.fa-external-link-alt 
              tr
                td Atom
                td Gratuita (descontinuado)
                td C, <em>C++</em>, COBOL, HTML, CSS, <em>Java</em>, PHP, Ruby, Scala, SQL
                td <em>Windows</em>, <em>macOS</em>, Linux
                td: a(href="https://github.com/atom/atom/releases" target="_blank")   
                      i.fas.fa-external-link-alt 
              tr
                td Notepad++
                td Gratuita
                td Más de 70 lenguajes como HTML, CSS, <em>Java</em>Script, PHP, XML, <em>C++</em>, Swift
                td <em>Windows</em>, Linux, UNIX
                td: a(href="https://notepad-plus-plus.org/downloads/" target="_blank") 
                      i.fas.fa-external-link-alt 
              tr
                td Vim
                td Gratuita
                td Casi todos los lenguajes
                td Unix, <em>Windows</em>, <em>macOS</em> y más
                td: a(href="https://www.vim.org/download.php" target="_blank") 
                      i.fas.fa-external-link-alt 
              tr
                td NetBeans
                td Gratuita
                td HTML5, <em>C++</em>, <em>Java</em>Script, PHP, <em>Java</em> y más
                td <em>Windows</em>, Linux, <em>macOS</em>, BSD
                td: a(href="https://netbeans.apache.org/download/" target="_blank")   
                      i.fas.fa-external-link-alt 
              tr
                td TextMate
                td Gratuita
                td AppleScript, <em>C++</em>, HTML, CSS, <em>Java</em>, PHP, <em>Python</em>, SQL y más
                td <em>macOS</em>
                td: a(href="https://macromates.com/" target="_blank") 
                      i.fas.fa-external-link-alt 
              tr
                td GNU Emacs
                td Gratuita
                td C, <em>C++</em>, <em>Python</em>, Lisp y más
                td <em>Windows</em>, Linux, <em>macOS</em>, BSD
                td: a(href="https://www.gnu.org/software/emacs/download.html" target="_blank") 
                      i.fas.fa-external-link-alt 
              tr
                td Codeshare.io
                td Gratuita
                td PHP, C#, SCSS, CSS, HTML
                td Navegadores web
                td: a(href="https://codeshare.io/24ejj7" target="_blank") 
                      i.fas.fa-external-link-alt 

        p.mb-5 Basados en la tabla anterior, donde se muestra una variedad de editores, elegir un buen entorno de programación es primordial para la productividad y la experiencia del desarrollador. De ahí que cuando se está comenzando, es bueno conocer sobre los diferentes rankings que se realizan a nivel mundial para ver cómo están posicionadas las herramientas que se utilizan en el campo de la informática, con el fin de estar al día con las tecnologías que se trabajan en el mercado. En ese orden de ideas, la encuesta global de <em>Stack overflow</em>, recopila una gran cantidad de datos, basado en el consenso de miles de profesionales para identificar las más utilizadas en diferentes áreas de la industria. Los resultados del 2024 posicionan al editor <em>Visual Studio Code</em> como líder indiscutible, con una preferencia del 73,6 %, lo que demuestra actualmente su hegemonía.
    
        .row.justify-content-center
          .col-lg-8  
            .titulo-sexto.color-acento-contenido(data-aos="fade-right")
              h5 Figura 1
              span Ranking de editores de código del año 2024
            
            figure
              img(src="@/assets/curso/temas/tema1/17.png", data-aos="zoom-in", alt="Gráfico de barras horizontales sobre popularidad de editores y entornos de desarrollo en el que <em>Visual Studio Code</em> lidera con 73.6%, seguido por Visual Studio, IntelliJ IDEA y Notepad++, y con otras opciones como Vim, Android Studio, PyCharm, JupyterLab, Eclipse, Xcode y Emacs distribuidas en menor proporción. ")
              figcaption Nora. Tomado de <em>Stack overflow</em> (2024).
  
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3	Interfaz y estructura
    
    p.mb-4 Hasta este punto, está bien definido que los editores de código fuente han sido diseñados para facilitar la escritura, lectura y gestión del código. Esto se debe, en parte, a la interfaz y a la estructura del editor, que permiten al programador interactuar de forma más fluida con la herramienta. Es importante tener presente que, aunque existe una amplia variedad de editores, cada uno posee particularidades propias. No obstante, la mayoría comparte ciertos componentes comunes que les otorgan una organización tanto visual como funcional. Entre estos componentes comunes, se destacan los siguientes:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 2
      span Interfaz de <em>Visual Studio Code</em> con sus componentes principales.
    
    figure.mb-5
      img(src="@/assets/curso/temas/tema1/18.png", data-aos="zoom-in", alt="Captura de pantalla de la interfaz de <em>Visual Studio Code</em> con etiquetas que señalan componentes como barra de menú, buscador, panel de extensiones, explorador de archivos, área de edición, minimapa, panel inferior y barra de estado. ")

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/19.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Barra de menú").justify-content-center
            p Ubicada en la parte superior. Contiene funciones como:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Archivo: abrir, guardar, cerrar archivos.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Editar: copiar, pegar, buscar, reemplazar.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Ver: mostrar u ocultar paneles.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Ejecutar / Depurar: iniciar scripts, abrir consola o <em>debugger</em>.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Extensiones / Preferencias: configuración del editor.
          div(titulo="Explorador de archivos (panel lateral)").justify-content-center
            p Permite visualizar y navegar por archivos y carpetas del proyecto.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Crear, modificar o eliminar archivos y carpetas.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Abrir archivos en diferentes pestañas.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Ver la estructura general del proyecto.
          div(titulo="Área de edición (editor de texto)").justify-content-center
            p Espacio principal para escribir el código fuente. Incluye:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Resaltado de sintaxis.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Numeración de líneas.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Plegado de bloques.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Autocompletado y sugerencias.
          div(titulo="Panel de extensiones o <em>plugins</em>").justify-content-center
            p Permite buscar, instalar y gestionar extensiones para ampliar las funciones del editor:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Soporte para nuevos lenguajes.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Integración con bases de datos.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Sistemas de control de versiones.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Herramientas de depuración e inteligencia artificial.
          

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/20.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Consola").justify-content-center
            p Terminal integrada para ejecutar comandos y ver resultados o realizar pruebas sin salir del editor.
          div(titulo="Depurador").justify-content-center
            p Herramienta para:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Establecer puntos de interrupción.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Analizar variables y su comportamiento.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Ejecutar el código paso a paso.
          div(titulo="Barra de estado").justify-content-center
            p Ubicada en la parte inferior. Muestra información contextual como:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Lenguaje activo.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Codificación.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Tabulaciones.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Mensajes del sistema.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-7
                p.mb-0 Estado del proyecto.

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4	Instalación
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/21.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Antes de comenzar a programar o a generar código, es primordial tener a la mano una herramienta que facilite la codificación. <em>Visual Studio Code</em>, también conocido como VS Code, se ha posicionado como el editor de código más popular del mundo del desarrollo de <em>software</em>, gracias a su ligereza, versatilidad y funciones integradas; por ello, en esta sección se trabajará en la instalación de este editor de código, para lo cual, se les invita a ver los pasos a través del:
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. 1
    
    separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5	Configuración del entorno de trabajo     
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/22.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Después de instalado el editor <em>Visual Studio Code</em>, el siguiente paso es realizar los ajustes al entorno de trabajo según las necesidades del desarrollador. Para ello se realizará una configuración básica inicial del editor y del lenguaje de programación de preferencia, el cual para esta ocasión se hará con <em>Python</em>, por ser uno de los lenguajes de programación más utilizados en el mundo y el de mayor crecimiento por el aporte que viene brindando a la inteligencia artificial y a otras tecnologías disruptivas.
        .bg-color-8.tarjeta(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/23.png", style="max-width: 190px").mx-auto
            .col-lg.p-4
              p Dentro de la configuración del editor se puede elegir entre temas claros y oscuros para modificar el color del tema, cambiar el idioma del editor a uno de su preferencia, activar el guardado automático, instalar las extensiones que se necesitan, por ejemplo para trabajar con un lenguaje en particular. Para ello se les invita a ver la configuración para trabajar con el editor:
              a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <em>Visual Studio Code</em> en el Anexo 2.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-9.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema1/24.svg", style="max-width: 190px").mx-auto
            .col-lg
              p Para el desarrollo de los ejercicios se utilizará como lenguaje de programación de apoyo  <em>Python</em>, para lo cual se invita a ver la instalación de este y su configuración en el editor:
              a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <em>Visual Studio Code</em> en el Anexo 3.


    separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Uso del terminal integrado  
    
    .bg-full-width.bg-color-10
      .p-4.p-md-5
        p.mb-5 Muchos de los editores de código incluyen un terminal integrado para que se puedan ejecutar directamente en ellos comandos desde el editor, sin la necesidad de abrir o utilizar una terminal externa. Esto permite acelerar el flujo de trabajo y mejorar la productividad cuando se trabaja a nivel profesional. 

        .row
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/temas/tema1/25.png", data-aos="zoom-in")
          .col-lg-9.orde-1.mb-3.mb-lg-0
            .row.align-items-start.mb-3
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema1/26.svg", style="max-width: 295px").mx-auto
              .col-lg
                p.mb-0 En el caso del editor <em>Visual Studio Code</em>, contiene su propio terminal, lo cual lo hace una herramienta más robusta y autosuficiente para el desarrollo de programas y demás aplicaciones. Esta funcionalidad elimina la incomodes que representa en el programador el estar cambiando entre una ventana y otra, al tener que estar utilizando herramientas externas al momento de necesitar ejecutar comandos, tener que compilar programas, iniciar servidores locales, ejecutar scripts, instalar dependencias o trabajar con sistemas de control de versiones como Git. 
            .bg-color-8.tarjeta.p-4(data-aos="fade-left")
              p(data-aos="fade-left") En el caso de <em>Visual Studio Code</em>, el terminal integrado actúa como una línea de comandos que se encuentra alojada en el editor y que se adapta al sistema operativo con el cual se esté trabajando, lo que agiliza el trabajo al permitir esa interacción fluida entre el código y la consola sin salir del entorno de desarrollo. Este editor permite trabajar con múltiples terminales en paralelo, así mismo elegir diferentes intérpretes de comando como CMD, Bash, o PowerShell, entre otros.
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 3
      span Visualización de terminal integrada en <em>Visual Studio Code</em>.
    
    figure.mb-5
      img(src="@/assets/curso/temas/tema1/27.png", data-aos="zoom-in", alt="Captura de pantalla del terminal en <em>Visual Studio Code</em> que muestra la ejecución de un programa en <em>Python</em> para calcular promedios individuales de estudiantes y el promedio general del grupo, con entradas numéricas y salidas de texto. ")
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
