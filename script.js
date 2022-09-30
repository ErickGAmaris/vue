const myKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=a5e99e80'

// const { createApp } = Vue
const appVue = Vue.createApp({
  data() {
    return {
      peliculas: [],
      aniosFiltro: 0,
      peliculaHaBuscar: '',
      pagina: 0,
    }
  },
  methods:{
    busqueda(){
      
      if( this.peliculaHaBuscar != '') {
        this.pagina = 1
        window.fetch(`${myKey}&s=${this.peliculaHaBuscar}`)
        .then( response => response.json() )
        .then( result => this.peliculas = result.Search )
        .catch( error => console.log(error))

      }
    },

    masBusqueda(){
      this.pagina += 1
      if ( this.pagina*10 > this.peliculas.length ){
        console.log('consulta')
        window.fetch(`${myKey}&s=${this.peliculaHaBuscar}&page=${this.pagina}`)
        .then( response => response.json() )
        .then( result => this.peliculas = [ ...this.peliculas, ...result.Search] )
        .catch( error => console.log(error))

      }


    },
    menosBusqueda(){
      if( this.pagina > 1 ) this.pagina -= 1
    }

  },

  computed: {

    peliculasOrdenadas(){
      return this.peliculas.sort( ( pelicula1, pelicula2) => pelicula2.Year - pelicula1.Year )
    },
    ultimasPeliculas(){
      return this.peliculas.filter( pelicula => pelicula.Year >= (2022 - this.aniosFiltro) )
    },
    peliculasEnNPagina(){
      let n = this.pagina*10 - 10
      return this.peliculas.slice( n, n + 9)
    }

  }





}).mount('#app')

// app.mount('#app')