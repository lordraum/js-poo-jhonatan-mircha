// Object

const animal = {
  nombre: 'Snoopy',
  sonar() {
    console.log('Hago sonidos porque estoy vivo')
  },
}

// Es el prototipo fundamental de js.

// Función constructora

/* function Animal(nombre, genero) {
  this.nombre = nombre
  this.genero = genero

  this.sonar = () => console.log('Hago sonidos')
  this.saludar = () => console.log(`Me llamo ${nombre}`)
  // this.sonar = function {} // Sintáxis antes de ecmaScript5
}

const snoopy = new Animal('Snoopy', 'perro') // Su prototipo sería Animal
const lolaBunny = new Animal('Lola Bunny', 'coneja')

snoopy.sonar()
lolaBunny.sonar()
snoopy.saludar()
lolaBunny.saludar() */

// Función constructora con métodos en el prototipo

function Animal(nombre, genero) {
  this.nombre = nombre
  this.genero = genero

  Animal.prototype.sonar = () => console.log('Hago sonidos')
  Animal.prototype.saludar = () => console.log(`Me llamo ${nombre}`)

  // Esto mejora la eficiencia del uso de memoria
}

const snoopy = new Animal('Snoopy', 'perro') // Su prototipo sería Animal (clase)
const lolaBunny = new Animal('Lola Bunny', 'coneja')

console.log(snoopy)

snoopy.sonar()
lolaBunny.sonar()
snoopy.saludar()
lolaBunny.saludar()
