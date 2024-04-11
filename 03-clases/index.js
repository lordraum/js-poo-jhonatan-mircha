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

const bichito = new Animal('Bichito', 'Macho')

console.log(bichito)

bichito.saludar()
bichito.sonar()

// Herencia --> extender clases --> extend className
// super() {} --> Invoca el constructor de la clase padre.

class Perro extends Animal {
  constructor(nombre, genero, tamaño) {
    super(nombre, genero)
    this.tamaño = tamaño
  }

  sonar() {
    console.log('ladrar')
  } // sobreescribe el método

  ladrar() {
    console.log('GUAU GUAU')
  }
}

const scooby = new Perro('Scooby', 'Macho', 'Grande')

console.log(scooby)
scooby.saludar()
scooby.sonar()
scooby.ladrar()
