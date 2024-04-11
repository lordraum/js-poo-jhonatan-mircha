// En las clases JS todas las clases y métodos son públicos

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre
    this.genero = genero
  }

  saludar() {
    console.log(`Hola ${this.nombre}`)
  }

  sonar() {
    console.log('Soy un animal y hago sonidos')
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamaño) {
    super(nombre, genero)
    this.tamaño = tamaño
    this.raza = null
  }

  sonar() {
    console.log('ladrar')
  }

  ladrar() {
    console.log('GUAU GUAU')
  }

  // static --> Se puede ejecutar sin instanciar la clase

  static queEres() {
    console.log(
      'Perro: Mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, según las razas, que tiene olfato muy fino y es inteligente y muy leal a su dueño. Usado en masculino referido a la especie.'
    )
  }

  // getter --> Obtiene valores de atributos

  get getRaza() {
    return this.raza
  }

  // setter --> Establece valores a atributos

  set setRaza(raza) {
    this.raza = raza
  }
}

Perro.queEres() // Ejecutamos el método sin instanciar

const bichito = new Animal('Bichito', 'Macho')
const scooby = new Perro('Scooby', 'Macho', 'Grande')

console.log(bichito, scooby)
bichito.saludar()
bichito.sonar()

scooby.saludar()
scooby.sonar()
scooby.ladrar()

// Los setter y getter se utilizan como atributos, es decir sin paréntesis.

scooby.setRaza = 'Gran Danés'
console.log(scooby.raza)
