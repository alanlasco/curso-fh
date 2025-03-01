const persona = {
  nombre: "tony",
  apellido: "stark",
  edad: 45,
  direccion: {
    direccion: "new yotk",
    zip: 55555,
  },
}; //en otros lenguajes son diccionarios

const persona2 = persona; //esto es una referencia en memoria, no es una copia

// para crear una coppia literalmente hay que copiar todo el objeto

//se puede usar el metodo spread

const persona3 = { ...persona };

console.log(persona);
console.log({ persona });
console.log({ persona: persona });
