class Databse {
  constructor(data) {
    if (Databse.exists) {
      return Databse.instance
    }
    Databse.instance = this
    Databse.exists = true
    this.data = data 
  }

  getData() {
    return this.data
  }
}

const mongo = new Databse('MongoDB')
console.log(mongo.getData())

const mysql = new Databse('MySQL')
console.log(mongo.getData())