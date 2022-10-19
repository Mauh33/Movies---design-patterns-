class User {
  constructor(data) {
    if (User.exists) {
      return User.instance
    } else if (data && data.firstName && data.lastName) {
      this._firstName = firstName
      this._lastName = lastName

      this.saveToLocalStorage()
      User.instance = this
      User.exists = true
      return this
    }
  }

  get firstName() {
    return this._firstName
  }

  get lastName() {
    return this._lastName
  }


  // permet de vérifier si la propriété existe ou si il y a déjà un nom, prénom on attribue la valeur aux constantes
  get user() {
    const firstName = this._firstName || localStorage.getItem('firstName')
    const lastName = this._lastName || localStorage.getItem('lastName')

    // si elle existe on peut instancier notre objet
    if (firstName && lastName) {
      const user = new User({
        firstName,
        lastName
      })
    }

    // si pas définit, on return null.
    if (!firstName && !lastName) {
      return null
    }

    return {
      firstName: firstName,
      lastName: lastName
    }
  }



  saveToLocalStorage() {
    localStorage.setItem('firstName', this._firstName)
    localStorage.setItem('lastName', this._lastName)

  }

}
