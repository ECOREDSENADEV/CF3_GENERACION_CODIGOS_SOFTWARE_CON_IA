<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Programación estructurada
    
    .row.mb-5
      .col-lg-1.mb-3.mb-lg-0
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/1.svg", data-aos="zoom-in")
      .col-lg-11
        p(data-aos="fade-left") La programación estructurada es una de las formas de utilizar más utilizadas, sobre todo cuando se inicia en el mundo académico de la programación, y pertenece al paradigma de programación imperativo, cuya finalidad está basada en ir indicando paso a paso cómo resolver un problema. Su enfoque radica en buscar que el código sea sencillo, claro, ordenado y de fácil mantenibilidad, utilizando subrutinas y las estructuras de control (secuencia, selección e iteración): 
    
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          figure.mb-3
            img(src="@/assets/curso/temas/tema2/2.svg", alt="alt").img90.m-auto
          h4.text-center Subrutina
          p.text-center.mb-0 Bloque de código que se puede reutilizar para que desarrolle una tarea específica y pueda ser llamada en un programa desde diferentes partes del mismo, lo cual es de ayuda para mejorar la organización y la modularidad.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          figure.mb-3
            img(src="@/assets/curso/temas/tema2/3.svg", alt="alt").img90.m-auto
          h4.text-center Secuencia
          p.text-center.mb-0 Instrucciones que cumplen con un estricto orden para ejecutarse
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          figure.mb-3
            img(src="@/assets/curso/temas/tema2/4.svg", alt="alt").img90.m-auto
          h4.text-center Selección
          p.text-center.mb-0 Instrucciones para toma de decisiones en el flujo de un programa, basado en la ejecución de diferentes bloques de códigos según las decisiones seleccionadas.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          figure.mb-3
            img(src="@/assets/curso/temas/tema2/5.svg", alt="alt").img90.m-auto
          h4.text-center Iteracción
          p.text-center.mb-0 Instrucciones que se repiten mientras se esté cumpliendo una condición, realizando con ello procesos repetitivos.
    
    .bg-full-width.bg-color-10
      .p-4.p-md-5
        .row.justify-content-center
          .col-lg-10
            div.bg-color-white.p-4
              .row
                .col-lg-3.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/temas/tema2/6.svg", data-aos="zoom-in")
                .col-lg-9
                  .bloque-texto-d.color-primario.p-4
                    .bloque-texto-d__texto.mb-2
                      i.fas.fa-quote-left
                      p.mb-0 Esta forma de programar surge del teorema del programa estructurado de Böhm y Jacopini en el año 1966, y fue apoyada por Dijkstra en 1968, quien promovió la eliminación del uso de instrucciones como <em>goto</em>, porque se tornaban confusas haciendo tediosa la programación; logrando que hoy en día se pueda contar con lenguajes de programación como <em>Java</em>, C, <em>Python</em> y <em>C++</em>, los cuales soportan la programación estructurada.
                      i.fas.fa-quote-right
                    .bloque-texto-d__autor.text-white 
                      .h5.mb-0 UNIR, 2022
    
        separador

        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1	Principios
        
        p.mb-5 Antes de comenzar con la escritura de código, es bueno conocer algunos fundamentos que ayudaran a codificar de manera clara, confiable y organizada; para ello es bueno conocer unos principios básicos en la programación estructurada, que servirán de guía para trabajar en el desarrollo de <em>software</em> con la mejor calidad y adoptando buenas prácticas: 

    .bg-full-width-2.bg-fondo-2
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white.tarjeta.p-5
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Uso de estructuras de control básicas
              p.mb-0 Se deben emplear tres estructuras clave: secuencia, selección (if, switch) e iteración (for, while, do-while) para estructurar adecuadamente un programa.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/7.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Modularización del código
              p.mb-0 El programa debe dividirse en subrutinas, funciones o procedimientos que realicen tareas específicas, facilitando la organización, reutilización y mantenimiento del código.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/8.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Claridad y legibilidad
              p.mb-0 El código debe ser comprensible para cualquier desarrollador. Se recomienda usar nombres descriptivos, comentarios explicativos y una organización ordenada del código.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/9.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Evitar instrucciones de salto incontrolado
              p.mb-0 No se deben usar sentencias como <em>goto</em>, ya que dificultan el seguimiento del flujo y la comprensión del código.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/10.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Diseño descendente
              p.mb-0 El desarrollo debe iniciar con un análisis general del problema, descomponiéndolo en subproblemas que se resuelven mediante módulos, funciones o subrutinas.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/11.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 Prueba y verificación sistemática
              p.mb-0 El código debe permitir una verificación formal y pruebas que confirmen que cumple sus objetivos y que puede corregirse fácilmente si se requieren ajustes.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/12.png', alt='Texto que describa la imagen')
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2	Características
    
    p.mb-5 A continuación, se presenta un  pódcast  que resume las cualidades esenciales de un programa bien estructurado, con énfasis en claridad, modularidad y facilidad de mantenimiento.

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/temas/tema2/14.svg", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        div.bg-color-1.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/tema2/13.svg", data-aos="zoom-in")
            .col-lg-7
              p(data-aos="fade-left").mb-4.bg-color-11 Podcast
      
              TarjetaAudio.color-secundario.bg-color-white.mb-3(
                texto="Fundamentos de la innovación estratégica"
                tiempo
                :audio="require('../assets/curso/podcast/podcast1.mp3')"
              )

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3	Estructuras
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Todo programa escrito bajo el estándar de la programación estructurada sigue una lógica de programación que permite resolver problemas de una forma sistemática y organizada por medio de tres estructuras básicas: secuencia, selección e iteración. El dominar estas tres estructuras les permite a los programadores tener el control del flujo de un programa, tomar decisiones y automatizar los procesos repetitivos; con lo cual llegan a lograr soluciones eficientes. A continuación se ahonda en cada una de estas tres estructuras, con el fin de que se puedan conocer, dominar y aplicar en futuros desarrollos de <em>software</em>: 
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estructura de secuencia

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Representa la estructura de control más básica en la programación estructurada, y su principal función consiste en la ejecución de las instrucciones de un programa paso a paso, línea a línea, en el orden en que se han escrito en el código, en orden descendente, desde el inicio hasta el final del código.
    
        .bg-color-2.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/tema2/17.svg", style="max-width: 169px").mx-auto
            .col-lg
              p Mientras no se utilice una estructura de selección o iteración, cada instrucción se ejecuta de una vez, garantizando con ello un flujo lineal de ejecución, que puede llevar un seguimiento simple y predecible, al que incluso se le pueden realizar fácilmente pruebas para verificar la eficacia del código.
              p.mb-0 Esta estructura representa la base del código, ya que las estructuras de selección e iteración están escritas bajo la base de la estructura de secuencia
    
    p.mb-5 Para conocer como se ve la estructura de secuencia, se comparten unos ejemplos: 

    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Código en <em>Python</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | edad_actual = 25
                  | edad_futura = edad_actual + 5
                  | print("Edad dentro de 5 años:", edad_futura)

          div(titulo="Código en <em>C++</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | #include &lt;iostream&gt;
                  | using namespace std;
                  |
                  | int main() {
                  | &nbsp;&nbsp;&nbsp;&nbsp;int edad_actual = 25;
                  | &nbsp;&nbsp;&nbsp;&nbsp;int edad_futura = edad_actual + 5;
                  | &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Edad dentro de 5 a&ntilde;os: " &lt;&lt; edad_futura &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;return 0;
                  | }

          div(titulo="Código en <em>Java</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | public class Main {
                  | &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int edad_actual = 25;
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int edad_futura = edad_actual + 5;
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Edad dentro de 5 a&ntilde;os: " + edad_futura);
                  | &nbsp;&nbsp;&nbsp;&nbsp;}
                  | }
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estructura de selección
    
    .bg-full-width-2.bg-fondo-3.mb-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            p(data-aos="fade-left") Es una estructura de control que permite que se tomen decisiones mientras el programa esté corriendo. En otras palabras, para cualquier problema planteado, se presentan varios caminos, y de acuerdo a unas condiciones el programa elige un camino, dependiendo del resultado de las condiciones. 
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema2/18.svg" data-aos="zoom-in")
          .col-lg-5.mb-3.mb-lg-0
            .bg-color-12.tarjeta.p-3.h-100(data-aos="fade-left")
              figure.mb-3
                img(src="@/assets/curso/temas/tema2/19.svg" data-aos="zoom-in", style="max-width: 93px")
              p(data-aos="fade-left") A diferencia de la estructura de secuencia, aquí el camino no siempre será lineal, sino que podrá tomar un orden diferente en la ruta. Según la condición lógica, si es verdadera o falsa, se ejecuta una u otra línea o bloque de código.

      p.mb-5 De acuerdo al lenguaje de programación en que se esté trabajando existen unos tipos de selección (pueden variar de un lenguaje a otro), de los cuales se comparten los más usados: 

      .row.justify-content-center
        .col-lg-10
          div.bg-color-3.p-5.p-lg-0.py-lg-5.tarjeta
            .row.justify-content-center
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema2/20.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-13.tarjeta.p-4.mb-3(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto
                      img(src="@/assets/curso/temas/tema2/21.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 <em>If simple</em>
                      p.mb-0 Ejecuta un bloque si y solo si la condición es verdadera. Se ejecuta la condición con una sola acción.
                .bg-color-13.tarjeta.p-4.mb-3(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto
                      img(src="@/assets/curso/temas/tema2/22.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 <em>If-else</em>
                      p.mb-0 Cuando la condición es verdadera ejecuta un bloque; cuando es falsa, ejecuta un bloque diferente. Se usa cuando hay dos caminos alternativos.
                .bg-color-13.tarjeta.p-4.mb-3(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto
                      img(src="@/assets/curso/temas/tema2/23.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 <em>If-elif-else (<em>Python</em>) / else if (<em>C++</em>, <em>Java</em>)</em>
                      p.mb-0 Permite elegir entre varias condiciones. De acuerdo a la que se cumpla, ejecuta un bloque exclusivo. Se emplea cuando hay más de dos condiciones posibles.
                .bg-color-13.tarjeta.p-4.mb-3(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto
                      img(src="@/assets/curso/temas/tema2/24.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 <em>Switch-case (<em>C++</em>, <em>Java</em>)</em>
                      p.mb-0 Maneja múltiples opciones según el valor de una variable, ejecutando el bloque que corresponda. Se recomienda cuando existen opciones fijas, como en un menú.
    
    p.mb-5 Para conocer como se ve la estructura de selección, se comparten unos ejemplos: 
    
    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Código en <em>C++</em> de <em>if simple</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | #include &lt;iostream&gt;
                  | using namespace std;
                  |
                  | int main() {
                  | &nbsp;&nbsp;&nbsp;&nbsp;int numero;
                  | &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Ingrese un n&uacute;mero: ";
                  | &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; numero;
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;if (numero &gt; 0)
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "El n&uacute;mero es positivo." &lt;&lt; endl;
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;return 0;
                  | }
          div(titulo="Código en <em>Java</em> de <em>if else</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | import <em>Java</em>.util.Scanner;
                  |
                  | public class Main {
                  | &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = new Scanner(System.in);
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("Ingrese un n&uacute;mero: ");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int numero = sc.nextInt();
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (numero % 2 == 0) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("El n&uacute;mero es par.");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("El n&uacute;mero es impar.");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                  | &nbsp;&nbsp;&nbsp;&nbsp;}
                  | }
          div(titulo="Código en <em>C++</em> de <em>else if</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | #include &lt;iostream&gt;
                  | using namespace std;
                  |
                  | int main() {
                  | &nbsp;&nbsp;&nbsp;&nbsp;float nota;
                  | &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Ingrese la nota: ";
                  | &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; nota;
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;if (nota &gt;= 4.5)
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Excelente" &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;else if (nota &gt;= 3.5)
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Bueno" &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;else if (nota &gt;= 3.0)
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Aceptable" &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;else
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Reprobado" &lt;&lt; endl;
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;return 0;
                  | }
          div(titulo="Código en <em>Java</em> de <em>Switch-case</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | import <em>Java</em>.util.Scanner;
                  |
                  | public class Main {
                  | &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = new Scanner(System.in);
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("1. Sumar\\n2. Restar\\n3. Salir");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("Ingrese una opci&oacute;n: ");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int opcion = sc.nextInt();
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;switch (opcion) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 1:
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Has elegido Sumar.");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 2:
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Has elegido Restar.");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case 3:
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Has elegido Salir.");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default:
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Opci&oacute;n no v&aacute;lida.");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
                  | &nbsp;&nbsp;&nbsp;&nbsp;}
                  | }
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estructura de iteración

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/26.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La iteración, también conocida como ciclo o bucle, es una estructura de control utilizada para automatizar procesos repetitivos, y su finalidad es permitir la repetición de un bloque de instrucciones mientras se esté cumpliendo una condición lógica. Cuando la condición deja de cumplirse, el flujo del programa sale del bucle y sigue con el resto de instrucciones si las hay, de lo contrario finaliza. La iteración es un proceso clave de mucha ayuda para la solución de problemas donde se hace necesaria la repetición de acciones, por ejemplo:
    
        .bg-color-3.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.order-2
              img(src="@/assets/curso/temas/tema2/25.svg", style="max-width: 390px").mx-auto
            .col-lg.order-1
              ul.lista-ul--color
                li.d-flex.bg-color-13.p-2.tarjeta
                  i.fas.fa-check-circle.bg-color-14
                  p.mb-0 Procesar listas o series de datos.
                li.d-flex.bg-color-13.p-2.tarjeta
                  i.fas.fa-check-circle.bg-color-14
                  p.mb-0 Repetir operaciones matemáticas.
                li.d-flex.bg-color-13.p-2.tarjeta
                  i.fas.fa-check-circle.bg-color-14
                  p.mb-0 Crear menús interactivos.
                li.d-flex.bg-color-13.p-2.tarjeta
                  i.fas.fa-check-circle.bg-color-14
                  p.mb-0 Realizar cálculos acumulativos.
    
    p.mb-5 De acuerdo al lenguaje de programación en que se esté trabajando existen unos tipos de iteración (pueden variar de un lenguaje a otro), de los cuales se comparten los más usados: 
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--yelow(data-aos="flip-left")
          figure.mb-3
            img(src="@/assets/curso/temas/tema2/27.svg", alt="alt").img90.m-auto
          h4.text-center <em>While</em>
          p.text-center.mb-0 La condición se evalúa antes de cada repetición y, si se cumple, el bloque de código se repite mientras siga siendo verdadera. Se puede usar cuando no se sabe cuántas veces se ejecutarán las instrucciones.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--yelow(data-aos="flip-left")
          figure.mb-3
            img(src="@/assets/curso/temas/tema2/28.svg", alt="alt").img90.m-auto
          h4.text-center <em>Do-while (<em>C++</em>, <em>Java</em>)</em>
          p.text-center.mb-0 Funciona como el <em>while</em>, pero la condición se evalúa después de la primera ejecución, lo que garantiza que el bloque se ejecuta al menos una vez. Se utiliza cuando se requiere que las instrucciones se realicen al menos una vez.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--yelow(data-aos="flip-left")
          figure.mb-3
            img(src="@/assets/curso/temas/tema2/29.svg", alt="alt").img90.m-auto
          h4.text-center <em>For</em>
          p.text-center.mb-0 La repetición ocurre un número determinado de veces, controlado por un contador. Se usa cuando se conoce de antemano cuántas veces se desea repetir la acción.
    
    p.mb-5 Para conocer como se ve la estructura de selección, analice los siguientes ejemplos: 
    
    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Código en <em>C++</em> de <em>while</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | #include &lt;iostream&gt;
                  | using namespace std;
                  |
                  | int main() {
                  | &nbsp;&nbsp;&nbsp;&nbsp;int i = 1;
                  | &nbsp;&nbsp;&nbsp;&nbsp;while (i &lt;= 5) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "N&uacute;mero: " &lt;&lt; i &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;
                  | &nbsp;&nbsp;&nbsp;&nbsp;}
                  | &nbsp;&nbsp;&nbsp;&nbsp;return 0;
                  | }

          div(titulo="Código en <em>Java</em> de do <em>while</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | import <em>Java</em>.util.Scanner;
                  |
                  | public class Main {
                  | &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = new Scanner(System.in);
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int opcion;
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("1. Opci&oacute;n A\\n2. Opci&oacute;n B\\n3. Salir");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("Elija una opci&oacute;n: ");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opcion = sc.nextInt();
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} while (opcion != 3);
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Programa finalizado.");
                  | &nbsp;&nbsp;&nbsp;&nbsp;}
                  | }

          div(titulo="Código en <em>C++</em> de else if").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | #include &lt;iostream&gt;
                  | using namespace std;
                  |
                  | int main() {
                  | &nbsp;&nbsp;&nbsp;&nbsp;float nota;
                  | &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Ingrese la nota: ";
                  | &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; nota;
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;if (nota &gt;= 4.5)
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Excelente" &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;else if (nota &gt;= 3.5)
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Bueno" &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;else if (nota &gt;= 3.0)
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Aceptable" &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;else
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Reprobado" &lt;&lt; endl;
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;return 0;
                  | }

          div(titulo="Código en <em>Python</em> del <em>for</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | suma = 0
                  | for i in range(1, 11):
                  | &nbsp;&nbsp;&nbsp;&nbsp;suma += i
                  | print("La suma es:", suma)
    
    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4	Funciones y modularidad
    
    .row.mb-5
      .col-lg-1.mb-3.mb-lg-0
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/30.svg", data-aos="zoom-in")
      .col-lg-11
        p(data-aos="fade-left") Uno de los principios de la programación estructurada es dividir el código de un programa en partes más pequeñas, que a la vez sean independientes y reutilizables; esto se logra con funciones (conocidas también como subrutinas o procedimientos), las cuales permiten aplicar el principio de modularidad. Cuando se logra entender el concepto de funciones, será más fácil para el programador desarrollar y mantener sus programas. Ahondando en lo conceptos se puede decir que:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Funciones" :icono="require('@/assets/componentes/2.svg')")
        .row.align-items-center.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Funciones
            p Bloque de código que realiza una operación particular dentro de un programa. Puede incluir parámetros de entrada y devolver un valor como salida. Facilitan el encapsulamiento de operaciones comunes en un bloque reutilizable. Se recomienda usar nombres claros y nemotécnicos para identificar fácilmente la función (Microsoft, 2023).
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/31.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Modularidad" :icono="require('@/assets/componentes/3.svg')")
        .row.align-items-center.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Modularidad
            p Práctica de dividir un programa en módulos más pequeños, cada uno con funciones y responsabilidades claras. Esta descomposición permite una mejor gestión, mantenimiento y comprensión del programa, en contraste con un código extenso y monolítico (Casero, 2023).
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema2/32.png', alt='Texto que describa la imagen')
    
    p.mb-5 Una función puede recibir unos datos de entrada (parámetros), puede devolver un resultado (valor de retorno) y puede ser reutilizada en diferentes partes de un programa, para ello después de definida, solo tiene que ser invocada y podrá cumplir con el objetivo o la tarea para la cual fue creada.
                    
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/33.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-12.tarjeta.p-4.mb-3(data-aos="fade-left")
          p La estructura básica de una función se compone generalmente por:
          ul.ms-3.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Nombre nemotécnico o descriptivo.
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Parámetros de entrada (opcionales)
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Valor de retorno (opcional)
            li.mb-0.d-flex
              i.fas.fa-check-circle.bg-color-14
              p.mb-0 Bloque de instrucciones o líneas de código, las cuales son las que realizan la tarea para la cual fue creada.
        p Así es la estructura de una función:
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | Funci&oacute;n nombre_funci&oacute;n(par&aacute;metros) &rarr; valor_retorno
              | &nbsp;&nbsp;&nbsp;&nbsp;instrucciones
              | &nbsp;&nbsp;&nbsp;&nbsp;return valor_retorno
    
    p.mb-5 Y aunque ya se han compartido ejemplos de funciones en anteriores códigos, se comparten ejemplos específicos de funciones en diversos lenguajes de programación: 
    
    .row.justify-content-center
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Función en <em>Python</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | def calcular_area_circulo(radio):
                  | &nbsp;&nbsp;&nbsp;&nbsp;return 3.1416 * radio * radio
                  |
                  | # Uso de la funci&oacute;n
                  | r = float(input("Ingrese el radio: "))
                  | area = calcular_area_circulo(r)
                  | print("El &aacute;rea del c&iacute;rculo es:", area)

          div(titulo="Función en <em>C++</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | #include &lt;iostream&gt;
                  | using namespace std;
                  |
                  | // Definici&oacute;n de la funci&oacute;n
                  | double calcular_area_circulo(double radio) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;return 3.1416 * radio * radio;
                  | }
                  |
                  | int main() {
                  | &nbsp;&nbsp;&nbsp;&nbsp;double r;
                  | &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Ingrese el radio: ";
                  | &nbsp;&nbsp;&nbsp;&nbsp;cin &gt;&gt; r;
                  | &nbsp;&nbsp;&nbsp;&nbsp;double area = calcular_area_circulo(r);
                  | &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "El &aacute;rea del c&iacute;rculo es: " &lt;&lt; area &lt;&lt; endl;
                  | &nbsp;&nbsp;&nbsp;&nbsp;return 0;
                  | }

          div(titulo="Función en <em>Java</em>").justify-content-center
            .tarjeta-codigo.p-5.mb-5
              pre.language-html(language="html").mt-5
                code
                  | import <em>Java</em>.util.Scanner;
                  |
                  | public class Main {
                  | &nbsp;&nbsp;&nbsp;&nbsp;// Definici&oacute;n de la funci&oacute;n
                  | &nbsp;&nbsp;&nbsp;&nbsp;public static double calcularAreaCirculo(double radio) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 3.1416 * radio * radio;
                  | &nbsp;&nbsp;&nbsp;&nbsp;}
                  |
                  | &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner sc = new Scanner(System.in);
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print("Ingrese el radio: ");
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;double r = sc.nextDouble();
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;double area = calcularAreaCirculo(r);
                  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("El &aacute;rea del c&iacute;rculo es: " + area);
                  | &nbsp;&nbsp;&nbsp;&nbsp;}
                  | }

    .row.mb-5
      .col-lg-1.mb-3.mb-lg-0
        figure
          img.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/30.svg", data-aos="zoom-in")
      .col-lg-11
        p(data-aos="fade-left") Después de conocer los ejemplos anteriores, hay que tener en cuenta que las funciones no se comportan igual, es decir, algunas pueden devolver un resultado, otras reciben datos y otras simplemente realizan la tarea para la cual fueron creadas. Conocer los diferentes tipos de funciones, le permite a los programadores construir programas mejor organizados.  A continuación la siguiente tabla resume los tipos de funciones que se pueden utilizar: 
    
    .row.justify-content-center.mb-5
      .col-lg-10
        div.bg-color-8.py-lg-5.p-5.p-lg-0.tarjeta
          .row.justify-content-center
            .col-lg-4.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema2/34.png", data-aos="zoom-in")
            .col-lg-7
              .bg-color-white.tarjeta.p-4.mb-3(data-aos="fade-left")
                .row.align-items-start
                  .col-lg-auto
                    img(src="@/assets/curso/temas/tema2/35.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Función sin parámetro y sin retorno
                    p.mb-0 Solo ejecuta las instrucciones o la tarea encomendada. Ejemplo: mostrar un mensaje.
              .bg-color-white.tarjeta.p-4.mb-3(data-aos="fade-left")
                .row.align-items-start
                  .col-lg-auto
                    img(src="@/assets/curso/temas/tema2/36.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Función con parámetros, pero sin retorno
                    p.mb-0 Procesa los datos, pero no devuelve el valor o el resultado. Ejemplo: impresión de un reporte.
              .bg-color-white.tarjeta.p-4.mb-3(data-aos="fade-left")
                .row.align-items-start
                  .col-lg-auto
                    img(src="@/assets/curso/temas/tema2/37.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Función sin parámetros, pero con retorno
                    p.mb-0 Devuelve un valor fijo. Ejemplo: obtener la fecha actual.
              .bg-color-white.tarjeta.p-4.mb-3(data-aos="fade-left")
                .row.align-items-start
                  .col-lg-auto
                    img(src="@/assets/curso/temas/tema2/38.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Función con parámetros y con retorno
                    p.mb-0 Procesa los datos y devuelve un valor o un resultado. Ejemplo: calcular el área cuadrada de un cultivo.
    
    p.mb-5 Tal como se ha podido evidenciar, las funciones permiten organizar mejor el código de un programa y hacerlo más robusto con su reutilización. En el caso de la modularidad, en el siguiente cuadro se aprecia cómo se puede ver un programa organizado de esta forma:

    .row.mb-5.justify-content-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/39.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | Ejemplo de código que muestra la modularidad en la 
              br
              | programación estructurada
              | def leer_numero():
              | &nbsp;&nbsp;&nbsp;&nbsp;return float(input("Ingrese un n&uacute;mero: "))
              |
              | def sumar(a, b):
              | &nbsp;&nbsp;&nbsp;&nbsp;return a + b
              |
              | def mostrar_resultado(resultado):
              | &nbsp;&nbsp;&nbsp;&nbsp;print("La suma es:", resultado)
              |
              | # Programa principal
              | num1 = leer_numero()
              | num2 = leer_numero()
              | resultado = sumar(num1, num2)
              | mostrar_resultado(resultado)
    
    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5	Ejemplos
    
    p.mb-5 En este apartado se comparten unos ejemplos de código generado en <em>Python</em> con <em>ChatGPT</em> y corriendo en <em>Visual Studio Code</em>. Lo primero que se hizo fue darle un <em>Prompt</em> general para que supiera como iba a trabajar:

    .row.justify-content-center
      .col-lg-10
        .bg-color-9.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/40.svg', alt='')
            .col-lg
              .p-4
                h5 <em>Prompt</em> inicial
                p(data-aos="fade-up") Necesito que actúes como un experto en programación, pero que tengas en cuenta los siguientes parámetros para trabajar: 
                .bg-color-12.tarjeta.p-4.mb-3(data-aos="fade-left")
                  ul.ms-3.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fas.fa-check-circle.bg-color-14
                      p.mb-0 Lenguaje de programación a trabajar: <em>Python</em>
                    li.mb-2.d-flex
                      i.fas.fa-check-circle.bg-color-14
                      p.mb-0 Paradigma de programación: programación estructurada
                    li.mb-2.d-flex
                      i.fas.fa-check-circle.bg-color-14
                      p.mb-0 Recursos a utilizar para el desarrollo: funciones y estructuras de control. 
                    li.mb-2.d-flex
                      i.fas.fa-check-circle.bg-color-14
                      p.mb-0 Lógica de programación: lo más sencillo posible, ya que el público objetivo apenas está aprendiendo a programar.
                    li.mb-2.d-flex
                      i.fas.fa-check-circle.bg-color-14
                      p.mb-0 Cuando estés listo me dices para irte dando los problemas a resolver por medio de los programas que vas a generar.

    p.mb-5 Luego se le fueron dando cada uno de los <em>Prompt</em> con el que generaría los códigos para los programas solicitados.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
      div(titulo="Ejemplo 1: operación aritmética").justify-content-center
        p <b><em>Prompt</em></b>: Necesito un programa que pregunte qué operación aritmética se desea realizar, solicite dos números, y con ellos haga la operación y muestre como resultado: la operación y el valor resultante de la operación.
        h5.mb-3 Código generado en <em>Python</em> con <em>ChatGPT</em>
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | # Funci&oacute;n para realizar la operaci&oacute;n seleccionada
              | def calculadora_simple():
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Bienvenido a la calculadora b&aacute;sica.")
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Mostrar opciones
              | &nbsp;&nbsp;&nbsp;&nbsp;print("\\nElige la operaci&oacute;n que deseas realizar:")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("1. Suma")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("2. Resta")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("3. Multiplicaci&oacute;n")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("4. Divisi&oacute;n")
              | &nbsp;&nbsp;&nbsp;&nbsp;opcion = input("Ingresa el n&uacute;mero de la opci&oacute;n elegida (1-4): ")
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir los dos n&uacute;meros
              | &nbsp;&nbsp;&nbsp;&nbsp;num1 = float(input("Ingresa el primer n&uacute;mero: "))
              | &nbsp;&nbsp;&nbsp;&nbsp;num2 = float(input("Ingresa el segundo n&uacute;mero: "))
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Realizar la operaci&oacute;n y mostrar la operaci&oacute;n completa con el resultado
              | &nbsp;&nbsp;&nbsp;&nbsp;if opcion == "1":
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultado = num1 + num2
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{num1} + {num2} = {resultado}")
              | &nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "2":
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultado = num1 - num2
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{num1} - {num2} = {resultado}")
              | &nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "3":
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultado = num1 * num2
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{num1} * {num2} = {resultado}")
              | &nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "4":
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if num2 != 0:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultado = num1 / num2
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{num1} / {num2} = {resultado}")
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Error: no se puede dividir entre cero.")
              | &nbsp;&nbsp;&nbsp;&nbsp;else:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Opci&oacute;n no v&aacute;lida. Intenta de nuevo.")
              |
              | # Llamar a la funci&oacute;n principal
              | calculadora_simple()
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span Pantallazo del código en <em>Visual Studio Code</em> y ejecución en la terminal.
        
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/41.png", alt="Captura de pantalla del terminal en <em>Visual Studio Code</em> que muestra la ejecución de un programa en <em>Python</em> para calcular promedios individuales de estudiantes y el promedio general del grupo, con entradas numéricas y salidas de texto. ")  
      div(titulo="Ejemplo 2: calculadora").justify-content-center
        p <b><em>Prompt</em></b>: Un estudiante al que se le dañó su calculadora, desea hacer un programa que le permita realizar las 4 operaciones aritméticas.
        h5.mb-3 Código generado en <em>Python</em> con <em>ChatGPT</em>
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | # Funci&oacute;n para sumar dos n&uacute;meros
              | def sumar(a, b):
              | &nbsp;&nbsp;&nbsp;&nbsp;return a + b
              |
              | # Funci&oacute;n para restar dos n&uacute;meros
              | def restar(a, b):
              | &nbsp;&nbsp;&nbsp;&nbsp;return a - b
              |
              | # Funci&oacute;n para multiplicar dos n&uacute;meros
              | def multiplicar(a, b):
              | &nbsp;&nbsp;&nbsp;&nbsp;return a * b
              |
              | # Funci&oacute;n para dividir dos n&uacute;meros
              | def dividir(a, b):
              | &nbsp;&nbsp;&nbsp;&nbsp;if b != 0:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a / b
              | &nbsp;&nbsp;&nbsp;&nbsp;else:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Error: no se puede dividir entre cero."
              |
              | # Funci&oacute;n principal para interactuar con el usuario
              | def calculadora():
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Calculadora B&aacute;sica")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Operaciones disponibles: suma, resta, multiplicaci&oacute;n, divisi&oacute;n\\n")
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir los dos n&uacute;meros
              | &nbsp;&nbsp;&nbsp;&nbsp;num1 = float(input("Ingrese el primer n&uacute;mero: "))
              | &nbsp;&nbsp;&nbsp;&nbsp;num2 = float(input("Ingrese el segundo n&uacute;mero: "))
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir la operaci&oacute;n a realizar
              | &nbsp;&nbsp;&nbsp;&nbsp;print("\\nElige la operaci&oacute;n a realizar:")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("1. Suma")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("2. Resta")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("3. Multiplicaci&oacute;n")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("4. Divisi&oacute;n")
              | &nbsp;&nbsp;&nbsp;&nbsp;opcion = input("Ingresa el n&uacute;mero de la opci&oacute;n elegida (1-4): ")
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Realizar la operaci&oacute;n seleccionada
              | &nbsp;&nbsp;&nbsp;&nbsp;if opcion == "1":
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultado = sumar(num1, num2)
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("El resultado de la suma es:", resultado)
              | &nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "2":
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultado = restar(num1, num2)
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("El resultado de la resta es:", resultado)
              | &nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "3":
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultado = multiplicar(num1, num2)
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("El resultado de la multiplicaci&oacute;n es:", resultado)
              | &nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "4":
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resultado = dividir(num1, num2)
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("El resultado de la divisi&oacute;n es:", resultado)
              | &nbsp;&nbsp;&nbsp;&nbsp;else:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Opci&oacute;n no v&aacute;lida. Intenta de nuevo.")
              |
              | # Llamar a la funci&oacute;n principal
              | calculadora()

        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          span Pantallazo del código en <em>Visual Studio Code</em> y ejecución en la terminal.
        
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/42.png", alt="Captura de pantalla de <em>Visual Studio Code</em> con un programa en <em>Python</em> que ejecuta una función de calculadora básica mediante llamadas a funciones de suma, resta, multiplicación y división, junto con la salida en la terminal donde se realiza una suma entre dos números ingresados por el usuario.") 
      div(titulo="Ejemplo 3: lista ordenada").justify-content-center
        p <b><em>Prompt</em></b>: Juanito desea ayudar a su profesora, quien ha tomado los nombres de los 10 estudiantes que han ingresado por primera vez a su clase; para ello Juanito necesita crear un programa donde escriba los 10 nombres y se los entregue en orden alfabético ascendente.
        h5.mb-3 Código generado en <em>Python</em> con <em>ChatGPT</em>
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | # Funci&oacute;n para registrar y ordenar los nombres de los estudiantes
              | def ordenar_nombres_estudiantes():
              | &nbsp;&nbsp;&nbsp;&nbsp;# Lista para guardar los nombres
              | &nbsp;&nbsp;&nbsp;&nbsp;lista_nombres = []
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir los 10 nombres
              | &nbsp;&nbsp;&nbsp;&nbsp;for i in range(1, 11):
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nombre = input(f"Ingrese el nombre del estudiante {i}: ")
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lista_nombres.append(nombre)
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Ordenar la lista alfab&eacute;ticamente en orden ascendente
              | &nbsp;&nbsp;&nbsp;&nbsp;lista_nombres.sort()
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Mostrar la lista ordenada
              | &nbsp;&nbsp;&nbsp;&nbsp;print("\\n--- Lista de Estudiantes en Orden Alfab&eacute;tico ---")
              | &nbsp;&nbsp;&nbsp;&nbsp;for nombre in lista_nombres:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(nombre)
              |
              | # Llamar a la funci&oacute;n principal
              | ordenar_nombres_estudiantes()

        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span Pantallazo del código en <em>Visual Studio Code</em> y ejecución en la terminal.
        
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/43.png", alt="Captura de pantalla de <em>Visual Studio Code</em> con código <em>Python</em> que solicita nombres de estudiantes, los almacena en una lista y los ordena alfabéticamente, junto con la salida en la terminal donde se muestran los nombres ingresados y su ordenación ascendente.") 
      div(titulo="Ejemplo 4: promedio de notas").justify-content-center
        p <b><em>Prompt</em></b>: Un estudiante está cursando 3 materias, cada materia es calificada con 3 notas, donde la nota 1 equivale al 30%, la nota 2 al 30% y la nota 3 al 40% del total del curso. Se necesita obtener el promedio por materia y el promedio general del estudiante.
        h5.mb-3 Código generado en <em>Python</em> con <em>ChatGPT</em>
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | # Funci&oacute;n para calcular el promedio ponderado de una materia
              | def promedio_materia():
              | &nbsp;&nbsp;&nbsp;&nbsp;print("\\nIngresa las notas de la materia:")
              | &nbsp;&nbsp;&nbsp;&nbsp;nota1 = float(input("Nota 1 (30%): "))
              | &nbsp;&nbsp;&nbsp;&nbsp;nota2 = float(input("Nota 2 (30%): "))
              | &nbsp;&nbsp;&nbsp;&nbsp;nota3 = float(input("Nota 3 (40%): "))
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el promedio ponderado
              | &nbsp;&nbsp;&nbsp;&nbsp;promedio = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.4)
              | &nbsp;&nbsp;&nbsp;&nbsp;return promedio
              |
              | # Funci&oacute;n principal para manejar el proceso
              | def promedio_general():
              | &nbsp;&nbsp;&nbsp;&nbsp;total_promedios = 0
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el promedio para las 3 materias
              | &nbsp;&nbsp;&nbsp;&nbsp;for i in range(1, 4):
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("\\n--- Materia", i, "---")
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;promedio = promedio_materia()
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Promedio de la materia", i, ":", promedio)
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total_promedios += promedio
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el promedio general
              | &nbsp;&nbsp;&nbsp;&nbsp;promedio_general = total_promedios / 3
              | &nbsp;&nbsp;&nbsp;&nbsp;print("\\n--- Promedio General del Estudiante ---")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Promedio general:", promedio_general)
              |
              | # Llamar a la funci&oacute;n principal
              | promedio_general()

        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span Pantallazo del código en <em>Visual Studio Code</em> y ejecución en la terminal.
        
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/44.png", alt="Captura de pantalla de <em>Visual Studio Code</em> con código <em>Python</em> que calcula el promedio ponderado de un estudiante en tres materias y el promedio general, junto con la salida en la terminal que muestra los datos ingresados y los resultados de cada cálculo.") 
      div(titulo="Ejemplo 5: venta de productos electrónicos").justify-content-center
        p <b><em>Prompt</em></b>: Ricardo está vendiendo dispositivos electrónicos. Carlos le ha hecho una compra y necesita hacerle la factura. Para hacer la factura necesita saber la cantidad de dispositivos vendidos, el valor del dispositivo vendido, el descuento por la venta, el impuesto por la venta y el total a pagar en la factura
        h5.mb-3 Código generado en <em>Python</em> con <em>ChatGPT</em>
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | # Funci&oacute;n para calcular la factura de la venta
              | def calcular_factura():
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir la cantidad de dispositivos vendidos
              | &nbsp;&nbsp;&nbsp;&nbsp;cantidad = int(input("Cantidad de dispositivos vendidos: "))
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir el valor unitario de cada dispositivo
              | &nbsp;&nbsp;&nbsp;&nbsp;valor_unitario = float(input("Valor de cada dispositivo: "))
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el subtotal
              | &nbsp;&nbsp;&nbsp;&nbsp;subtotal = cantidad * valor_unitario
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir el descuento (en porcentaje)
              | &nbsp;&nbsp;&nbsp;&nbsp;descuento = float(input("Descuento en porcentaje (%): "))
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el monto de descuento
              | &nbsp;&nbsp;&nbsp;&nbsp;monto_descuento = subtotal * (descuento / 100)
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el subtotal despu&eacute;s del descuento
              | &nbsp;&nbsp;&nbsp;&nbsp;subtotal_con_descuento = subtotal - monto_descuento
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir el impuesto (en porcentaje)
              | &nbsp;&nbsp;&nbsp;&nbsp;impuesto = float(input("Impuesto en porcentaje (%): "))
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el monto de impuesto
              | &nbsp;&nbsp;&nbsp;&nbsp;monto_impuesto = subtotal_con_descuento * (impuesto / 100)
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el total a pagar
              | &nbsp;&nbsp;&nbsp;&nbsp;total_pagar = subtotal_con_descuento + monto_impuesto
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Mostrar la factura
              | &nbsp;&nbsp;&nbsp;&nbsp;print("\\n--- Factura de Compra ---")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Cantidad de dispositivos:", cantidad)
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Valor unitario:", valor_unitario)
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Subtotal:", subtotal)
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Descuento aplicado:", monto_descuento)
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Subtotal con descuento:", subtotal_con_descuento)
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Impuesto aplicado:", monto_impuesto)
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Total a pagar:", total_pagar)
              |
              | # Llamar a la funci&oacute;n principal
              | calcular_factura()

        .titulo-sexto.color-acento-contenido
          h5 Figura 8
          span Pantallazo del código en <em>Visual Studio Code</em> y ejecución en la terminal.
        
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/45.png", alt="Captura de pantalla de <em>Visual Studio Code</em> con código <em>Python</em> para calcular el valor total de una compra de productos electrónicos aplicando descuento e impuesto, junto con la salida en la terminal que presenta los datos ingresados y el detalle de la factura generada.") 
      div(titulo="Ejemplo 6: venta de leche").justify-content-center
        p <b><em>Prompt</em></b>: en la finca La Costa, todos los días se está vendiendo la leche a la empresa la Pradera. El valor del litro de leche es $2.000. La leche se paga quincenal. Se necesita saber la cantidad de litros producidos desde el día 1 al día 15. Se necesita saber el total de leche vendida y el total de dinero recibido por venta de leche.
        h5.mb-3 Código generado en <em>Python</em> con <em>ChatGPT</em>
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | # Funci&oacute;n para calcular la venta de leche en 15 d&iacute;as
              | def venta_leche_quincenal():
              | &nbsp;&nbsp;&nbsp;&nbsp;# Precio del litro de leche
              | &nbsp;&nbsp;&nbsp;&nbsp;precio_litro = 2000
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Inicializar el total de litros
              | &nbsp;&nbsp;&nbsp;&nbsp;total_litros = 0
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir la cantidad de litros de leche producidos cada d&iacute;a (d&iacute;a 1 al 15)
              | &nbsp;&nbsp;&nbsp;&nbsp;for dia in range(1, 16):
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;litros = float(input(f"Ingrese los litros de leche del d&iacute;a {dia}: "))
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total_litros += litros
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el total de dinero recibido
              | &nbsp;&nbsp;&nbsp;&nbsp;total_dinero = total_litros * precio_litro
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Mostrar los resultados
              | &nbsp;&nbsp;&nbsp;&nbsp;print("\\n--- Resumen de Venta Quincenal ---")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Total de litros vendidos:", total_litros)
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Total de dinero recibido:", total_dinero)
              |
              | # Llamar a la funci&oacute;n principal
              | venta_leche_quincenal()

        .titulo-sexto.color-acento-contenido
          h5 Figura 9
          span Pantallazo del código en <em>Visual Studio Code</em> y ejecución en la terminal.
        
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/46.png", alt="Captura de pantalla de <em>Visual Studio Code</em> con código <em>Python</em> que calcula la cantidad total de leche vendida durante 15 días y el dinero recibido, junto con la salida en la terminal que incluye los litros ingresados por día y un resumen con el total en litros y en valor monetario. ") 
      div(titulo="Ejemplo 7: entrenamiento atlético").justify-content-center
        p <b><em>Prompt</em></b>: un atleta aficionado se está preparando para la media maratón de la independencia realizada en Valledupar. El correrá en la categoría de 5 kilómetros. El récord histórico está en 25 minutos. Después de un entrenamiento riguroso, él está haciendo el recorrido por 5 días, en donde lleva una libreta y anota el tiempo que se toma en el recorrido de los 5 kilómetros, y quiere saber cuánto le falta por día para batir el récord histórico. También desea saber el promedio de tiempo que se ha tomado en el recorrido de los 5 días.
        h5.mb-3 Código generado en <em>Python</em> con <em>ChatGPT</em>
        .tarjeta-codigo.p-5.mb-5
          pre.language-html(language="html").mt-5
            code
              | # Funci&oacute;n para calcular las diferencias con el r&eacute;cord y el promedio
              | def entrenamiento_atleta():
              | &nbsp;&nbsp;&nbsp;&nbsp;# R&eacute;cord hist&oacute;rico en minutos
              | &nbsp;&nbsp;&nbsp;&nbsp;record = 25
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Inicializar variables
              | &nbsp;&nbsp;&nbsp;&nbsp;total_tiempo = 0
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Pedir los tiempos para cada uno de los 5 d&iacute;as
              | &nbsp;&nbsp;&nbsp;&nbsp;for dia in range(1, 6):
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tiempo = float(input(f"Ingrese el tiempo del d&iacute;a {dia} (en minutos): "))
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;diferencia = tiempo - record
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if diferencia > 0:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"El atleta necesita mejorar {diferencia} minutos para igualar el r&eacute;cord.")
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif diferencia == 0:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("¡El atleta igual&oacute; el r&eacute;cord!")
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"¡El atleta super&oacute; el r&eacute;cord por {-diferencia} minutos!")
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Acumular el tiempo para el promedio
              | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total_tiempo += tiempo
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Calcular el promedio de tiempo
              | &nbsp;&nbsp;&nbsp;&nbsp;promedio = total_tiempo / 5
              |
              | &nbsp;&nbsp;&nbsp;&nbsp;# Mostrar el promedio
              | &nbsp;&nbsp;&nbsp;&nbsp;print("\\n--- Resumen del Entrenamiento ---")
              | &nbsp;&nbsp;&nbsp;&nbsp;print("Promedio de tiempo en los 5 d&iacute;as:", promedio, "minutos")
              |
              | # Llamar a la funci&oacute;n principal
              | entrenamiento_atleta()

        .titulo-sexto.color-acento-contenido
          h5 Figura 10
          span Pantallazo del código en <em>Visual Studio Code</em> y ejecución en la terminal.
        
        figure.mb-5
          img(src="@/assets/curso/temas/tema2/47.png", alt="Captura de pantalla de <em>Visual Studio Code</em> con código <em>Python</em> para registrar los tiempos diarios de entrenamiento de un atleta, compararlos con un récord y calcular el promedio semanal, junto con la salida en la terminal que muestra las diferencias por día y el promedio final en minutos. ")           
    
    p.mb-5 Como se ha podido verificar en los diferentes ejemplos, los códigos fueron generados con la versión gratuita de <em>ChatGPT</em> y probados en el editor de código <em>Visual Studio Code</em>. Hay que tener presente que para que el código pueda correr sin problemas, deben tener instalado <em>Python</em> y configurado el editor. Se hace la salvedad, porque algunos intentan correr el código de cualquier lenguaje, pero no tienen instaladas las extensiones o cualquier otro recurso tanto en el editor como en el equipo para que el código pueda ser ejecutado sin ningún problema. 

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/49.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-15.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/temas/tema2/48.png", style="max-width: 300px").mx-auto
            .col-lg
              p.mb-0 <b>Recomendación</b>: para las personas que desean aprender o asimilar mejor sus conocimientos, pueden intentar desarrollar el programa o en su defecto generarlo en la IA gen y luego escribirlo a mano en una hoja, después digitarlo en el editor; esto se hace con el fin de ir estimulando su memoria muscular, lo cual le ayuda a irse familiarizando con el lenguaje de programación, ir estimulando la lógica, ir  practicando y cuando menos lo piense podrá ir desenvolviéndose y codificando sus propios programas.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
