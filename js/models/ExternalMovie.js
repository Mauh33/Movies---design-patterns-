class ExternalMovies {
  constructor (data) {
    this._info = data.infos
    this._medias = data.medias
    this._synopsis = data.synopsis
    this._title_en = data.title_en
    this._title_fr = data.title_fr
  }

  get duration () {
    return this._info?.duration
  }

  get picture () {
    console.log(this._medias)
    return `/assets/${this._medias?.picture}`
  }

  get thumbnail () {
    return `/assets/thumbnails/${this._medias.thumbnail}`
  }

  get released_in () {
    return this._info?.released_in
  }

  get title () {
    return this._title_fr ? this._title_fr : this._title_en
  }
}
