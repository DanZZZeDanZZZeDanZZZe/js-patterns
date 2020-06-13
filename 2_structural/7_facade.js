class Complains {
  constructor() {
    this.complaints = []
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complains {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complains {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class complaintRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, customer, details})
  }
}

const registry = new complaintRegistry()

console.log(registry.register('Artem', 'service', 'not available'))