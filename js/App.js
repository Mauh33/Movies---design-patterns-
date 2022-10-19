class App {
  constructor () {
    this.$moviesWrapper = document.querySelector('.movies-wrapper')
    this.moviesApi = new MovieApi('/data/movie-data.json')
    this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
  }

  async main () {
    const moviesData = await this.moviesApi.getMovies() // promise pending
    const externalMoviesData = await this.externalMoviesApi.getMovies()

    const Movies = moviesData.map(movie => new MoviesFactory(movie, 'newApi')) // await : j'attends que moviesdata arrive
    const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))
    const FullMovies = Movies.concat(ExternalMovies)

    FullMovies
      .forEach(movie => {
        const Template = new MovieCard(movie)
        this.$moviesWrapper.appendChild(Template.createMovieCard())
      })
  }
}

const app = new App()
app.main()
