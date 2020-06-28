class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} have ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'create programs'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'create tests'
  }
}