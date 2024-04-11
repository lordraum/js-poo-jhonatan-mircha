function Animal(nombre, genero) {
  this.nombre = nombre
  this.genero = genero
}

Animal.prototype.sonar = function () {
  console.log('Hago sonidos')
}

Animal.prototype.saludar = function () {
  console.log(`Me llamo ${this.nombre}`)
}

// super --> Extiende

function Perro(nombre, genero, tamano) {
  this.super = Animal
  this.super(nombre, genero)
  this.tamano = tamano
}

// Heredar características del padre

Perro.prototype = new Animal()
Perro.prototype.constructor = Perro

// Sobreescribir métodos

Perro.prototype.sonar = function () {
  console.log('Hago ladridos')
}

Perro.prototype.ladrar = function () {
  console.log('GUAU GUAU')
}

const yango = new Perro('Yango', 'Macho', 'Pequeño')

console.log(yango)

yango.saludar()
yango.sonar()
yango.ladrar()
