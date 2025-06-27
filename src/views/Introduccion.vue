<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-7
        figure.m-3
          img(src="@/assets/curso/intro/2.svg", data-aos="zoom-in", style="max-width: 76px")
        p(data-aos="fade-left") La industria del software camina a pasos agigantados, lo que demuestra que su avance acelerado junto al protagonismo que viene teniendo la inteligencia artificial, está llevando a que los profesionales en desarrollo de software sean más demandados; aunque esta actividad ya no es solo exclusividad de ellos, sino que por el contrario, profesionales de otras áreas también se han visto en la necesidad de adquirir conocimientos en este campo, para hacer frente a los desafíos que  se van gestando y así mismo, contar con mejores herramientas para realizar y agilizar los procesos en sus áreas profesionales. 
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-1.tarjeta.p-5.mb-3.text-white(data-aos="fade-left")
              p.mb-0 Lograr comprender la lógica que hay detrás de un algoritmo, aplicar un diseño estructurado y plasmarlo en un lenguaje de programación, había sido un reto exclusivo de pocos, pero con las herramientas que se tienen hoy en día y los nuevos objetivos que va persiguiendo la sociedad, es mayor el número de personas que ya están trabajando o buscando trabajar en la construcción de software de calidad, que pueda adaptarse fácilmente a los retos del entorno actual y seguirse optimizando, porque así como los desafíos no son estáticos, las soluciones que hoy se están planteando tampoco lo son.
            p(data-aos="fade-left") El componente Fundamentos de programación estructurada y herramientas de desarrollo, da respuesta a esa necesidad, brindando un espacio formativo para fortalecer las competencias en la construcción y generación lógica del código fuente, así como del aprovechamiento de los editores de código y demás herramientas de desarrollo que permitan analizar los problemas, plantear una solución lógica o en su defecto interactuar con modelos de inteligencia artificial generativa, para generar soluciones que se puedan integrar al flujo de trabajo del desarrollo de software. De este modo, este componente contribuye en la adquisición de habilidades que son valoradas en el sector tecnológico, facilitando esa interacción entre los desarrolladores, las herramientas de IA y el entorno profesional.
        
            

    
       

</template>

<script>
export default {
  name: 'Introduccion',
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
