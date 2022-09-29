

// const { createApp } = Vue
const instanciaDeVue = Vue.createApp({
  data() {
    return {
      menasaje: 'Hola Vue!',
      estaActivado: false,
      diasDeLaSemana: ['Lunes', 'MArtes', 'Miercoles', 'Viernes', 'Sabado', 'Domingo'],
      personas: [],
      listaDeCompras: [
        {nombre: 'Huevos', valor: 15000},
        {nombre: 'Leche', valor: 4000},
        {nombre: 'Bananos', valor: 5000},
        {nombre: 'Crema dental', valor: 3000},
        {nombre: 'Panela', valor: 2000},

      ],
      nuevoElementoNombre: '',
      nuevoElementoValor: 0,
      persona: {}
    }
  },
  methods: {
    agregar(){


      if ( this.nuevoElementoNombre != '' &&
            this.nuevoElementoValor != 0 ){
      
        let elemento = {}
        elemento.nombre = this.nuevoElementoNombre
        elemento.valor = this.nuevoElementoValor

        this.listaDeCompras.push( elemento )


        this.nuevoElementoValor = 0
        this.nuevoElementoNombre = ''
      }
    },
    traerPersonas(){
    window.fetch('https://randomuser.me/api/?results=10')
        .then( consulta => consulta.json() )
        .then( respuesta => {

  
        this.personas = respuesta.results
        console.log( this.personas )
    })
    }
  }




}).mount('#app')

// app.mount('#app')