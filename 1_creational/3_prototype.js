const car = {
  wheels: 4,

  init() {
    console.log("wheels", this.wheels)
    console.log("owner", this.owner)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Dima'
  }
})

carWithOwner.init()