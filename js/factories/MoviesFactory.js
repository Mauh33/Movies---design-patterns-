class MoviesFactory {
  constructor (data, type) {
    if (type === 'newApi') {
      return new Movie(data)
    } else if (type === 'externalApi') {
      return new ExternalMovies(data)
    } else {
      throw 'Unknown format type'
    }
  }
}
